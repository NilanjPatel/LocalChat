#!/usr/bin/env bash

# Local Chat Application - Complete Setup Guide
# This file documents the complete setup process

cat << 'EOF'

═══════════════════════════════════════════════════════════════════════════════
LOCAL CHAT APPLICATION - SETUP GUIDE
═══════════════════════════════════════════════════════════════════════════════

## PART 1: SERVER SETUP (Run once on a dedicated machine)

### Step 1: Install Python
───────────────────────────────────────────────────────────────────────────────
Minimum: Python 3.8
Download: https://www.python.org/downloads/

Verify installation:
$ python --version
$ pip --version

### Step 2: Install Dependencies
───────────────────────────────────────────────────────────────────────────────
Navigate to server directory and run:

$ pip install -r requirements.txt

This installs:
✓ Flask              - Web framework
✓ Flask-SocketIO     - Real-time communication
✓ Flask-CORS         - Cross-origin requests
✓ python-socketio    - Socket.IO server
✓ python-engineio    - Engine.IO protocol

### Step 3: Run the Server
───────────────────────────────────────────────────────────────────────────────
$ python server.py

Expected output:
════════════════════════════════════════════════════════════════
🚀 Local Network Chat Server Starting
════════════════════════════════════════════════════════════════
🔗 Server running on: http://0.0.0.0:5000
📡 WebSocket enabled for real-time messaging
💾 Database: chat_database.db
════════════════════════════════════════════════════════════════

The database (chat_database.db) will be created automatically.

### Step 4: Find Server IP Address
───────────────────────────────────────────────────────────────────────────────
Windows:
$ ipconfig
Look for "IPv4 Address" under your network adapter
Example: 192.168.1.100

macOS/Linux:
$ ifconfig
Look for "inet" address
Example: 192.168.1.100

Full address: http://192.168.1.100:5000

### Step 5: Keep Server Running
───────────────────────────────────────────────────────────────────────────────
The server must stay running for users to chat:
✓ Keep terminal window open
✓ Don't restart the machine
✓ Monitor console for errors

Optional: Run as background service (Windows)
- Use Task Scheduler to run python server.py on startup

Optional: Run as background service (Mac/Linux)
- Create systemd service or launchd daemon


═══════════════════════════════════════════════════════════════════════════════
## PART 2: CHROME EXTENSION SETUP (Run on client machines)

### Step 1: Install Node.js
───────────────────────────────────────────────────────────────────────────────
Minimum: Node.js 14+
Download: https://nodejs.org/

Verify installation:
$ node --version
$ npm --version

### Step 2: Build the Extension
───────────────────────────────────────────────────────────────────────────────
Navigate to extension directory:
$ npm install
$ npm run build

Output:
✓ dist/ folder created with all compiled files
✓ manifest.json processed
✓ TypeScript compiled to JavaScript
✓ CSS bundled

### Step 3: Load Extension in Chrome
───────────────────────────────────────────────────────────────────────────────
1. Open Chrome
2. Go to: chrome://extensions/
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked"
5. Select the "dist/" folder from your project
6. Extension icon appears in toolbar

### Step 4: Configure Connection
───────────────────────────────────────────────────────────────────────────────
1. Click extension icon in Chrome toolbar
2. Enter username (must be unique on network)
3. Enter server address (from Step 4 above)
   Format: http://192.168.1.100:5000
4. Click "Connect"

### Step 5: Start Chatting!
───────────────────────────────────────────────────────────────────────────────
Once connected:
✓ See list of conversations
✓ Click on someone to chat
✓ Type messages and press Enter
✓ Receive notifications when someone messages you
✓ See read receipts (✓✓) when recipient reads


═══════════════════════════════════════════════════════════════════════════════
## PART 3: TROUBLESHOOTING

### Cannot Connect to Server
───────────────────────────────────────────────────────────────────────────────
Problem: "Failed to connect to server"

Solutions:
1. Verify server is running
    - Check terminal window on server machine
    - Should see "🚀 Local Network Chat Server Starting"

2. Verify server address
    - Open http://SERVER_ADDRESS:5000 in browser
    - Should see "Service running" message

3. Check network connection
    - Server and client must be on same network
    - Ping server from client: ping SERVER_IP
    - Should see responses

4. Check firewall
    - Port 5000 might be blocked
    - Add exception for port 5000
    - Or run on different port (modify server.py)

### Extension Not Loading
───────────────────────────────────────────────────────────────────────────────
Problem: "Extension not found" or errors in dist/

