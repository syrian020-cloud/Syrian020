#!/usr/bin/env bash
set -e

export ANDROID_HOME=${ANDROID_HOME:-/home/ubuntu/android-sdk}
export PATH="$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator"

# Build the Capacitor web assets from the French phrasebook
rm -rf www
mkdir -p www/data www/js
cp french.html www/index.html
cp data/* www/data/
cp manifest.json icon-192.png icon-512.png sw.js www/
cp vocab.html index.html map.html www/
cp -r vendor www/

# Optional: use Aliyun mirrors to avoid Maven Central rate-limiting in some regions
if [ "$USE_ALIYUN" = "1" ]; then
  echo "Using Aliyun Maven mirrors..."
  sed -i "s|repositories {\s*\n\s*google()|repositories {\n        maven { url 'https://maven.aliyun.com/repository/google' }\n        maven { url 'https://maven.aliyun.com/repository/public' }\n        maven { url 'https://maven.aliyun.com/repository/gradle-plugin' }\n        google|g" android/build.gradle 2>/dev/null || true
fi

if [ ! -d android ]; then
  npx cap add android
fi

npx cap sync android

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
