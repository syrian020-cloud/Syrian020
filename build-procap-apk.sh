#!/usr/bin/env bash
set -e

export ANDROID_HOME=${ANDROID_HOME:-/home/ubuntu/android-sdk}
export PATH="$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator"

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
BUILD_DIR="$ROOT_DIR/procap-cap"
WEB_DIR="$BUILD_DIR/www"

echo "==> Preparing Procap Capacitor build directory..."
rm -rf "$BUILD_DIR"
mkdir -p "$WEB_DIR"

# Procap app configuration
cp "$ROOT_DIR/package.json" "$BUILD_DIR/package.json"

cat > "$BUILD_DIR/capacitor.config.json" <<'EOF'
{
  "appId": "com.syrian020.procap",
  "appName": "Procap",
  "webDir": "www",
  "server": {
    "androidScheme": "https"
  },
  "android": {
    "allowMixedContent": true,
    "captureInput": false
  }
}
EOF

# Reuse the root node_modules so Capacitor plugins are available
ln -s "$ROOT_DIR/node_modules" "$BUILD_DIR/node_modules"

# Copy web assets for the standalone PWA
cp "$ROOT_DIR/procap.html" "$WEB_DIR/index.html"
cp "$ROOT_DIR/manifest-procap.json" "$WEB_DIR/"
cp "$ROOT_DIR/icon-192.png" "$WEB_DIR/"
cp "$ROOT_DIR/icon-512.png" "$WEB_DIR/"

# Minimal service worker for the APK so registration succeeds without failing on missing files
cat > "$WEB_DIR/sw.js" <<'EOF'
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => e.respondWith(fetch(e.request).catch(() => new Response('offline'))));
EOF

if [ ! -x "$ROOT_DIR/node_modules/.bin/cap" ]; then
  echo "ERROR: Capacitor CLI not found. Run 'npm install' first." >&2
  exit 1
fi

cd "$BUILD_DIR"

echo "==> Adding Android platform..."
"$ROOT_DIR/node_modules/.bin/cap" add android

echo "==> Setting Procap app icon..."
MIPMAP_DIR="$BUILD_DIR/android/app/src/main/res"
ICON_SRC="$ROOT_DIR/icon-512.png"
for item in mdpi:48 hdpi:72 xhdpi:96 xxhdpi:144 xxxhdpi:192; do
  IFS=: read -r dpi size <<< "$item"
  convert "$ICON_SRC" -resize "${size}x${size}" "$MIPMAP_DIR/mipmap-$dpi/ic_launcher.png"
  cp "$MIPMAP_DIR/mipmap-$dpi/ic_launcher.png" "$MIPMAP_DIR/mipmap-$dpi/ic_launcher_round.png"
done

echo "==> Syncing native plugins and web assets..."
"$ROOT_DIR/node_modules/.bin/cap" sync android

echo "==> Building debug APK..."
cd android
./gradlew assembleDebug

echo "==> APK ready at: $BUILD_DIR/android/app/build/outputs/apk/debug/app-debug.apk"
