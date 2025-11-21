"""
Local Network Chat Server
Python 3.8+ with Flask + Socket.IO
Run: python server.py
"""

import os
import json
import sqlite3
from datetime import datetime
from flask import Flask, render_template, request, jsonify
from flask_socketio import SocketIO, emit, join_room, leave_room, rooms
from flask_cors import CORS
import logging

# ============== CONFIGURATION ==============
HOST = '0.0.0.0'  # Listen on all network interfaces
PORT = 5000
DATABASE = 'chat_database.db'
MAX_MESSAGES_PER_CONVERSATION = 1000

# ============== LOGGING ==============
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# ============== FLASK & SOCKETIO SETUP ==============
app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key-change-this'
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*", async_mode='threading')

# ============== GLOBAL VARIABLES ==============
online_users = {}  # {user_id: {'socket_id': ..., 'username': ...}}
user_connections = {}  # Track multiple connections per user


# ============== DATABASE FUNCTIONS ==============
def get_db():
    """Get database connection"""
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn


def init_database():
    """Initialize SQLite database with tables"""
    conn = get_db()
    cursor = conn.cursor()

    # Users table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')

    # Messages table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            sender_id INTEGER NOT NULL,
            recipient_id INTEGER NOT NULL,
            conversation_id TEXT NOT NULL,
            content TEXT NOT NULL,
            is_read INTEGER DEFAULT 0,
            read_at TIMESTAMP,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (sender_id) REFERENCES users(id),
            FOREIGN KEY (recipient_id) REFERENCES users(id)
        )
    ''')

    # Conversations table (to track conversation metadata)
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS conversations (
            id TEXT PRIMARY KEY,
            user1_id INTEGER NOT NULL,
            user2_id INTEGER NOT NULL,
            last_message_at TIMESTAMP,
            message_count INTEGER DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user1_id) REFERENCES users(id),
            FOREIGN KEY (user2_id) REFERENCES users(id)
        )
    ''')

    # Create indices for performance
    cursor.execute('CREATE INDEX IF NOT EXISTS idx_messages_conversation ON messages(conversation_id)')
    cursor.execute('CREATE INDEX IF NOT EXISTS idx_messages_recipient ON messages(recipient_id, is_read)')
    cursor.execute('CREATE INDEX IF NOT EXISTS idx_conversations_user1 ON conversations(user1_id)')
    cursor.execute('CREATE INDEX IF NOT EXISTS idx_conversations_user2 ON conversations(user2_id)')

    conn.commit()
    conn.close()
    logger.info("Database initialized successfully")


def get_or_create_user(username):
    """Get user or create if doesn't exist"""
    conn = get_db()
    cursor = conn.cursor()

    cursor.execute('SELECT id FROM users WHERE username = ?', (username,))
    user = cursor.fetchone()

    if user:
        conn.close()
        return user['id']

    cursor.execute('INSERT INTO users (username) VALUES (?)', (username,))
    conn.commit()
    user_id = cursor.lastrowid
    conn.close()
    return user_id


def get_conversation_id(user1_id, user2_id):
    """Generate consistent conversation ID"""
    return f"{min(user1_id, user2_id)}_{max(user1_id, user2_id)}"


def save_message(sender_id, recipient_id, content):
    """Save message to database"""
    conn = get_db()
    cursor = conn.cursor()

    conversation_id = get_conversation_id(sender_id, recipient_id)
    timestamp = datetime.now().isoformat()

    cursor.execute('''
        INSERT INTO messages (sender_id, recipient_id, conversation_id, content, created_at)
        VALUES (?, ?, ?, ?, ?)
    ''', (sender_id, recipient_id, conversation_id, content, timestamp))

    # Update or create conversation record
    cursor.execute('''
        SELECT message_count FROM conversations WHERE id = ?
    ''', (conversation_id,))
    conv = cursor.fetchone()

    if conv:
        new_count = conv['message_count'] + 1
        if new_count <= MAX_MESSAGES_PER_CONVERSATION:
            cursor.execute('''
                UPDATE conversations SET last_message_at = ?, message_count = ?
                WHERE id = ?
            ''', (timestamp, new_count, conversation_id))
        else:
            # Delete oldest message if limit reached
            cursor.execute('''
                DELETE FROM messages WHERE id IN (
                    SELECT id FROM messages WHERE conversation_id = ?
                    ORDER BY created_at ASC LIMIT 1
                )
            ''', (conversation_id,))
            cursor.execute('''
                UPDATE conversations SET last_message_at = ?, message_count = ?
                WHERE id = ?
            ''', (timestamp, MAX_MESSAGES_PER_CONVERSATION, conversation_id))
    else:
        cursor.execute('''
            INSERT INTO conversations (id, user1_id, user2_id, last_message_at, message_count)
            VALUES (?, ?, ?, ?, 1)
        ''', (conversation_id, sender_id, recipient_id, timestamp))

    message_id = cursor.lastrowid
    conn.commit()
    conn.close()

    return message_id


