#!/usr/bin/env bash
set -e

export ANDROID_HOME=${ANDROID_HOME:-/home/ubuntu/android-sdk}
export PATH="$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator"

ROOT=$(pwd)

rm -rf www
mkdir -p www/data www/js

cp data/centres.js www/data/
cp manifest.json icon-192-vipmik.png icon-512-vipmik.png sw.js www/ 2>/dev/null || cp manifest.json sw.js www/
cp icon-192-vipmik.png www/icon-192.png 2>/dev/null || true
cp icon-512-vipmik.png www/icon-512.png 2>/dev/null || true
cp centres.html www/index.html
cp french.html www/french.html 2>/dev/null || true
cp vocab.html www/vocab.html 2>/dev/null || true
mkdir -p www/js && cp js/*.js www/js/ 2>/dev/null || true
mkdir -p www/data && cp data/vocab.js data/vocab-batch-02.js data/vocab-batch-03.js www/data/ 2>/dev/null || true

cp "$ROOT/capacitor.config.json" "$ROOT/capacitor.config.json.bak"
cp "$ROOT/capacitor-vipmik.config.json" "$ROOT/capacitor.config.json"
restore_config() {
  cd "$ROOT"
  cp capacitor.config.json.bak capacitor.config.json
  rm -f capacitor.config.json.bak
}
trap 'restore_config' EXIT

# swap package in android project
python3 - <<'PYEOF'
import re,os,shutil,glob
NEW='com.vipmik.app'
bg='android/app/build.gradle'
s=open(bg).read()
m=re.search(r'applicationId "([^"]+)"',s)
if m and m.group(1)!=NEW:
    old=m.group(1)
    s=s.replace(old,NEW)
    open(bg,'w').write(s)
    # move java dir
    parts=old.split('.')
    srcdir='android/app/src/main/java/'+'/'.join(parts)
    dstdir='android/app/src/main/java/'+'/'.join(NEW.split('.'))
    if os.path.isdir(srcdir):
        os.makedirs(os.path.dirname(dstdir),exist_ok=True)
        shutil.copytree(srcdir,dstdir,dirs_exist_ok=True)
        shutil.rmtree(srcdir)
    for f in glob.glob(dstdir+'/*.java'):
        c=open(f).read()
        c=re.sub(r'package [\w.]+;','package '+NEW+';',c,1)
        open(f,'w').write(c)
PYEOF

if [ ! -d android ]; then
  npx cap add android
fi

npx cap sync android

STRINGS="$ROOT/android/app/src/main/res/values/strings.xml"
if [ -f "$STRINGS" ]; then
  sed -i 's|<string name="app_name">.*</string>|<string name="app_name">Vipmik</string>|' "$STRINGS"
  sed -i 's|<string name="title_activity_main">.*</string>|<string name="title_activity_main">Vipmik</string>|' "$STRINGS"
fi

MIPMAP="$ROOT/android/app/src/main/res"
ICON_SRC="$ROOT/icon-512-vipmik.png"
if [ -f "$ICON_SRC" ] && command -v convert >/dev/null 2>&1; then
  convert "$ICON_SRC" -resize 48x48   "$MIPMAP/mipmap-mdpi/ic_launcher.png" 2>/dev/null || true
  convert "$ICON_SRC" -resize 72x72   "$MIPMAP/mipmap-hdpi/ic_launcher.png" 2>/dev/null || true
  convert "$ICON_SRC" -resize 96x96   "$MIPMAP/mipmap-xhdpi/ic_launcher.png" 2>/dev/null || true
  convert "$ICON_SRC" -resize 144x144 "$MIPMAP/mipmap-xxhdpi/ic_launcher.png" 2>/dev/null || true
  convert "$ICON_SRC" -resize 192x192 "$MIPMAP/mipmap-xxxhdpi/ic_launcher.png" 2>/dev/null || true
  for d in mdpi hdpi xhdpi xxhdpi xxxhdpi; do
    case $d in mdpi) sz=48;; hdpi) sz=72;; xhdpi) sz=96;; xxhdpi) sz=144;; xxxhdpi) sz=192;; esac
    convert "$ICON_SRC" -resize ${sz}x${sz} "$MIPMAP/mipmap-$d/ic_launcher_round.png" 2>/dev/null || true
    convert "$ICON_SRC" -resize ${sz}x${sz} "$MIPMAP/mipmap-$d/ic_launcher_foreground.png" 2>/dev/null || true
  done
fi

cd android
./gradlew --init-script "$ROOT/init.gradle" assembleDebug

echo "Vipmik APK ready at: android/app/build/outputs/apk/debug/app-debug.apk"