Solutions:
1. Run build command again
   $ npm run build

2. Delete dist/ and rebuild
   $ npm run clean
   $ npm run build

3. Check for TypeScript errors
   $ npm run type-check

4. Reload extension (Chrome)
    - Go to chrome://extensions/
    - Click reload icon on extension

### Messages Not Sending
───────────────────────────────────────────────────────────────────────────────
Problem: Message appears to send but doesn't arrive

Solutions:
1. Check connection status
    - Badge should show "🟢 Connected"
    - Check server logs

2. Check message content
    - Cannot send empty messages
    - Max length: 5000 characters

3. Restart extension
    - Remove extension (chrome://extensions/)
    - Reload after 2 seconds
    - Reconnect

### No Notifications
───────────────────────────────────────────────────────────────────────────────
Problem: Sound doesn't play, no desktop popup

Solutions:
1. Check Settings
    - Open extension → Settings
    - Enable "Notification Sounds"
    - Enable "Desktop Notifications"

2. Browser permissions
    - Chrome should ask for notification permission
    - If blocked, allow in browser settings
    - chrome://settings/content/notifications

3. System volume
    - Ensure speakers/volume not muted
    - Check system audio settings

### Database Error on Server
───────────────────────────────────────────────────────────────────────────────
Problem: "database is locked" error

Solutions:
1. Restart server
    - Stop: Press Ctrl+C
    - Start: python server.py

2. Check file permissions
    - Ensure chat_database.db is readable/writable

3. Move database
    - Delete chat_database.db
    - Restart server to create new one


═══════════════════════════════════════════════════════════════════════════════
## PART 4: MONITORING & MAINTENANCE

### Check Server Health
───────────────────────────────────────────────────────────────────────────────
In browser:
GET http://SERVER:5000/api/health

Response:
{ "status": "ok", "timestamp": "2024-01-15T10:30:00" }

### View Database
───────────────────────────────────────────────────────────────────────────────
Install SQLite browser:
- Download: https://sqlitebrowser.org/
- Open: chat_database.db
- View tables: messages, conversations, users

### Backup Database
───────────────────────────────────────────────────────────────────────────────
Regular backups recommended:

Windows:
$ copy chat_database.db chat_database_backup.db

Mac/Linux:
$ cp chat_database.db chat_database_backup.db

### Export Logs
───────────────────────────────────────────────────────────────────────────────
From extension:
1. Open Settings
2. Click "Download Debug Logs"
3. JSON file with all events
4. Useful for debugging issues


═══════════════════════════════════════════════════════════════════════════════
## PART 5: SCALING TIPS

For More Than 100 Users:
─────────────────────────────────────────────────────────────────────────────
1. Use PostgreSQL instead of SQLite
    - Much better performance
    - Modify server.py database connection

2. Run on dedicated server
    - Not just a user's PC
    - Ensure 24/7 availability

3. Enable SSL/HTTPS
    - Use self-signed certificate
    - Better security

4. Load balancing
    - Multiple server instances
    - Use proxy (nginx)

5. Database replication
    - Master-slave setup
    - Automatic failover


═══════════════════════════════════════════════════════════════════════════════
## PART 6: SECURITY CHECKLIST

Before Production Deployment:
─────────────────────────────────────────────────────────────────────────────
[ ] Server running on dedicated machine
[ ] Port 5000 restricted to internal network only
[ ] Database backups configured
[ ] All users have unique usernames
[ ] Server firewall configured
[ ] HTTPS enabled (self-signed certificate)
[ ] Logs monitored for errors
[ ] Database maximum size monitored
[ ] Regular database maintenance runs
[ ] User training completed
[ ] Support contacts established


═══════════════════════════════════════════════════════════════════════════════
## QUICK REFERENCE

Server Commands:
python server.py              - Start server
Ctrl+C                        - Stop server

Extension Commands:
npm install                   - Install dependencies
npm run build                 - Build for production
npm run dev                   - Build in watch mode
npm run type-check            - Check TypeScript
npm run clean                 - Delete dist/

Chrome URLs:
chrome://extensions/          - Extension management
chrome://settings/content/    - Permission settings
chrome://logs                 - Debug logs

═══════════════════════════════════════════════════════════════════════════════

Need Help?
1. Check this guide again
2. Review troubleshooting section
3. Check server console for errors
4. Download debug logs from extension
5. Verify all prerequisites installed

Version: 1.0.0
Last Updated: 2024
EOF