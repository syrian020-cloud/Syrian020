#!/usr/bin/env bash
set -e

export ANDROID_HOME=${ANDROID_HOME:-/home/ubuntu/android-sdk}
export PATH="$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator"

ROOT=$(pwd)

# Build the Capacitor web assets for zeek
rm -rf www
mkdir -p www/data www/js

cp zeek/index.html www/index.html
cp zeek/manifest.json www/
cp zeek/sw.js www/
cp zeek/icon-192.png www/
cp zeek/icon-512.png www/
cp zeek/bienvenue-lesson.jpg www/
cp zeek/whatsapp-icon.png www/
cp zeek/js/* www/js/
mkdir -p www/fonts && cp zeek/fonts/*.ttf www/fonts/

# Optional: use Aliyun mirrors to avoid Maven Central rate-limiting in some regions
GRADLE_INIT=""
if [ "$USE_ALIYUN" = "1" ] && [ -f "$ROOT/init.gradle" ]; then
  echo "Using Aliyun Maven mirrors via init.gradle..."
  GRADLE_INIT="--init-script ../init.gradle"
fi

# Swap Capacitor config for the zeek package and restore after build
cp "$ROOT/capacitor.config.json" "$ROOT/capacitor.config.json.bak"
cp "$ROOT/capacitor-zeek.config.json" "$ROOT/capacitor.config.json"
restore_config() {
  cd "$ROOT"
  cp capacitor.config.json.bak capacitor.config.json 2>/dev/null || true
  rm -f capacitor.config.json.bak
}
trap 'restore_config' EXIT

if [ ! -d android ]; then
  npx cap add android
fi

npx cap sync android

# Add largeHeap for handling image/video files in memory
MANIFEST="$ROOT/android/app/src/main/AndroidManifest.xml"
if [ -f "$MANIFEST" ] && ! grep -q 'android:largeHeap' "$MANIFEST"; then
  sed -i 's/<application\s/<application android:largeHeap="true" /' "$MANIFEST"
fi

# Inject the EdgeTTS native plugin (free Microsoft neural voices over WebSocket)
PLUGIN_DIR="android/app/src/main/java/com/syrian020/tts"
mkdir -p "$PLUGIN_DIR"
cp native-plugins/EdgeTtsPlugin.java "$PLUGIN_DIR/"
MAIN_ACTIVITY=$(find android/app/src/main/java -name MainActivity.java | head -1)
if [ -f "$MAIN_ACTIVITY" ] && ! grep -q 'EdgeTtsPlugin' "$MAIN_ACTIVITY"; then
  python3 - "$MAIN_ACTIVITY" <<'PYEOF'
import sys, re
p = sys.argv[1]
s = open(p).read()
s = s.replace('import com.getcapacitor.BridgeActivity;',
              'import com.getcapacitor.BridgeActivity;\nimport com.syrian020.tts.EdgeTtsPlugin;')
s = re.sub(r'(public class MainActivity extends BridgeActivity \{)',
           r'\1\n    @Override\n    public void onCreate(android.os.Bundle savedInstanceState) {\n        registerPlugin(EdgeTtsPlugin.class);\n        super.onCreate(savedInstanceState);\n    }', s)
open(p, 'w').write(s)
PYEOF
fi
if ! grep -q 'squareup.okhttp3' android/app/build.gradle; then
  python3 - <<'PYEOF'
p = 'android/app/build.gradle'
s = open(p).read()
lines = s.split('\n')
for i in range(len(lines) - 1, -1, -1):
    if 'implementation' in lines[i]:
        lines.insert(i + 1, '    implementation "com.squareup.okhttp3:okhttp:4.12.0"')
        break
open(p, 'w').write('\n'.join(lines))
PYEOF
fi

# Sync the PWA icon into the Android mipmap launcher icons
ICON_SRC="$ROOT/zeek/icon-512.png"
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

echo "zeek APK ready at: android/app/build/outputs/apk/debug/app-debug.apk"
