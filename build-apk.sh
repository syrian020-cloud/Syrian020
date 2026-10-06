#!/usr/bin/env bash
set -e

export ANDROID_HOME=${ANDROID_HOME:-/home/ubuntu/android-sdk}
export PATH="$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator"

# Build the Capacitor web assets — the admin-centres phrasebook is the app entry point
rm -rf www
mkdir -p www/data www/js
cp centres.html www/index.html
cp data/* www/data/
cp js/* www/js/
cp manifest.json icon-192.png icon-512.png sw.js www/
cp index.html www/videos.html
cp french.html vocab.html centres.html www/
# inside the bundle the video editor lives at videos.html; fix links that target index.html
sed -i 's|href="index.html"|href="videos.html"|g' www/*.html

# Optional: use Aliyun mirrors to avoid Maven Central rate-limiting in some regions
if [ "$USE_ALIYUN" = "1" ]; then
  echo "Using Aliyun Maven mirrors..."
  sed -i "s|repositories {\s*\n\s*google()|repositories {\n        maven { url 'https://maven.aliyun.com/repository/google' }\n        maven { url 'https://maven.aliyun.com/repository/public' }\n        maven { url 'https://maven.aliyun.com/repository/gradle-plugin' }\n        google|g" android/build.gradle 2>/dev/null || true
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

# Inject the full Android permission set (android-permissions.xml) into the generated manifest
MANIFEST="android/app/src/main/AndroidManifest.xml"
if [ -f "$MANIFEST" ] && ! grep -q 'ACCESS_FINE_LOCATION' "$MANIFEST"; then
  python3 - "$MANIFEST" <<'PYEOF'
import sys
p = sys.argv[1]
s = open(p).read()
perms = open('android-permissions.xml').read().rstrip() + '\n'
marker = '    <uses-permission android:name="android.permission.INTERNET" />\n'
s = s.replace(marker, perms, 1) if marker in s else s.replace('</manifest>', perms + '</manifest>', 1)
open(p, 'w').write(s)
PYEOF
fi

cd android
./gradlew assembleDebug

echo "APK ready at: android/app/build/outputs/apk/debug/app-debug.apk"
