/* Classroom spelling, grammar, and predictive-text helper (offline). */
(function (global) {
  const SPELL_MAP = {
    becuase: "because", becasue: "because", becouse: "because", becuz: "because",
    cuz: "because", coz: "because",
    peaple: "people", peopl: "people", ppl: "people",
    thay: "they", thier: "their", ther: "their", thye: "they",
    buisness: "business", busines: "business", bussiness: "business", bisness: "business",
    costumer: "customer", costumers: "customers",
    prodcut: "product", prodcuts: "products",
    recieve: "receive", recieved: "received", recieves: "receives",
    beleive: "believe", beleived: "believed", belive: "believe", belived: "believed",
    definately: "definitely", definatly: "definitely", definate: "definite",
    seperate: "separate", seperated: "separated", seperately: "separately",
    untill: "until", wich: "which", wichh: "which",
    realy: "really", realley: "really", relly: "really",
    alot: "a lot", aswell: "as well", infront: "in front", atleast: "at least",
    eachother: "each other", noone: "no one",
    dont: "don't", doesnt: "doesn't", cant: "can't", wont: "won't",
    thats: "that's", theyre: "they're", youre: "you're", youll: "you'll",
    wasnt: "wasn't", isnt: "isn't", arent: "aren't",
    havent: "haven't", hasnt: "hasn't", didnt: "didn't",
    couldnt: "couldn't", wouldnt: "wouldn't", shouldnt: "shouldn't",
    goin: "going", wanna: "want to", gonna: "going to", kinda: "kind of",
    dunno: "don't know", gotta: "have to",
    teh: "the", adn: "and", taht: "that", hte: "the",
    frm: "from", wih: "with", wit: "with", wiv: "with",
    marketting: "marketing", advertisment: "advertisement", advertisments: "advertisements",
    advertize: "advertise", advertizing: "advertising",
    enviroment: "environment", enviromental: "environmental",
    freind: "friend", freinds: "friends",
    sucess: "success", sucessful: "successful", succesful: "successful",
    begining: "beginning", beggining: "beginning",
    adress: "address", tommorrow: "tomorrow",
    finaly: "finally", usefull: "useful", helpfull: "helpful",
    wonderfull: "wonderful", truely: "truly",
    reccomend: "recommend", reccommend: "recommend", recomend: "recommend",
    neccessary: "necessary", necesarry: "necessary",
    occuring: "occurring", occured: "occurred", occassion: "occasion",
    accomodate: "accommodate", accomodation: "accommodation",
    arguement: "argument", comming: "coming",
    dissappear: "disappear", dissappeared: "disappeared",
    intrest: "interest", intresting: "interesting",
    goverment: "government", publically: "publicly",
    independant: "independent", existance: "existence",
    fourty: "forty", nineth: "ninth", twelth: "twelfth",
    writting: "writing", writen: "written",
    speach: "speech", speaches: "speeches",
    invesment: "investment", investers: "investors", invester: "investor",
    eqity: "equity", valution: "valuation", valuaton: "valuation",
    proffit: "profit", proffits: "profits",
    montly: "monthly", yearley: "yearly",
    litle: "little", reale: "real",
    somthing: "something", somehing: "something", summin: "something",
    someting: "something", anyting: "anything",
    evry: "every", evryone: "everyone", evrything: "everything",
    problim: "problem", problms: "problems", porblem: "problem",
    anoying: "annoying", annoyin: "annoying",
    buyng: "buying", seling: "selling", sellling: "selling",
    accross: "across", agian: "again", allways: "always",
    ammount: "amount", anser: "answer", anwser: "answer",
    apparant: "apparent", appearence: "appearance",
    awsome: "awesome", befor: "before",
    calender: "calendar", carefull: "careful",
    catagory: "category", challange: "challenge",
    choise: "choice", choosen: "chosen",
    completly: "completely", concider: "consider",
    concious: "conscious", dilema: "dilemma",
    discribe: "describe", discription: "description",
    easly: "easily", eigth: "eighth",
    embarass: "embarrass", embarassed: "embarrassed",
    expecially: "especially", experince: "experience",
    familar: "familiar", foriegn: "foreign",
    grammer: "grammar", greatful: "grateful",
    happend: "happened", hieght: "height", heigth: "height",
    imediately: "immediately", imporant: "important",
    interupt: "interrupt", irrelevent: "irrelevant",
    jewlery: "jewellery", knowlege: "knowledge",
    libary: "library", lisence: "licence",
    lonley: "lonely", miniscule: "minuscule",
    mispell: "misspell", nieghbour: "neighbour",
    noticable: "noticeable", oppertunity: "opportunity",
    origional: "original", payed: "paid",
    peice: "piece", persistant: "persistent",
    posession: "possession", prefered: "preferred",
    priviledge: "privilege", probaly: "probably",
    reciept: "receipt", refering: "referring",
    relevent: "relevant", religous: "religious",
    resturant: "restaurant", rythm: "rhythm",
    sence: "sense", sincerly: "sincerely",
    stoped: "stopped", strenth: "strength",
    suprise: "surprise", tounge: "tongue",
    usualy: "usually", vaccum: "vacuum",
    wierd: "weird", acheive: "achieve", acheived: "achieved",
    gaurd: "guard", frist: "first",
    loosing: "losing",
    persent: "percent", precent: "percent",
    eqaul: "equal", eqauls: "equals",
    fone: "phone", nite: "night", lite: "light",
    thru: "through", tho: "though",
    wot: "what", woz: "was", enuf: "enough",
    skool: "school", nuffin: "nothing",
    pls: "please", thx: "thanks",
    ur: "your", u: "you",
    prophet: "profit",
    pith: "pitch",
    valyou: "value"
  };

  const PHRASES = [
    [/\bcould of\b/gi, "could have"],
    [/\bshould of\b/gi, "should have"],
    [/\bwould of\b/gi, "would have"],
    [/\bmust of\b/gi, "must have"],
    [/\bmight of\b/gi, "might have"],
    [/\bto much\b/gi, "too much"],
    [/\bto many\b/gi, "too many"],
    [/\bto late\b/gi, "too late"],
    [/\bto small\b/gi, "too small"],
    [/\bto big\b/gi, "too big"],
    [/\bto expensive\b/gi, "too expensive"],
    [/\bthere product\b/gi, "their product"],
    [/\bthere customers\b/gi, "their customers"],
    [/\bthere business\b/gi, "their business"],
    [/\bthere money\b/gi, "their money"],
    [/\byour welcome\b/gi, "you're welcome"],
    [/\bits a\b/gi, "it's a"],
    [/\bits an\b/gi, "it's an"],
    [/\bi am hear to\b/gi, "I am here to"],
    [/\bhear to pitch\b/gi, "here to pitch"],
    [/\bto peach\b/gi, "to pitch"],
    [/\bpeach my\b/gi, "pitch my"],
    [/\bmy peach\b/gi, "my pitch"],
    [/\bequality of the business\b/gi, "equity of the business"],
    [/\b15% equality\b/gi, "15% equity"],
    [/\bpercent equality\b/gi, "percent equity"],
    [/\bper cent\b/gi, "percent"],
    [/\ba lot of money\b/gi, "a lot of money"]
  ];

  const NEXT = {
    "i am": ["here", "asking", "pitching"],
    "i will": ["spend", "make", "sell", "ask"],
    "it is": ["for", "a", "called"],
    "it costs": ["£"],
    "sells for": ["£"],
    "the profit": ["is"],
    "i plan": ["to"],
    "i expect": ["to"],
    "i am asking": ["for"],
    "they can": ["buy", "hear"],
    "people hear": ["about"],
    "the problem": ["is"],
    "my name": ["is"],
    "this product": ["is", "helps", "clips", "dries"],
    "customers": ["buy", "hear", "need"],
    "marketing": ["costs", "is"],
    "each set": ["costs"],
    "thank": ["you"]
  };

  const COMMON = (
    "a about after again all also am an and any are as at be because been before being both but by " +
    "can come could day did do does doing done down each even every first for from get go going good " +
    "had has have he her here him his how i if in into is it its just know like little look made make " +
    "many may me more most much must my name need new no not now of off on one only or other our out " +
    "over own people place put said same see she should so some still such take than that the their " +
    "them then there these they this those through time to too two up us use used very want was way we " +
    "well were what when where which who why will with work would year you your " +
    "hello pitch product problem customer customers money ask investment investor investors equity " +
    "valuation percent business company profit profits cost costs price sell selling sold buy buying " +
    "make making month monthly year yearly marketing advert adverts advertisement posters social " +
    "media shops stall stalls website club clubs coaches parents football footballers boots pegs " +
    "dry drying wet match matches school classroom teacher pupils students families sports " +
    "plan expect spend asking ready questions thank thank you pounds pounds pence " +
    "clip clips open vents air morning batteries heater newspaper smell ruined " +
    "real group where hear about through whatsapp groups " +
    "repair recycle reuse broken finished planet fair young " +
    "steps first then next actually works gadget software " +
    "because there their they're your you're it's its " +
    "annoying slow messy missing today picture " +
    "sentence speech practise practice save den dragons dragon " +
    "amount figure figures number numbers sales sales shortfall " +
    "share percent business ready"
  ).split(/\s+/);

  const extraKnown = Object.create(null);
  COMMON.forEach((w) => { extraKnown[w] = 1; });
  Object.keys(SPELL_MAP).forEach((k) => {
    extraKnown[k] = 1;
    extraKnown[SPELL_MAP[k].toLowerCase().replace(/[^a-z']/g, "")] = 1;
  });
  "bootdry pegs lockerping homeworksplit pocketqueue".split(" ").forEach((w) => { extraKnown[w] = 1; });

  const byStart = Object.create(null);
  Object.keys(extraKnown).forEach((w) => {
    if (!w) return;
    const ch = w.charAt(0);
    if (!byStart[ch]) byStart[ch] = [];
    byStart[ch].push(w);
  });

  const KEYS = {
    q: "wa", w: "qeas", e: "wrsd", r: "etdf", t: "ryfg", y: "tugh", u: "yihj", i: "uokj", o: "iplk", p: "ol",
    a: "qwsz", s: "awedxz", d: "serfcx", f: "drtgvc", g: "ftyhbv", h: "gyujnb", j: "huiknm", k: "jiolm", l: "kop",
    z: "asx", x: "zsdc", c: "xdfv", v: "cfgb", b: "vghn", n: "bhjm", m: "njk"
  };

  function fireInput(el) {
    el.dispatchEvent(new Event("input", { bubbles: true }));
  }

  function addKnown(words) {
    String(words || "").toLowerCase().split(/[^a-z']+/).forEach((w) => {
      if (w.length < 2) return;
      extraKnown[w] = 1;
      const ch = w.charAt(0);
      if (!byStart[ch]) byStart[ch] = [];
      if (byStart[ch].indexOf(w) === -1) byStart[ch].push(w);
    });
  }

  function distance(a, b) {
    if (a === b) return 0;
    const al = a.length;
    const bl = b.length;
    if (Math.abs(al - bl) > 2) return 9;
    if (!al) return bl;
    if (!bl) return al;
    let prev = new Array(bl + 1);
    let cur = new Array(bl + 1);
    for (let j = 0; j <= bl; j++) prev[j] = j;
    for (let i = 1; i <= al; i++) {
      cur[0] = i;
      const ca = a.charCodeAt(i - 1);
      for (let j = 1; j <= bl; j++) {
        const cost = ca === b.charCodeAt(j - 1) ? 0 : 1;
        let v = prev[j] + 1;
        const ins = cur[j - 1] + 1;
        const sub = prev[j - 1] + cost;
        if (ins < v) v = ins;
        if (sub < v) v = sub;
        if (i > 1 && j > 1 && ca === b.charCodeAt(j - 2) && a.charCodeAt(i - 2) === b.charCodeAt(j - 1)) {
          const tr = prev[j - 2] + 1;
          if (tr < v) v = tr;
        }
        cur[j] = v;
      }
      const tmp = prev;
      prev = cur;
      cur = tmp;
    }
    return prev[bl];
  }

  function keyboardish(from, to) {
    if (from.length !== to.length) return false;
    let diffs = 0;
    for (let i = 0; i < from.length; i++) {
      if (from[i] === to[i]) continue;
      diffs += 1;
      const n = KEYS[from[i]] || "";
      if (n.indexOf(to[i]) === -1) return false;
    }
    return diffs === 1;
  }

  function known(word) {
    const w = String(word || "").toLowerCase();
    return !!(extraKnown[w] || SPELL_MAP[w]);
  }

  function bestGuess(word) {
    const raw = String(word || "");
    const w = raw.toLowerCase().replace(/[^a-z']/g, "");
    if (!w || w.length < 3) return null;
    if (SPELL_MAP[w]) return SPELL_MAP[w];
    if (known(w)) return null;
    if (/[A-Z]/.test(raw.slice(1))) return null;
    const ch = w.charAt(0);
    const pool = (byStart[ch] || []).concat(byStart[w.charAt(1)] || []);
    let best = null;
    let bestD = 3;
    const seen = Object.create(null);
    for (let i = 0; i < pool.length; i++) {
      const cand = pool[i];
      if (!cand || seen[cand] || Math.abs(cand.length - w.length) > 2) continue;
      seen[cand] = 1;
      let d = distance(w, cand);
      if (d > 2) continue;
      if (keyboardish(w, cand)) d -= 0.4;
      if (cand.indexOf(w) === 0) d -= 0.2;
      if (d < bestD) {
        bestD = d;
        best = cand;
      }
    }
    if (!best) return null;
    if (bestD <= 1.2) return best;
    if (w.length >= 6 && bestD <= 2) return best;
    return null;
  }

  function suggestions(word) {
    const w = String(word || "").toLowerCase().replace(/[^a-z']/g, "");
    const out = [];
    if (!w) return out;
    if (SPELL_MAP[w] && SPELL_MAP[w] !== w) out.push(SPELL_MAP[w]);
    const guess = bestGuess(w);
    if (guess && out.indexOf(guess) === -1) out.push(guess);
    const ch = w.charAt(0);
    const pool = byStart[ch] || [];
    for (let i = 0; i < pool.length && out.length < 5; i++) {
      const cand = pool[i];
      if (cand.indexOf(w) === 0 && cand !== w && out.indexOf(cand) === -1) out.push(cand);
    }
    if (out.length < 4 && w.length >= 3) {
      for (let i = 0; i < pool.length && out.length < 5; i++) {
        const cand = pool[i];
        if (distance(w, cand) === 1 && out.indexOf(cand) === -1) out.push(cand);
      }
    }
    return out.slice(0, 5);
  }

  function nextWords(text) {
    const t = String(text || "").toLowerCase().replace(/\s+/g, " ").trim();
    const keys = Object.keys(NEXT).sort((a, b) => b.length - a.length);
    for (let i = 0; i < keys.length; i++) {
      if (t.endsWith(keys[i])) return NEXT[keys[i]];
    }
    return [];
  }

  function matchCase(src, fix) {
    if (!src || !fix) return fix;
    if (src === src.toUpperCase() && src.length > 1) return fix.toUpperCase();
    if (src.charAt(0) === src.charAt(0).toUpperCase()) {
      return fix.charAt(0).toUpperCase() + fix.slice(1);
    }
    return fix;
  }

  function tidyWriting(text, mode) {
    if (!text || !String(text).trim()) return text;
    let s = String(text)
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[\u201C\u201D]/g, '"')
      .replace(/\s+/g, " ")
      .trim();
    s = s.replace(/\bfull stop\b/gi, ".")
      .replace(/\bquestion mark\b/gi, "?")
      .replace(/\bexclamation mark\b/gi, "!")
      .replace(/\bcomma\b/gi, ",");
    s = s.replace(/\s+([.,!?])/g, "$1");
    s = s.replace(/([.,!?])(?=[^\s])/g, "$1 ");
    s = s.replace(/\s+/g, " ").trim();
    PHRASES.forEach((pair) => { s = s.replace(pair[0], pair[1]); });
    s = s.replace(/\b([A-Za-z']+)\b/g, (all, word) => {
      const lower = word.toLowerCase();
      if (/^\d/.test(word)) return word;
      if (SPELL_MAP[lower]) return matchCase(word, SPELL_MAP[lower]);
      const guess = bestGuess(word);
      if (guess) return matchCase(word, guess);
      return word;
    });
    s = s.replace(/\bi\b/g, "I");
    s = s.replace(/\bi'm\b/gi, "I'm");
    s = s.replace(/\bi've\b/gi, "I've");
    s = s.replace(/\bi'll\b/gi, "I'll");
    s = s.replace(/\bi'd\b/gi, "I'd");
    if (mode === "title") {
      return s.split(" ").map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : w)).join(" ");
    }
    s = s.replace(/\ba (?!(unique|university|european|one|once|use|useful|unit|euro|hour)\b)([aeiou])/gi, "an $2");
    s = s.replace(/(^|[.!?]\s+)([a-z])/g, (all, p, c) => p + c.toUpperCase());
    if (mode === "sentence" && s.length > 12 && !/[.!?]$/.test(s)) s += ".";
    return s;
  }

  function ensureRow(el) {
    if (!el || !el.id) return null;
    let row = document.querySelector('.predict-row[data-for="' + el.id + '"]');
    if (!row) {
      row = document.createElement("div");
      row.className = "predict-row";
      row.dataset.for = el.id;
      const after = el.nextElementSibling;
      if (after && after.classList.contains("speak-row")) after.insertAdjacentElement("afterend", row);
      else el.insertAdjacentElement("afterend", row);
    }
    return row;
  }

  function lastToken(text) {
    const m = String(text || "").match(/([A-Za-z']+)$/);
    return m ? m[1] : "";
  }

  function applyChip(el, from, to) {
    const v = el.value;
    if (from) {
      const re = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\s*$");
      if (re.test(v)) {
        el.value = v.replace(re, to);
      } else {
        el.value = v.replace(new RegExp("\\b" + from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b"), to);
      }
    } else {
      el.value = (v.replace(/\s+$/, "") + " " + to).replace(/^\s+/, "");
    }
    fireInput(el);
    el.focus();
  }

  function renderPredict(el) {
    const row = ensureRow(el);
    if (!row) return;
    const token = lastToken(el.value);
    const chips = [];
    if (token && !known(token) && token.length >= 3) {
      suggestions(token).forEach((s) => chips.push({ from: token, to: s, label: s }));
    } else {
      nextWords(el.value).forEach((s) => chips.push({ from: "", to: s, label: s }));
    }
    row.innerHTML = "";
    if (!chips.length) return;
    const label = document.createElement("span");
    label.className = "predict-label";
    label.textContent = token && !known(token) ? "Did you mean:" : "Next:";
    row.appendChild(label);
    chips.forEach((c) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "predict-chip";
      btn.textContent = c.label;
      btn.addEventListener("mousedown", (ev) => {
        ev.preventDefault();
        applyChip(el, c.from, matchCase(c.from || c.to, c.to));
        renderPredict(el);
      });
      row.appendChild(btn);
    });
  }

  function applyTidy(el) {
    if (!el || el.type === "number") return;
    const mode = el.dataset.tidy || (el.tagName === "TEXTAREA" ? "sentence" : "short");
    const before = el.value;
    const after = tidyWriting(before, mode);
    let note = el.id ? document.querySelector('.tidy-note[data-for="' + el.id + '"]') : null;
    if (after === before) {
      if (note) note.textContent = "";
      renderPredict(el);
      return;
    }
    el.value = after;
    fireInput(el);
    if (!note && el.id) {
      note = document.createElement("p");
      note.className = "tidy-note";
      note.dataset.for = el.id;
      const row = el.nextElementSibling;
      if (row && row.classList.contains("predict-row")) row.insertAdjacentElement("afterend", note);
      else if (row && row.classList.contains("speak-row")) row.insertAdjacentElement("afterend", note);
      else el.insertAdjacentElement("afterend", note);
    }
    if (note) note.textContent = "Spelling and grammar tidied — check it still says what you meant.";
    renderPredict(el);
  }

  function tidyAllWriting() {
    document.querySelectorAll("[data-tidy]").forEach(applyTidy);
  }

  function watchWriting(el, mode) {
    if (!el) return;
    el.dataset.tidy = mode;
    el.setAttribute("spellcheck", "true");
    el.setAttribute("lang", "en-GB");
    el.autocapitalize = "sentences";
    el.autocomplete = "on";
    if (el.dataset.predictBound === "1") return;
    el.dataset.predictBound = "1";
    let t = null;
    el.addEventListener("input", () => {
      clearTimeout(t);
      t = setTimeout(() => renderPredict(el), 180);
    });
    el.addEventListener("blur", () => applyTidy(el));
    el.addEventListener("change", () => applyTidy(el));
  }

  global.DDWriting = {
    tidyWriting: tidyWriting,
    applyTidy: applyTidy,
    tidyAllWriting: tidyAllWriting,
    watchWriting: watchWriting,
    addKnown: addKnown,
    fireInput: fireInput,
    suggestions: suggestions
  };
})(window);
