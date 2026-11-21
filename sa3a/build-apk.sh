#!/usr/bin/env bash
# Build the Sa3a (ساعتي) clock APK: ./build-apk.sh
set -e

export ANDROID_HOME=${ANDROID_HOME:-/home/ubuntu/android-sdk}
export PATH="/home/ubuntu/nodejs/bin:$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools"

ROOT=$(cd "$(dirname "$0")" && pwd)
cd "$ROOT"

# Stage web assets into Capacitor's webDir
rm -rf www && mkdir -p www/sounds
cp index.html tempo.html manifest.json sw.js icon-192.png icon-512.png icon-tempo-192.png sw-tempo.js flag.png www/
cp sounds/*.mp3 www/sounds/
mkdir -p www/js && cp js/*.js www/js/ 2>/dev/null || true

# Aliyun Maven mirrors where needed
GRADLE_INIT=""
if [ "$USE_ALIYUN" = "1" ] && [ -f "$ROOT/init.gradle" ]; then
  echo "Using Aliyun Maven mirrors via init.gradle..."
  GRADLE_INIT="--init-script ../init.gradle"
fi

[ -d android ] || npx cap add android
npx cap sync android

# Point the android project at this app's id/name
APP_ID=$(node -p "require('./capacitor.config.json').appId")
APP_NAME=$(node -p "require('./capacitor.config.json').appName")
sed -i "s|applicationId \".*\"|applicationId \"$APP_ID\"|" android/app/build.gradle
STRINGS=android/app/src/main/res/values/strings.xml
sed -i "s|<string name=\"app_name\">.*</string>|<string name=\"app_name\">$APP_NAME</string>|" "$STRINGS"
sed -i "s|<string name=\"title_activity_main\">.*</string>|<string name=\"title_activity_main\">$APP_NAME</string>|" "$STRINGS"

# Inject the AlarmSound native plugin (MediaStore import + channel custom sound)
PLUGIN_DIR="android/app/src/main/java/com/syrian020/sa3a"
mkdir -p "$PLUGIN_DIR"
cp native-plugins/AlarmSoundPlugin.java "$PLUGIN_DIR/"
cp native-plugins/AlarmReceiver.java "$PLUGIN_DIR/"
cp native-plugins/AlarmRingService.java "$PLUGIN_DIR/"
cp native-plugins/TtsPlugin.java "$PLUGIN_DIR/"
cp native-plugins/Sa3aWallpaperService.java "$PLUGIN_DIR/"
mkdir -p "android/app/src/main/java/com/syrian020/tts"
cp native-plugins/EdgeTtsPlugin.java "android/app/src/main/java/com/syrian020/tts/"
if ! grep -q 'com.squareup.okhttp3:okhttp' android/app/build.gradle; then
  sed -i "s|implementation project(':capacitor-android')|&\n    implementation \"com.squareup.okhttp3:okhttp:4.12.0\"|" android/app/build.gradle
fi
mkdir -p android/app/src/main/res/xml
cp native-plugins/sa3a_wallpaper.xml android/app/src/main/res/xml/
mkdir -p android/app/src/main/res/drawable-nodpi
cp flag.png android/app/src/main/res/drawable-nodpi/flag.png
MAIN_ACTIVITY=$(find android/app/src/main/java -name MainActivity.java | head -1)
MANIFEST="android/app/src/main/AndroidManifest.xml"
if [ -f "$MANIFEST" ] && ! grep -q 'Sa3aWallpaperService' "$MANIFEST"; then
  python3 - "$MANIFEST" <<'PY'
import sys
p=sys.argv[1];s=open(p).read()
svc='''    <service android:name=".Sa3aWallpaperService" android:permission="android.permission.BIND_WALLPAPER" android:exported="true">
        <intent-filter><action android:name="android.service.wallpaper.WallpaperService" /></intent-filter>
        <meta-data android:name="android.service.wallpaper" android:resource="@xml/sa3a_wallpaper" />
    </service>
'''
s=s.replace('</application>',svc+'    </application>')
open(p,'w').write(s)
PY
fi
if [ -f "$MANIFEST" ] && ! grep -q 'AlarmReceiver' "$MANIFEST"; then
  python3 - "$MANIFEST" <<'PY'
import sys
p=sys.argv[1];s=open(p).read()
rcv='''    <receiver android:name=".AlarmReceiver" android:exported="true">
        <intent-filter>
            <action android:name="com.syrian020.sa3a.NATIVE_ALARM" />
            <action android:name="android.intent.action.BOOT_COMPLETED" />
        </intent-filter>
    </receiver>
'''
s=s.replace('</application>',rcv+'    </application>')
open(p,'w').write(s)
PY
fi
if [ -f "$MANIFEST" ] && ! grep -q 'AlarmRingService' "$MANIFEST"; then
  python3 - "$MANIFEST" <<'PY'
import sys
p=sys.argv[1];s=open(p).read()
svc='''    <service android:name=".AlarmRingService" android:exported="false" android:foregroundServiceType="mediaPlayback" />
'''
s=s.replace('</application>',svc+'    </application>')
open(p,'w').write(s)
PY
fi
if [ -f "$MAIN_ACTIVITY" ] && ! grep -q 'TtsPlugin' "$MAIN_ACTIVITY"; then
  python3 - "$MAIN_ACTIVITY" <<'PY'
import sys,re
p=sys.argv[1];s=open(p).read()
if 'AlarmSoundPlugin' not in s:
    s=s.replace('import com.getcapacitor.BridgeActivity;',
                'import com.getcapacitor.BridgeActivity;\nimport com.syrian020.sa3a.AlarmSoundPlugin;\nimport com.syrian020.sa3a.TtsPlugin;\nimport com.syrian020.tts.EdgeTtsPlugin;')
    s=re.sub(r'(public class MainActivity extends BridgeActivity\s*\{)',
             r'\1\n    @Override\n    public void onCreate(android.os.Bundle savedInstanceState) {\n        registerPlugin(AlarmSoundPlugin.class);\n        registerPlugin(TtsPlugin.class);\n        super.onCreate(savedInstanceState);\n    }', s)
else:
    s=s.replace('import com.syrian020.sa3a.AlarmSoundPlugin;',
                'import com.syrian020.sa3a.AlarmSoundPlugin;\nimport com.syrian020.sa3a.TtsPlugin;')
    s=s.replace('registerPlugin(AlarmSoundPlugin.class);',
                'registerPlugin(AlarmSoundPlugin.class);\n        registerPlugin(TtsPlugin.class);\n        registerPlugin(EdgeTtsPlugin.class);')
open(p,'w').write(s)
PY
fi
if [ -f "$MAIN_ACTIVITY" ] && ! grep -q 'EdgeTtsPlugin' "$MAIN_ACTIVITY"; then
  python3 - "$MAIN_ACTIVITY" <<'PY'
import sys,re
p=sys.argv[1];s=open(p).read()
if 'import com.syrian020.tts.EdgeTtsPlugin;' not in s:
    s=s.replace('import com.getcapacitor.BridgeActivity;','import com.getcapacitor.BridgeActivity;\nimport com.syrian020.tts.EdgeTtsPlugin;')
if 'registerPlugin' in s:
    s=re.sub(r'registerPlugin\([A-Za-z]+\.class\);',lambda m:m.group(0)+'\n        registerPlugin(EdgeTtsPlugin.class);',s,count=1)
else:
    s=re.sub(r'(public class MainActivity extends BridgeActivity\s*\{)',r'\1\n    @Override\n    public void onCreate(android.os.Bundle savedInstanceState) {\n        registerPlugin(EdgeTtsPlugin.class);\n        super.onCreate(savedInstanceState);\n    }',s)
open(p,'w').write(s)
PY
fi

# Exact-alarm + vibrate + media read permissions
MANIFEST="android/app/src/main/AndroidManifest.xml"
if [ -f "$MANIFEST" ]; then
  grep -q 'SCHEDULE_EXACT_ALARM' "$MANIFEST" || \
    sed -i 's|<uses-permission|<uses-permission android:name="android.permission.SCHEDULE_EXACT_ALARM" />\n    <uses-permission|' "$MANIFEST"
  grep -q 'USE_EXACT_ALARM' "$MANIFEST" || \
    sed -i 's|<uses-permission|<uses-permission android:name="android.permission.USE_EXACT_ALARM" />\n    <uses-permission|' "$MANIFEST"
  grep -q 'USE_FULL_SCREEN_INTENT' "$MANIFEST" || \
    sed -i 's|<uses-permission|<uses-permission android:name="android.permission.USE_FULL_SCREEN_INTENT" />\n    <uses-permission|' "$MANIFEST"
  grep -q 'android.permission.VIBRATE' "$MANIFEST" || \
    sed -i 's|<uses-permission|<uses-permission android:name="android.permission.VIBRATE" />\n    <uses-permission|' "$MANIFEST"
  grep -q 'FOREGROUND_SERVICE_MEDIA_PLAYBACK' "$MANIFEST" || \
    sed -i 's|<uses-permission|<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />\n    <uses-permission android:name="android.permission.FOREGROUND_SERVICE_MEDIA_PLAYBACK" />\n    <uses-permission|' "$MANIFEST"
  grep -q 'android.permission.WAKE_LOCK' "$MANIFEST" || \
    sed -i 's|<uses-permission|<uses-permission android:name="android.permission.WAKE_LOCK" />\n    <uses-permission|' "$MANIFEST"
  grep -q 'android.permission.POST_NOTIFICATIONS' "$MANIFEST" || \
    sed -i 's|<uses-permission|<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />\n    <uses-permission|' "$MANIFEST"
  grep -q 'ACCESS_FINE_LOCATION' "$MANIFEST" || \
    sed -i 's|<uses-permission|<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />\n    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />\n    <uses-permission|' "$MANIFEST"
fi

# Bundled alarm tones for notification channels
RAW_DIR="android/app/src/main/res/raw"
mkdir -p "$RAW_DIR"
cp sounds/alarm_beep.mp3 "$RAW_DIR/sa3a_beep.mp3"
cp sounds/alarm_bell.mp3 "$RAW_DIR/sa3a_bell.mp3"
cp sounds/alarm_siren.mp3 "$RAW_DIR/sa3a_siren.mp3"
cp sounds/alarm_beep.mp3 "$RAW_DIR/tempo_alert.mp3"

# Launcher icons
ICON_SRC="$ROOT/icon-512.png"
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

cp app/build/outputs/apk/debug/app-debug.apk "$ROOT/sa3a-debug.apk"
echo "Sa3a APK ready at: $ROOT/sa3a-debug.apk"
