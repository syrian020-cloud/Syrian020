#!/usr/bin/env bash
set -e

export ANDROID_HOME=${ANDROID_HOME:-/home/ubuntu/android-sdk}
export PATH="$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator"

ROOT=$(pwd)

# Build the Capacitor web assets for the lessons app
rm -rf www
mkdir -p www

cp lessons.html www/index.html
cp lessons.html www/lessons.html
cp manifest-lessons.json www/manifest-lessons.json
cp sw-lessons.js www/sw-lessons.js
cp icon-192.png icon-512.png www/

# Optional: use Aliyun mirrors to avoid Maven Central rate-limiting in some regions
GRADLE_INIT=""
if [ "$USE_ALIYUN" = "1" ] && [ -f "$ROOT/init.gradle" ]; then
  echo "Using Aliyun Maven mirrors via init.gradle..."
  GRADLE_INIT="--init-script ../init.gradle"
fi

# Swap Capacitor config for the lessons package and restore after build
cp "$ROOT/capacitor.config.json" "$ROOT/capacitor.config.json.bak"
cp "$ROOT/capacitor-lessons.config.json" "$ROOT/capacitor.config.json"
restore_config() {
  cd "$ROOT"
  cp capacitor.config.json.bak capacitor.config.json
  rm -f capacitor.config.json.bak
}
trap 'restore_config' EXIT

APP_ID=$(node -p "require('$ROOT/capacitor-lessons.config.json').appId")

# `cap sync` never migrates the applicationId of an existing android/ project, and all
# the build scripts here share that (git-ignored) directory, so recreate it whenever it
# belongs to another app.
if [ -d android ] && ! grep -q "applicationId \"\?$APP_ID\"\?" android/app/build.gradle 2>/dev/null; then
  echo "Existing android/ project is not $APP_ID — recreating it..."
  rm -rf android
fi

if [ ! -d android ]; then
  npx cap add android
fi

npx cap sync android

if ! grep -q "applicationId \"\?$APP_ID\"\?" android/app/build.gradle; then
  echo "ERROR: android/app/build.gradle applicationId is not $APP_ID" >&2
  exit 1
fi

MIPMAP="$ROOT/android/app/src/main/res"

# Ensure the Android launcher label matches the Capacitor appName
APP_NAME=$(node -p "try { require('$ROOT/capacitor-lessons.config.json').appName } catch(e){''}")
if [ -n "$APP_NAME" ] && [ -f "$MIPMAP/values/strings.xml" ]; then
  sed -i "s|<string name=\"app_name\">.*</string>|<string name=\"app_name\">$APP_NAME</string>|" "$MIPMAP/values/strings.xml"
  sed -i "s|<string name=\"title_activity_main\">.*</string>|<string name=\"title_activity_main\">$APP_NAME</string>|" "$MIPMAP/values/strings.xml"
fi

# Sync the PWA icon into the Android mipmap launcher icons
ICON_SRC="$ROOT/icon-512.png"
if [ -f "$ICON_SRC" ] && command -v convert >/dev/null 2>&1; then
  mkdir -p "$MIPMAP/mipmap-mdpi" "$MIPMAP/mipmap-hdpi" "$MIPMAP/mipmap-xhdpi" "$MIPMAP/mipmap-xxhdpi" "$MIPMAP/mipmap-xxxhdpi"
  convert "$ICON_SRC" -resize 48x48   "$MIPMAP/mipmap-mdpi/ic_launcher.png"
  convert "$ICON_SRC" -resize 108x108 "$MIPMAP/mipmap-mdpi/ic_launcher_foreground.png"
  convert "$ICON_SRC" -resize 48x48   "$MIPMAP/mipmap-mdpi/ic_launcher_round.png"
  convert "$ICON_SRC" -resize 72x72   "$MIPMAP/mipmap-hdpi/ic_launcher.png"
  convert "$ICON_SRC" -resize 162x162 "$MIPMAP/mipmap-hdpi/ic_launcher_foreground.png"
  convert "$ICON_SRC" -resize 72x72   "$MIPMAP/mipmap-hdpi/ic_launcher_round.png"
  convert "$ICON_SRC" -resize 96x96   "$MIPMAP/mipmap-xhdpi/ic_launcher.png"
  convert "$ICON_SRC" -resize 216x216 "$MIPMAP/mipmap-xhdpi/ic_launcher_foreground.png"
  convert "$ICON_SRC" -resize 96x96   "$MIPMAP/mipmap-xhdpi/ic_launcher_round.png"
  convert "$ICON_SRC" -resize 144x144 "$MIPMAP/mipmap-xxhdpi/ic_launcher.png"
  convert "$ICON_SRC" -resize 324x324 "$MIPMAP/mipmap-xxhdpi/ic_launcher_foreground.png"
  convert "$ICON_SRC" -resize 144x144 "$MIPMAP/mipmap-xxhdpi/ic_launcher_round.png"
  convert "$ICON_SRC" -resize 192x192 "$MIPMAP/mipmap-xxxhdpi/ic_launcher.png"
  convert "$ICON_SRC" -resize 432x432 "$MIPMAP/mipmap-xxxhdpi/ic_launcher_foreground.png"
  convert "$ICON_SRC" -resize 192x192 "$MIPMAP/mipmap-xxxhdpi/ic_launcher_round.png"
fi

cd android
./gradlew $GRADLE_INIT assembleDebug

echo "Lessons APK ready at: android/app/build/outputs/apk/debug/app-debug.apk"
