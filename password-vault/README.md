# PassVault

A trilingual (English / Arabic / French) password manager built as a Capacitor PWA/APK.

## Features

- Encrypted local vault (AES-GCM + PBKDF2) protected by a master password
- Fields: title, username, password, email, phone, notes and category
- Password generator
- Search and category filters
- Copy username / password to clipboard
- Dark mode
- Three UI languages: English, Arabic, French (RTL support)
- Export encrypted JSON backups via the native share sheet (`@capacitor/filesystem` + `@capacitor/share`) and import them back
- Android back-button handling and exit confirmation

## Build the APK

```bash
cd password-vault
./build-apk.sh            # add USE_ALIYUN=1 to use the Aliyun Maven mirrors (../init.gradle)
```

The debug APK is written to `password-vault/passvault-debug.apk`.

## Project structure

```
password-vault/
  www/
    index.html      # Single-file web app
    manifest.json   # PWA manifest
    icon-192.png
    icon-512.png
  icons/            # Android launcher icon densities
  capacitor.config.json
  build-apk.sh
```
