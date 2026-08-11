#!/usr/bin/env bash
set -e

export ANDROID_HOME=${ANDROID_HOME:-/home/ubuntu/android-sdk}
export PATH="$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator"

ROOT=$(pwd)

# Build the Capacitor web assets from the French phrasebook
rm -rf www
mkdir -p www/data www/js
cp french.html www/index.html
cp data/* www/data/
cp manifest.json icon-192.png icon-512.png sw.js www/
cp vocab.html index.html www/

# Optional: use Aliyun mirrors to avoid Maven Central rate-limiting in some regions
if [ "$USE_ALIYUN" = "1" ]; then
  echo "Using Aliyun Maven mirrors..."
  sed -i "s|repositories {\s*\n\s*google()|repositories {\n        maven { url 'https://maven.aliyun.com/repository/google' }\n        maven { url 'https://maven.aliyun.com/repository/public' }\n        maven { url 'https://maven.aliyun.com/repository/gradle-plugin' }\n        google|g" android/build.gradle 2>/dev/null || true
fi

# Ensure the Android project matches the desired Capacitor appId (it may be left over from another build)
DESIRED_APP_ID=$(node -p "JSON.parse(require('fs').readFileSync('$ROOT/capacitor.config.json')).appId")
CURRENT_APP_ID=""
if [ -f "$ROOT/android/app/build.gradle" ]; then
  CURRENT_APP_ID=$(sed -n 's/.*applicationId "\([^"]*\)".*/\1/p' "$ROOT/android/app/build.gradle" | head -1 || true)
fi
if [ -n "$DESIRED_APP_ID" ] && [ "$CURRENT_APP_ID" != "$DESIRED_APP_ID" ]; then
  echo "Android applicationId mismatch ('$CURRENT_APP_ID' != '$DESIRED_APP_ID'); recreating android project..."
  rm -rf android
fi

if [ ! -d android ]; then
  npx cap add android
fi

npx cap sync android
cd android
./gradlew assembleDebug

echo "APK ready at: android/app/build/outputs/apk/debug/app-debug.apk"
