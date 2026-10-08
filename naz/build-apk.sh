#!/usr/bin/env bash
# Build the naz APK: ./build-apk.sh user|admin
set -e
VARIANT="${1:?usage: ./build-apk.sh user|admin}"
CONFIG="capacitor-${VARIANT}.config.json"
OUT="naz-${VARIANT}-debug.apk"

export ANDROID_HOME=${ANDROID_HOME:-/home/ubuntu/android-sdk}
export PATH="/home/ubuntu/nodejs/bin:$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools"

ROOT=$(cd "$(dirname "$0")" && pwd)
cd "$ROOT"

# Stage web assets into Capacitor's webDir
rm -rf www && mkdir -p www
cp index.html admin.html manifest.json sw.js \
   icon-${VARIANT}-192.png icon-${VARIANT}-512.png whatsapp-icon.png bienvenue-lesson.jpg planning-banner.jpg www/
( cd www && mv icon-${VARIANT}-192.png icon-192.png && mv icon-${VARIANT}-512.png icon-512.png )
cp -r fonts www/ 2>/dev/null || true

# Admin build: enable admin mode permanently on this device profile
if [ "$VARIANT" = "admin" ]; then
  sed -i '0,/<head>/s||<head><script>localStorage.setItem("naz_admin_want","1");</script>|' www/index.html
fi

# Swap in the variant's Capacitor config for the duration of the build
[ -f capacitor.config.json ] && cp capacitor.config.json capacitor.config.json.bak
cp "$CONFIG" capacitor.config.json
restore() {
  cd "$ROOT"
  if [ -f capacitor.config.json.bak ]; then mv capacitor.config.json.bak capacitor.config.json; else rm -f capacitor.config.json; fi
}
trap restore EXIT

GRADLE_INIT=""
if [ "$USE_ALIYUN" = "1" ] && [ -f "$ROOT/init.gradle" ]; then
  echo "Using Aliyun Maven mirrors via init.gradle..."
  GRADLE_INIT="--init-script ../init.gradle"
fi

[ -d android ] || npx cap add android
npx cap sync android

# Point the shared android project at this variant's id/name
APP_ID=$(node -p "require('./capacitor.config.json').appId")
APP_NAME=$(node -p "require('./capacitor.config.json').appName")
sed -i "s|applicationId \".*\"|applicationId \"$APP_ID\"|" android/app/build.gradle
STRINGS=android/app/src/main/res/values/strings.xml
sed -i "s|<string name=\"app_name\">.*</string>|<string name=\"app_name\">$APP_NAME</string>|" "$STRINGS"
sed -i "s|<string name=\"title_activity_main\">.*</string>|<string name=\"title_activity_main\">$APP_NAME</string>|" "$STRINGS"

# Launcher icons from this variant's icon
ICON_SRC="$ROOT/icon-${VARIANT}-512.png"
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

# Notification channel sound + alarm/vibration permissions
RAW="$ROOT/android/app/src/main/res/raw"
mkdir -p "$RAW"
ffmpeg -y -loglevel error -f lavfi -i "sine=frequency=880:duration=0.25" -f lavfi -i "sine=frequency=1174:duration=0.25" -filter_complex "[0:a][1:a]concat=n=2:v=0:a=1,volume=1.6" "$RAW/appt_chime.mp3" || true
MANIFEST="$ROOT/android/app/src/main/AndroidManifest.xml"
if [ -f "$MANIFEST" ] && ! grep -q SCHEDULE_EXACT_ALARM "$MANIFEST"; then
  sed -i 's|</manifest>|    <uses-permission android:name="android.permission.SCHEDULE_EXACT_ALARM" />\n    <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />\n    <uses-permission android:name="android.permission.VIBRATE" />\n</manifest>|' "$MANIFEST"
fi

cd android
./gradlew $GRADLE_INIT assembleDebug
cp app/build/outputs/apk/debug/app-debug.apk "$ROOT/$OUT"
echo "APK ready: $ROOT/$OUT"
