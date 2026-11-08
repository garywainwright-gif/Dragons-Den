// DDMentor part 3 of 4 — the Den (Dragons, deals, rewrite pitch).
// Loaded last by DDMentor.html. Merge back: paste into the third <script> block.
  (function () {
const DRAGONS = [
      {
        id: "spark",
        name: "Spark Patel",
        short: "Spark",
        skill: "How inventions actually work",
        interest: "Tech, gadgets, and step-by-step design",
        img: "images/dragon-spark.png?v=human",
        voice: { lang: "en-GB", gender: "female", pitch: 1.28, rate: 1.08, keywords: ["samantha", "zira", "sonia", "hazel", "libby", "susan", "female"] },
        intro: function (p, n) {
          return "Hello, " + n + ". I am Spark Patel. I made my money in gadgets and software. I care whether " + (p.name || "your product") + " actually works — not the waffle, the steps. If you cannot explain it simply, I am out.";
        },
        question: function (p, n, m) {
          return n + ", I am Spark. You say " + (p.name || "this product") + " " + lcFirst(p.does || "does something useful") + ". Walk me through the first time a customer uses it. What do they do, step by step?";
        },
        react: function (ans, p) {
          if (thin(ans)) return withName("that is thin. I need the actual steps — first they pick it up, then what?");
          return withName("all right. I will remember how " + (p.name || "it") + " is supposed to work.");
        },
        advice: function (p) {
          return withName("I am Spark. That answer was not enough for me. When you come back, I want the first time someone uses " + (p.name || "your product") + ". First they pick it up or open it. Then what do they do. Then what do they see or feel. Then the result. Use first, then, after that. Talk to me, not to a poster.");
        },
        marketKeys: ["supplier", "batch", "make", "maker", "factory", "check", "quality", "late", "parts", "workshop"],
        marketQuestion: function (p, n) {
          return n + ", I am Spark. Round two. If the first batch of " + (p.name || "this product") + " is late, or the parts are wrong, what do you do? Who makes it, and how do you check it is good enough to sell?";
        },
        marketReact: function (ans) {
          if (thin(ans) || !hasKeys(ans, this.marketKeys)) return withName("that is not a making plan. Name a maker, a check, and what you do if a batch is late or wrong.");
          return withName("better. I can picture who makes it and how you catch a bad batch.");
        },
        marketAdvice: function (p) {
          return withName("I am Spark. I still do not know who makes " + (p.name || "this") + ". Next time, tell me: a workshop, a factory, or you. Tell me one check you do before it is sold. And tell me your backup if a batch is late or the parts are wrong — a second supplier, a smaller first order, or you making a few yourself. That is what I need to hear.");
        }
      },
      {
        id: "ledger",
        name: "Ledger Okonkwo",
        short: "Ledger",
        skill: "Costs, profit, and valuation",
        interest: "Whether the numbers add up today",
        img: "images/dragon-ledger.png?v=human",
        voice: { lang: "en-GB", gender: "male", pitch: 0.72, rate: 0.88, keywords: ["george", "david", "ryan", "mark", "ravi", "male", "daniel"] },
        intro: function (p, n) {
          return n + ", I am Ledger Okonkwo. I read the accounts before I read the dream. If your pitch does not match the money, customer, or marketing boxes, I will pick one difference and ask why. Then I will ask about valuation.";
        },
        question: function (p, n, m) {
          const gaps = boxMismatches(p);
          if (gaps.length) {
            return n + ", I am Ledger. I compared your pitch with the money, customer, and marketing boxes. They do not match. " + gaps.join(" ") + " Why do they differ, " + n + " — which version is true?";
          }
          const valBit = Number.isFinite(m.valuation)
            ? "You want " + moneyLabel(m.ask) + " for " + m.equity + " percent. That values " + (p.name || "the company") + " at " + moneyLabel(m.valuation) + ". "
            : "Look at the amount you asked for, and the percent you offered. ";
          return n + ", I am Ledger. " + valBit + "Why is it worth that today — not in five years, today?";
        },
        react: function (ans, p) {
          if (boxMismatches(p).length) {
            if (thin(ans)) return withName("that is not good enough. Either the speech or the boxes must change so both tell the same story.");
            return withName("noted. Fix the mismatch before we talk about a deal. I invest in one set of figures, not two.");
          }
          if (thin(ans)) return withName("that is guesswork. A valuation needs a reason: costs, sales, or something you already built.");
          return withName("noted. I still may not agree with the number. Thank you.");
        },
        advice: function (p, rec) {
          if (rec && rec.gap) {
            return withName("I am Ledger. I heard two different stories, and I will not invest in that. Next time, pick one version — the pitch or the boxes — and say the real numbers: cost to make, selling price, and how much you are asking for. The difference I spotted was this. " + rec.gap);
          }
          return withName("I am Ledger. A valuation is what the company is worth today, not in five years. Do not tell me it will be huge. Give me one reason you already have: what it costs to make, how many you expect to sell this month, or something you have already built. That is how you answer me.");
        },
        marketKeys: ["cost", "price", "profit", "supplier", "percent", "goods", "raise", "pay"],
        marketQuestion: function (p, n, m) {
          const costBit = Number.isFinite(m.cost)
            ? " You said it costs " + moneyLabel(m.cost) + " to make and sells for " + moneyLabel(m.sell) + "."
            : "";
          return n + ", I am Ledger. Round two — cost of goods." + costBit + " If your supplier puts the cost of goods up by 20 percent next month, what happens to your selling price and your profit? Do you pay it, change supplier, or raise the price?";
        },
        marketReact: function (ans) {
          if (thin(ans) || !hasKeys(ans, this.marketKeys)) return withName("that is not a cost plan. Pay it, change supplier, or raise the price — pick one and say what happens to profit.");
          return withName("noted. I want to see you protect the margin, not hope the supplier stays kind.");
        },
        marketAdvice: function (p) {
          return withName("I am Ledger. If the cost of goods goes up, I need one move from you. Pay it and take less profit. Change supplier. Or raise the selling price. Next time, pick one, and tell me what happens to profit, and whether people would still buy " + (p.name || "it") + ".");
        }
      },
      {
        id: "harvest",
        name: "Harvest Byrne",
        short: "Harvest",
        skill: "Real customers and shops",
        interest: "Who buys it, and where they pick it up",
        img: "images/dragon-harvest.png?v=human",
        voice: { lang: "en-GB", gender: "female", pitch: 0.92, rate: 0.92, keywords: ["hazel", "susan", "moira", "catherine", "female"] },
        intro: function (p, n) {
          return "Come here a minute, " + n + ". I am Harvest Byrne. I built shops and food brands. I only care about a real person with money in their pocket. If you say everyone, I am already bored.";
        },
        question: function (p, n, m) {
          const who = p.custWho || p.who || "your customer";
          const where = p.custWhere ? " You said they can buy it from " + p.custWhere + "." : "";
          return n + ", I am Harvest. You say " + (p.name || "this") + " is for " + who + "." + where + " Name one real place I would see someone choose it — and why they would stop doing what they do now.";
        },
        react: function (ans, p) {
          if (thin(ans)) return withName("that is too vague. A shop, a stall, a website, a club — pick one and tell me why they switch.");
          return withName("that sounds like a person I can picture. Good.");
        },
        advice: function (p) {
          return withName("I am Harvest. Everyone is not a customer. Next time, give me one real scene. Name one place — a shop, a stall, a website, or a club. Name one kind of person who would stop there. And tell me why they would stop doing what they do now. If they buy it from " + (p.custWhere || "a place") + ", use that place, and add the why.");
        },
        marketKeys: ["shop", "deliver", "post", "van", "stock", "late", "send", "stall", "warehouse"],
        marketQuestion: function (p, n) {
          const where = p.custWhere ? " You said people buy it from " + p.custWhere + "." : "";
          return n + ", I am Harvest. Round two — logistics." + where + " How does " + (p.name || "this") + " get from the maker to the customer without going missing, arriving late, or costing too much to send?";
        },
        marketReact: function (ans) {
          if (thin(ans) || !hasKeys(ans, this.marketKeys)) return withName("that is not logistics. How does it travel, who holds the stock, and what if a delivery is late?");
          return withName("that is a route I can follow. Good.");
        },
        marketAdvice: function (p) {
          return withName("I am Harvest. I need the journey. Maker, then a box or a van or the post, then " + (p.custWhere || "the shop or stall") + ", then the customer. Tell me who holds the stock. Then tell me one backup if a delivery is late. That is logistics. That is what I am asking.");
        }
      },
      {
        id: "stride",
        name: "Stride Reid",
        short: "Stride",
        skill: "Brand, sport, and getting noticed",
        interest: "How people hear about it without a huge ad budget",
        img: "images/dragon-stride.png?v=human",
        voice: { lang: "en-GB", gender: "male", pitch: 1.08, rate: 1.12, keywords: ["ryan", "mark", "george", "daniel", "male"] },
        intro: function (p, n) {
          return n + ", respect. I am Stride Reid. I back brands that young people actually talk about. Posters are fine. A story people repeat is better. Show me how " + (p.name || "this") + " gets known.";
        },
        question: function (p, n, m) {
          const hear = p.custHear ? " You wrote that people hear about it through " + p.custHear + "." : "";
          return n + ", I am Stride." + hear + " If you had almost no money for adverts, how would " + (p.name || "your product") + " still become known this term?";
        },
        react: function (ans, p) {
          if (thin(ans)) return withName("that is not a plan. Coaches, group chats, a stall, a demo — give me a move you could actually do.");
          return withName("now you are talking. Cheap and loud beats expensive and invisible.");
        },
        advice: function (p) {
          return withName("I am Stride. That was not a plan I can back. Next time, give me one cheap move you could actually do this term — a coach, a group chat, a stall, a demo, or a poster in a real place. Tell me who does it, and when. If people hear about it through " + (p.custHear || "your marketing") + ", turn that into an action, not a list.");
        },
        marketKeys: ["stock", "fair", "stall", "leftover", "van", "box", "time", "match", "enough"],
        marketQuestion: function (p, n) {
          return n + ", I am Stride. Round two. Match day, a market, a school fair — how do you get enough " + (p.name || "stock") + " there on time, and what do you do with leftover boxes?";
        },
        marketReact: function (ans) {
          if (thin(ans) || !hasKeys(ans, this.marketKeys)) return withName("that is not a stall plan. How does the stock get there, and what happens to leftovers?");
          return withName("now you are talking about real boxes in a real place.");
        },
        marketAdvice: function (p) {
          return withName("I am Stride. I want boxes in a real place. Next time, name the event. Tell me how the stock of " + (p.name || "your product") + " gets there — bag, van, or a lift. How many you take. And what you do with leftovers — sell next time, store, or send them back. Keep it cheap. Keep it this term.");
        }
      },
      {
        id: "willow",
        name: "Willow El-Masri",
        short: "Willow",
        skill: "Green choices and the long game",
        interest: "Waste, fairness, and whether it lasts",
        img: "images/dragon-willow.png?v=human",
        voice: { lang: "en-GB", gender: "female", pitch: 1.05, rate: 0.86, keywords: ["libby", "sonia", "hazel", "zira", "female"] },
        intro: function (p, n) {
          return "Gently does it, " + n + ". I am Willow El-Masri. I invest in ideas that do not wreck the next ten years. I will ask what happens when " + (p.name || "your product") + " is finished with — bin, repair, or reuse.";
        },
        question: function (p, n, m) {
          return n + ", I am Willow. When " + (p.name || "this product") + " is used up, outgrown, or broken, what happens to it? And is that fair on young customers and on the planet?";
        },
        react: function (ans, p) {
          if (thin(ans)) return withName("the bin is not a plan. Repair, recycle, a take-back box — even a small idea is better than silence.");
          return withName("thank you. I can work with a founder who has thought past the first sale.");
        },
        advice: function (p) {
          return withName("I am Willow. The bin is not an answer I can live with. When you come back, tell me what happens when " + (p.name || "this product") + " is used up, broken, or outgrown. Repair, recycle, reuse, or a take-back box. Then tell me why that is fair on young customers and on the planet. Speak to me as if I am sitting here.");
        },
        marketKeys: ["pack", "waste", "supplier", "near", "ship", "plastic", "fair", "box", "local"],
        marketQuestion: function (p, n) {
          return n + ", I am Willow. Round two. Who supplies the materials for " + (p.name || "this") + ", and what waste does sending it around create? Is there a nearer, cleaner way?";
        },
        marketReact: function (ans) {
          if (thin(ans) || !hasKeys(ans, this.marketKeys)) return withName("shipping waste is still waste. Name a supplier idea and one way to cut packing or miles.");
          return withName("thank you. A nearer, cleaner supply is something I can back.");
        },
        marketAdvice: function (p) {
          return withName("I am Willow. I need to hear the supply trail. Where do the materials or the packing for " + (p.name || "this") + " come from? What waste does sending it around create — plastic, long lorry miles, extra boxes? Then give me one cleaner move: a local supplier, less packing, or fewer leftover miles. That is how you answer me.");
        }
      }
    ];

    let product = null;
    let player = "Entrepreneur";
    let qIndex = 0;
    let answers = [];
    let rec = null;
    let weakAnswers = [];
    let coachIndex = 0;
    let round = 1;
    let coachCounts = {};
    let round1Answers = [];
    let round2Answers = [];
    let decisions = [];
    let dealIndex = 0;
    let redoPass = false;
    let redoQueue = [];

    function playerFirst() {
      let n = String(player || "").trim().split(/\s+/)[0];
      if (!n || n.toLowerCase() === "entrepreneur") {
        const pitch = product ? getPitchText(product) : "";
        const found = String(pitch).match(/my name is\s+([A-Za-z][A-Za-z'-]*)/i);
        if (found) n = found[1];
      }
      if (!n || n.toLowerCase() === "entrepreneur") return "entrepreneur";
      return n.charAt(0).toUpperCase() + n.slice(1);
    }

    function withName(text) {
      const n = playerFirst();
      const trimmed = String(text || "").trim();
      if (!trimmed) return trimmed;
      if (trimmed.toLowerCase().indexOf(n.toLowerCase() + ",") === 0) return trimmed;
      const m = trimmed.match(/^(\w+)/);
      const keep = m && (m[1] === "I" || m[1] === "I'm");
      const rest = keep ? trimmed : trimmed.charAt(0).toLowerCase() + trimmed.slice(1);
      return n + ", " + rest;
    }

    function lcFirst(s) {
      s = String(s || "");
      if (!s) return s;
      return s.charAt(0).toLowerCase() + s.slice(1);
    }

    function thin(ans) {
      return String(ans || "").trim().split(/\s+/).filter(Boolean).length < 10;
    }

    function hasKeys(ans, keys) {
      const t = String(ans || "").toLowerCase();
      return (keys || []).some((k) => t.indexOf(k) !== -1);
    }

    function isPushback(d, ans, reaction, p) {
      if (thin(ans)) return true;
      if (round === 2 && d.marketKeys && !hasKeys(ans, d.marketKeys)) return true;
      if (round === 1 && d && d.id === "ledger" && boxMismatches(p).length) return true;
      return /thin|not a plan|not good enough|too vague|guesswork|bin is not a plan|must change|mismatch|not a making plan|not a cost plan|not logistics|not a stall plan|shipping waste/.test(String(reaction || "").toLowerCase());
    }

    function escapeHtml(s) {
      return String(s || "").replace(/[&<>"']/g, (c) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
      }[c]));
    }

    function moneyLabel(n) {
      if (!Number.isFinite(n)) return "your figure";
      const rounded = Math.round(n * 100) / 100;
      if (Math.abs(rounded - Math.round(rounded)) < 1e-9) return "£" + String(Math.round(rounded));
      return "£" + rounded.toFixed(2);
    }

    function moneyBits(p) {
      const cost = Number(p.unitCost);
      const sell = Number(p.sellPrice);
      const qty = p.salesChoice === "own" ? Number(p.salesOwn) : Number(p.salesChoice);
      const sold = p.projChoice === "own" ? Number(p.projOwn) : Number(p.projChoice);
      let marketing = 0;
      let hasMarket = false;
      (p.marketPicks || []).forEach((n) => {
        const v = Number(n);
        if (Number.isFinite(v)) {
          marketing += v;
          hasMarket = true;
        }
      });
      if (p.marketOwnOn) {
        const own = Number(p.marketOwn);
        if (Number.isFinite(own) && own >= 0) {
          marketing += own;
          hasMarket = true;
        }
      }
      if (!hasMarket) marketing = NaN;
      const ask = Number(p.askAmount);
      const equity = Number(p.equityPct);
      const profit = (Number.isFinite(sell) && Number.isFinite(cost)) ? sell - cost : NaN;
      const valuation = (ask > 0 && equity > 0) ? ask / (equity / 100) : NaN;
      const makeTotal = (Number.isFinite(cost) && Number.isFinite(qty) && qty > 0) ? cost * qty : NaN;
      const monthSales = (Number.isFinite(sell) && Number.isFinite(sold) && sold > 0) ? sell * sold : NaN;
      const yearSales = Number.isFinite(monthSales) ? monthSales * 12 : NaN;
      const yearGap = (Number.isFinite(yearSales) && Number.isFinite(makeTotal) && Number.isFinite(marketing))
        ? yearSales - (makeTotal * 12 + marketing * 12) : NaN;
      return { cost, sell, qty, sold, marketing, ask, equity, profit, valuation, makeTotal, monthSales, yearSales, yearGap };
    }

    function getPitchText(p) {
      const parts = [p.pitch || ""];
      const stages = p.pitchStages || {};
      ["hello", "problem", "product", "customer", "money", "ask"].forEach((k) => {
        if (stages[k]) parts.push(stages[k]);
      });
      return parts.join(" ");
    }

    function escapeRe(s) {
      return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function figureInPitch(pitch, n) {
      if (!Number.isFinite(n)) return true;
      const rounded = Math.round(n * 100) / 100;
      if (rounded === 0) return true;
      const variants = new Set();
      variants.add(String(rounded));
      variants.add(rounded.toFixed(2));
      variants.add(rounded.toFixed(0));
      if (rounded === Math.floor(rounded)) {
        variants.add(Math.floor(rounded).toLocaleString("en-GB"));
      }
      const compact = String(pitch || "").replace(/,/g, "");
      for (const v of variants) {
        const needle = String(v).replace(/,/g, "");
        if (!needle || needle === "0" || needle === "0.00") continue;
        const re = new RegExp("(?<!\\d)" + escapeRe(needle) + "(?!\\d)");
        if (re.test(compact)) return true;
      }
      return false;
    }

    function pitchMoneyAmounts(pitch) {
      const t = String(pitch || "").replace(/,/g, "");
      const out = [];
      const re = /£\s*(\d+(?:\.\d+)?)/g;
      let m;
      while ((m = re.exec(t))) out.push(Number(m[1]));
      return out;
    }

    function distinctiveWords(text) {
      const stop = {
        that: 1, this: 1, with: 1, from: 1, they: 1, them: 1, their: 1, have: 1, will: 1, than: 1,
        then: 1, when: 1, what: 1, which: 1, whom: 1, your: 1, you: 1, are: 1, was: 1, were: 1,
        been: 1, being: 1, because: 1, about: 1, into: 1, after: 1, before: 1, would: 1, could: 1,
        should: 1, need: 1, also: 1, just: 1, only: 1, very: 1, more: 1, some: 1, any: 1, can: 1,
        buy: 1, the: 1, and: 1, for: 1, who: 1, its: 1, our: 1, but: 1, not: 1, all: 1, people: 1,
        someone: 1, something: 1, through: 1, them: 1
      };
      return String(text || "").toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 3 && !stop[w]);
    }

    function fieldMissingFromPitch(pitch, field) {
      const words = distinctiveWords(field);
      if (words.length === 0) return false;
      const p = String(pitch || "").toLowerCase();
      const hit = words.filter((w) => p.indexOf(w) !== -1).length;
      return hit < Math.ceil(words.length * 0.5);
    }

    function clip(s, n) {
      s = String(s || "").replace(/\s+/g, " ").trim();
      if (s.length <= n) return s;
      return s.slice(0, n - 1) + "…";
    }

    function productMismatches(p) {
      const pitch = getPitchText(p);
      const gaps = [];
      if (p.name && fieldMissingFromPitch(pitch, p.name)) {
        gaps.push("Your product is called " + p.name + " in the box, but the pitch barely uses that name.");
      }
      if (p.does && fieldMissingFromPitch(pitch, p.does)) {
        gaps.push("The box says it " + lcFirst(clip(p.does, 120)) + ". I did not hear that clearly in the pitch.");
      }
      return gaps;
    }

    function customerMismatches(p) {
      const pitch = getPitchText(p);
      const gaps = [];
      const who = p.custWho || p.who;
      if (who && fieldMissingFromPitch(pitch, who)) {
        gaps.push("The customer box says it is for " + clip(who, 90) + ". The pitch does not match that.");
      }
      if (p.custNeed && fieldMissingFromPitch(pitch, p.custNeed)) {
        gaps.push("The need box says: " + clip(p.custNeed, 90) + ". The pitch does not say the same problem.");
      }
      if (p.custWhere && fieldMissingFromPitch(pitch, p.custWhere)) {
        gaps.push("The boxes say people buy it from " + clip(p.custWhere, 80) + ". The pitch does not.");
      }
      return gaps;
    }

    function hearMismatches(p) {
      const pitch = getPitchText(p);
      const gaps = [];
      if (p.custHear && fieldMissingFromPitch(pitch, p.custHear)) {
        gaps.push("The customer box says people hear about it through " + clip(p.custHear, 90) + ". I did not hear that in the pitch.");
      }
      return gaps;
    }

    function boxMismatches(p) {
      const m = moneyBits(p);
      const pitch = getPitchText(p);
      const moneyChecks = [
        { label: "it costs " + moneyLabel(m.cost) + " to make", value: m.cost },
        { label: "it sells for " + moneyLabel(m.sell), value: m.sell },
        { label: "you asked for " + moneyLabel(m.ask), value: m.ask },
        { label: "you offered " + m.equity + " percent", value: m.equity },
        { label: "you make " + m.qty + " a month", value: m.qty },
        { label: "you expect to sell " + m.sold + " a month", value: m.sold },
        { label: "marketing is " + moneyLabel(m.marketing) + " a month", value: m.marketing }
      ];
      for (let i = 0; i < moneyChecks.length; i++) {
        const c = moneyChecks[i];
        if (Number.isFinite(c.value) && c.value > 0 && !figureInPitch(pitch, c.value)) {
          return ["Your boxes say " + c.label + ", but I did not hear that figure in the pitch. Why is that different — which version is true?"];
        }
      }
      const cust = customerMismatches(p);
      if (cust.length) return [cust[0]];
      const hear = hearMismatches(p);
      if (hear.length) return [hear[0]];
      const formVals = moneyChecks.map((c) => c.value).filter((v) => Number.isFinite(v) && v > 0);
      const extras = pitchMoneyAmounts(pitch).filter((amt) => !formVals.some((v) => Math.abs(v - amt) < 0.02));
      if (extras.length) {
        return ["The pitch mentions " + moneyLabel(extras[0]) + ", which I cannot find in the money boxes. Why is that figure in the speech?"];
      }
      return [];
    }

    function moneyMismatches(p) {
      const m = moneyBits(p);
      const pitch = getPitchText(p);
      const gaps = [];
      const checks = [
        { label: "it costs " + moneyLabel(m.cost) + " to make", value: m.cost },
        { label: "it sells for " + moneyLabel(m.sell), value: m.sell },
        { label: "profit on one is " + moneyLabel(m.profit), value: m.profit },
        { label: "you make " + m.qty + " a month", value: m.qty },
        { label: "you expect to sell " + m.sold + " a month", value: m.sold },
        { label: "marketing is " + moneyLabel(m.marketing) + " a month", value: m.marketing },
        { label: "you asked for " + moneyLabel(m.ask), value: m.ask },
        { label: "you offered " + m.equity + " percent", value: m.equity },
        { label: "that values the business at " + moneyLabel(m.valuation), value: m.valuation }
      ];
      const missing = checks.filter((c) => Number.isFinite(c.value) && c.value > 0 && !figureInPitch(pitch, c.value));
      if (missing.length) {
        gaps.push("In the money boxes, " + missing.map((c) => c.label).join("; ") + " — but those figures are missing from the pitch.");
      }
      const formVals = checks.map((c) => c.value).filter((v) => Number.isFinite(v) && v > 0);
      const extras = pitchMoneyAmounts(pitch).filter((amt) => {
        return !formVals.some((v) => Math.abs(v - amt) < 0.02);
      });
      const uniqueExtras = [];
      extras.forEach((amt) => {
        if (!uniqueExtras.some((x) => Math.abs(x - amt) < 0.02)) uniqueExtras.push(amt);
      });
      if (uniqueExtras.length) {
        gaps.push("The pitch mentions " + uniqueExtras.slice(0, 4).map(moneyLabel).join(", ") + ", which I cannot find in the money boxes.");
      }
      return gaps;
    }

    function matchSummary(p) {
      if (!boxMismatches(p).length) return "Check: the pitch matches the money, customer, and marketing boxes.";
      return "Check: the pitch does not fully match those boxes. Ledger will ask why. The others will stay on their specialist questions.";
    }

    function loadProduct() {
      const demo = {
        name: "BootDry Pegs",
        does: "Pegs with vents that clip muddy boots open so they dry overnight.",
        who: "Footballers and parents after wet matches",
        custWho: "Footballers and parents after wet matches",
        custNeed: "After a wet match, football boots stay soggy overnight. They smell, they get ruined, and parents are tired of stuffing them with newspaper.",
        custWhere: "sports shops and club stalls",
        custHear: "coaches, team WhatsApp groups, and posters at the pitch",
        unitCost: "2.50",
        sellPrice: "7.99",
        salesChoice: "own",
        salesOwn: "200",
        projChoice: "own",
        projOwn: "180",
        marketPicks: [80, 250],
        askAmount: "5000",
        equityPct: "15",
        pitch: "Hello, my name is Sam, and I am here to pitch BootDry Pegs. The problem is this: after a wet match, football boots stay soggy overnight. They smell, they get ruined, and parents are tired of stuffing them with newspaper. BootDry Pegs clip the boots open with little vents, so air can get in and they dry by morning — no batteries, no heater. It is for footballers and parents after wet matches. They can buy it from sports shops and club stalls. They will hear about it from coaches, team WhatsApp groups, and posters at the pitch. Each set costs £2.50 to make and sells for £7.99, so the profit is £5.49 on each one. I plan to make 200 a month, which costs £500 to make. I expect to sell 180 a month — about £1,438 of sales, or about £17,258 a year. I will spend £330 a month on posters and social ads. Yearly sales compared with yearly costs would leave a profit of about £6,658. I am asking for £5,000 for 15% of the business. That values the company at about £33,333. Thank you. I am ready for your questions.",
        pitchStages: {}
      };
      if (window.DDPlay && window.DDPlay.example) {
        let savedEx = null;
        try { savedEx = JSON.parse(localStorage.getItem("dd_example_product") || "null"); } catch (e) { savedEx = null; }
        product = savedEx && savedEx.name ? savedEx : demo;
        player = "Sam";
        return { demo: true, missing: false };
      }
      let saved = null;
      try {
        saved = JSON.parse(localStorage.getItem("dd_product") || "null");
        player = localStorage.getItem("dd_player") || "";
      } catch (e) {
        saved = null;
      }
      const ready = saved && saved.name && String(saved.pitch || "").length >= 40;
      if (ready) {
        product = saved;
        if (!player) player = "Entrepreneur";
        return { demo: false, missing: false };
      }
      product = saved || demo;
      if (!player || player.toLowerCase() === "entrepreneur") player = "Entrepreneur";
      return { demo: false, missing: true };
    }

    const voicesReady = new Promise((resolve) => {
      const grab = () => resolve(speechSynthesis.getVoices() || []);
      const now = speechSynthesis.getVoices();
      if (now && now.length) {
        resolve(now);
        return;
      }
      speechSynthesis.addEventListener("voiceschanged", grab, { once: true });
      setTimeout(grab, 800);
    });

    function scoreVoice(v, spec) {
      const name = (v.name || "").toLowerCase();
      const lang = (v.lang || "").toLowerCase();
      let score = 0;
      if (lang.indexOf("en-gb") === 0 || lang.indexOf("en_gb") === 0) score += 8;
      else if (lang.indexOf("en") === 0) score += 3;
      else return -1;
      spec.keywords.forEach((k) => {
        if (name.indexOf(k) !== -1) score += 5;
      });
      if (spec.gender === "female" && /female|woman|girl|hazel|zira|susan|sonia|libby|moira/.test(name)) score += 4;
      if (spec.gender === "male" && /male|man|george|david|ryan|mark|ravi|daniel|guy/.test(name)) score += 4;
      if (spec.gender === "female" && /male|george|david|ryan|mark|ravi|daniel/.test(name) && !/female/.test(name)) score -= 6;
      if (spec.gender === "male" && /female|hazel|zira|susan|sonia|libby/.test(name) && !/male/.test(name)) score -= 6;
      return score;
    }

    let voiceCache = {};
    async function voiceFor(spec) {
      const voices = await voicesReady;
      const key = spec.keywords.join("-") + spec.pitch;
      if (voiceCache[key]) return voiceCache[key];
      let best = null;
      let bestScore = -1;
      voices.forEach((v) => {
        const s = scoreVoice(v, spec);
        if (s > bestScore) {
          bestScore = s;
          best = v;
        }
      });
      voiceCache[key] = best;
      return best;
    }

    function stopSpeech() {
      try { speechSynthesis.cancel(); } catch (e) {}
    }
    window.stopDenSpeech = stopSpeech;

    async function speakDragon(dragon, text) {
      stopSpeech();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = dragon.voice.lang;
      u.pitch = dragon.voice.pitch;
      u.rate = dragon.voice.rate;
      const v = await voiceFor(dragon.voice);
      if (v) u.voice = v;
      speechSynthesis.speak(u);
    }

    function askOf(d) {
      const m = moneyBits(product);
      const n = playerFirst();
      return round === 2 ? d.marketQuestion(product, n, m) : d.question(product, n, m);
    }

    function reactOf(d, ans) {
      return round === 2 ? d.marketReact(ans, product) : d.react(ans, product);
    }

    function adviceOf(d, rec) {
      if (round === 2) return d.marketAdvice(product, rec);
      return d.advice ? d.advice(product, rec) : "Give a fuller, more specific answer next time.";
    }

    function setRoundChrome() {
      const badge = document.getElementById("round-badge");
      const title = document.getElementById("round-title");
      const lead = document.getElementById("round-lead");
      if (round === 2) {
        badge.textContent = "Stage 2 · Round 2 · Marketplace";
        title.textContent = "How does it actually get made and moved?";
        lead.textContent = "Logistics, suppliers, and the cost of goods. Same chairs. Fuller answers, please.";
      } else {
        badge.textContent = "Stage 2 · Round 1";
        title.textContent = "The Dragons will now ask";
        lead.textContent = "Five investors. Five skills. They have heard your pitch. Stay the entrepreneur — answer clearly, then wait for the next chair.";
      }
    }

    function hideFlow() {
      ["meet-panel", "ask-panel", "done-panel", "revise-panel", "coach-panel", "round-panel", "deal-panel", "outcome-panel"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.classList.add("hidden");
      });
    }

    function renderMeet() {
      const grid = document.getElementById("dragon-grid");
      grid.innerHTML = "";
      DRAGONS.forEach((d) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "dragon-card";
        card.innerHTML =
          "<img src=\"" + d.img + "\" alt=\"" + d.name + "\" />" +
          "<h3>" + d.short + "</h3>" +
          "<div class=\"role\">" + d.skill + "</div>";
        card.addEventListener("click", () => {
          document.querySelectorAll(".dragon-card").forEach((c) => c.classList.remove("active"));
          card.classList.add("active");
          speakDragon(d, d.intro(product, playerFirst()));
        });
        grid.appendChild(card);
      });
    }

    function chairsThisPass() {
      if (redoPass && redoQueue.length) {
        return redoQueue.map((id) => DRAGONS.find((d) => d.id === id)).filter(Boolean);
      }
      return DRAGONS;
    }

    function currentDragon() {
      return chairsThisPass()[qIndex];
    }

    function lastChairThisPass() {
      return qIndex >= chairsThisPass().length - 1;
    }

    function renderPips() {
      const box = document.getElementById("pips");
      box.innerHTML = "";
      chairsThisPass().forEach((_, i) => {
        const pip = document.createElement("span");
        pip.className = "pip" + (i < qIndex ? " done" : (i === qIndex ? " now" : ""));
        box.appendChild(pip);
      });
    }

    function showQuestion() {
      const d = currentDragon();
      const q = askOf(d);
      document.getElementById("ask-img").src = d.img;
      document.getElementById("ask-img").alt = d.name;
      document.getElementById("ask-name").textContent = d.name + " · " + (round === 2 ? "Marketplace" : d.interest);
      document.getElementById("ask-bubble").innerHTML =
        "<strong>" + d.short + " asks</strong><p style=\"margin:8px 0 0\">" + q + "</p>";
      document.getElementById("answer-box").value = "";
      document.getElementById("reaction").classList.add("hidden");
      document.getElementById("next-dragon").classList.add("hidden");
      document.getElementById("submit-ans").disabled = false;
      document.getElementById("listen-status").textContent = "";
      renderPips();
      speakDragon(d, q);
    }

    function stopListen() {
      if (rec) {
        try { rec.stop(); } catch (e) {}
        rec = null;
      }
      const btn = document.getElementById("speak-ans");
      btn.classList.remove("listening");
      btn.textContent = "Speak my answer";
    }

    document.getElementById("hear-q").addEventListener("click", () => {
      const d = currentDragon();
      speakDragon(d, askOf(d));
    });

    document.getElementById("stop-all").addEventListener("click", stopSpeech);
    document.getElementById("stop-q").addEventListener("click", () => {
      stopSpeech();
      stopListen();
    });

    document.getElementById("speak-ans").addEventListener("click", () => {
      const SpeechEngine = window.SpeechRecognition || window.webkitSpeechRecognition;
      const status = document.getElementById("listen-status");
      const btn = document.getElementById("speak-ans");
      const box = document.getElementById("answer-box");
      if (!SpeechEngine) {
        status.textContent = "Speaking-to-text needs Chrome or Edge.";
        return;
      }
      if (rec) {
        stopListen();
        status.textContent = "";
        return;
      }
      rec = new SpeechEngine();
      rec.lang = "en-GB";
      rec.interimResults = true;
      rec.onresult = (ev) => {
        let text = "";
        for (let i = 0; i < ev.results.length; i++) text += ev.results[i][0].transcript + " ";
        box.value = text.trim().slice(0, 800);
      };
      rec.onend = () => {
        rec = null;
        btn.classList.remove("listening");
        btn.textContent = "Speak my answer";
      };
      rec.onerror = () => {
        status.textContent = "Could not listen. Try Chrome or Edge.";
        stopListen();
      };
      try { rec.start(); } catch (e) {
        status.textContent = "Could not start the microphone.";
        rec = null;
        return;
      }
      btn.classList.add("listening");
      btn.textContent = "Stop listening";
      status.textContent = "Listening…";
    });

    document.getElementById("start-q").addEventListener("click", () => {
      stopSpeech();
      round = 1;
      qIndex = 0;
      answers = [];
      redoPass = false;
      redoQueue = [];
      setRoundChrome();
      hideFlow();
      document.getElementById("heard-panel").classList.remove("hidden");
      document.getElementById("ask-panel").classList.remove("hidden");
      showQuestion();
    });

    document.getElementById("submit-ans").addEventListener("click", () => {
      const d = currentDragon();
      const ans = document.getElementById("answer-box").value.trim();
      if (ans.length < 8) {
        document.getElementById("listen-status").textContent = "Give a fuller answer — at least a sentence.";
        return;
      }
      stopListen();
      const reaction = reactOf(d, ans);
      const rec = { gap: d.id === "ledger" ? (boxMismatches(product)[0] || "") : "", answer: ans };
      const record = {
        dragon: d.id,
        name: d.name,
        question: askOf(d),
        answer: ans,
        reaction: reaction,
        pushback: isPushback(d, ans, reaction, product),
        gap: rec.gap,
        advice: adviceOf(d, rec),
        round: round
      };
      const existing = answers.findIndex((a) => a.dragon === d.id);
      if (existing >= 0) answers[existing] = record;
      else answers.push(record);
      const box = document.getElementById("reaction");
      box.classList.remove("hidden");
      box.textContent = d.short + ": " + reaction;
      document.getElementById("submit-ans").disabled = true;
      const nxt = document.getElementById("next-dragon");
      nxt.classList.remove("hidden");
      nxt.textContent = lastChairThisPass()
        ? (redoPass
            ? (round === 1 ? "Go to the second questions" : "Hear their decisions")
            : (round === 1 ? "Finish this round" : "Hear their decisions"))
        : "Next Dragon";
      speakDragon(d, reaction);
    });

    document.getElementById("next-dragon").addEventListener("click", () => {
      stopSpeech();
      if (!lastChairThisPass()) {
        qIndex += 1;
        showQuestion();
        return;
      }
      try {
        localStorage.setItem("dd_den_answers", JSON.stringify(answers));
        localStorage.setItem("dd_den_done", "1");
      } catch (e) {}
      document.getElementById("ask-panel").classList.add("hidden");
      const weak = answers.filter((a) => a.pushback);
      if (weak.length && !redoPass) {
        weak.forEach((a) => {
          coachCounts[a.dragon] = (coachCounts[a.dragon] || 0) + 1;
        });
        startCoach(weak);
        return;
      }
      finishRound();
    });

    function startCoach(weak) {
      weakAnswers = weak;
      coachIndex = 0;
      hideFlow();
      document.getElementById("heard-panel").classList.add("hidden");
      document.getElementById("coach-panel").classList.remove("hidden");
      showCoach();
      document.getElementById("coach-panel").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function showCoach() {
      const a = weakAnswers[coachIndex];
      if (!a) return;
      const d = DRAGONS.find((x) => x.id === a.dragon) || {};
      const img = document.getElementById("coach-img");
      img.src = d.img || "";
      img.alt = a.name;
      document.getElementById("coach-name").textContent = a.name;
      document.getElementById("coach-progress").textContent =
        playerFirst() + ", this answer was too thin. Study " + (coachIndex + 1) + " of " + weakAnswers.length +
        (round === 2 ? " in the marketplace round. " : ". ") +
        "There is nothing to type until you answer once more. After that they move on, even if the new answer is still thin.";
      document.getElementById("coach-question").textContent = a.question;
      document.getElementById("coach-answer").textContent = a.answer || "(No answer.)";
      document.getElementById("coach-reaction").textContent = a.name + " said: " + (a.reaction || "");
      const spoken = a.advice || withName("that answer was too thin. Come back with a fuller, more specific answer. Talk to me.");
      document.getElementById("coach-advice").textContent = spoken;
      const btn = document.getElementById("coach-next");
      const last = coachIndex >= weakAnswers.length - 1;
      btn.textContent = last
        ? (round === 1 ? "Answer once more, then second questions" : "Answer once more, then they decide")
        : "Next weak answer";
      if (d && d.voice) speakDragon(d, spoken);
    }

    function repeatDragonQuestions() {
      stopSpeech();
      redoQueue = weakAnswers.map((a) => a.dragon);
      qIndex = 0;
      coachIndex = 0;
      redoPass = true;
      hideFlow();
      document.getElementById("heard-panel").classList.remove("hidden");
      document.getElementById("ask-panel").classList.remove("hidden");
      showQuestion();
      document.getElementById("ask-panel").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function finishRound() {
      if (round === 1) {
        round1Answers = answers.slice();
        if (redoPass) {
          beginRound2();
          return;
        }
        hideFlow();
        document.getElementById("heard-panel").classList.remove("hidden");
        document.getElementById("round-panel").classList.remove("hidden");
        document.getElementById("round-panel").scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      round2Answers = answers.slice();
      startDeals();
    }

    function beginRound2() {
      stopSpeech();
      round = 2;
      qIndex = 0;
      answers = [];
      redoPass = false;
      redoQueue = [];
      setRoundChrome();
      hideFlow();
      document.getElementById("heard-panel").classList.remove("hidden");
      document.getElementById("ask-panel").classList.remove("hidden");
      showQuestion();
      document.getElementById("ask-panel").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function keywordHits(text, words) {
      const t = String(text || "").toLowerCase();
      return (words || []).filter((w) => t.indexOf(w) !== -1).length;
    }

    function dragonDecision(d) {
      const a1 = round1Answers.find((a) => a.dragon === d.id);
      const a2 = round2Answers.find((a) => a.dragon === d.id);
      const text = ((a1 && a1.answer) || "") + " " + ((a2 && a2.answer) || "");
      const words = text.trim().split(/\s+/).filter(Boolean).length;
      const coached = coachCounts[d.id] || 0;
      const hits = keywordHits(text, d.marketKeys || []);
      const score = Math.min(24, words / 4) + hits * 5 - coached * 9;
      const m = moneyBits(product);
      const ask = Number.isFinite(m.ask) && m.ask > 0 ? m.ask : 5000;
      const eq = Number.isFinite(m.equity) && m.equity > 0 ? m.equity : 15;
      const outLines = {
        spark: withName("I'm out. I still cannot see a real making plan I would put money behind."),
        ledger: withName("I'm out. The cost of goods is not under control, and I will not buy a wish."),
        harvest: withName("I'm out. If I cannot see how it gets to a real shop, I cannot sell it."),
        stride: withName("I'm out. No stock plan, no stall, no deal."),
        willow: withName("I'm out. The supply trail still looks messy, and I will not fund that.")
      };
      if (score < 16) {
        return { in: false, amount: 0, equity: 0, line: outLines[d.id] || withName("I'm out.") };
      }
      const share = { spark: 0.7, ledger: 1, harvest: 0.55, stride: 0.4, willow: 0.5 }[d.id] || 0.5;
      let amount = Math.round(ask * share);
      if (amount < 400) amount = 400;
      amount = Math.round(amount / 50) * 50;
      let equity = Math.round(eq + (coached ? 7 : 2) + (d.id === "ledger" ? 4 : 0));
      if (equity < 8) equity = 8;
      if (equity > 40) equity = 40;
      return {
        in: true,
        amount: amount,
        equity: equity,
        line: withName("I'm in. I will offer " + moneyLabel(amount) + " for " + equity +
          " percent of the business. That is my offer on " + (product.name || "this") + ".")
      };
    }

    function startDeals() {
      decisions = DRAGONS.map((d) => Object.assign({ dragon: d.id, name: d.name, img: d.img }, dragonDecision(d)));
      dealIndex = 0;
      hideFlow();
      document.getElementById("heard-panel").classList.add("hidden");
      document.getElementById("deal-panel").classList.remove("hidden");
      document.getElementById("deal-live").classList.remove("hidden");
      document.getElementById("deal-board").classList.add("hidden");
      document.getElementById("deal-lead").textContent =
        playerFirst() + ", they have heard both rounds. Each Dragon will now say they are out, or they will make an offer.";
      showDeal();
      document.getElementById("deal-panel").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function showDeal() {
      const dec = decisions[dealIndex];
      const d = DRAGONS[dealIndex];
      document.getElementById("deal-img").src = d.img;
      document.getElementById("deal-img").alt = d.name;
      document.getElementById("deal-name").textContent = d.name;
      const box = document.getElementById("deal-verdict");
      box.className = dec.in ? "deal-in" : "deal-out";
      box.innerHTML = "<strong>" + (dec.in ? "An offer" : "I'm out") + "</strong><p style=\"margin:8px 0 0\">" +
        escapeHtml(dec.line) + "</p>";
      document.getElementById("deal-next").textContent =
        dealIndex >= decisions.length - 1 ? "See every decision" : "Next Dragon";
      speakDragon(d, dec.line);
    }

    function showDealBoard() {
      document.getElementById("deal-live").classList.add("hidden");
      const board = document.getElementById("deal-board");
      board.classList.remove("hidden");
      const ins = decisions.filter((x) => x.in);
      const choose = document.getElementById("deal-choose");
      document.getElementById("deal-lead").textContent = ins.length
        ? playerFirst() + ", " + ins.length + " Dragon" + (ins.length === 1 ? " has" : "s have") +
          " made an offer. You are the entrepreneur. Tap the Dragon you will partner with, or walk away."
        : playerFirst() + ", every Dragon is out. There is no offer to accept.";
      board.innerHTML = decisions.map((dec) => {
        if (dec.in) {
          return "<button type=\"button\" class=\"deal-row in offer-pick\" data-accept=\"" + escapeHtml(dec.dragon) + "\">" +
            "<img src=\"" + dec.img + "\" alt=\"\" />" +
            "<div><strong>" + escapeHtml(dec.name) + "</strong><br>" +
            "Offers " + moneyLabel(dec.amount) + " for " + dec.equity + "%. Tap to accept this offer.</div></button>";
        }
        return "<div class=\"deal-row out\">" +
          "<img src=\"" + dec.img + "\" alt=\"\" />" +
          "<div><strong>" + escapeHtml(dec.name) + "</strong><br>I'm out.</div></div>";
      }).join("");
      if (ins.length) {
        choose.classList.remove("hidden");
        choose.innerHTML = "<div class=\"nav-row\">" +
          "<button class=\"btn btn-quiet\" type=\"button\" id=\"walk-away\">I do not want any offer</button></div>";
      } else {
        choose.classList.remove("hidden");
        choose.innerHTML = "<div class=\"nav-row\">" +
          "<button class=\"btn\" type=\"button\" id=\"see-no-deal\">See the result</button></div>";
      }
      try { localStorage.setItem("dd_den_deals", JSON.stringify(decisions)); } catch (e) {}
    }

    function showOutcome(accepted) {
      const exampleOn = window.DDPlay && window.DDPlay.example;
      stopSpeech();
      if (!exampleOn) {
        hideFlow();
        document.getElementById("heard-panel").classList.add("hidden");
      }
      const panel = document.getElementById("outcome-panel");
      const hero = document.getElementById("outcome-hero");
      const img = document.getElementById("outcome-img");
      const cap = document.getElementById("outcome-caption");
      const badge = document.getElementById("round-badge");
      const title = document.getElementById("round-title");
      const lead = document.getElementById("round-lead");
      panel.classList.remove("hidden");
      if (accepted) {
        hero.classList.remove("sad");
        badge.textContent = exampleOn ? "Example · A deal" : "A deal";
        title.textContent = exampleOn ? "Sam shook on a deal" : "You shook on it";
        lead.textContent = exampleOn
          ? "This is the picture of Sam’s decision. Read the questions above, then look at who invested."
          : "You accepted an offer. That Dragon is now your partner.";
        document.getElementById("outcome-title").textContent = "Deal!";
        document.getElementById("outcome-lead").textContent =
          playerFirst() + ", you accepted " + accepted.name + "'s offer: " +
          moneyLabel(accepted.amount) + " for " + accepted.equity + "% of " +
          (product.name || "the business") + ".";
        img.src = accepted.img;
        img.alt = accepted.name;
        cap.textContent = accepted.name + " — your Dragon";
        document.getElementById("outcome-body").textContent = exampleOn
          ? "Sam chose Spark Patel. That is the Dragon who believed in BootDry Pegs."
          : "That is the Dragon who believed in you. Remember what they asked in the den — they will expect you to keep those promises.";
        if (!exampleOn) {
          speakDragon(DRAGONS.find((d) => d.id === accepted.dragon) || DRAGONS[0],
            withName("we have a deal. I am putting in " + moneyLabel(accepted.amount) +
              " for " + accepted.equity + " percent. Do not let me down."));
        }
      } else {
        hero.classList.add("sad");
        badge.textContent = "No deal";
        title.textContent = "You leave the den";
        lead.textContent = "There is no partner this time.";
        document.getElementById("outcome-title").textContent = "No deal";
        document.getElementById("outcome-lead").textContent = decisions.some((x) => x.in)
          ? playerFirst() + ", you walked away. None of the offers felt right, so you leave with the business still yours."
          : playerFirst() + ", no Dragon made an offer. You leave with the idea, and with more to work on.";
        img.src = "images/den-no-deal.png";
        img.alt = "Leaving the den with no deal";
        cap.textContent = "The chairs are empty";
        document.getElementById("outcome-body").textContent =
          "A no is not the end of the product. Tighten the answers they pushed back on, then pitch again.";
      }
      try {
        localStorage.setItem("dd_den_outcome", JSON.stringify(accepted
          ? { accepted: true, dragon: accepted.dragon, amount: accepted.amount, equity: accepted.equity }
          : { accepted: false }));
      } catch (e) {}
      const status = document.getElementById("end-game-status");
      if (status) status.textContent = "";
      if (!exampleOn) panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function saveGameResult() {
      const status = document.getElementById("end-game-status");
      const p = product || {};
      const outTitle = document.getElementById("outcome-title");
      const outLead = document.getElementById("outcome-lead");
      const outBody = document.getElementById("outcome-body");
      const lines = [
        "DDMentor result",
        "Date: " + new Date().toLocaleString("en-GB"),
        "Entrepreneur: " + (player || "Entrepreneur"),
        "Product: " + (p.name || ""),
        "What it does: " + (p.does || ""),
        "Customer: " + (p.custWho || p.who || ""),
        "",
        "Pitch:",
        p.pitch || "",
        "",
        "Dragon decisions:"
      ];
      (decisions || []).forEach((d) => {
        lines.push(d.in
          ? (d.name + " — IN — " + moneyLabel(d.amount) + " for " + d.equity + "%")
          : (d.name + " — OUT"));
      });
      lines.push("");
      lines.push("Result: " + ((outTitle && outTitle.textContent) || ""));
      lines.push((outLead && outLead.textContent) || "");
      lines.push((outBody && outBody.textContent) || "");
      const text = lines.join("\n");
      try {
        const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        const who = String(player || "entrepreneur").replace(/[^\w-]+/g, "-").slice(0, 24);
        a.href = url;
        a.download = "DDMentor-" + who + ".txt";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.setTimeout(() => URL.revokeObjectURL(url), 1000);
        if (status) status.textContent = "Saved a text file of this result. You can keep it, then clear the computer for the next person.";
      } catch (e) {
        if (status) status.textContent = "Could not save a file. Copy the result from the screen instead, then clear the computer.";
      }
    }

    window.resetDenStage = function resetDenStage() {
      stopSpeech();
      stopListen();
      product = null;
      player = "Entrepreneur";
      qIndex = 0;
      answers = [];
      weakAnswers = [];
      coachIndex = 0;
      round = 1;
      coachCounts = {};
      round1Answers = [];
      round2Answers = [];
      decisions = [];
      dealIndex = 0;
      redoPass = false;
      redoQueue = [];
      hideFlow();
      document.getElementById("stage-two").classList.add("hidden");
    };

    document.getElementById("hear-advice").addEventListener("click", () => {
      const a = weakAnswers[coachIndex];
      if (!a) return;
      const d = DRAGONS.find((x) => x.id === a.dragon);
      if (d) speakDragon(d, a.advice || document.getElementById("coach-advice").textContent);
    });

    document.getElementById("coach-next").addEventListener("click", () => {
      stopSpeech();
      if (coachIndex < weakAnswers.length - 1) {
        coachIndex += 1;
        showCoach();
        return;
      }
      repeatDragonQuestions();
    });

    document.getElementById("start-round2").addEventListener("click", beginRound2);

    document.getElementById("deal-next").addEventListener("click", () => {
      stopSpeech();
      if (dealIndex < decisions.length - 1) {
        dealIndex += 1;
        showDeal();
        return;
      }
      showDealBoard();
    });

    document.getElementById("deal-board").addEventListener("click", (ev) => {
      const btn = ev.target.closest("[data-accept]");
      if (!btn) return;
      const chosen = decisions.find((d) => d.dragon === btn.getAttribute("data-accept") && d.in);
      if (chosen) showOutcome(chosen);
    });

    document.getElementById("deal-choose").addEventListener("click", (ev) => {
      const t = ev.target;
      if (t.id === "walk-away" || t.id === "see-no-deal") showOutcome(null);
    });

    document.getElementById("replay").addEventListener("click", () => {
      document.getElementById("done-panel").classList.add("hidden");
      document.getElementById("meet-panel").classList.remove("hidden");
    });

    const SAMPLE_PITCH = [
      "Hello, my name is Sam, and I am here to pitch BootDry Pegs.",
      "The problem is this: after a wet match, football boots stay soggy overnight. They smell, they get ruined, and parents are tired of stuffing them with newspaper.",
      "BootDry Pegs clip the boots open with little vents, so air can get in and they dry by morning — no batteries, no heater.",
      "It is for footballers and parents after wet matches. They can buy it from sports shops and club stalls. They will hear about it from coaches, team WhatsApp groups, and posters at the pitch.",
      "Each set costs £2.50 to make and sells for £7.99, so the profit is £5.49 on each one. I plan to make 200 a month, which costs £500 to make. I expect to sell 180 a month. I will spend £330 a month on posters and social ads.",
      "I am asking for £5,000 for 15% of the business. That values the company at about £33,333. Thank you. I am ready for your questions."
    ];

    const PITCH_STAGES = [
      { id: "hello", n: "1", title: "Hello", job: "Say your name and the product name.", example: SAMPLE_PITCH[0] },
      { id: "problem", n: "2", title: "The problem", job: "What is annoying, slow, messy or missing today?", example: SAMPLE_PITCH[1] },
      { id: "product", n: "3", title: "The product", job: "Name it and say what it does — including how it works, step by step if Spark asked.", example: SAMPLE_PITCH[2] },
      { id: "customer", n: "4", title: "The customer", job: "Who buys it, where they buy it, and how they hear about it.", example: SAMPLE_PITCH[3] },
      { id: "money", n: "5", title: "The money", job: "Cost to make, selling price, profit, monthly make and sales, marketing.", example: SAMPLE_PITCH[4] },
      { id: "ask", n: "6", title: "The ask", job: "How much you want, what percent you will share, and the valuation.", example: SAMPLE_PITCH[5] }
    ];

    function stagesForFeedback(a) {
      const g = String(a.gap || a.question || "").toLowerCase();
      if (a.dragon === "spark") return ["product"];
      if (a.dragon === "harvest") return ["customer", "problem"];
      if (a.dragon === "stride") return ["customer"];
      if (a.dragon === "willow") return ["product"];
      if (a.dragon === "ledger") {
        if (/customer|need box|hear about/.test(g)) return ["customer", "problem"];
        if (/marketing/.test(g)) return ["customer", "money"];
        return ["money", "ask"];
      }
      return ["product"];
    }

    function flagsByStage() {
      const map = { hello: [], problem: [], product: [], customer: [], money: [], ask: [] };
      answers.filter((a) => a.pushback).forEach((a) => {
        stagesForFeedback(a).forEach((id) => {
          if (map[id]) map[id].push(a);
        });
      });
      return map;
    }

    function seedStages(p) {
      const s = { hello: "", problem: "", product: "", customer: "", money: "", ask: "" };
      const saved = (p && p.pitchStages) || {};
      PITCH_STAGES.forEach((st) => { s[st.id] = saved[st.id] || ""; });
      const has = PITCH_STAGES.some((st) => String(s[st.id] || "").trim());
      if (has) return s;
      const sentences = String((p && p.pitch) || "").match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [];
      PITCH_STAGES.forEach((st, i) => { s[st.id] = (sentences[i] || "").trim(); });
      if (sentences.length > 6) s.ask = sentences.slice(5).join(" ").trim();
      return s;
    }

    function showReviseStage(id) {
      document.querySelectorAll("#revise-stage-nav button").forEach((b) => {
        b.classList.toggle("on", b.dataset.stage === id);
      });
      document.querySelectorAll("#revise-stages .stage-card").forEach((card) => {
        card.classList.toggle("hidden", card.dataset.stage !== id);
      });
    }

    function renderReviseStages() {
      const flags = flagsByStage();
      const drafts = seedStages(product);
      const nav = document.getElementById("revise-stage-nav");
      const host = document.getElementById("revise-stages");
      nav.innerHTML = "";
      host.innerHTML = "";
      const n = playerFirst();
      PITCH_STAGES.forEach((st, i) => {
        const notes = flags[st.id] || [];
        const tab = document.createElement("button");
        tab.type = "button";
        tab.textContent = st.n + " " + st.title + (notes.length ? " !" : "");
        tab.dataset.stage = st.id;
        if (i === 0) tab.classList.add("on");
        tab.addEventListener("click", () => showReviseStage(st.id));
        nav.appendChild(tab);

        const flagHtml = notes.map((a) =>
          "<div class=\"dragon-flag\"><strong>" + escapeHtml(a.name) + " pushed back</strong>" +
          "<em>They asked:</em> " + escapeHtml(a.question) + "<br>" +
          "<em>They said:</em> " + escapeHtml(a.reaction) + "<br>" +
          "Change this stage so the next pitch already answers that. This comment will be removed when you resubmit.</div>"
        ).join("");

        const next = PITCH_STAGES[i + 1];
        const card = document.createElement("div");
        card.className = "stage-card" + (notes.length ? " needs-work" : "");
        card.dataset.stage = st.id;
        if (i !== 0) card.classList.add("hidden");
        card.innerHTML =
          "<h3>Stage " + st.n + " — " + st.title + "</h3>" +
          "<p class=\"job\">" + escapeHtml(st.job) + "</p>" +
          flagHtml +
          "<div class=\"example-box\"><strong>Example — BootDry Pegs</strong>" + escapeHtml(st.example) + "</div>" +
          "<label for=\"revise-" + st.id + "\">" + (n ? n + ", your line" : "Your line") + "</label>" +
          "<textarea id=\"revise-" + st.id + "\" maxlength=\"500\"></textarea>" +
          (next ? "<p style=\"margin:12px 0 0\"><button type=\"button\" class=\"btn btn-gold revise-next\" data-next=\"" + next.id + "\">Next: " + next.title + "</button></p>" : "");
        host.appendChild(card);
        const box = document.getElementById("revise-" + st.id);
        box.value = drafts[st.id] || "";
        if (window.DDWriting) window.DDWriting.watchWriting(box, "sentence");
      });
      host.querySelectorAll(".revise-next").forEach((btn) => {
        btn.addEventListener("click", () => {
          if (window.DDWriting) window.DDWriting.tidyAllWriting();
          showReviseStage(btn.dataset.next);
        });
      });
      const firstFlag = PITCH_STAGES.find((st) => (flags[st.id] || []).length);
      showReviseStage(firstFlag ? firstFlag.id : "hello");
      document.getElementById("revise-status").textContent = answers.some((a) => a.pushback)
        ? "Red stages are where a Dragon was not happy. Fix those first."
        : "No Dragon strongly pushed back, but you can still tighten the pitch.";
    }

    function collectReviseStages() {
      const out = {};
      PITCH_STAGES.forEach((st) => {
        const el = document.getElementById("revise-" + st.id);
        out[st.id] = el ? el.value.trim() : "";
      });
      return out;
    }

    function refreshPitchView() {
      document.getElementById("den-player-line").textContent =
        "Entrepreneur: " + player + " · Product: " + product.name;
      document.getElementById("product-line").textContent =
        (product.name || "Your product") + " — " + (product.does || "") +
        (product.custWho ? " For: " + product.custWho + "." : "");
      document.getElementById("pitch-preview").textContent = product.pitch || "(No full pitch text.)";
      const matchLine = document.getElementById("match-line");
      if (matchLine) matchLine.textContent = matchSummary(product);
    }

    function exampleAnswerBank() {
      return {
        spark1: "First they clip one BootDry Peg onto each boot so the vents hold the sides open. Then they stand the boots in the porch. After that air can get in overnight. In the morning the boots are dry, with no newspaper and no heater.",
        ledger1: "The valuation is about £33,333 because each set already makes £5.49 profit, I plan 180 sales a month, and the £5,000 will pay for stock and posters. Those figures match the money boxes and the pitch.",
        harvest1: "I would see a parent at a Saturday club stall, after a wet match, choosing BootDry Pegs instead of stuffing newspaper in the boots. Sports shops and club stalls are the real place they stop.",
        stride1: "With almost no advert money I would ask coaches to mention BootDry Pegs in the team WhatsApp group, put a poster by the pitch, and do a one-minute demo at the club stall this term.",
        willow1: "If a peg snaps I replace that set for free, then I change the clip design so it cannot snap the same way. I keep a small spare batch so a customer is never left with wet boots.",
        spark2: "A local sports workshop makes the first batch. I check ten pegs from every box before they are sold. If a batch is late or the parts are wrong I use a second supplier and a smaller first order.",
        ledger2: "If the supplier puts the cost of goods up 20 percent I change supplier first. If I must pay more I raise the selling price a little and keep enough profit so people still buy at the club stall.",
        harvest2: "The workshop packs a box, a van takes stock to sports shops and club stalls, and I hold spare stock in a small warehouse box at home. If a delivery is late I send a backup box by post the same day.",
        stride2: "For match day I pack enough boxes in the van the night before so the stall is never short. Leftover stock goes back in the box and onto the next club stall, not left in the rain.",
        willow2: "I keep two local suppliers for the clips and use less packing in each box. If one runs short I switch the same week. That cuts waste and long shipping miles, and I will not sell a batch until both the clip and the vent pass a simple quality check."
      };
    }

    function renderExampleQa(list) {
      const host = document.getElementById("example-qa-list");
      if (!host) return;
      host.innerHTML = list.map((item) => {
        const d = DRAGONS.find((x) => x.id === item.dragon) || {};
        return "<article class=\"example-qa-item\">" +
          "<h3>" + escapeHtml(d.name || item.dragon) + " · " + escapeHtml(item.roundLabel) + "</h3>" +
          "<p><strong>Asked:</strong> " + escapeHtml(item.question) + "</p>" +
          "<p><strong>Sam answered:</strong> " + escapeHtml(item.answer) + "</p>" +
          "<p><strong>The Dragon said:</strong> " + escapeHtml(item.reaction) + "</p>" +
          "</article>";
      }).join("");
    }

    function showExampleDen() {
      stopSpeech();
      hideFlow();
      player = "Sam";
      const n = "Sam";
      const m = moneyBits(product);
      const bank = exampleAnswerBank();
      const qa = [];
      const r1 = { spark: "spark1", ledger: "ledger1", harvest: "harvest1", stride: "stride1", willow: "willow1" };
      const r2 = { spark: "spark2", ledger: "ledger2", harvest: "harvest2", stride: "stride2", willow: "willow2" };
      round = 1;
      round1Answers = DRAGONS.map((d) => {
        const answer = bank[r1[d.id]];
        const rec = { dragon: d.id, name: d.name, question: d.question(product, n, m), answer: answer, reaction: d.react(answer, product), round: 1 };
        qa.push({ dragon: d.id, roundLabel: "Round 1", question: rec.question, answer: rec.answer, reaction: rec.reaction });
        return rec;
      });
      round = 2;
      round2Answers = DRAGONS.map((d) => {
        const answer = bank[r2[d.id]];
        const rec = { dragon: d.id, name: d.name, question: d.marketQuestion(product, n, m), answer: answer, reaction: d.marketReact(answer, product), round: 2 };
        qa.push({ dragon: d.id, roundLabel: "Round 2 · Marketplace", question: rec.question, answer: rec.answer, reaction: rec.reaction });
        return rec;
      });
      coachCounts = {};
      decisions = DRAGONS.map((d) => Object.assign({ dragon: d.id, name: d.name, img: d.img }, dragonDecision(d)));
      const spark = decisions.find((d) => d.dragon === "spark" && d.in) || decisions.find((d) => d.in);
      renderExampleQa(qa);
      const qaPanel = document.getElementById("example-den-qa");
      const dealPanel = document.getElementById("example-deal-board");
      const dealRows = document.getElementById("example-deal-rows");
      const dealLead = document.getElementById("example-deal-lead");
      if (qaPanel) qaPanel.classList.remove("hidden");
      if (dealPanel) dealPanel.classList.remove("hidden");
      if (dealLead) {
        const ins = decisions.filter((x) => x.in);
        dealLead.textContent = ins.length
          ? "Sam had " + ins.length + " offers. Sam accepted Spark Patel."
          : "In this example the Dragons would decide after the answers above.";
      }
      if (dealRows) {
        dealRows.innerHTML = decisions.map((dec) => {
          if (dec.in) {
            return "<div class=\"deal-row in\">" +
              "<img src=\"" + dec.img + "\" alt=\"\" />" +
              "<div><strong>" + escapeHtml(dec.name) + "</strong><br>" +
              "Offers " + moneyLabel(dec.amount) + " for " + dec.equity + "%.</div></div>";
          }
          return "<div class=\"deal-row out\">" +
            "<img src=\"" + dec.img + "\" alt=\"\" />" +
            "<div><strong>" + escapeHtml(dec.name) + "</strong><br>I'm out.</div></div>";
        }).join("");
      }
      document.getElementById("heard-panel").classList.remove("hidden");
      document.getElementById("step-lead-den").textContent =
        "This finished example shows the pitch the Dragons heard, Sam’s answers, and the decision picture.";
      document.getElementById("round-lead").textContent =
        "You are only browsing. There is nothing to type.";
      showOutcome(spark || null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.startDenStage = function startDenStage() {
      const { demo, missing } = loadProduct();
      if (missing && !(window.DDPlay && window.DDPlay.example)) {
        document.getElementById("stage-two").classList.add("hidden");
        document.getElementById("stage-one").classList.remove("hidden");
        document.getElementById("stage-briefing").classList.remove("hidden");
        document.getElementById("stage-invent").classList.add("hidden");
        if (window.DDPlay) {
          window.DDPlay.showGateMsg("Save a full pitch of your own product before you enter the Den. There is no BootDry Pegs stand-in in your game.");
          window.DDPlay.paintSteps();
        }
        return;
      }
      const note = document.getElementById("practice-note");
      if (note) note.classList.toggle("hidden", !demo);
      document.getElementById("den-player-line").textContent =
        "Entrepreneur: " + player + " · Product: " + product.name;
      document.getElementById("pitch-preview").textContent = product.pitch || "(No full pitch text.)";
      document.getElementById("product-line").textContent =
        (product.name || "Your product") + " — " + (product.does || "") +
        (product.custWho ? " For: " + product.custWho + "." : "");
      const matchLine = document.getElementById("match-line");
      if (matchLine) matchLine.textContent = matchSummary(product);
      if (window.DDWriting) {
        window.DDWriting.addKnown([product.name, product.does, product.custWho, player].filter(Boolean).join(" "));
        window.DDWriting.watchWriting(document.getElementById("answer-box"), "sentence");
      }
      if (window.DDPlay && window.DDPlay.example) {
        showExampleDen();
        if (window.DDPlay && typeof window.DDPlay.paintSteps === "function") window.DDPlay.paintSteps();
        return;
      }
      renderMeet();
    };

    document.getElementById("back-to-stage-one").addEventListener("click", (ev) => {
      ev.preventDefault();
      if (typeof stopSpeech === "function") stopSpeech();
      if (typeof returnToReady === "function") returnToReady();
      else {
        document.getElementById("stage-two").classList.add("hidden");
        document.getElementById("stage-one").classList.remove("hidden");
        window.scrollTo(0, 0);
      }
    });

    const saveGameBtn = document.getElementById("save-game-btn");
    if (saveGameBtn) saveGameBtn.addEventListener("click", saveGameResult);
  
  })();
