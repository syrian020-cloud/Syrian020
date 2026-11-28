#!/usr/bin/env bash
set -e

export ANDROID_HOME=${ANDROID_HOME:-/home/ubuntu/android-sdk}
export PATH="$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator"

ROOT=$(pwd)

# Build the Capacitor web assets for the Conduite app
rm -rf www
mkdir -p www
cp -r conduite/. www/

# Optional: use Aliyun mirrors to avoid Maven Central rate-limiting in some regions
GRADLE_INIT=""
if [ "$USE_ALIYUN" = "1" ] && [ -f "$ROOT/init.gradle" ]; then
  echo "Using Aliyun Maven mirrors via init.gradle..."
  GRADLE_INIT="--init-script ../init.gradle"
fi

# Swap Capacitor config for the Conduite package and restore after build
cp "$ROOT/capacitor.config.json" "$ROOT/capacitor.config.json.bak"
cp "$ROOT/capacitor-conduite.config.json" "$ROOT/capacitor.config.json"
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

# Apply the pickling package id and app name to the Android project
sed -i -E 's@namespace "com\.syrian020\.(convip|pickling)"@namespace "com.syrian020.piclib"@; s@applicationId "com\.syrian020\.(convip|pickling)"@applicationId "com.syrian020.piclib"@' android/app/build.gradle
sed -i -E 's/>(conVip|pickling)</>picLib</g; s/com\.syrian020\.(convip|pickling)/com.syrian020.piclib/g' android/app/src/main/res/values/strings.xml
# Media permissions for gallery save
MANIFEST="android/app/src/main/AndroidManifest.xml"
if ! grep -q READ_MEDIA_IMAGES "$MANIFEST"; then
  python3 - "$MANIFEST" <<'PYEOF'
import sys
m=open(sys.argv[1]).read()
perms="""    <uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />
    <uses-permission android:name="android.permission.READ_MEDIA_VIDEO" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" android:maxSdkVersion="32" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" android:maxSdkVersion="28" />
"""
open(sys.argv[1],'w').write(m.replace('</manifest>', perms + '</manifest>'))
PYEOF
fi

JDIR="android/app/src/main/java/com/syrian020"
for oldpkg in convip pickling; do
  if [ -f "$JDIR/$oldpkg/MainActivity.java" ] && [ "$oldpkg" != "piclib" ]; then
    mkdir -p "$JDIR/piclib"
    sed -E 's/package com\.syrian020\.(convip|pickling);/package com.syrian020.piclib;/' "$JDIR/$oldpkg/MainActivity.java" > "$JDIR/piclib/MainActivity.java"
    rm -rf "$JDIR/$oldpkg"
  fi
done

# Sync the PWA icon into the Android mipmap launcher icons
ICON_SRC="$ROOT/conduite/icon-512.png"
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
./gradlew $GRADLE_INIT assembleDebug


# Repack without the 16KB per-entry alignment padding (~13MB waste) and re-sign
APK=app/build/outputs/apk/debug/app-debug.apk
if [ -f "$APK" ]; then
  BTOOLS=$(ls -d "$ANDROID_HOME"/build-tools/*/ | tail -1)
  TMPD=$(mktemp -d)
  (cd "$TMPD" && unzip -qo "$ROOT/android/$APK" && rm -rf META-INF && zip -q -r -n ".arsc" repacked.apk .)
  "${BTOOLS}zipalign" -f -z -p 4 "$TMPD/repacked.apk" "$TMPD/aligned.apk"
  "${BTOOLS}apksigner" sign --ks "$HOME/.android/debug.keystore" --ks-pass pass:android --out "$APK" "$TMPD/aligned.apk" 2>/dev/null || true
  rm -rf "$TMPD"
fi

echo "Conduite APK ready at: android/app/build/outputs/apk/debug/app-debug.apk"
