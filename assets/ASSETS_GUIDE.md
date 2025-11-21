# Assets Guide

This directory should contain the following assets for the LocalChat extension:

## Required Icon Files

Create the following PNG icon files in the `icons/` subdirectory:

### 1. icon16.png (16x16 pixels)
- Used in browser toolbar
- Simple, recognizable design at small size
- Suggested: Chat bubble or message icon

### 2. icon48.png (48x48 pixels)
- Used in extension management page
- More detailed version of icon16
- Same design as icon16 but with more detail

### 3. icon128.png (128x128 pixels)
- Used in Chrome Web Store
- High quality, detailed icon
- Full color, professional appearance

## Icon Design Suggestions

**Color Scheme:**
- Primary: #4A90E2 (blue)
- Accent: #50C878 (green)
- Background: White or transparent

**Design Ideas:**
- Chat bubble with network/wifi symbol
- Two overlapping speech bubbles
- Computer/monitor with chat bubble
- Message icon with LAN symbol

## How to Create Icons

### Option 1: Use Online Icon Generator
1. Visit https://icon.kitchen or https://www.favicon-generator.org
2. Upload a base image or use their templates
3. Generate all three sizes
4. Download and place in `assets/icons/`

### Option 2: Use Design Software
1. Use Figma, Sketch, or Photoshop
2. Create artboards: 16x16, 48x48, 128x128
3. Design your icon
4. Export as PNG
5. Place in `assets/icons/`

### Option 3: Use Placeholder Icons (Quick Start)
Use simple colored squares with text as placeholders:
```bash
# Linux/Mac - requires ImageMagick
convert -size 16x16 xc:#4A90E2 -pointsize 10 -fill white -gravity center -annotate +0+0 "LC" assets/icons/icon16.png
convert -size 48x48 xc:#4A90E2 -pointsize 32 -fill white -gravity center -annotate +0+0 "LC" assets/icons/icon48.png
convert -size 128x128 xc:#4A90E2 -pointsize 80 -fill white -gravity center -annotate +0+0 "LC" assets/icons/icon128.png
```

## Required Audio File

### notification.mp3
- Notification sound when receiving messages
- Duration: 0.5-2 seconds
- Format: MP3 (preferred) or OGG
- Suggested sounds:
  - Gentle "ding" or "chime"
  - Soft "pop" sound
  - Brief musical tone

### How to Create notification.mp3

**Option 1: Find Free Sounds**
- Visit https://freesound.org
- Search for "notification" or "message"
- Download a short, pleasant sound
- Convert to MP3 if needed
- Rename to `notification.mp3`
- Place in `assets/`

**Option 2: Use System Sounds**
- Find notification sounds in your system
- Mac: `/System/Library/Sounds/`
- Windows: `C:\Windows\Media\`
- Copy and convert to MP3
- Rename to `notification.mp3`

**Option 3: Generate Simple Beep (Linux/Mac)**
```bash
# Requires ffmpeg
ffmpeg -f lavfi -i "sine=frequency=800:duration=0.5" -af "volume=0.5" assets/notification.mp3
```

**Option 4: Use Placeholder (Silent)**
```bash
# Creates a 0.5 second silent MP3 (requires ffmpeg)
ffmpeg -f lavfi -i anullsrc=r=44100:cl=mono -t 0.5 -q:a 9 -acodec libmp3lame assets/notification.mp3
```

## Quick Setup Commands

If you have ImageMagick and ffmpeg installed:

```bash
# Create placeholder icons
convert -size 16x16 xc:#4A90E2 -pointsize 10 -fill white -gravity center -annotate +0+0 "LC" assets/icons/icon16.png
convert -size 48x48 xc:#4A90E2 -pointsize 32 -fill white -gravity center -annotate +0+0 "LC" assets/icons/icon48.png
convert -size 128x128 xc:#4A90E2 -pointsize 80 -fill white -gravity center -annotate +0+0 "LC" assets/icons/icon128.png

# Create notification sound (gentle beep)
ffmpeg -f lavfi -i "sine=frequency=800:duration=0.5" -af "volume=0.3" assets/notification.mp3
```

## Verification

After adding all assets, your directory structure should look like:

```
assets/
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── notification.mp3
└── ASSETS_GUIDE.md (this file)
```

## Testing

After creating the assets:
1. Build the extension: `npm run build`
2. Load the extension in Chrome
3. Check if icons appear correctly
4. Test notification sound by receiving a message
