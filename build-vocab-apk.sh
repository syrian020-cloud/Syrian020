#!/usr/bin/env bash
set -e

export ANDROID_HOME=${ANDROID_HOME:-/home/ubuntu/android-sdk}
export PATH="$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator"

ROOT=$(pwd)

# Build the Capacitor web assets for the vocabulary page
rm -rf www
mkdir -p www/data www/js

cp data/* www/data/
cp manifest.json icon-192.png icon-512.png sw.js www/

# Use vocab.html as the main entry, keep french.html available for the back link
cp vocab.html www/index.html
cp french.html www/french.html

# Optional: use Aliyun mirrors to avoid Maven Central rate-limiting in some regions
if [ "$USE_ALIYUN" = "1" ]; then
  echo "Using Aliyun Maven mirrors..."
  sed -i "s|repositories {\s*\n\s*google()|repositories {\n        maven { url 'https://maven.aliyun.com/repository/google' }\n        maven { url 'https://maven.aliyun.com/repository/public' }\n        maven { url 'https://maven.aliyun.com/repository/gradle-plugin' }\n        google|g" "$ROOT/android/build.gradle" 2>/dev/null || true
fi

# Swap Capacitor config for the vocab package and restore after build
cp "$ROOT/capacitor.config.json" "$ROOT/capacitor.config.json.bak"
cp "$ROOT/capacitor-vocab.config.json" "$ROOT/capacitor.config.json"
restore_config() {
  cd "$ROOT"
  cp capacitor.config.json.bak capacitor.config.json
  rm -f capacitor.config.json.bak
}
trap 'restore_config' EXIT

if [ ! -d android ]; then
  npx cap add android
fi

npx cap sync android
cd android
./gradlew assembleDebug

echo "Vocab APK ready at: android/app/build/outputs/apk/debug/app-debug.apk"
