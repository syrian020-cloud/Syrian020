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
- Export / import encrypted JSON backups
- Google Drive backup/restore (web OAuth flow)
- Android back-button handling and exit confirmation

## Build the APK

```bash
cd password-vault
./build-apk.sh
```

The debug APK is written to `password-vault/passvault-debug.apk`.

## Google Drive backup setup

The app includes a web-based Google OAuth flow for Drive backup. To make it work in the built APK you must configure a Google Cloud project and provide a **Web client ID** (OAuth 2.0 client ID):

1. Go to https://console.cloud.google.com/
2. Create a project and enable the Google Drive API.
3. Create an OAuth 2.0 Web application credential.
4. Add `https://localhost` as an authorized redirect origin (for Capacitor WebView / in-app browser).
5. In the app, tap **Backup to Google** and enter the client ID when prompted.

For a native Google Sign-In experience, install `@codetrix-studio/capacitor-google-auth` (or `@capawesome/capacitor-google-sign-in`) and set the client ID in `capacitor.config.json` / `android/app/src/main/res/values/strings.xml`.

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
