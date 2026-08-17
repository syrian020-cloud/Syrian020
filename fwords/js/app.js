// fwords — empty French-Arabic-English dictionary with user-added words
(function () {
    "use strict";

    const STORAGE_KEY = "fwordsData_v1";
    const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    let data = null;
    let currentCategory = "all";
    let currentLetter = "all";
    let searchTerm = "";
    let speechRun = 0;
    let activeLoopBtn = null;
    let voices = [];
    const synth = (typeof window !== "undefined" && window.speechSynthesis) ? window.speechSynthesis : null;

    const wordList = document.getElementById("wordList");
    const searchInput = document.getElementById("searchInput");
    const clearBtn = document.getElementById("clearSearch");
    const statsEl = document.getElementById("stats");
    const scrollTopBtn = document.getElementById("scrollTop");
    const letterNav = document.getElementById("letterNav");
    const categoryNav = document.getElementById("categoryNav");
    const fabAdd = document.getElementById("fabAdd");
    const addModal = document.getElementById("addModal");
    const wordInput = document.getElementById("wordInput");
    const contextInput = document.getElementById("contextInput");
    const letterSelect = document.getElementById("letterSelect");
    const escapeDiv = document.createElement("div");

    function init() {
        loadData();
        buildLetterNav();
        buildCategoryNav();
        buildLetterSelect();
        bindEvents();
        initAppPlugin();
        loadWebVoices();
        render();
    }

    function createEmptyData() {
        return {
            categories: LETTERS.map(function (l) {
                return { id: l, name_fr: l, name_ar: l, name_en: l, words: [] };
            }),
            totalWords: 0
        };
    }

    function loadData() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                data = JSON.parse(raw);
                validateData();
            } else {
                data = createEmptyData();
                saveData();
            }
        } catch (e) {
            data = createEmptyData();
            saveData();
        }
    }

    function validateData() {
        if (!data || !Array.isArray(data.categories)) {
            data = createEmptyData();
        }
        data.totalWords = data.categories.reduce(function (sum, c) {
            return sum + (c.words ? c.words.length : 0);
        }, 0);
    }

    function saveData() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            // ignore storage errors
        }
    }

    function buildLetterNav() {
        letterNav.querySelectorAll(".letter-btn").forEach(function (btn) {
            btn.addEventListener("click", function () {
                currentLetter = btn.dataset.letter;
                currentCategory = "all";
                updateActiveNav();
                render();
            });
        });
    }

    function updateActiveNav() {
        document.querySelectorAll(".letter-btn").forEach(function (b) {
            b.classList.toggle("active", b.dataset.letter === currentLetter);
        });
        document.querySelectorAll(".cat-btn").forEach(function (b) {
            b.classList.toggle("active", b.dataset.cat === currentCategory);
        });
    }

    function buildCategoryNav() {
        const allBtn = categoryNav.querySelector('[data-cat="all"]');
        if (allBtn) {
            allBtn.addEventListener("click", function () {
                currentCategory = "all";
                updateActiveNav();
                render();
            });
        }
    }

    function buildLetterSelect() {
        letterSelect.innerHTML = "";
        LETTERS.forEach(function (l) {
            const opt = document.createElement("option");
            opt.value = l;
            opt.textContent = "حرف " + l;
            letterSelect.appendChild(opt);
        });
        letterSelect.value = "A";
    }

    function bindEvents() {
        let searchTimeout;
        searchInput.addEventListener("input", function () {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(function () {
                searchTerm = searchInput.value.trim().toLowerCase();
                clearBtn.style.display = searchTerm ? "block" : "none";
                render();
            }, 200);
        });

        clearBtn.addEventListener("click", function () {
            searchInput.value = "";
            searchTerm = "";
            clearBtn.style.display = "none";
            render();
            searchInput.focus();
        });

        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        var scrollTicking = false;
        window.addEventListener("scroll", function () {
            if (!scrollTicking) {
                requestAnimationFrame(function () {
                    scrollTopBtn.classList.toggle("show", window.scrollY > 400);
                    scrollTicking = false;
                });
                scrollTicking = true;
            }
        }, { passive: true });

        fabAdd.addEventListener("click", openAddModal);
        document.getElementById("closeAddModal").addEventListener("click", closeAddModal);
        document.getElementById("cancelAdd").addEventListener("click", closeAddModal);
        document.getElementById("saveWord").addEventListener("click", addWord);

        wordInput.addEventListener("input", autoSelectLetter);

        addModal.addEventListener("click", function (e) {
            if (e.target === addModal) closeAddModal();
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && addModal.classList.contains("active")) {
                closeAddModal();
            }
        });
    }

    function openAddModal() {
        addModal.classList.add("active");
        wordInput.value = "";
        contextInput.value = "";
        letterSelect.value = "A";
        wordInput.focus();
    }

    function closeAddModal() {
        addModal.classList.remove("active");
    }

    function parseTriField(value) {
        const parts = (value || "").split("|").map(function (s) { return s.trim(); });
        if (parts.length === 1) {
            return { fr: parts[0] || "", ar: "", en: "" };
        }
        if (parts.length === 2) {
            return { fr: parts[0] || "", ar: parts[1] || "", en: "" };
        }
        return { fr: parts[0] || "", ar: parts[1] || "", en: parts[2] || "" };
    }

    function autoSelectLetter() {
        const w = parseTriField(wordInput.value);
        const text = w.fr || w.en;
        if (!text) return;
        const l = getFirstLetter(text);
        if (LETTERS.indexOf(l) !== -1) {
            letterSelect.value = l;
        }
    }

    function addWord() {
        const main = parseTriField(wordInput.value);
        const ctx = parseTriField(contextInput.value);
        const letter = letterSelect.value;

        if (!main.fr && !main.ar && !main.en) {
            alert("أدخل كلمة أو عبارة على الأقل");
            return;
        }

        const cat = data.categories.find(function (c) { return c.id === letter; });
        if (!cat) return;

        cat.words.push({
            fr: main.fr,
            ar: main.ar,
            en: main.en,
            ex: ctx.fr,
            ex_ar: ctx.ar,
            ex_en: ctx.en
        });

        data.totalWords++;
        saveData();

        currentLetter = letter;
        currentCategory = "all";
        searchInput.value = "";
        searchTerm = "";
        clearBtn.style.display = "none";
        updateActiveNav();
        closeAddModal();
        render();

        // Scroll new section into view
        const section = wordList.querySelector(".category-section");
        if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function getFirstLetter(word) {
        const cleaned = (word || "").replace(/^(le |la |l'|les |un |une |des )/i, "");
        const ch = cleaned.charAt(0).toUpperCase();
        const map = {
            "À": "A", "Â": "A", "Ä": "A", "É": "E", "È": "E", "Ê": "E", "Ë": "E",
            "Î": "I", "Ï": "I", "Ô": "O", "Ö": "O", "Ù": "U", "Û": "U", "Ü": "U",
            "Ç": "C", "Œ": "O"
        };
        return map[ch] || ch;
    }

    function matchesLetter(w) {
        if (currentLetter === "all") return true;
        const source = (w.fr || w.en || "").replace(/^(le |la |l'|les |un |une |des )/i, "");
        return getFirstLetter(source) === currentLetter;
    }

    function matchesSearch(w) {
        if (!searchTerm) return true;
        return (
            (w.fr || "").toLowerCase().includes(searchTerm) ||
            (w.ar || "").includes(searchTerm) ||
            (w.en || "").toLowerCase().includes(searchTerm) ||
            (w.ex || "").toLowerCase().includes(searchTerm) ||
            (w.ex_ar || "").includes(searchTerm) ||
            (w.ex_en || "").toLowerCase().includes(searchTerm)
        );
    }

    function escapeHtml(str) {
        escapeDiv.textContent = str === undefined || str === null ? "" : String(str);
        return escapeDiv.innerHTML;
    }

    function escapeQuote(str) {
        return String(str || "").replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, "&quot;");
    }

    function highlightText(text, term) {
        if (!term) return escapeHtml(text);
        const escaped = escapeHtml(text);
        const escapedTerm = escapeHtml(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp("(" + escapedTerm + ")", "gi");
        return escaped.replace(regex, '<span class="highlight">$1</span>');
    }

    function render() {
        stopSpeech();
        if (!data) {
            wordList.innerHTML = '<div class="no-results">خطأ في تحميل البيانات</div>';
            return;
        }

        let html = "";
        let matchCount = 0;
        const cats = currentCategory === "all"
            ? data.categories
            : data.categories.filter(function (c) { return c.id === currentCategory; });

        if (currentLetter !== "all") {
            const allWords = [];
            cats.forEach(function (cat) {
                cat.words.forEach(function (w) {
                    if (matchesSearch(w) && matchesLetter(w)) allWords.push(w);
                });
            });
            allWords.sort(function (a, b) { return (a.fr || "").localeCompare(b.fr || "", "fr"); });
            matchCount = allWords.length;
            if (allWords.length > 0) {
                html += '<div class="category-section">';
                html += '<div class="category-header" onclick="this.classList.toggle(\'collapsed\');this.nextElementSibling.classList.toggle(\'collapsed\')">';
                html += '<span>حرف ' + currentLetter + ' - Lettre ' + currentLetter + '</span>';
                html += '<span><span class="cat-count">' + allWords.length + ' كلمة</span><span class="toggle-icon">▼</span></span></div>';
                html += '<div class="category-words">';
                allWords.forEach(function (w) { html += renderWordCard(w); });
                html += '</div></div>';
            }
        } else {
            cats.forEach(function (cat) {
                const filtered = cat.words.filter(matchesSearch);
                if (filtered.length === 0) return;
                matchCount += filtered.length;

                html += '<div class="category-section">';
                html += '<div class="category-header" onclick="this.classList.toggle(\'collapsed\');this.nextElementSibling.classList.toggle(\'collapsed\')">';
                html += '<span>' + escapeHtml(cat.name_ar || cat.id) + ' - ' + escapeHtml(cat.name_fr || cat.id) + '</span>';
                html += '<span><span class="cat-count">' + filtered.length + ' كلمة</span><span class="toggle-icon">▼</span></span></div>';
                html += '<div class="category-words">';
                filtered.forEach(function (w) { html += renderWordCard(w); });
                html += '</div></div>';
            });
        }

        if (matchCount === 0) {
            html = '<div class="no-results">لا توجد كلمات بعد 😕<br>اضغط على زر + لإضافة أول كلمة</div>';
        }

        wordList.innerHTML = html;

        if (searchTerm) {
            statsEl.textContent = matchCount + ' نتيجة من ' + data.totalWords + ' كلمة';
        } else {
            statsEl.textContent = data.totalWords + ' كلمة في ' + data.categories.length + ' حرف';
        }
    }

    function renderWordCard(w) {
        const fr = w.fr || "";
        const ar = w.ar || "";
        const en = w.en || "";
        const hasEx = w.ex || w.ex_ar || w.ex_en;

        let exHtml = "";
        if (hasEx) {
            let lines = "";
            if (w.ex) {
                lines += '<div class="ex-line"><span class="ex-label fr-label">FR</span><span class="ex-text ltr">' + highlightText(w.ex, searchTerm) + '</span></div>';
            }
            if (w.ex_ar) {
                lines += '<div class="ex-line"><span class="ex-label ar-label">AR</span><span class="ex-text">' + highlightText(w.ex_ar, searchTerm) + '</span></div>';
            }
            if (w.ex_en) {
                lines += '<div class="ex-line"><span class="ex-label en-label">EN</span><span class="ex-text ltr">' + highlightText(w.ex_en, searchTerm) + '</span></div>';
            }

            const frLoop = w.ex ? '<button class="btn-loop" onclick="window.toggleLoop(\'' + escapeQuote(w.ex) + '\', \'fr-FR\', this)" title="تكرار النطق الفرنسي">🔁 FR</button>' : "";
            const enLoop = w.ex_en ? '<button class="btn-loop btn-loop-en" onclick="window.toggleLoop(\'' + escapeQuote(w.ex_en) + '\', \'en-US\', this)" title="تكرار النطق الإنجليزي">🔁 EN</button>' : "";
            const bothLoop = (w.ex && w.ex_en) ? '<button class="btn-loop btn-loop-both" onclick="window.toggleLoopBoth(\'' + escapeQuote(w.ex) + '\', \'' + escapeQuote(w.ex_en) + '\', this)" title="تكرار فرنسي + إنجليزي">🔁 FR+EN</button>' : "";
            const controls = frLoop + enLoop + bothLoop;

            exHtml = '<div class="example-section">' + lines;
            if (controls) {
                exHtml += '<div class="audio-controls">' + controls + '</div>';
            }
            exHtml += '</div>';
        }

        const frSpeak = fr ? '<button class="btn-speak" onclick="window.speakFr(\'' + escapeQuote(fr) + '\', this)" title="نطق الفرنسية">🔊 FR</button>' : "";
        const enSpeak = en ? '<button class="btn-speak btn-speak-en" onclick="window.speakEn(\'' + escapeQuote(en) + '\', this)" title="نطق الإنجليزية">🔊 EN</button>' : "";

        return '<div class="word-card">' +
            '<div class="word-row">' +
                '<button class="btn-word-loop" onclick="window.toggleLoopWord(\'' + escapeQuote(fr) + '\', \'' + escapeQuote(en) + '\', this)" title="تكرار نطق الكلمة فرنسي + إنجليزي">🔁</button>' +
                '<span class="word-fr">' + highlightText(fr, searchTerm) + '</span>' +
                '<span class="word-ar">' + highlightText(ar, searchTerm) + '</span>' +
                '<span class="word-en">' + highlightText(en, searchTerm) + '</span>' +
                frSpeak + enSpeak +
            '</div>' + exHtml + '</div>';
    }

    // ---- TTS / native Capacitor helpers ----

    function nativePlugin(name) {
        if (!window.Capacitor) return null;
        if (window.Capacitor.Plugins && window.Capacitor.Plugins[name]) return window.Capacitor.Plugins[name];
        if (window.Capacitor.registerPlugin) {
            window.Capacitor.Plugins = window.Capacitor.Plugins || {};
            window.Capacitor.Plugins[name] = window.Capacitor.registerPlugin(name);
            return window.Capacitor.Plugins[name];
        }
        return null;
    }

    function nativeTTS() { return nativePlugin("TextToSpeech"); }
    function nativeApp() { return nativePlugin("App"); }

    function initAppPlugin() {
        const App = nativeApp();
        if (App && App.addListener) {
            App.addListener("backButton", function () {
                if (confirm("هل تريد حقاً الخروج من التطبيق؟")) {
                    App.exitApp();
                }
            });
        }
    }

    function loadWebVoices() {
        if (!synth) return;
        voices = synth.getVoices() || [];
        synth.onvoiceschanged = function () {
            voices = synth.getVoices() || [];
        };
    }

    function stopSpeech() {
        speechRun++;
        if (activeLoopBtn) {
            setLoopBtn(activeLoopBtn, false);
            activeLoopBtn = null;
        }
        const tts = nativeTTS();
        if (tts && tts.stop) {
            try { tts.stop(); } catch (e) {}
        }
        if (synth) {
            try { synth.cancel(); } catch (e) {}
        }
    }

    async function ttsSpeak(text, lang, rate) {
        if (!text) return;
        const tts = nativeTTS();
        if (tts && tts.speak) {
            try { await tts.stop(); } catch (e) {}
            await tts.speak({ text: text, lang: lang, rate: rate || 0.85, queueStrategy: 1 });
            return;
        }
        return speakWeb(text, lang, rate);
    }

    function speakWeb(text, lang, rate) {
        return new Promise(function (resolve) {
            if (!synth) { resolve(); return; }
            synth.cancel();
            const u = new SpeechSynthesisUtterance(text);
            u.lang = lang;
            u.rate = rate || 0.85;
            const prefix = (lang.split("-")[0] || "").toLowerCase();
            const v = voices.find(function (voice) {
                return (voice.lang || "").toLowerCase().startsWith(prefix);
            });
            if (v) u.voice = v;
            u.onend = resolve;
            u.onerror = function () { resolve(); };
            synth.speak(u);
        });
    }

    function setLoopBtn(btn, active) {
        if (!btn) return;
        if (active) {
            btn.classList.add("active");
            if (btn.classList.contains("btn-word-loop")) btn.innerHTML = "⏹";
            else if (btn.classList.contains("btn-loop-both")) btn.innerHTML = "⏹ FR+EN";
            else if (btn.classList.contains("btn-loop-en")) btn.innerHTML = "⏹ EN";
            else btn.innerHTML = "⏹ FR";
        } else {
            btn.classList.remove("active");
            if (btn.classList.contains("btn-word-loop")) btn.innerHTML = "🔁";
            else if (btn.classList.contains("btn-loop-both")) btn.innerHTML = "🔁 FR+EN";
            else if (btn.classList.contains("btn-loop-en")) btn.innerHTML = "🔁 EN";
            else btn.innerHTML = "🔁 FR";
        }
    }

    async function speakOnce(seq, btn) {
        stopSpeech();
        const run = speechRun;
        let orig = "";
        if (btn) {
            orig = btn.innerHTML;
            btn.innerHTML = "🔊 ...";
        }
        try {
            for (let i = 0; i < seq.length; i++) {
                if (run !== speechRun) break;
                await ttsSpeak(seq[i].text, seq[i].lang, seq[i].rate || 0.85);
            }
        } catch (e) {
            // ignore
        } finally {
            if (btn) btn.innerHTML = orig;
        }
    }

    function startLoop(seq, btn) {
        stopSpeech();
        activeLoopBtn = btn;
        const run = ++speechRun;
        setLoopBtn(btn, true);
        playLoop(seq, run, btn);
    }

    async function playLoop(seq, run, btn) {
        try {
            while (run === speechRun) {
                for (let i = 0; i < seq.length; i++) {
                    if (run !== speechRun) break;
                    if (!seq[i].text) continue;
                    await ttsSpeak(seq[i].text, seq[i].lang, seq[i].rate || 0.85);
                    if (run !== speechRun) break;
                }
                if (run !== speechRun) break;
                await new Promise(function (resolve) { setTimeout(resolve, 800); });
            }
        } catch (e) {
            // ignore
        } finally {
            if (run === speechRun) {
                setLoopBtn(btn, false);
                activeLoopBtn = null;
            }
        }
    }

    window.speakFr = function (text, btn) {
        if (!text) return;
        speakOnce([{ text: text, lang: "fr-FR" }], btn);
    };

    window.speakEn = function (text, btn) {
        if (!text) return;
        speakOnce([{ text: text, lang: "en-US" }], btn);
    };

    window.speakBoth = function (frText, enText, btn) {
        const seq = [];
        if (frText) seq.push({ text: frText, lang: "fr-FR" });
        if (enText) seq.push({ text: enText, lang: "en-US" });
        if (seq.length) speakOnce(seq, btn);
    };

    window.toggleLoopWord = function (fr, en, btn) {
        if (!fr && !en) return;
        if (btn && btn.classList.contains("active")) { stopSpeech(); return; }
        const seq = [];
        if (fr) seq.push({ text: fr, lang: "fr-FR" });
        if (en) seq.push({ text: en, lang: "en-US" });
        startLoop(seq, btn);
    };

    window.toggleLoop = function (text, lang, btn) {
        if (!text) return;
        if (btn && btn.classList.contains("active")) { stopSpeech(); return; }
        startLoop([{ text: text, lang: lang }], btn);
    };

    window.toggleLoopBoth = function (frText, enText, btn) {
        if (!frText && !enText) return;
        if (btn && btn.classList.contains("active")) { stopSpeech(); return; }
        const seq = [];
        if (frText) seq.push({ text: frText, lang: "fr-FR" });
        if (enText) seq.push({ text: enText, lang: "en-US" });
        startLoop(seq, btn);
    };

    init();
})();
