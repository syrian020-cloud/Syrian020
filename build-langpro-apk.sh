#!/usr/bin/env bash
set -e

export ANDROID_HOME=${ANDROID_HOME:-/home/ubuntu/android-sdk}
export PATH="$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator"

ROOT=$(pwd)

# Build the Capacitor web assets for langPro
rm -rf www
mkdir -p www/js

cp langpro.html www/index.html
cp manifest-langpro.json www/manifest.json
cp icon-prolang-192.png icon-prolang-512.png www/
cp sw-langpro.js www/
cp -r data www/data
cp js/edge-tts.js www/js/
cp -r fonts www/fonts
cp node_modules/@capgo/inappbrowser/dist/plugin.js www/js/inappbrowser.js

# Optional: use Aliyun mirrors to avoid Maven Central rate-limiting in some regions
GRADLE_INIT=""
if [ "$USE_ALIYUN" = "1" ] && [ -f "$ROOT/init.gradle" ]; then
  echo "Using Aliyun Maven mirrors via init.gradle..."
  GRADLE_INIT="--init-script ../init.gradle"
fi

# Swap Capacitor config for the langPro package and restore after build
cp "$ROOT/capacitor.config.json" "$ROOT/capacitor.config.json.bak"
cp "$ROOT/capacitor-langpro.config.json" "$ROOT/capacitor.config.json"
restore_config() {
  cd "$ROOT"
  cp capacitor.config.json.bak capacitor.config.json
  rm -f capacitor.config.json.bak
}
trap 'restore_config' EXIT

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

# Gallery saving (@capacitor-community/media) needs storage/media permissions the stock manifest lacks
MANIFEST="$ROOT/android/app/src/main/AndroidManifest.xml"
if [ -f "$MANIFEST" ] && ! grep -q 'WRITE_EXTERNAL_STORAGE' "$MANIFEST"; then
  sed -i 's|</manifest>|  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" android:maxSdkVersion="28" />\n  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" android:maxSdkVersion="32" />\n  <uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />\n  <uses-permission android:name="android.permission.READ_MEDIA_VIDEO" />\n</manifest>|' "$MANIFEST"
  sed -i 's|<application |<application android:requestLegacyExternalStorage="true" |' "$MANIFEST"
fi

# Ensure the Android launcher label matches the Capacitor appName
STRINGS="$ROOT/android/app/src/main/res/values/strings.xml"
if [ -f "$STRINGS" ]; then
  sed -i 's|<string name="app_name">.*</string>|<string name="app_name">langPro</string>|' "$STRINGS"
  sed -i 's|<string name="title_activity_main">.*</string>|<string name="title_activity_main">langPro</string>|' "$STRINGS"
fi

# Sync the PWA icon into the Android mipmap launcher icons
ICON_SRC="$ROOT/icon-prolang-512.png"
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

echo "langPro APK ready at: android/app/build/outputs/apk/debug/app-debug.apk"