def get_messages(user1_id, user2_id, limit=50, offset=0):
    """Get messages from conversation (latest first, limited to 1000 total)"""
    conn = get_db()
    cursor = conn.cursor()

    conversation_id = get_conversation_id(user1_id, user2_id)

    cursor.execute('''
        SELECT id, sender_id, recipient_id, content, is_read, read_at, created_at
        FROM messages
        WHERE conversation_id = ?
        ORDER BY created_at DESC
        LIMIT ? OFFSET ?
    ''', (conversation_id, limit, offset))

    messages = [dict(msg) for msg in cursor.fetchall()]
    conn.close()

    return messages[::-1]  # Return in chronological order


def mark_messages_as_read(recipient_id, sender_id):
    """Mark messages as read and return count updated"""
    conn = get_db()
    cursor = conn.cursor()

    conversation_id = get_conversation_id(sender_id, recipient_id)
    read_at = datetime.now().isoformat()

    cursor.execute('''
        UPDATE messages
        SET is_read = 1, read_at = ?
        WHERE conversation_id = ? AND recipient_id = ? AND is_read = 0
    ''', (read_at, conversation_id, recipient_id))

    updated = cursor.rowcount
    conn.commit()
    conn.close()

    return updated


def get_user_conversations(user_id):
    """Get all conversations for a user"""
    conn = get_db()
    cursor = conn.cursor()

    cursor.execute('''
        SELECT
            CASE
                WHEN user1_id = ? THEN user2_id
                ELSE user1_id
            END as other_user_id,
            last_message_at,
            message_count,
            id as conversation_id
        FROM conversations
        WHERE user1_id = ? OR user2_id = ?
        ORDER BY last_message_at DESC
    ''', (user_id, user_id, user_id))

    conversations = []
    for row in cursor.fetchall():
        other_id = row['other_user_id']
        cursor.execute('SELECT username FROM users WHERE id = ?', (other_id,))
        other_user = cursor.fetchone()

        # Count unread messages
        cursor.execute('''
            SELECT COUNT(*) as unread FROM messages
            WHERE conversation_id = ? AND recipient_id = ? AND is_read = 0
        ''', (row['conversation_id'], user_id))
        unread = cursor.fetchone()['unread']

        conversations.append({
            'other_user_id': other_id,
            'other_username': other_user['username'],
            'last_message_at': row['last_message_at'],
            'message_count': row['message_count'],
            'unread_count': unread,
            'conversation_id': row['conversation_id']
        })

    conn.close()
    return conversations


def get_unread_count(user_id):
    """Get total unread messages count"""
    conn = get_db()
    cursor = conn.cursor()

    cursor.execute('''
        SELECT COUNT(*) as unread FROM messages
        WHERE recipient_id = ? AND is_read = 0
    ''', (user_id,))

    count = cursor.fetchone()['unread']
    conn.close()
    return count


def delete_conversation(user1_id, user2_id):
    """Delete entire conversation for both users"""
    conn = get_db()
    cursor = conn.cursor()

    conversation_id = get_conversation_id(user1_id, user2_id)

    # Delete all messages in conversation
    cursor.execute('DELETE FROM messages WHERE conversation_id = ?', (conversation_id,))

    # Delete conversation record
    cursor.execute('DELETE FROM conversations WHERE id = ?', (conversation_id,))

    conn.commit()
    conn.close()


