# LocalChat Deployment Guide

Complete step-by-step guide to deploy LocalChat in your organization.

## Pre-Deployment Checklist

- [ ] One dedicated machine for server (Windows/Mac/Linux)
- [ ] All users have Chrome browser installed
- [ ] All machines on the same local network
- [ ] Node.js 16+ installed (for building extension)
- [ ] Python 3.8+ installed (for server)
- [ ] Network administrator access (for firewall configuration)

## Phase 1: Server Setup

### Step 1: Prepare Server Machine

Choose a reliable machine that will stay online during work hours.

**Recommended specs:**
- 2GB+ RAM
- Dual-core CPU
- Windows 10, macOS 10.14+, or Ubuntu 18.04+

### Step 2: Install Python Dependencies

```bash
# Clone or download the project
cd /path/to/LocalChat

# Install Python dependencies
pip install -r requirements.txt

# Or with Python 3 specifically
pip3 install -r requirements.txt
```

Verify installation:
```bash
python -c "import flask, flask_socketio, flask_cors; print('Dependencies OK')"
```

### Step 3: Configure Server

Edit `SERVER FILES/Server.py` if needed:

```python
HOST = '0.0.0.0'  # Don't change (allows network access)
PORT = 5000       # Change if port 5000 is in use
DATABASE = 'chat_database.db'
MAX_MESSAGES_PER_CONVERSATION = 1000
```

### Step 4: Test Server Locally

```bash
cd "SERVER FILES"
python Server.py
```

Expected output:
```
 * Running on http://0.0.0.0:5000
INFO:__main__:Server started on http://0.0.0.0:5000
```

Test health endpoint:
```bash
curl http://localhost:5000/api/health
# Should return: {"status":"ok","timestamp":"..."}
```

### Step 5: Find Server IP Address

**Windows:**
```cmd
ipconfig
# Look for "IPv4 Address" under your active network adapter
```

**Mac/Linux:**
```bash
ifconfig
# Look for "inet" under en0 (WiFi) or eth0 (Ethernet)
```

Example: `192.168.1.100`

### Step 6: Configure Firewall

Allow incoming connections on port 5000:

**Windows Firewall:**
1. Windows Security → Firewall & network protection
2. Advanced settings → Inbound Rules → New Rule
3. Port → TCP → Specific local ports: 5000
4. Allow the connection
5. Apply to Domain, Private, Public
6. Name: "LocalChat Server"

**Mac:**
```bash
# Allow Python through firewall
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add /usr/bin/python3
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --unblock /usr/bin/python3
```

**Linux (ufw):**
```bash
sudo ufw allow 5000/tcp
sudo ufw reload
```

### Step 7: Test from Another Machine

From another computer on the network:
```bash
curl http://192.168.1.100:5000/api/health
```

If this fails, check:
- Server is running
- Firewall rules are correct
- Both machines on same network
- No VPN interfering

## Phase 2: Extension Build & Distribution

### Step 1: Build Extension

On your development machine:

```bash
cd /path/to/LocalChat

# Install Node dependencies
npm install

# Build for production
npm run build
```

This creates a `dist/` folder with the extension.

### Step 2: Create Assets

Before distribution, create proper assets:

```bash
cd assets

# Option A: Generate placeholders (requires ImageMagick & ffmpeg)
chmod +x generate-placeholders.sh
./generate-placeholders.sh

# Option B: Create professional assets manually
# See assets/ASSETS_GUIDE.md for instructions
```

### Step 3: Rebuild with Assets

```bash
npm run rebuild
```

### Step 4: Package Extension

```bash
# Create distribution package
cd dist
zip -r LocalChat-v1.0.0.zip .
```

### Step 5: Distribute to Users

**Option A: Shared Network Drive**
1. Copy `LocalChat-v1.0.0.zip` to shared drive
2. Send email with installation instructions

**Option B: USB Drive**
1. Copy to USB drives
2. Distribute to each user

**Option C: Internal Server**
1. Host on internal web server
2. Provide download link

## Phase 3: User Installation

### Installation Instructions (for end users)

**Document to share with users:**

---

### LocalChat Installation Guide

1. **Download the Extension**
   - Get `LocalChat-v1.0.0.zip` from [location]
   - Extract to a folder (e.g., `Downloads/LocalChat`)

2. **Install in Chrome**
   - Open Chrome
   - Go to `chrome://extensions/`
   - Enable "Developer mode" (top right toggle)
   - Click "Load unpacked"
   - Select the extracted `LocalChat` folder
   - Extension icon should appear in toolbar

3. **First Login**
   - Click the LocalChat icon
   - Enter your name (e.g., "John Doe")
   - Enter server address: `192.168.1.100:5000`
   - Click "Connect"

4. **Grant Permissions**
   - Allow notifications when prompted
   - Permissions needed for message alerts

5. **Start Chatting!**
   - See list of online users
   - Click a user to start chatting
   - Receive notification sound for new messages

---

## Phase 4: Server Maintenance

### Running Server on Startup

**Windows (Task Scheduler):**
1. Open Task Scheduler
2. Create Basic Task
3. Trigger: When computer starts
4. Action: Start a program
5. Program: `python`
6. Arguments: `C:\path\to\SERVER FILES\Server.py`
7. Start in: `C:\path\to\SERVER FILES`

