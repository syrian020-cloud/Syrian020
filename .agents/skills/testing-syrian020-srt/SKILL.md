---
name: testing-syrian020-srt
description: How to run the local web server and end-to-end test the Syrian020 standalone SRT player (srt.html) in Chrome and build its Capacitor APK.
---

## Devin Secrets Needed

None.

## Local server

Serve `/home/ubuntu/repos/Syrian020` with:

```bash
python3 -m http.server 8080
```

Relevant URL:

- `http://localhost:8080/srt.html` — RTL Arabic PWA SRT player.

## Browser launch

Use the Chrome for Testing binary, not the `~/.local/bin/google-chrome` wrapper:

```bash
/opt/.devin/chrome/chrome/linux-137.0.7118.2/chrome-linux64/chrome \
  --no-sandbox --disable-gpu --remote-debugging-port=29229 \
  --remote-allow-origins='*' \
  --user-data-dir=/tmp/chromev137-srt \
  --no-first-run --no-default-browser-check \
  --incognito http://localhost:8080/srt.html
```

Use a fresh `--user-data-dir` or incognito to avoid stale service-worker caches.

## Files for testing

- Use a silent dummy MP4 (20 s or longer) so all cues are within the video duration.
  Generate one with `ffmpeg`:
  ```bash
  ffmpeg -y -f lavfi -i testsrc=duration=20:size=320x240:rate=1 \
    -f lavfi -i anullsrc=r=22050:cl=mono \
    -c:v libx264 -pix_fmt yuv420p -c:a aac -shortest /tmp/srt_dummy_20s.mp4
  ```
- Trilingual user-format sample: `/tmp/sample_srt.txt` (time + FR + AR + EN).
- Single-language French SRT: `/tmp/french_only.srt` with a cue that has two non-Arabic lines.

## Driving the UI

- `<input type="file">` elements are easiest to set via a CDP helper such as `/tmp/cdp_eval_srt.py` using `Runtime.evaluate` with `DataTransfer` and `File` blobs, or `DOM.setFileInputFiles` if the DOM domain is enabled.
- To compute xdotool screen coordinates for clicks, use `getBoundingClientRect()` plus `window.outerHeight - window.innerHeight` (the Chrome chrome offset, often ~192 px on the test VM) and `window.screenX` / `window.screenY`.
- Keyboard arrows/space may not reach the page unless the page body is focused first. In headless/automated setups, dispatch `KeyboardEvent` via CDP or use `Input.dispatchKeyEvent`.

## TTS testing on the voice-less VM

The test VM has no FR/AR voices. Monkeypatch `speechSynthesis.speak` and trigger `onend` immediately:

```js
window.__speakCount = 0;
window.speechSynthesis.speak = function(u) {
  window.__speakCount++;
  setTimeout(() => u.onend && u.onend(), 10);
};
```

Active loop buttons use the `.active` class (green background). Check `__speakCount` to confirm TTS is firing, and that it increments at a steady single-loop rate after the TTS token fix.

To test error recovery, trigger `u.onerror()` instead of `u.onend()` in the monkeypatch. The `srt.html` player now calls `u.onerror = () => { if (onend) onend(); };` so a Web Speech utterance error should not stall the loop.

## What to verify

1. Trilingual user-format file in the French picker renders a bubble with three lines: FR (orange), AR (teal), EN (blue) with badges.
2. Pasting the same trilingual text into the `أو ألصق النص` textarea (no subtitle file) also parses into FR/AR/EN and triggers `العبارة X من Y`.
3. `⏭` / `⏮` buttons and `ArrowRight` / `ArrowLeft` change cues and status text (`العبارة X من Y`).
4. `🔁` loop-all turns green and stays green while navigating cues.
5. Per-language TTS buttons turn green, stay active across cue navigation, and `Esc` / `🔇` stops them.
6. A single-language French SRT with a multi-line cue shows as one FR line, not split into FR+EN.
7. `⏯` toggles play/pause and the button icon changes.
8. (Video-only start) Selecting only a video file with no subtitle and clicking `▶ ابدأ` loads the video and hides the cue controls.
9. (APK build idempotency) Running `./build-srt-apk.sh` a second time should NOT recreate the `android/` project (no `npx cap add android` or "recreating android project" output) when the current `applicationId` already matches the desired Capacitor `appId`.

## APK build

```bash
cd /home/ubuntu/repos/Syrian020
USE_ALIYUN=1 ./build-srt-apk.sh
```

Then verify:

```bash
unzip -l android/app/build/outputs/apk/debug/app-debug.apk | grep 'assets/public/index.html'
/home/ubuntu/android-sdk/build-tools/34.0.0/aapt2 dump permissions android/app/build/outputs/apk/debug/app-debug.apk
```

Expected package: `com.syrian020.srtplayer`, `INTERNET` permission, and `assets/public/index.html` matching `srt.html`.
