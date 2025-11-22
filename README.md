# LocalChat - Local Network Chat Extension

A Chrome extension that enables real-time chat between users on the same local network (LAN). Perfect for small to medium organizations (0-100 users) who want private, local communication without internet dependency.

## Features

- **Real-time messaging** via WebSocket (Socket.IO)
- **Local network only** - No internet required
- **Desktop notifications** with sound alerts
- **Read receipts** - See when messages are read (WhatsApp-style)
- **Unread message badges** - Visual count of unread messages
- **Message persistence** - Up to 1000 messages per conversation
- **Conversation management** - Delete conversations when needed
- **User presence** - See who's online on the network
- **Offline support** - Messages queued and sent when reconnected

## System Requirements

### Client (Extension)
- Google Chrome 88+ or Chromium-based browser
- Node.js 16+ and npm

### Server
- Python 3.8+
- One dedicated machine on the local network

## Architecture

```
┌─────────────────┐         ┌──────────────┐         ┌─────────────────┐
│  User 1 (Chrome)│◄───────►│ Local Server │◄───────►│  User 2 (Chrome)│
│   + Extension   │         │  (Flask +    │         │   + Extension   │
└─────────────────┘         │  Socket.IO)  │         └─────────────────┘
                            │      +       │
                            │   SQLite DB  │
                            └──────────────┘
```

## Quick Start

### 1. Server Setup

One user needs to run the server on their machine:

```bash
# Navigate to server directory
cd "SERVER FILES"

# Install Python dependencies
pip install -r ../requirements.txt

# Run the server
python Server.py
```

The server will start on `http://0.0.0.0:5000` (accessible to all network users).

**Important:** Note the server's IP address. Other users will need this to connect.
- Find server IP: `ifconfig` (Mac/Linux) or `ipconfig` (Windows)
- Example: `192.168.1.100:5000`

### 2. Extension Build

```bash
# Install dependencies
npm install

# Build the extension
npm run build
```

This creates a `dist/` folder with the built extension.

### 3. Load Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top right)
3. Click "Load unpacked"
4. Select the `dist/` folder
5. The LocalChat extension should now appear in your toolbar

### 4. First Login

1. Click the extension icon
2. Enter your username
3. Enter server address (e.g., `192.168.1.100:5000`)
4. Click "Connect"

## Project Structure

```
LocalChat/
├── src/
│   ├── components/          # React components
│   │   ├── ChatApp.tsx      # Main app component
│   │   ├── screens/         # Screen components
│   │   │   ├── LoginScreen.tsx
│   │   │   ├── ChatScreen.tsx
│   │   │   └── LoadingScreen.tsx
│   │   ├── features/        # Feature components
│   │   │   ├── ChatWindow.tsx
│   │   │   ├── ConversationsList.tsx
│   │   │   └── SettingsModal.tsx
│   │   └── styles/          # Component styles
│   ├── services/            # Core services
│   │   ├── Logger.ts        # Logging service
│   │   ├── StateManager.ts  # State management
│   │   ├── SocketIOService.ts  # WebSocket client
│   │   ├── NotificationService.ts  # Notifications
│   │   ├── StorageService.ts    # Chrome storage
│   │   └── APIService.ts    # REST API client
│   ├── types/               # TypeScript types
│   │   └── index.ts
│   ├── styles/              # Global styles
│   │   └── global.css
│   ├── popup.tsx            # Entry point
│   ├── popup.html           # HTML template
│   └── background.ts        # Background service worker
├── SERVER FILES/
│   └── Server.py            # Flask + Socket.IO server
├── assets/
│   ├── icons/               # Extension icons (16, 48, 128px)
│   ├── notification.mp3     # Notification sound
│   └── ASSETS_GUIDE.md      # Asset creation guide
├── manifest.json            # Chrome extension manifest
├── package.json             # NPM dependencies
├── tsconfig.json            # TypeScript config
├── webpack.config.js        # Webpack bundler config
└── requirements.txt         # Python dependencies
```

## Development

### Development Mode

Build with watch mode for automatic rebuilds:

```bash
npm run dev
```

After code changes:
1. Rebuild (automatic with `npm run dev`)
2. Go to `chrome://extensions/`
3. Click reload icon on LocalChat extension

### Debugging

**Extension Logs:**
- Right-click extension icon → "Inspect popup"
- Check Console tab for logs

**Server Logs:**
- View terminal where `python Server.py` is running

