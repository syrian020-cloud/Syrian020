#!/usr/bin/env bash
set -e

export ANDROID_HOME=${ANDROID_HOME:-/home/ubuntu/android-sdk}
export PATH="$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator"

ROOT=$(pwd)

# Build the Capacitor web assets for the fwords app
rm -rf www
mkdir -p www/css www/js

cp fwords/index.html www/index.html
cp fwords/css/style.css www/css/style.css
cp fwords/js/app.js www/js/app.js
cp fwords/manifest.json www/manifest.json 2>/dev/null || true
cp fwords/icon-192.png www/icon-192.png
cp fwords/icon-512.png www/icon-512.png

# Optional: use Aliyun mirrors to avoid Maven Central rate-limiting in some regions
if [ "$USE_ALIYUN" = "1" ]; then
  echo "Using Aliyun Maven mirrors..."
  sed -i "s|repositories {\\s*\\n\\s*google()|repositories {\\n        maven { url 'https://maven.aliyun.com/repository/google' }\\n        maven { url 'https://maven.aliyun.com/repository/public' }\\n        maven { url 'https://maven.aliyun.com/repository/gradle-plugin' }\\n        google|g" "$ROOT/android/build.gradle" 2>/dev/null || true
fi

# Swap Capacitor config for the fwords package and restore after build
HAD_CAP_CONFIG=0
if [ -f "$ROOT/capacitor.config.json" ]; then
  HAD_CAP_CONFIG=1
  cp "$ROOT/capacitor.config.json" "$ROOT/capacitor.config.json.fwords.bak"
fi
cp "$ROOT/capacitor-fwords.config.json" "$ROOT/capacitor.config.json"
restore_config() {
  cd "$ROOT"
  if [ "$HAD_CAP_CONFIG" = "1" ]; then
    cp capacitor.config.json.fwords.bak capacitor.config.json
    rm -f capacitor.config.json.fwords.bak
  else
    rm -f capacitor.config.json
  fi
}
trap 'restore_config' EXIT

# Use a fresh Android project so the package matches this app
if [ -d android ]; then
  rm -rf android
fi
npx cap add android
npx cap sync android

# Ensure the Android launcher label matches the Capacitor appName
STRINGS="$ROOT/android/app/src/main/res/values/strings.xml"
if [ -f "$STRINGS" ]; then
  sed -i 's|<string name="app_name">.*</string>|<string name="app_name">fwords</string>|' "$STRINGS"
  sed -i 's|<string name="title_activity_main">.*</string>|<string name="title_activity_main">fwords</string>|' "$STRINGS"
fi

# Sync the PWA icon into the Android mipmap launcher icons
ICON_SRC="$ROOT/fwords/icon-512.png"
MIPMAP="$ROOT/android/app/src/main/res"
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
./gradlew assembleDebug

echo "fwords APK ready at: android/app/build/outputs/apk/debug/app-debug.apk"
