#!/usr/bin/env bash
set -e

export ANDROID_HOME=${ANDROID_HOME:-/home/ubuntu/android-sdk}
export PATH="$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Backup existing French Capacitor/Android assets if present
cp capacitor.config.json capacitor.config.json.french.bak 2>/dev/null || true
if [ -d android ]; then
  rm -rf android-french-backup
  mv android android-french-backup
fi

# Prepare www for conduite app
rm -rf www
mkdir -p www

cp conduite.html www/index.html
cp conduite.html www/conduite.html
cp manifest-conduite.json www/manifest.json
cp manifest-conduite.json www/manifest-conduite.json
cp icon-192.png icon-512.png www/
cp sw-conduite.js www/sw.js

# Use conduite-specific Capacitor config
cp capacitor-conduite.config.json capacitor.config.json

# Optional: use Aliyun mirrors to avoid Maven Central rate-limiting in some regions
if [ "$USE_ALIYUN" = "1" ]; then
  echo "Using Aliyun Maven mirrors..."
  sed -i "s|repositories {\s*\n\s*google()|repositories {\n        maven { url 'https://maven.aliyun.com/repository/google' }\n        maven { url 'https://maven.aliyun.com/repository/public' }\n        maven { url 'https://maven.aliyun.com/repository/gradle-plugin' }\n        google|g" android/build.gradle 2>/dev/null || true
fi

npx cap add android

# Replace Android launcher icons with the Conduite icon and set background color
python3 << 'PY'
from PIL import Image
import os, re

sizes = {
    'mipmap-mdpi': 48,
    'mipmap-hdpi': 72,
    'mipmap-xhdpi': 96,
    'mipmap-xxhdpi': 144,
    'mipmap-xxxhdpi': 192
}

src = Image.open('app-icon.png').convert('RGBA')
fg = Image.open('app-icon-foreground.png').convert('RGBA')

base = 'android/app/src/main/res'
for d, size in sizes.items():
    path = os.path.join(base, d)
    if os.path.isdir(path):
        src.resize((size, size), Image.LANCZOS).save(os.path.join(path, 'ic_launcher.png'))
        src.resize((size, size), Image.LANCZOS).save(os.path.join(path, 'ic_launcher_round.png'))
        fg.resize((size, size), Image.LANCZOS).save(os.path.join(path, 'ic_launcher_foreground.png'))

bg_path = os.path.join(base, 'values/ic_launcher_background.xml')
if os.path.isfile(bg_path):
    with open(bg_path, 'w') as f:
        f.write("<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<resources>\n    <color name=\"ic_launcher_background\">#0087e6</color>\n</resources>")
PY

npx cap sync android
cd android
./gradlew assembleDebug

cd "$SCRIPT_DIR"
# Copy final APK to repo root and clean up the conduite-specific android tree
APK_SOURCE="android/app/build/outputs/apk/debug/app-debug.apk"
APK_DEST="conduite.apk"
cp "$APK_SOURCE" "$APK_DEST" 2>/dev/null || true
rm -rf android-conduite android
if [ -d android-french-backup ]; then
  mv android-french-backup android
fi
cp capacitor.config.json.french.bak capacitor.config.json
rm -f capacitor.config.json.french.bak

echo "Conduite APK ready at: $APK_DEST"
