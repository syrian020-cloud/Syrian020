// fwords — empty French-Arabic-English dictionary with user-added words
(function () {
    "use strict";

    const STORAGE_KEY = "fwordsData_v1";
    const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const SAMPLE_BULK_TEXT = `1. se lever | ينهض / يستيقظ من السرير | to get up

Je me lève à sept heures. | أنهض الساعة السابعة. | I get up at seven.

Je me lève tôt le matin. | أنهض باكرًا في الصباح. | I get up early in the morning.

2. se réveiller | يستيقظ | to wake up

Je me réveille à six heures. | أستيقظ الساعة السادسة. | I wake up at six.

Elle se réveille tard le dimanche. | هي تستيقظ متأخرة يوم الأحد. | She wakes up late on Sunday.

3. manger | يأكل | to eat

Je mange à midi. | آكل وقت الظهر. | I eat at noon.

Nous mangeons ensemble. | نحن نأكل معًا. | We eat together.

4. boire | يشرب | to drink

Je bois un café le matin. | أشرب قهوة في الصباح. | I drink coffee in the morning.

Tu veux boire quelque chose ? | هل تريد أن تشرب شيئًا؟ | Do you want to drink something?

5. aller | يذهب | to go

Je vais au travail. | أذهب إلى العمل. | I go to work.

Tu vas où ? | إلى أين تذهب؟ | Where are you going?

6. venir | يأتي | to come

Tu viens avec moi ? | هل تأتي معي؟ | Are you coming with me?

Il vient ce soir. | هو يأتي هذا المساء. | He is coming tonight.

7. partir | يغادر | to leave

Je pars à huit heures. | أغادر الساعة الثامنة. | I leave at eight.

Le train part bientôt. | القطار سيغادر قريبًا. | The train leaves soon.

8. rentrer | يعود إلى المنزل | to go back home

Je rentre chez moi. | أعود إلى منزلي. | I go back home.

Je rentre tard ce soir. | سأعود متأخرًا هذا المساء. | I'll get home late tonight.

9. sortir | يخرج | to go out

Je sors avec mes amis. | أخرج مع أصدقائي. | I go out with my friends.

Tu veux sortir ce soir ? | هل تريد الخروج هذا المساء؟ | Do you want to go out tonight?

10. acheter | يشتري | to buy

Je vais acheter du pain. | سأذهب لشراء الخبز. | I'm going to buy some bread.

J'achète des légumes au marché. | أشتري الخضار من السوق. | I buy vegetables at the market.`;

    function fillBulkSample() {
        if (bulkInput) bulkInput.value = SAMPLE_BULK_TEXT;
    }

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
    const bulkTopic = document.getElementById("bulkTopic");
    const bulkInput = document.getElementById("bulkInput");
    const importFeedback = document.getElementById("importFeedback");
    const fillSample = document.getElementById("fillSample");
    const escapeDiv = document.createElement("div");

    function init() {
        loadData();
        buildLetterNav();
        buildCategoryNav();
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
        categoryNav.addEventListener("click", function (e) {
            const btn = e.target.closest(".cat-btn");
            if (!btn) return;
            currentCategory = btn.dataset.cat || "all";
            currentLetter = "all";
            updateActiveNav();
            render();
        });
    }

    function rebuildCategoryButtons() {
        const allBtn = categoryNav.querySelector('[data-cat="all"]');
        categoryNav.innerHTML = "";
        if (allBtn) categoryNav.appendChild(allBtn);

        const topics = new Set();
        let currentTopicExists = currentCategory === "all";
        data.categories.forEach(function (cat) {
            (cat.words || []).forEach(function (w) {
                const t = w.topic || "عام";
                topics.add(t);
                if (t === currentCategory) currentTopicExists = true;
            });
        });
        if (!currentTopicExists) currentCategory = "all";

        Array.from(topics).sort().forEach(function (t) {
            const btn = document.createElement("button");
            btn.className = "cat-btn";
            btn.dataset.cat = t;
            btn.textContent = t;
            if (currentCategory === t) btn.classList.add("active");
            categoryNav.appendChild(btn);
        });
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
        document.getElementById("cancelImport").addEventListener("click", closeAddModal);

        document.getElementById("importWords").addEventListener("click", importWords);
        if (fillSample) fillSample.addEventListener("click", fillBulkSample);

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
        bulkTopic.value = "";
        bulkInput.value = "";
        importFeedback.textContent = "";
        bulkTopic.focus();
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

    function autoLetterFromWord(text) {
        if (!text) return "";
        const l = getFirstLetter(text);
        if (LETTERS.indexOf(l) !== -1) return l;
        return "";
    }

    function parseBulkText(text) {
        const entries = [];
        if (!text) return entries;
        const startIdx = text.search(/^\s*\d+[\.\)\-]\s*/m);
        const body = startIdx >= 0 ? text.slice(startIdx) : text;
        const lines = body.split(/\r?\n/);
        let current = null;
        for (let i = 0; i < lines.length; i++) {
            const raw = lines[i];
            const line = raw.trim();
            if (!line) continue;
            const headingMatch = line.match(/^\s*(\d+)[\.\)\-]\s*(.+)$/);
            if (headingMatch) {
                if (current) entries.push(current);
                const main = parseTriField(headingMatch[2]);
                current = {
                    main: main,
                    letter: autoLetterFromWord(main.fr || main.en),
                    examples: []
                };
            } else if (current) {
                const ex = parseTriField(line);
                if (ex.fr || ex.ar || ex.en) current.examples.push(ex);
            }
        }
        if (current) entries.push(current);
        return entries;
    }

    function importWords() {
        const entries = parseBulkText(bulkInput.value);
        if (entries.length === 0) {
            importFeedback.textContent = "لا يوجد نص صالح للاستيراد";
            return;
        }
        const topic = bulkTopic.value.trim() || "عام";
        let imported = 0;
        entries.forEach(function (entry) {
            const letter = entry.letter || "A";
            const cat = data.categories.find(function (c) { return c.id === letter; });
            if (!cat) return;
            const word = {
                fr: entry.main.fr,
                ar: entry.main.ar,
                en: entry.main.en,
                topic: topic,
                ex: "",
                ex_ar: "",
                ex_en: ""
            };
            if (entry.examples.length > 0) {
                const first = entry.examples[0];
                word.ex = first.fr;
                word.ex_ar = first.ar;
                word.ex_en = first.en;
            }
            if (entry.examples.length > 1) {
                word.examples = entry.examples.slice(1).map(function (e) {
                    return { fr: e.fr, ar: e.ar, en: e.en };
                });
            }
            cat.words.push(word);
            data.totalWords++;
            imported++;
        });
        saveData();
        importFeedback.textContent = "تم استيراد " + imported + " كلمة";
        currentLetter = "all";
        currentCategory = topic;
        searchInput.value = "";
        searchTerm = "";
        clearBtn.style.display = "none";
        render();
        setTimeout(closeAddModal, 600);
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

    function matchesTopic(w) {
        if (currentCategory === "all") return true;
        return (w.topic || "عام") === currentCategory;
    }

    function matchesSearch(w) {
        if (!searchTerm) return true;
        const fields = [w.fr, w.ar, w.en, w.ex, w.ex_ar, w.ex_en];
        if (Array.isArray(w.examples)) {
            w.examples.forEach(function (e) {
                fields.push(e.fr, e.ar, e.en);
            });
        }
        for (let i = 0; i < fields.length; i++) {
            const v = String(fields[i] || "");
            if (v.toLowerCase().includes(searchTerm)) return true;
        }
        return false;
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

        rebuildCategoryButtons();
        updateActiveNav();

        let html = "";
        let matchCount = 0;

        if (currentCategory !== "all") {
            const allWords = [];
            data.categories.forEach(function (cat) {
                cat.words.forEach(function (w) {
                    if (matchesSearch(w) && matchesTopic(w)) allWords.push(w);
                });
            });
            allWords.sort(function (a, b) { return (a.fr || "").localeCompare(b.fr || "", "fr"); });
            matchCount = allWords.length;
            if (allWords.length > 0) {
                html += '<div class="category-section">';
                html += '<div class="category-header" onclick="this.classList.toggle(\'collapsed\');this.nextElementSibling.classList.toggle(\'collapsed\')">';
                html += '<span>' + escapeHtml(currentCategory) + '</span>';
                html += '<span><span class="cat-count">' + allWords.length + ' كلمة</span><span class="toggle-icon">▼</span></span></div>';
                html += '<div class="category-words">';
                allWords.forEach(function (w) { html += renderWordCard(w); });
                html += '</div></div>';
            }
        } else if (currentLetter !== "all") {
            const allWords = [];
            data.categories.forEach(function (cat) {
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
            data.categories.forEach(function (cat) {
                const filtered = cat.words.filter(function (w) { return matchesSearch(w); });
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

        if (searchTerm || currentLetter !== "all") {
            statsEl.textContent = matchCount + ' نتيجة من ' + data.totalWords + ' كلمة';
        } else if (currentCategory !== "all") {
            statsEl.textContent = matchCount + ' كلمة في تصنيف ' + currentCategory;
        } else {
            statsEl.textContent = data.totalWords + ' كلمة في ' + data.categories.length + ' حرف';
        }
    }

    function renderWordCard(w) {
        const fr = w.fr || "";
        const ar = w.ar || "";
        const en = w.en || "";

        let exHtml = "";
        const examples = getExamples(w);
        if (examples.length > 0) {
            exHtml = '<div class="example-section">';
            examples.forEach(function (ex, idx) {
                const first = idx === 0;
                if (!first) exHtml += '<hr class="ex-separator">';
                let lines = "";
                if (ex.fr) {
                    lines += '<div class="ex-line"><span class="ex-label fr-label">FR</span><span class="ex-text ltr">' + highlightText(ex.fr, searchTerm) + '</span></div>';
                }
                if (ex.ar) {
                    lines += '<div class="ex-line"><span class="ex-label ar-label">AR</span><span class="ex-text">' + highlightText(ex.ar, searchTerm) + '</span></div>';
                }
                if (ex.en) {
                    lines += '<div class="ex-line"><span class="ex-label en-label">EN</span><span class="ex-text ltr">' + highlightText(ex.en, searchTerm) + '</span></div>';
                }

                const frLoop = ex.fr ? '<button class="btn-loop" onclick="window.toggleLoop(\'' + escapeQuote(ex.fr) + '\', \'fr-FR\', this)" title="تكرار النطق الفرنسي">🔁 FR</button>' : "";
                const enLoop = ex.en ? '<button class="btn-loop btn-loop-en" onclick="window.toggleLoop(\'' + escapeQuote(ex.en) + '\', \'en-US\', this)" title="تكرار النطق الإنجليزي">🔁 EN</button>' : "";
                const bothLoop = (ex.fr && ex.en) ? '<button class="btn-loop btn-loop-both" onclick="window.toggleLoopBoth(\'' + escapeQuote(ex.fr) + '\', \'' + escapeQuote(ex.en) + '\', this)" title="تكرار فرنسي + إنجليزي">🔁 FR+EN</button>' : "";
                const controls = frLoop + enLoop + bothLoop;

                exHtml += '<div class="example-block">' + lines;
                if (controls) {
                    exHtml += '<div class="audio-controls">' + controls + '</div>';
                }
                exHtml += '</div>';
            });
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

    function getExamples(w) {
        const examples = [];
        if (w.ex || w.ex_ar || w.ex_en) {
            examples.push({ fr: w.ex || "", ar: w.ex_ar || "", en: w.ex_en || "" });
        }
        if (Array.isArray(w.examples)) {
            w.examples.forEach(function (e) { examples.push({ fr: e.fr || "", ar: e.ar || "", en: e.en || "" }); });
        }
        return examples;
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
