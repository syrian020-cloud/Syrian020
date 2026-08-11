#!/usr/bin/env bash
set -e

# Build the PassVault APK by temporarily swapping the root Capacitor config/web assets.
# Run this from the password-vault/ folder.

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
VAULT="$ROOT/password-vault"
WWW="$ROOT/www"
APK_OUT="$VAULT/passvault-debug.apk"

export ANDROID_HOME=${ANDROID_HOME:-/home/ubuntu/android-sdk}
export PATH="$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator"

# Stage web assets
rm -rf "$WWW"
mkdir -p "$WWW"
cp -r "$VAULT/www/"* "$WWW/"

# Swap root Capacitor config
cp "$ROOT/capacitor.config.json" "$VAULT/capacitor.config.json.backup"
cp "$VAULT/capacitor.config.json" "$ROOT/capacitor.config.json"

# Sync and build
cd "$ROOT"
if [ ! -d android ]; then
  npx cap add android
fi
npx cap sync android

# Update Android launcher icons
for DENSITY in mdpi hdpi xhdpi xxhdpi xxxhdpi; do
  SIZE_NAME="ic_launcher_${DENSITY}.png"
  MIPMAP="$ROOT/android/app/src/main/res/mipmap-${DENSITY}"
  mkdir -p "$MIPMAP"
  cp "$VAULT/icons/$SIZE_NAME" "$MIPMAP/ic_launcher.png"
  cp "$VAULT/icons/$SIZE_NAME" "$MIPMAP/ic_launcher_foreground.png"
  cp "$VAULT/icons/$SIZE_NAME" "$MIPMAP/ic_launcher_round.png"
done
cd android
./gradlew assembleDebug

cp "$ROOT/android/app/build/outputs/apk/debug/app-debug.apk" "$APK_OUT"

# Restore original root config
cp "$VAULT/capacitor.config.json.backup" "$ROOT/capacitor.config.json"

echo "APK ready at: $APK_OUT"