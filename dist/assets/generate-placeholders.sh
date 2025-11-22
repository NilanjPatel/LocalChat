#!/bin/bash
# Generate placeholder assets for LocalChat extension
# Requires: ImageMagick (convert) and ffmpeg

set -e

echo "Generating placeholder assets for LocalChat..."

# Check if required tools are installed
if ! command -v convert &> /dev/null; then
    echo "Error: ImageMagick (convert) is not installed"
    echo "Install: sudo apt-get install imagemagick (Ubuntu/Debian)"
    echo "        brew install imagemagick (macOS)"
    exit 1
fi

if ! command -v ffmpeg &> /dev/null; then
    echo "Error: ffmpeg is not installed"
    echo "Install: sudo apt-get install ffmpeg (Ubuntu/Debian)"
    echo "        brew install ffmpeg (macOS)"
    exit 1
fi

# Create icons directory if it doesn't exist
mkdir -p icons

# Generate icons
echo "Generating icons..."
convert -size 16x16 xc:#4A90E2 -pointsize 10 -fill white -gravity center -annotate +0+0 "LC" icons/icon16.png
convert -size 48x48 xc:#4A90E2 -pointsize 32 -fill white -gravity center -annotate +0+0 "LC" icons/icon48.png
convert -size 128x128 xc:#4A90E2 -pointsize 80 -fill white -gravity center -annotate +0+0 "LC" icons/icon128.png
echo "✓ Icons generated successfully"

# Generate notification sound (gentle beep)
echo "Generating notification sound..."
ffmpeg -f lavfi -i "sine=frequency=800:duration=0.5" -af "volume=0.3" -y notification.mp3 2>/dev/null
echo "✓ Notification sound generated successfully"

echo ""
echo "All placeholder assets generated successfully!"
echo ""
echo "Note: These are basic placeholders. For production use, please:"
echo "1. Create professional icons using design software"
echo "2. Use a pleasant notification sound"
echo "3. See ASSETS_GUIDE.md for detailed instructions"
