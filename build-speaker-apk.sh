#!/usr/bin/env bash
set -e

export ANDROID_HOME=${ANDROID_HOME:-/home/ubuntu/android-sdk}
export PATH="$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator"

ROOT=$(pwd)

# Build the Capacitor web assets for the speaker page
rm -rf www
mkdir -p www

cp speaker.html www/index.html
cp manifest.json icon-192.png icon-512.png sw.js www/

# Optional: use Aliyun mirrors to avoid Maven Central rate-limiting
GRADLE_INIT=""
if [ "$USE_ALIYUN" = "1" ] && [ -f "$ROOT/init.gradle" ]; then
  echo "Using Aliyun Maven mirrors via init.gradle..."
  GRADLE_INIT="--init-script ../init.gradle"
fi

# Swap Capacitor config for the speaker package and restore after build
cp "$ROOT/capacitor.config.json" "$ROOT/capacitor.config.json.bak"
cp "$ROOT/capacitor-speaker.config.json" "$ROOT/capacitor.config.json"
restore_config() {
  cd "$ROOT"
  cp capacitor.config.json.bak capacitor.config.json
  rm -f capacitor.config.json.bak
}
trap 'restore_config' EXIT

if [ ! -d android ]; then
  npx cap add android
fi

# Inject the custom Kotlin service, overlay view, plugin, manifest, strings and gradle overrides.
cp -r "$ROOT/speaker-android/"* "$ROOT/android/"

npx cap sync android

# Re-apply custom source files in case sync regenerated any of them.
cp -r "$ROOT/speaker-android/"* "$ROOT/android/"

cd android
./gradlew $GRADLE_INIT assembleDebug

echo "Speaker APK ready at: android/app/build/outputs/apk/debug/app-debug.apk"
