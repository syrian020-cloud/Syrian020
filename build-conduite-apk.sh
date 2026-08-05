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