**Export Debug Logs:**
- Open extension
- Go to Settings
- Click "Export Logs"

## Configuration

### Server Configuration

Edit `SERVER FILES/Server.py`:

```python
HOST = '0.0.0.0'  # Listen on all interfaces
PORT = 5000       # Server port
DATABASE = 'chat_database.db'  # SQLite database file
MAX_MESSAGES_PER_CONVERSATION = 1000  # Message limit
```

### Extension Settings

Accessible via Settings icon in extension:
- **Desktop Notifications:** Enable/disable popup notifications
- **Notification Sound:** Enable/disable sound alerts
- **Theme:** Light/Dark mode (if implemented)

## API Documentation

### REST Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Check server health |
| `/api/users` | GET | Get all users |
| `/api/conversations/<user_id>` | GET | Get user conversations |
| `/api/messages?user_id=X&other_user_id=Y` | GET | Get messages between users |

### Socket.IO Events

**Client → Server:**
- `login` - User login
- `send_message` - Send message
- `mark_as_read` - Mark messages as read
- `typing` - User is typing

**Server → Client:**
- `login_response` - Login result
- `user_online` - User came online
- `user_offline` - User went offline
- `new_message` - New message received
- `message_read` - Message was read
- `user_typing` - User is typing

## Database Schema

### Users Table
```sql
CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    is_online INTEGER DEFAULT 0,
    last_seen TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Messages Table
```sql
CREATE TABLE messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    from_user_id INTEGER NOT NULL,
    to_user_id INTEGER NOT NULL,
    message_text TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_read INTEGER DEFAULT 0,
    read_at TIMESTAMP
);
```

### Conversations Table
```sql
CREATE TABLE conversations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user1_id INTEGER NOT NULL,
    user2_id INTEGER NOT NULL,
    last_message_id INTEGER,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Troubleshooting

### Extension not loading
- Ensure you built with `npm run build`
- Check for errors in `chrome://extensions/`
- Verify `dist/` folder exists with files

### Cannot connect to server
- Verify server is running: `curl http://<server-ip>:5000/api/health`
- Check firewall settings (port 5000 must be open)
- Ensure both devices are on the same network
- Try using server's IP address instead of hostname

### Messages not sending
- Check console for WebSocket errors
- Verify server is running
- Check network connectivity
- Look for errors in server terminal

### Notifications not working
- Grant notification permission when prompted
- Check Settings → Enable notifications
- Verify sound file exists in `assets/notification.mp3`

### Database errors
- Delete `chat_database.db` and restart server
- Check file permissions
- Ensure SQLite3 is available

## Security Considerations

- **Local network only** - Server binds to `0.0.0.0` for LAN access
- **No authentication** - Use only on trusted networks
- **No encryption** - Messages sent in plain text over WebSocket
- **No user verification** - Anyone can use any username

**For production use:**
- Implement user authentication
- Add TLS/SSL encryption
- Restrict server to specific IP ranges
- Add rate limiting
- Implement proper session management

## Performance

- **Max users:** 100 concurrent connections
- **Max messages per conversation:** 1000 (auto-cleanup)
- **Message size limit:** No hard limit (recommended: < 10KB)
- **Database:** SQLite (suitable for < 100 users)

## Known Limitations

1. No end-to-end encryption
2. No file sharing (text only)
3. No group chats (1-on-1 only)
4. No message editing/deletion
5. No search functionality
6. Server must be always running

## Future Enhancements

- [ ] Group chat support
- [ ] File sharing
- [ ] Image/emoji support
- [ ] Message search
- [ ] User profiles/avatars
- [ ] Message encryption
- [ ] Mobile app version
- [ ] Dark theme
- [ ] Voice messages

## Contributing

This is a local network tool. Contributions welcome for:
- Bug fixes
- Performance improvements
- UI/UX enhancements
- Security improvements

## License

MIT License - See LICENSE file for details

## Support

For issues, bugs, or questions:
1. Check Troubleshooting section
2. Review server logs
3. Check browser console
4. Export debug logs from extension

## Credits

Built with:
- **Frontend:** React 18, TypeScript, Socket.IO Client
- **Backend:** Python Flask, Flask-SocketIO, SQLite
- **Build:** Webpack, Babel
- **Design:** CSS3 with custom variables

---

**Version:** 1.0.0
**Last Updated:** 2025-11-21
**Author:** LocalChat Team