**Mac (launchd):**
Create `~/Library/LaunchAgents/com.localchat.server.plist`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.localchat.server</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/bin/python3</string>
        <string>/path/to/SERVER FILES/Server.py</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>WorkingDirectory</key>
    <string>/path/to/SERVER FILES</string>
</dict>
</plist>
```

Load:
```bash
launchctl load ~/Library/LaunchAgents/com.localchat.server.plist
```

**Linux (systemd):**
Create `/etc/systemd/system/localchat.service`:
```ini
[Unit]
Description=LocalChat Server
After=network.target

[Service]
Type=simple
User=yourusername
WorkingDirectory=/path/to/SERVER FILES
ExecStart=/usr/bin/python3 /path/to/SERVER FILES/Server.py
Restart=always

[Install]
WantedBy=multi-user.target
```

Enable:
```bash
sudo systemctl enable localchat
sudo systemctl start localchat
```

### Database Backup

```bash
# Daily backup script
#!/bin/bash
DATE=$(date +%Y%m%d)
cp chat_database.db backups/chat_database_$DATE.db
find backups/ -mtime +30 -delete  # Keep 30 days
```

Add to crontab:
```bash
# Backup daily at 2 AM
0 2 * * * /path/to/backup-script.sh
```

### Monitoring

Check server health:
```bash
curl http://localhost:5000/api/health
```

View logs:
```bash
# In server directory
tail -f server.log  # If logging to file
# Or check terminal where server is running
```

Monitor database size:
```bash
ls -lh chat_database.db
```

### Maintenance Tasks

**Weekly:**
- Check server is running
- Verify disk space
- Review logs for errors

**Monthly:**
- Backup database
- Clear old messages if needed
- Update dependencies if security patches available

**Quarterly:**
- Review user feedback
- Plan feature updates
- Test disaster recovery

## Phase 5: Scaling

### When to Scale

Consider scaling if:
- More than 50 concurrent users
- Message latency increases
- Server CPU/RAM consistently high
- Database size > 1GB

### Scaling Options

**Option 1: Dedicated Server**
- Use a dedicated server machine
- Better specs (4GB+ RAM, quad-core)
- UPS backup power
- Wired ethernet connection

**Option 2: Multiple Servers**
- Load balance across servers (requires code changes)
- Separate database server
- Not supported out-of-the-box

**Option 3: Cloud Migration**
- Host on AWS/Azure/GCP
- Still accessible only within VPN
- Better reliability and backups

## Troubleshooting

### Server Won't Start

**Port already in use:**
```bash
# Find process using port 5000
lsof -i :5000  # Mac/Linux
netstat -ano | findstr :5000  # Windows

# Kill process or change port in Server.py
```

**Python dependency errors:**
```bash
pip install --upgrade -r requirements.txt
```

### Users Can't Connect

1. **Verify server is running:**
   ```bash
   curl http://localhost:5000/api/health
   ```

2. **Test from client machine:**
   ```bash
   curl http://SERVER_IP:5000/api/health
   ```

3. **Check firewall:**
   - Temporarily disable to test
   - If works, add proper firewall rule

4. **Network issues:**
   - Ping server from client
   - Check if on same network
   - VPN can interfere

### Extension Issues

**Extension won't load:**
- Rebuild: `npm run rebuild`
- Check for errors in `chrome://extensions/`
- Try removing and re-adding extension

**Can't find server:**
- Verify server address is correct
- Include port number (e.g., `192.168.1.100:5000`)
- Don't include `http://` prefix

## Security Best Practices

1. **Network isolation**
   - Keep server on internal network only
   - Don't expose to internet

2. **Access control**
   - Restrict to company network
   - Use MAC address filtering on router
   - Consider VPN for remote workers

3. **Data privacy**
   - Inform users about no encryption
   - Company policy on appropriate use
   - Regular database backups

4. **Updates**
   - Keep Python dependencies updated
   - Monitor for security advisories
   - Test updates in staging first

## Rollback Plan

If issues occur after deployment:

1. **Stop server:**
   ```bash
   # Kill server process
   pkill -f Server.py
   ```

2. **Restore previous database:**
   ```bash
   cp backups/chat_database_YYYYMMDD.db chat_database.db
   ```

3. **Revert extension:**
   - Distribute previous version zip
   - Users reload old version

4. **Investigate:**
   - Check server logs
   - Review user reports
   - Test in isolated environment

## Success Metrics

Track these to measure deployment success:

- [ ] Server uptime > 99%
- [ ] Average message latency < 500ms
- [ ] No data loss incidents
- [ ] User satisfaction score > 4/5
- [ ] Support tickets < 5 per week

## Support Resources

**For Administrators:**
- Server logs: `SERVER FILES/` directory
- Database: `chat_database.db`
- Configuration: `SERVER FILES/Server.py`

**For Users:**
- README.md - User guide
- Settings in extension
- Export logs feature

**Emergency Contacts:**
- IT Support: [contact info]
- Network Admin: [contact info]
- Developer: [contact info]

---

**Deployment Version:** 1.0.0
**Last Updated:** 2025-11-21
