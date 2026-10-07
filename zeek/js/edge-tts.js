/* EdgeTTS — better TTS over the internet, with graceful fallback.
 *
 * Two internet sources, picked automatically:
 *  1. Native Capacitor plugin "EdgeTTS" (APK only): real Microsoft neural
 *     voices (e.g. fr-FR-DeniseNeural), synthesized to a cache file.
 *  2. ResponsiveVoice getvoice.php (web/PWA): playable MP3 URL, no key.
 *
 * API:
 *   EdgeTTS.enabled()        -> bool (persisted in localStorage 'edge_tts')
 *   EdgeTTS.setEnabled(v)
 *   EdgeTTS.supported()      -> enabled && !down && (plugin || Audio) && online
 *   EdgeTTS.audio(text,lang) -> Promise<{url}> (cached, deduped)
 *   EdgeTTS.play(text,lang)  -> Promise resolving when playback ends
 *   EdgeTTS.playUrl(url)     -> same for a cached URL
 *   EdgeTTS.stop()           -> pause current audio
 *   EdgeTTS.down             -> true after a failure (session only)
 *   EdgeTTS.voices/rates     -> {fr,ar,en}
 */
(function () {
  'use strict';

  var api = {
    down: false,
    voices: { fr: 'fr-FR-DeniseNeural', ar: 'ar-SY-AmanyNeural', en: 'en-US-JennyNeural' },
    rates: { fr: '-8%', ar: '0%', en: '0%' }
  };
  var RV_TL = { fr: 'fr', ar: 'ar', en: 'en-US' };
  var RV_RATE = '0.47';
  var CACHE_MAX = 60;

  var cache = {};
  var cacheOrder = [];
  var pending = {};
  var curAudio = null;

  function enabled() {
    try { return localStorage.getItem('edge_tts') !== '0'; } catch (e) { return true; }
  }
  function setEnabled(v) {
    try { localStorage.setItem('edge_tts', v ? '1' : '0'); } catch (e) {}
    if (v) api.down = false;
  }
  function plugin() {
    return (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.EdgeTTS) || null;
  }
  function supported() {
    if (!enabled() || api.down) return false;
    if (navigator.onLine === false) return false;
    return !!plugin() || typeof Audio !== 'undefined';
  }

  function rvUrl(text, lang) {
    return 'https://responsivevoice.org/responsivevoice/getvoice.php?text=' + encodeURIComponent(text) +
      '&tl=' + (RV_TL[lang] || 'fr') + '&sv=g1&vn=&pitch=0.5&rate=' + RV_RATE + '&vol=1&gender=female';
  }

  function fileUrl(path) {
    if (window.Capacitor && window.Capacitor.convertFileSrc) {
      return window.Capacitor.convertFileSrc('file://' + path);
    }
    return 'file://' + path;
  }

  function fetchAudio(text, lang) {
    var p = plugin();
    if (p) {
      return p.speak({ text: text, voice: api.voices[lang] || api.voices.fr, rate: api.rates[lang] || '+0%' })
        .then(function (r) { return { url: fileUrl(r.path) }; });
    }
    return Promise.resolve({ url: rvUrl(text, lang) });
  }

  function touch(key) {
    var i = cacheOrder.indexOf(key);
    if (i >= 0) { cacheOrder.splice(i, 1); cacheOrder.push(key); }
  }

  function audio(text, lang) {
    lang = lang || 'fr';
    var key = lang + '|' + (api.voices[lang] || '') + '|' + (api.rates[lang] || '') + '|' + text;
    var hit = cache[key];
    if (hit) { touch(key); return Promise.resolve(hit); }
    if (pending[key]) return pending[key];
    var p = fetchAudio(text, lang).then(function (entry) {
      cache[key] = entry;
      cacheOrder.push(key);
      while (cacheOrder.length > CACHE_MAX) {
        var k = cacheOrder.shift();
        delete cache[k];
      }
      delete pending[key];
      return entry;
    }, function (err) {
      delete pending[key];
      api.down = true;
      throw err;
    });
    pending[key] = p;
    return p;
  }

  function playUrl(url) {
    return new Promise(function (resolve, reject) {
      var el;
      try { el = new Audio(url); } catch (e) { reject(e); return; }
      curAudio = el;
      var settled = false;
      function fin(err) {
        if (settled) return;
        settled = true;
        if (curAudio === el) curAudio = null;
        if (err) reject(err); else resolve();
      }
      el.onended = function () { fin(); };
      el.onerror = function () { fin(new Error('audio playback error')); };
      var pr;
      try { pr = el.play(); } catch (e) { fin(e); return; }
      if (pr && pr.catch) pr.catch(function (e) { fin(e); });
    });
  }

  function play(text, lang) {
    return audio(text, lang).then(function (a) {
      return playUrl(a.url).catch(function (e) { api.down = true; throw e; });
    });
  }

  function stop() {
    if (curAudio) {
      try { curAudio.pause(); } catch (e) {}
      curAudio = null;
    }
  }

  api.enabled = enabled;
  api.setEnabled = setEnabled;
  api.supported = supported;
  api.audio = audio;
  api.play = play;
  api.playUrl = playUrl;
  api.stop = stop;
  window.EdgeTTS = api;
})();