# ============== FLASK ROUTES ==============
@app.route('/api/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({'status': 'ok', 'timestamp': datetime.now().isoformat()})


@app.route('/api/users', methods=['GET'])
def get_all_users():
    """Get all online users"""
    users_list = []
    for user_id, data in online_users.items():
        cursor = get_db().cursor()
        cursor.execute('SELECT username FROM users WHERE id = ?', (user_id,))
        user = cursor.fetchone()
        if user:
            users_list.append({
                'id': user_id,
                'username': user['username'],
                'online': True
            })
    return jsonify(users_list)


@app.route('/api/conversations/<int:user_id>', methods=['GET'])
def get_conversations(user_id):
    """Get all conversations for a user"""
    conversations = get_user_conversations(user_id)
    return jsonify(conversations)


@app.route('/api/messages', methods=['GET'])
def get_chat_messages():
    """Get messages from a conversation"""
    user1_id = request.args.get('user1', type=int)
    user2_id = request.args.get('user2', type=int)
    limit = request.args.get('limit', 50, type=int)
    offset = request.args.get('offset', 0, type=int)

    if not user1_id or not user2_id:
        return jsonify({'error': 'Missing user parameters'}), 400

    messages = get_messages(user1_id, user2_id, limit, offset)
    return jsonify(messages)


# ============== SOCKETIO EVENTS ==============
@socketio.on('connect')
def on_connect():
    """User connects to server"""
    logger.info(f'Client connected: {request.sid}')


@socketio.on('login')
def on_login(data):
    """User logs in with username"""
    username = data.get('username', '').strip()

    if not username or len(username) < 2:
        emit('error', {'message': 'Invalid username'})
        return

    user_id = get_or_create_user(username)

    # Store user connection
    if user_id not in online_users:
        online_users[user_id] = {'socket_ids': [], 'username': username}

    online_users[user_id]['socket_ids'].append(request.sid)

    # Join user to their own room (for targeted messages)
    join_room(f'user_{user_id}')

    # Notify others that user is online
    unread = get_unread_count(user_id)

    emit('login_success', {
        'user_id': user_id,
        'username': username,
        'unread_count': unread
    })

    # Broadcast user is online
    socketio.emit('user_online', {
        'user_id': user_id,
        'username': username
    }, skip_sid=request.sid)

    logger.info(f'User logged in: {username} (ID: {user_id})')


@socketio.on('send_message')
def on_send_message(data):
    """Handle incoming message"""
    sender_id = data.get('sender_id')
    recipient_id = data.get('recipient_id')
    content = data.get('content', '').strip()

    if not sender_id or not recipient_id or not content:
        emit('error', {'message': 'Invalid message data'})
        return

    if len(content) > 5000:
        emit('error', {'message': 'Message too long (max 5000 characters)'})
        return

    # Save message to database
    message_id = save_message(sender_id, recipient_id, content)

    message_data = {
        'id': message_id,
        'sender_id': sender_id,
        'recipient_id': recipient_id,
        'content': content,
        'is_read': 0,
        'read_at': None,
        'created_at': datetime.now().isoformat()
    }

    # Send to recipient (via their room)
    socketio.emit('new_message', message_data, room=f'user_{recipient_id}')

    # Confirm to sender
    emit('message_sent', {'message_id': message_id, 'created_at': message_data['created_at']})

    logger.info(f'Message from user {sender_id} to user {recipient_id}')


@socketio.on('mark_as_read')
def on_mark_as_read(data):
    """Mark messages as read"""
    recipient_id = data.get('recipient_id')
    sender_id = data.get('sender_id')

    if not recipient_id or not sender_id:
        return

    updated_count = mark_messages_as_read(recipient_id, sender_id)

    if updated_count > 0:
        # Notify sender that messages were read
        socketio.emit('messages_read', {
            'sender_id': sender_id,
            'recipient_id': recipient_id,
            'conversation_id': get_conversation_id(sender_id, recipient_id),
            'read_at': datetime.now().isoformat()
        }, room=f'user_{sender_id}')

    logger.info(f'User {recipient_id} marked {updated_count} messages as read')


@socketio.on('delete_conversation')
def on_delete_conversation(data):
    """Delete conversation"""
    user1_id = data.get('user1_id')
    user2_id = data.get('user2_id')

    if not user1_id or not user2_id:
        return

    delete_conversation(user1_id, user2_id)

    # Notify both users
    conversation_id = get_conversation_id(user1_id, user2_id)
    socketio.emit('conversation_deleted', {
        'conversation_id': conversation_id
    }, room=f'user_{user1_id}')

    socketio.emit('conversation_deleted', {
        'conversation_id': conversation_id
    }, room=f'user_{user2_id}')

    logger.info(f'Conversation deleted between users {user1_id} and {user2_id}')


@socketio.on('disconnect')
def on_disconnect():
    """User disconnects"""
    for user_id, user_data in list(online_users.items()):
        if request.sid in user_data['socket_ids']:
            user_data['socket_ids'].remove(request.sid)

            if not user_data['socket_ids']:
                # User completely offline
                del online_users[user_id]
                socketio.emit('user_offline', {'user_id': user_id})
                logger.info(f'User offline: {user_data["username"]} (ID: {user_id})')
            break


# ============== MAIN ==============
if __name__ == '__main__':
    # Initialize database
    init_database()

    print("\n" + "="*60)
    print("🚀 Local Network Chat Server Starting")
    print("="*60)
    print(f"🔗 Server running on: http://0.0.0.0:{PORT}")
    print(f"📡 WebSocket enabled for real-time messaging")
    print(f"💾 Database: {DATABASE}")
    print("="*60 + "\n")

    # Start server
    socketio.run(app, host=HOST, port=PORT, debug=False, allow_unsafe_werkzeug=True)