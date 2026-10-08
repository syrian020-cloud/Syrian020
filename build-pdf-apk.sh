#!/usr/bin/env bash
set -e

export ANDROID_HOME=${ANDROID_HOME:-/home/ubuntu/android-sdk}
export PATH="$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator"

ROOT=$(pwd)

# Build the Capacitor web assets for PDFly
rm -rf www
mkdir -p www/pdfjs

cp pdf.html www/index.html
cp pdfjs/pdf.min.mjs pdfjs/pdf.worker.min.mjs www/pdfjs/
[ -d ocr ] && cp -r ocr www/
cp manifest-pdf.json www/manifest.json
cp icon-192.png icon-512.png www/

# Optional: use Aliyun mirrors via init.gradle to avoid Maven Central rate-limiting
GRADLE_INIT=""
if [ "$USE_ALIYUN" = "1" ] && [ -f "$ROOT/init.gradle" ]; then
  echo "Using Aliyun Maven mirrors via init.gradle..."
  GRADLE_INIT="--init-script ../init.gradle"
fi

# Swap Capacitor config for the PDFly package and restore after build
cp "$ROOT/capacitor.config.json" "$ROOT/capacitor.config.json.bak"
cp "$ROOT/capacitor-pdf.config.json" "$ROOT/capacitor.config.json"
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

# Register PDFly as an open-with handler for PDFs (files, content URIs, links)
MANIFEST="$ROOT/android/app/src/main/AndroidManifest.xml"
if [ -f "$MANIFEST" ] && ! grep -q "application/pdf" "$MANIFEST"; then
  python3 - <<'EOF'
p = 'android/app/src/main/AndroidManifest.xml'
s = open(p).read()
filters = '''
            <intent-filter>
                <action android:name="android.intent.action.VIEW" />
                <category android:name="android.intent.category.DEFAULT" />
                <data android:scheme="content" />
                <data android:scheme="file" />
                <data android:mimeType="application/pdf" />
            </intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.VIEW" />
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
                <data android:scheme="http" />
                <data android:scheme="https" />
                <data android:mimeType="application/pdf" />
            </intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.VIEW" />
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
                <data android:scheme="http" />
                <data android:scheme="https" />
                <data android:host="*" />
                <data android:pathPattern=".*\\\\.pdf" />
            </intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.SEND" />
                <category android:name="android.intent.category.DEFAULT" />
                <data android:mimeType="application/pdf" />
            </intent-filter>
'''
i = s.index('</activity>')
s = s[:i] + filters + s[i:]
open(p, 'w').write(s)
EOF
fi

# Trim unused BouncyCastle post-quantum resources (~8MB) — PDFBox only needs classic crypto
APP_GRADLE="$ROOT/android/app/build.gradle"
if [ -f "$APP_GRADLE" ] && ! grep -q "bouncycastle/pqc" "$APP_GRADLE"; then
  python3 - <<'EOF'
p = 'android/app/build.gradle'
s = open(p).read()
s = s.replace('    buildTypes {', '''    packagingOptions {
        resources {
            excludes += ['org/bouncycastle/pqc/**']
        }
    }
    buildTypes {''', 1)
open(p, 'w').write(s)
EOF
fi

# Enable minified release build (strips unused code/resources, faster runtime)
if [ -f "$APP_GRADLE" ] && ! grep -q "minifyEnabled true" "$APP_GRADLE"; then
  python3 - <<'EOF'
p = 'android/app/build.gradle'
s = open(p).read()
s = s.replace('''        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }''', '''        release {
            minifyEnabled true
            shrinkResources true
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
            signingConfig signingConfigs.debug
        }''', 1)
open(p, 'w').write(s)
EOF
fi

# ProGuard keep rules: Capacitor plugins are invoked by name via reflection
cat > "$ROOT/android/app/proguard-rules.pro" <<'EOF'
-keep @com.getcapacitor.Plugin class * { *; }
-keep @com.getcapacitor.annotation.CapacitorPlugin class * { *; }
-keepclassmembers class * { @com.getcapacitor.PluginMethod *; }
-keep class com.getcapacitor.** { *; }
-keep class com.syrian020.** { *; }
-keep class org.apache.cordova.** { *; }
-keepattributes *Annotation*,Signature,InnerClasses,EnclosingMethod
-dontwarn org.bouncycastle.**
-dontwarn com.squareup.okhttp3.**
-dontwarn com.gemalto.jp2.**
EOF

# Ensure the Android launcher label matches the Capacitor appName
STRINGS="$ROOT/android/app/src/main/res/values/strings.xml"
if [ -f "$STRINGS" ]; then
  sed -i 's|<string name="app_name">.*</string>|<string name="app_name">PDFly</string>|' "$STRINGS"
  sed -i 's|<string name="title_activity_main">.*</string>|<string name="title_activity_main">PDFly</string>|' "$STRINGS"
fi

# Sync the PWA icon into the Android mipmap launcher icons
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
./gradlew $GRADLE_INIT assembleDebug assembleRelease

echo "PDFly APK ready at: android/app/build/outputs/apk/debug/app-debug.apk"
echo "PDFly release APK at: android/app/build/outputs/apk/release/app-release.apk"
