// DDMentor part 1 of 4 — intro, name, dictionary, briefing quiz.
// Loaded by DDMentor.html. Merge back: paste into the first <script> block.

    window.DDPlay = {
      example: false,
      isExample: function () { return !!this.example; },
      stored: function (key) {
        try { return localStorage.getItem(key); } catch (e) { return null; }
      },
      product: function () {
        try { return JSON.parse(this.stored("dd_product") || "null"); } catch (e) { return null; }
      },
      introPassed: function () { return this.stored("dd_intro_done") === "1"; },
      inventReady: function () {
        const p = this.product();
        return !!(p && String(p.name || "").trim().length >= 2 && String(p.does || "").trim().length >= 8 && String(p.who || "").trim().length >= 2);
      },
      customersReady: function () {
        const p = this.product();
        return !!(p && String(p.custWho || "").trim().length >= 2 && String(p.custNeed || "").trim().length >= 8 &&
          String(p.custWhere || "").trim().length >= 2 && String(p.custHear || "").trim().length >= 2);
      },
      moneyQuizReady: function () { return this.stored("dd_money_quiz") === "1"; },
      pitchReady: function () {
        const p = this.product();
        return this.stored("dd_pitch_done") === "1" || !!(p && p.pitchReady && String(p.pitch || "").length >= 40);
      },
      allowedStep: function (step) {
        if (this.example) return true;
        if (step === 0) return this.introPassed();
        if (step === 1) return this.inventReady();
        if (step === 2) return this.customersReady();
        if (step === 3) return this.moneyQuizReady();
        if (step === 4) return this.pitchReady();
        return false;
      },
      blockedReason: function (step) {
        if (this.allowedStep(step)) return "";
        const msgs = {
          0: "Finish the Den quiz (3 out of 4) to invent your own product. The example button is the only way to see BootDry Pegs.",
          1: "Save your own invention first. Your game starts with empty boxes — not BootDry Pegs.",
          2: "Finish the customers page before you open the money.",
          3: "Score 3 out of 4 on the money questions to unlock your pitch.",
          4: "Save a full pitch of your own product before you enter the Den."
        };
        return msgs[step] || "Complete the earlier steps first.";
      },
      showGateMsg: function (text) {
        ["step-gate-msg", "journey-gate-msg"].forEach((id) => {
          const el = document.getElementById(id);
          if (el) el.textContent = text || "";
        });
      },
      paintSteps: function () {
        document.querySelectorAll("#steps .step, #journey-steps .step, #den-steps .step").forEach((btn) => {
          const n = Number(btn.dataset.step);
          const ok = this.allowedStep(n);
          btn.classList.toggle("locked", !ok);
          btn.disabled = false;
          btn.setAttribute("aria-disabled", ok ? "false" : "true");
          btn.title = ok ? (this.example ? "Example — look at this finished page" : "") : this.blockedReason(n);
        });
        const help = document.getElementById("steps-help");
        if (help) {
          help.textContent = this.example
            ? "Example: tap any step to browse Sam’s finished BootDry Pegs pages. You cannot change them."
            : "In your own game, a locked step will not open. Finish the earlier page first.";
        }
        const jHelp = document.getElementById("journey-steps-help");
        if (jHelp) {
          jHelp.textContent = this.example
            ? "Tap a step to look at another finished page."
            : "These are the same five steps as on the first page. In your own game, later steps stay locked until you finish the one before.";
        }
        document.body.classList.toggle("example-run", this.example);
        document.querySelectorAll("#stage-invent input, #stage-invent textarea, #answer-box, #pitch-edit").forEach((el) => {
          if (!el) return;
          el.readOnly = !!this.example;
        });
      },
      GAME_KEYS: [
        "dd_player", "dd_role", "dd_intro_done", "dd_product", "dd_example_product",
        "dd_money_quiz", "dd_pitch_done", "dd_den_answers", "dd_den_done",
        "dd_den_deals", "dd_den_outcome"
      ],
      clearStoredGame: function () {
        this.GAME_KEYS.forEach((key) => {
          try { localStorage.removeItem(key); } catch (e) {}
        });
      },
      resetIntroQuiz: function () {},
      goHomeFresh: function () {
        try { speechSynthesis.cancel(); } catch (e) {}
        if (typeof window.stopInventSpeech === "function") window.stopInventSpeech();
        if (typeof window.stopDenSpeech === "function") window.stopDenSpeech();
        this.endExample();
        this.clearStoredGame();
        const nameBox = document.getElementById("player-name");
        if (nameBox) nameBox.value = "";
        if (typeof window.startLiveRun === "function") window.startLiveRun();
        if (typeof window.resetDenStage === "function") window.resetDenStage();
        this.resetIntroQuiz();
        document.getElementById("stage-two").classList.add("hidden");
        document.getElementById("stage-one").classList.remove("hidden");
        document.getElementById("stage-invent").classList.add("hidden");
        document.getElementById("stage-briefing").classList.remove("hidden");
        const welcome = document.getElementById("welcome-line");
        if (welcome) welcome.textContent = "This computer is clear. The next person can write their name and start.";
        this.showGateMsg("");
        this.paintSteps();
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      beginExample: function () {
        this.endExample();
        this.clearStoredGame();
        if (typeof window.startLiveRun === "function") window.startLiveRun();
        if (typeof window.resetDenStage === "function") window.resetDenStage();
        this.resetIntroQuiz();
        this.example = true;
        this.showGateMsg("");
        this.paintSteps();
        if (typeof window.startExampleRun === "function") window.startExampleRun();
      },
      endExample: function () {
        this.example = false;
        document.body.classList.remove("example-run");
        this.showGateMsg("");
        this.paintSteps();
      }
    };

    function playerFirst() {
      const n = (document.getElementById("player-name").value || "").trim().split(/\s+/)[0];
      if (!n || n.toLowerCase() === "entrepreneur") return "";
      return n;
    }

    function address(text) {
      const n = playerFirst();
      const trimmed = String(text || "");
      if (!n || !trimmed) return trimmed;
      if (trimmed.toLowerCase().indexOf(n.toLowerCase() + ",") === 0) return trimmed;
      const m = trimmed.match(/^(\w+)/);
      const keep = m && (m[1] === "I" || m[1] === "I'm");
      const rest = keep ? trimmed : trimmed.charAt(0).toLowerCase() + trimmed.slice(1);
      return n + ", " + rest;
    }

    const introWords = {
      entrepreneur: "<strong>Entrepreneur</strong> — a person who invents a business idea and tries to make it work.",
      equity: "<strong>Equity</strong> — a share of the business you give an investor in return for their money.",
      pitch: "<strong>Pitch</strong> — a short talk that explains what you sell, who it is for, and how much money you need."
    };
    const introDef = document.getElementById("intro-def");
    document.querySelectorAll(".word-def").forEach((btn) => {
      btn.addEventListener("click", () => {
        introDef.innerHTML = introWords[btn.dataset.word];
      });
    });

    const terms = {
      percentage: "<strong>Percentage</strong> — a percentage is a number out of 100. If you own 100% of the business, you own all of it. When a Dragon invests, they usually want a percentage of the business as their share of ownership. If they take 20%, they own 20 parts out of every 100, and you keep 80%. Give away a bigger percentage and they own more of the company; keep a bigger percentage and you stay in charge of more of it.",
      investment: "<strong>Investment</strong> — money an investor puts into the business so you can grow (make more stock, advertise, hire help). It is not a gift, and it is not a loan you repay on a schedule. They expect the business to become more valuable.",
      valuation: "<strong>Valuation</strong> — what you claim the whole business is worth today. If you ask for £20,000 for 10% of the company, you are saying the whole business is worth £200,000. Investors will argue if that sounds too high.",
      marketing: "<strong>Marketing</strong> — how you tell people about your product so they hear about it and want to buy. It can include posters, social ads, stalls, and samples. Marketing costs money each month, and you must pay that cost before you count a profit.",
      royalty: "<strong>Royalty</strong> — extra money an investor might want from each sale (for example 50p per item) instead of, or as well as, equity. Handy when they like the product but not the ownership split."
    };

    function quizItems() {
      return [
      {
        q: address("In this game, who are you?"),
        choices: [
          "A Dragon who decides which businesses to buy",
          "The entrepreneur who invents a product and pitches for investment",
          "The host of the television show"
        ],
        answer: 1
      },
      {
        q: address("You ask for £20,000 for 10% of the business. What valuation are you putting on the whole company?"),
        choices: ["£2,000", "£20,000", "£200,000"],
        answer: 2
      },
      {
        q: address("If an investor puts in £10,000 for 20% of your company, what are they mainly buying?"),
        choices: [
          "A gift you never have to think about again",
          "A share of ownership, called equity",
          "A guaranteed job on the show"
        ],
        answer: 1
      },
      {
        q: address("When do you meet the investors in this game?"),
        choices: [
          "Straight away, before you have an idea",
          "After you have developed your product pitch",
          "Never — you play as an investor yourself"
        ],
        answer: 1
      }
    ];
    }

    const playerName = document.getElementById("player-name");
    const welcome = document.getElementById("welcome-line");
    let savedName = "";
    playerName.addEventListener("blur", () => {
      const t = playerName.value.trim();
      if (!t) return;
      playerName.value = t.split(/\s+/).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ").slice(0, 24);
    });

    (function bindNameSpeak() {
      const SpeechEngine = window.SpeechRecognition || window.webkitSpeechRecognition;
      const btn = document.getElementById("speak-name");
      const status = document.getElementById("speak-name-status");
      let rec = null;
      btn.addEventListener("click", () => {
        if (!SpeechEngine) {
          status.textContent = "Speaking-to-text needs Chrome or Edge.";
          return;
        }
        if (rec) {
          try { rec.stop(); } catch (e) {}
          rec = null;
          btn.classList.remove("listening");
          btn.textContent = "Speak my name";
          status.textContent = "";
          return;
        }
        rec = new SpeechEngine();
        rec.lang = "en-GB";
        rec.interimResults = true;
        rec.onresult = (ev) => {
          let text = "";
          for (let i = 0; i < ev.results.length; i++) text += ev.results[i][0].transcript + " ";
          playerName.value = text.trim().slice(0, 24);
        };
        rec.onend = () => {
          rec = null;
          btn.classList.remove("listening");
          btn.textContent = "Speak my name";
          const t = playerName.value.trim();
          if (t) {
            playerName.value = t.split(/\s+/).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ").slice(0, 24);
          }
        };
        rec.onerror = () => {
          status.textContent = "Could not listen. Try Chrome or Edge.";
        };
        try { rec.start(); } catch (e) {
          status.textContent = "Could not start the microphone.";
          rec = null;
          return;
        }
        btn.classList.add("listening");
        btn.textContent = "Stop listening";
        status.textContent = "Listening… say your first name.";
      });
    })();

    (function bindMentorSpeak() {
      const mentorPics = ["business-mentor.png?v=4", "business-mentor-2.png?v=1"];
      let mentorPicIndex = 0;
      let speakGen = 0;
      function resetMentorButtons() {
        document.querySelectorAll(".mentor-speak").forEach((b) => { b.textContent = "Mentor"; });
      }
      function showNextMentorPic() {
        mentorPicIndex = (mentorPicIndex + 1) % mentorPics.length;
        const src = mentorPics[mentorPicIndex];
        document.querySelectorAll("img.mentor-pic").forEach((img) => { img.src = src; });
      }
      function mentorVoice() {
        const voices = speechSynthesis.getVoices() || [];
        const name = (v) => (v.name || "").toLowerCase();
        const lang = (v) => (v.lang || "").toLowerCase();
        const gb = voices.filter((v) => lang(v).indexOf("en-gb") === 0 || lang(v).indexOf("en_gb") === 0);
        const pool = gb.length ? gb : voices.filter((v) => lang(v).indexOf("en") === 0);
        return pool.find((v) => /male|daniel|george|david|ravi|ryan|mark/.test(name(v))) || pool[0] || null;
      }
      function speakWhenEngineReady(utterance, gen, warmupMs) {
        let started = false;
        const v = mentorVoice();
        if (v) utterance.voice = v;
        const startReal = () => {
          if (started || gen !== speakGen || !window.mentorTalking) return;
          started = true;
          try { speechSynthesis.resume(); } catch (e) {}
          const keepAlive = window.setInterval(() => {
            if (gen !== speakGen || !window.mentorTalking) {
              window.clearInterval(keepAlive);
              return;
            }
            try { speechSynthesis.resume(); } catch (e) {}
          }, 8000);
          const stopKeep = () => window.clearInterval(keepAlive);
          const prevEnd = utterance.onend;
          const prevErr = utterance.onerror;
          utterance.onend = (ev) => { stopKeep(); if (prevEnd) prevEnd.call(utterance, ev); };
          utterance.onerror = (ev) => { stopKeep(); if (prevErr) prevErr.call(utterance, ev); };
          try { speechSynthesis.speak(utterance); } catch (e) {
            stopKeep();
            window.mentorTalking = false;
            resetMentorButtons();
          }
        };
        const holdUntil = Date.now() + Math.max(0, warmupMs || 0);
        const queueSilentPad = () => {
          if (started || gen !== speakGen || !window.mentorTalking) return;
          if (Date.now() >= holdUntil) {
            startReal();
            return;
          }
          const pad = new SpeechSynthesisUtterance(".");
          pad.volume = 0;
          pad.rate = 0.7;
          pad.lang = "en-GB";
          if (v) pad.voice = v;
          pad.onend = pad.onerror = queueSilentPad;
          try { speechSynthesis.resume(); } catch (e) {}
          try { speechSynthesis.speak(pad); } catch (e) {
            window.setTimeout(queueSilentPad, 80);
          }
        };
        queueSilentPad();
        window.setTimeout(startReal, (warmupMs || 0) + 80);
      }
      window.speakMentorText = function (text, fromBtn) {
        text = String(text || "").replace(/\s+/g, " ").trim();
        if (!text) return;
        speakGen += 1;
        const gen = speakGen;
        if (speechSynthesis.speaking || speechSynthesis.pending) {
          try { speechSynthesis.cancel(); } catch (e) {}
        }
        window.mentorTalking = true;
        resetMentorButtons();
        if (fromBtn) fromBtn.textContent = "Stop";
        showNextMentorPic();
        const pitchPanel = document.getElementById("pitch-panel");
        const onPitchPage = (fromBtn && fromBtn.closest && fromBtn.closest("#pitch-panel"))
          || (pitchPanel && !pitchPanel.classList.contains("hidden"));
        const delayAttr = fromBtn && fromBtn.dataset ? Number(fromBtn.dataset.speakDelay) : NaN;
        const warmupMs = Number.isFinite(delayAttr) && delayAttr >= 0
          ? delayAttr
          : (onPitchPage ? 2000 : 280);
        window.setTimeout(() => {
          if (gen !== speakGen || !window.mentorTalking) return;
          const u = new SpeechSynthesisUtterance(text);
          u.lang = "en-GB";
          u.rate = 0.92;
          u.pitch = 0.9;
          u.onend = u.onerror = () => {
            if (gen !== speakGen) return;
            window.mentorTalking = false;
            resetMentorButtons();
          };
          speakWhenEngineReady(u, gen, warmupMs);
        }, 80);
      };
      document.querySelectorAll(".mentor-speak").forEach((btn) => {
        btn.addEventListener("click", () => {
          if (window.mentorTalking) {
            speakGen += 1;
            try { speechSynthesis.cancel(); } catch (e) {}
            window.mentorTalking = false;
            resetMentorButtons();
            return;
          }
          const src = document.getElementById(btn.dataset.speakFrom);
          const text = src ? (src.innerText || "").replace(/\s+/g, " ").trim() : "";
          const placeholder = "Choose a golden word to see what it means in the Den.";
          let fallback = (btn.dataset.fallback || "").trim();
          if (!fallback && btn.dataset.fallbackFrom) {
            const el = document.getElementById(btn.dataset.fallbackFrom);
            fallback = el ? (el.innerText || "").replace(/\s+/g, " ").trim() : "";
          }
          window.speakMentorText((text && text !== placeholder) ? text : (fallback || text), btn);
        });
      });
    })();

    function welcomeText(name) {
      return "Hello " + name + " follow the steps below to create your product and pitch for investment from the Dragons.";
    }

    document.getElementById("enter-btn").addEventListener("click", () => {
      const typed = playerName.value.trim();
      window.DDPlay.endExample();
      window.DDPlay.clearStoredGame();
      if (typeof window.resetDenStage === "function") window.resetDenStage();
      if (typeof window.startLiveRun === "function") window.startLiveRun();
      const name = typed || "Entrepreneur";
      playerName.value = typed;
      savedName = name;
      welcome.textContent = welcomeText(name);
      try {
        localStorage.setItem("dd_player", name);
        localStorage.setItem("dd_role", "entrepreneur");
      } catch (e) {}
      window.DDPlay.resetIntroQuiz();
      window.DDPlay.paintSteps();
    });

    const termBox = document.getElementById("term-box-copy");
    document.querySelectorAll("#stage-briefing .term").forEach((btn) => {
      btn.addEventListener("click", () => {
        termBox.innerHTML = terms[btn.dataset.term];
        if (window.speakMentorText) window.speakMentorText(termBox.innerText);
      });
    });

    let qIndex = 0;
    let score = 0;
    let locked = false;
    const quizQ = document.getElementById("quiz-q");
    const quizChoices = document.getElementById("quiz-choices");
    const quizFeedback = document.getElementById("quiz-feedback");
    const quizProgress = document.getElementById("quiz-progress");
    const quizNext = document.getElementById("quiz-next");
    const nextStage = document.getElementById("next-stage");
    const unlockMsg = document.getElementById("unlock-msg");

    function showQuestion() {
      locked = false;
      quizNext.classList.add("hidden");
      quizFeedback.textContent = "";
      quizFeedback.style.color = "";
      const item = quizItems()[qIndex];
      quizProgress.textContent = "Question " + (qIndex + 1) + " of " + quizItems().length;
      quizQ.textContent = item.q;
      quizChoices.innerHTML = "";
      item.choices.forEach((text, i) => {
        const b = document.createElement("button");
        b.className = "choice";
        b.type = "button";
        b.textContent = text;
        b.addEventListener("click", () => pick(i, b));
        quizChoices.appendChild(b);
      });
    }

    function pick(i, btn) {
      if (locked) return;
      locked = true;
      const item = quizItems()[qIndex];
      const buttons = quizChoices.querySelectorAll(".choice");
      buttons.forEach((b, idx) => {
        if (idx === item.answer) b.classList.add("correct");
        if (idx === i && i !== item.answer) b.classList.add("wrong");
      });
      if (i === item.answer) {
        score += 1;
        quizFeedback.style.color = "#1b7a3a";
        quizFeedback.textContent = playerFirst()
          ? ("Yes, " + playerFirst() + " — that is how an entrepreneur thinks.")
          : "Yes — that is how an entrepreneur thinks.";
      } else {
        quizFeedback.style.color = "#9b1c1c";
        quizFeedback.textContent = playerFirst()
          ? ("Not quite, " + playerFirst() + ". Look at the green answer — that is the Den rule.")
          : "Not quite. Look at the green answer — that is the Den rule.";
      }
      quizNext.classList.remove("hidden");
      if (qIndex === quizItems().length - 1) {
        quizNext.textContent = "See your score";
      }
    }

    quizNext.addEventListener("click", () => {
      if (qIndex < quizItems().length - 1) {
        qIndex += 1;
        quizNext.textContent = "Next question";
        showQuestion();
        return;
      }
      quizQ.textContent = "Quiz complete!";
      quizChoices.innerHTML = "";
      quizNext.classList.add("hidden");
      quizProgress.textContent = "Score: " + score + " out of " + quizItems().length;
      if (score >= 3) {
        quizFeedback.style.color = "#1b7a3a";
        quizFeedback.textContent = address("You are ready to invent your own product. The boxes start empty — there is no example to copy.");
        unlockMsg.textContent = "";
        nextStage.disabled = false;
        try { localStorage.setItem("dd_intro_done", "1"); } catch (e) {}
        window.DDPlay.paintSteps();
      } else {
        quizFeedback.style.color = "#9b1c1c";
        quizFeedback.textContent = address("Have another go — tap “Try again”.");
        unlockMsg.textContent = "You need 3 out of 4. Read the panels above, then retry.";
        const retry = document.createElement("button");
        retry.className = "btn btn-gold";
        retry.type = "button";
        retry.textContent = "Try again";
        retry.addEventListener("click", () => {
          qIndex = 0;
          score = 0;
          showQuestion();
        });
        quizChoices.appendChild(retry);
      }
    });

    nextStage.addEventListener("click", () => {
      if (window.DDPlay.example) {
        window.DDPlay.endExample();
        if (typeof window.startLiveRun === "function") window.startLiveRun();
      }
      if (typeof window.openGameStep === "function") window.openGameStep(0);
      else {
        document.getElementById("stage-briefing").classList.add("hidden");
        document.getElementById("stage-invent").classList.remove("hidden");
        window.scrollTo(0, 0);
      }
    });

    document.querySelectorAll("#stage-briefing .step").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (typeof window.openGameStep === "function") window.openGameStep(Number(btn.dataset.step));
      });
    });

    const exampleBtn = document.getElementById("example-run-btn");
    if (exampleBtn) {
      exampleBtn.addEventListener("click", () => window.DDPlay.beginExample());
    }

    try {
      if (localStorage.getItem("dd_intro_done") === "1") {
        nextStage.disabled = false;
        unlockMsg.textContent = "You already unlocked your own game. Invent your product when you are ready — boxes stay empty unless you saved your work.";
      }
    } catch (e) {}

    window.DDPlay.resetIntroQuiz = function () {
      qIndex = 0;
      score = 0;
      locked = false;
      nextStage.disabled = true;
      unlockMsg.textContent = "Score at least 3 out of 4 on the quiz to start your own game. Your boxes will be empty — no BootDry Pegs sample.";
      quizNext.classList.add("hidden");
      quizNext.textContent = "Next question";
      showQuestion();
    };

    window.DDPlay.paintSteps();
    showQuestion();

    document.querySelectorAll(".start-again-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (window.DDPlay && typeof window.DDPlay.goHomeFresh === "function") {
          window.DDPlay.goHomeFresh();
        }
      });
    });
