// DDMentor part 2 of 4 — invent, customers, money, pitch.
// Loaded by DDMentor.html after writing-help.js. Merge back: paste into the second <script> block.
    const categories = [
      { id: "tech", name: "Tech & Software", ico: "💻", color: "linear-gradient(160deg,#1e3a5f,#4ea1d3)", spark: "Invent an app or digital tool that solves a daily annoyance — lost keys, homework panic, or a busy family calendar.", ready: [
        { name: "LockerPing", does: "An app that maps school lockers and pings you if you leave your PE bag behind.", who: "Secondary school pupils who rush between lessons" },
        { name: "HomeworkSplit", does: "A shared planner that breaks big homework into timed chunks and reminds the whole group.", who: "Year 7–11 students who work in friendship groups" },
        { name: "PocketQueue", does: "A phone-free classroom token app teachers use so pupils queue fairly for help.", who: "Teachers and classes that get noisy at help-desk time" }
      ]},
      { id: "kids", name: "Kids & Education", ico: "🎒", color: "linear-gradient(160deg,#7a3e12,#f4b942)", spark: "Invent something that makes learning or play easier for children — a game, a kit, or a classroom helper.", ready: [
        { name: "Times-Table Trail", does: "A floor-mat game where you hop answers to beat a timer.", who: "Primary classes learning multiplication" },
        { name: "StoryCube Lab", does: "Nine picture cubes you roll to invent a story, with a card of writing prompts.", who: "Families and English clubs for ages 7–12" },
        { name: "Quiet Hood Kit", does: "Soft ear defenders plus a visual 'do not disturb' card for noisy classrooms.", who: "Pupils who find busy rooms overwhelming" }
      ]},
      { id: "fashion", name: "Fashion & Beauty", ico: "👗", color: "linear-gradient(160deg,#6b1d4a,#f48fb1)", spark: "Invent a clothing, accessory, or beauty idea that stands out — comfort, uniqueness, or a problem other brands ignore.", ready: [
        { name: "SwapBadge", does: "A clip-on badge that shows you want to swap or recycle clothes at school charity days.", who: "Teens who like fashion but hate waste" },
        { name: "Rain-Ready Cuffs", does: "Waterproof sleeve cuffs that slide over any coat when the weather turns.", who: "Walkers and cyclists caught in British rain" },
        { name: "Mirror-Mini Palette", does: "A tiny compact with three school-allowed tints and a built-in lesson-safe mirror lid.", who: "Young people who want a quick tidy-up after PE" }
      ]},
      { id: "food", name: "Food & Drink", ico: "🍿", color: "linear-gradient(160deg,#7a1f12,#ff8a3d)", spark: "Invent a snack, drink, or food idea people would actually try. What makes the flavour or packaging special?", ready: [
        { name: "Break-Box Bites", does: "A sealed 3-compartment snack that stays crunchy: fruit, protein, and a treat.", who: "Pupils who need a filling mid-morning snack" },
        { name: "Fizz-Free Cola Ice", does: "Cola-flavour ice pops with no caffeine and a recyclable wrapper.", who: "Families wanting a colder treat after sport" },
        { name: "Jacket-Topper Pots", does: "Microwave pots of beans, cheese, or salsa made for school baked potatoes.", who: "Canteens and pupils buying jacket potatoes" }
      ]},
      { id: "sports", name: "Sports & Outdoors", ico: "⚽", color: "linear-gradient(160deg,#14532d,#4ade80)", spark: "Invent kit for sport, bikes, camping, or the park. What would help someone train, stay safe, or have more fun?", ready: [
        { name: "BootDry Pegs", does: "Pegs with vents that clip muddy boots open so they dry overnight.", who: "Footballers and parents after wet matches" },
        { name: "Park-Run Ribbon", does: "A bright, numbered ribbon that clips to a jumper so younger runners stay visible.", who: "Junior parkrun and after-school clubs" },
        { name: "Goal-Line Chalk", does: "Washable chalk spray to mark a pop-up pitch on grass or playground tarmac.", who: "Friends playing football with no marked pitch" }
      ]},
      { id: "home", name: "Home & Lifestyle", ico: "🏠", color: "linear-gradient(160deg,#3f3a2a,#d4b483)", spark: "Invent something for the house: storage, cooking, decorating, or making mornings less chaotic.", ready: [
        { name: "Door-Hook Drop", does: "A hanging pocket that catches keys, passes, and earphones as you walk in.", who: "Busy households that lose small things" },
        { name: "Morning Lane", does: "A wall strip with three labelled hooks: bag, coat, shoes — in leaving order.", who: "Families with chaotic school mornings" },
        { name: "Sofa-Gap Saver", does: "A slim tray that slides down the sofa side to catch remotes and coins.", who: "Living rooms with a hungry sofa" }
      ]},
      { id: "green", name: "Green & CleanTech", ico: "🌿", color: "linear-gradient(160deg,#14532d,#86efac)", spark: "Invent a greener swap — less waste, less plastic, cleaner energy, or a way to reuse something people throw away.", ready: [
        { name: "Pencil-Back Mill", does: "A classroom mill that turns pencil stubs into new short pencils.", who: "Schools trying to cut stationery waste" },
        { name: "Rain-Butt Shower", does: "A garden bag that warms rainwater in the sun for washing bikes and wellies.", who: "Families who wash outdoor kit at home" },
        { name: "Jar-Lid Library", does: "A swap box of matching lids so empty jars get reused, not binned.", who: "Community fridges and eco clubs" }
      ]},
      { id: "business", name: "Business Services", ico: "📋", color: "linear-gradient(160deg,#1e293b,#94a3b8)", spark: "Invent a service other businesses would pay for: bookings, deliveries, design, or making admin less boring.", ready: [
        { name: "ClubPay Stickers", does: "Colour-coded stickers plus a simple app so clubs track who has paid for trips.", who: "After-school club leaders" },
        { name: "Queue-Bust Board", does: "A numbered board cafes use so customers sit down instead of crowding the counter.", who: "Small high-street food shops" },
        { name: "Poster-in-an-Hour", does: "A design service that turns a shop's messy notes into one clear window poster.", who: "Independent shops with no designer" }
      ]},
      { id: "health", name: "Health & Wellness", ico: "💪", color: "linear-gradient(160deg,#0e4d5c,#5eead4)", spark: "Invent something that helps people feel better day to day — sleep, stress, fitness, or healthy habits. Keep it realistic, not a miracle cure.", ready: [
        { name: "Breathe Beads", does: "A wrist strand you slide bead-by-bead to slow breathing before a test.", who: "Pupils who get exam nerves" },
        { name: "Sleep-Shade Strip", does: "A soft eye-strip that blocks charger lights without a heavy mask.", who: "Teens who struggle to drop off" },
        { name: "Water-Win Bottle", does: "A bottle with rings you slide down each time you finish a cupful.", who: "People who forget to drink water at school" }
      ]},
      { id: "electronics", name: "Electronics", ico: "🔌", color: "linear-gradient(160deg,#1e1b4b,#818cf8)", spark: "Invent an electronic gadget: headphones, lights, chargers, or a clever device that does one job brilliantly.", ready: [
        { name: "DeskGlow Clip", does: "A USB clip-light that shines on homework, not into a sibling's eyes.", who: "Shared bedrooms at homework time" },
        { name: "One-Plug Tower", does: "A short tower with four sockets labelled Phone, Lamp, Console, Spare.", who: "Bedrooms with a tangle of chargers" },
        { name: "Lost-Bud Beacon", does: "A tiny beep tag that sticks to an earphone case so you can find it in a bag.", who: "Anyone who loses earbuds weekly" }
      ]},
      { id: "toys", name: "Toys, Games & Hobbies", ico: "🎲", color: "linear-gradient(160deg,#7c2d12,#fb923c)", spark: "Invent a toy, board game, puzzle, craft kit, or hobby gadget. What makes people want to play it again tomorrow?", ready: [
        { name: "Den of Deals", does: "A board game where you pitch silly inventions and rivals invest or go out.", who: "Families who like fast, shouty games" },
        { name: "Marble-Run Mix", does: "Snap-together tubes plus surprise junctions you redesign every game.", who: "Builders aged 8–14" },
        { name: "Sticker-Quest Pack", does: "A mystery sticker album with local landmark clues instead of footballers.", who: "Collectors who walk their neighbourhood" }
      ]},
      { id: "pets", name: "Pet Products", ico: "🐾", color: "linear-gradient(160deg,#44403c,#d6d3d1)", spark: "Invent something for dogs, cats, or other pets — a toy, feeder, cleaner, or a kit that helps owners.", ready: [
        { name: "Walk-Wipe Pouch", does: "A belt pouch with compostable wipes and a sealed waste pocket.", who: "Dog walkers on muddy paths" },
        { name: "Cat-TV Tunnel", does: "A window tunnel so indoor cats can sit in the sun without jumping on sills.", who: "Cat owners in flats" },
        { name: "Treat Timer Ball", does: "A ball that opens a treat slot after a set number of rolls.", who: "Pets left alone for short periods" }
      ]},
      { id: "auto", name: "Automotive", ico: "🚗", color: "linear-gradient(160deg,#111827,#60a5fa)", spark: "Invent something for cars, bikes, or scooters: safety, cleaning, storage, or making journeys less messy.", ready: [
        { name: "Boot-Mud Mat", does: "A fold-up mat that catches wet boots before they hit the car carpet.", who: "Parents on the school run" },
        { name: "Spoke-Spark Lights", does: "Clip-on bike spoke lights that flash without batteries — they spin to charge.", who: "Children cycling at dusk" },
        { name: "Seat-Back Caddy", does: "A felt organiser for water, tissues, and a sick-bag on long car trips.", who: "Families on holiday drives" }
      ]},
      { id: "media", name: "Media & Entertainment", ico: "🎬", color: "linear-gradient(160deg,#4c0519,#fb7185)", spark: "Invent a game, a show idea, a music gadget, or a new way to have fun with friends.", ready: [
        { name: "One-Minute Mic", does: "A toy mic that records 60-second radio shows and plays them back.", who: "Friends who like making silly broadcasts" },
        { name: "Cinema-in-a-Box", does: "A pop-up cardboard cinema with tickets, snacks, and a playlist QR.", who: "Sleepovers and family film nights" },
        { name: "Beat-Step Mat", does: "A floor mat that lights when you hit the right dance step to a song.", who: "Kids who love music games" }
      ]},
      { id: "travel", name: "Travel", ico: "✈️", color: "linear-gradient(160deg,#0c4a6e,#38bdf8)", spark: "Invent something that makes a journey or day out easier — packing, waiting, maps, or travel comfort.", ready: [
        { name: "Queue Quest Cards", does: "A pocket pack of 30 games for airport and station queues.", who: "Families stuck waiting with restless kids" },
        { name: "Roll-Flat Washbag", does: "A washbag that unrolls into labelled pockets and hangs on any tap.", who: "Overnight school trips" },
        { name: "Day-Out Map Band", does: "A wristband with a tiny city map and emergency meeting-point.", who: "Groups visiting a new town" }
      ]},
      { id: "other", name: "Other", ico: "✨", color: "linear-gradient(160deg,#581c87,#e879f9)", spark: "Invent something weird-but-useful that does not fit the other boxes. Odd ideas still need a real customer.", ready: [
        { name: "Lost-and-Found Tree", does: "A classroom stand with numbered pegs for unnamed jumpers.", who: "Schools drowning in lost property" },
        { name: "Compliment Tokens", does: "Wooden coins pupils give when someone is kind — cashed in for extra break.", who: "Form tutors building a kinder class" },
        { name: "Idea Jar Lid", does: "A lid with a slot and date wheel so you bank ideas and pick one every Friday.", who: "Anyone with too many half-ideas" }
      ]},
      { id: "gadgets", name: "Household Gadgets", ico: "🔧", color: "linear-gradient(160deg,#422006,#fbbf24)", spark: "Invent a clever household gadget: a tool, a gizmo, a kitchen helper. What problem does it squash in five seconds?", ready: [
        { name: "Jar-Pop Wedge", does: "A safe plastic wedge that opens stubborn jars without bashing the lid.", who: "Kitchens with tight pickle jars" },
        { name: "Cable Comb", does: "A clip comb that lines charger cables along a desk edge.", who: "Homework desks with spaghetti wires" },
        { name: "Toast-Tongs Safe", does: "Wooden tongs with a stop so you never poke metal in the toaster.", who: "Families teaching kids to make breakfast" }
      ]},
      { id: "personal", name: "Personal Care Products", ico: "🧴", color: "linear-gradient(160deg,#831843,#f9a8d4)", spark: "Invent a personal-care product people would use daily: hair, skin, teeth, or washing. What is different from the supermarket shelf?", ready: [
        { name: "PE-Hair Tie Tin", does: "A tiny tin of strong hair ties that clips inside a PE bag.", who: "Pupils who lose hairbands every lesson" },
        { name: "Mint-Lid Brush", does: "A travel toothbrush with a mint-gel lid so you do not need a whole tube.", who: "Overnight stays and after lunch at school" },
        { name: "Pocket Balm Stick", does: "An unscented lip-and-knuckle balm that looks like a glue stick.", who: "People with dry skin in winter" }
      ]},
      { id: "retail", name: "Retail & E-commerce", ico: "📦", color: "linear-gradient(160deg,#713f12,#fcd34d)", spark: "Invent a shop idea: a subscription box, an online store, or a clever way to sell and deliver products.", ready: [
        { name: "Science Saturday Box", does: "A monthly box with one kitchen experiment and a parent safety card.", who: "Families who like messy science" },
        { name: "Uniform Re-Shop", does: "An online swap shop that lists nearly-new school uniform by size and school.", who: "Parents buying expensive blazers" },
        { name: "Club Snack Drop", does: "A subscription that delivers healthy snacks to sports clubs before matches.", who: "Junior football and netball clubs" }
      ]},
      { id: "medical", name: "Medical & Healthcare Products", ico: "🩺", color: "linear-gradient(160deg,#134e4a,#5eead4)", spark: "Invent a helpful bag, kit, or organiser for health routines (for example a first-aid pouch). Do not invent a real medicine or claim to cure illness.", ready: [
        { name: "First-Aid Pocket", does: "A labelled pouch for plasters, wipes, and a note of allergies — no medicines inside.", who: "PE bags and family days out" },
        { name: "Inhaler Clip Case", does: "A bright clip case so an inhaler is easier to find in a rucksack.", who: "Pupils who carry an inhaler at school" },
        { name: "Calm-Count Cards", does: "Illustrated cards that talk you through a 5-4-3-2-1 grounding routine.", who: "Anyone who needs a quiet reset" }
      ]}
    ];

    const back = document.getElementById("back-link");
    back.addEventListener("click", (e) => {
      e.preventDefault();
      returnToReady();
    });

    const pathPanel = document.getElementById("path-panel");
    const catsEl = document.getElementById("cats");
    const choosePanel = document.getElementById("choose-panel");
    const readyPanel = document.getElementById("ready-panel");
    const readyGrid = document.getElementById("ready-grid");
    const inventPanel = document.getElementById("invent-panel");
    const saveWrap = document.getElementById("save-wrap");
    const spark = document.getElementById("spark");
    const pickHint = document.getElementById("pick-hint");
    const chooseHeading = document.getElementById("choose-heading");
    const inventHeading = document.getElementById("invent-heading");
    const chosenVisual = document.getElementById("chosen-visual");
    const chosenName = document.getElementById("chosen-name");
    const nameInput = document.getElementById("product-name");
    const doesInput = document.getElementById("product-does");
    const whoInput = document.getElementById("product-who");
    const saveBtn = document.getElementById("save-btn");
    const nextBtn = document.getElementById("next-btn");
    const saveMsg = document.getElementById("save-msg");
    let selected = null;
    let inventPath = null;

    let player = "Entrepreneur";
    try {
      player = localStorage.getItem("dd_player") || "Entrepreneur";
    } catch (e) {}

    function playerFirst() {
      const box = document.getElementById("player-name");
      const typed = box ? box.value.trim().split(/\s+/)[0] : "";
      const stored = String(player || "").trim().split(/\s+/)[0];
      const n = typed || stored;
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

    function setLabel(forId, text) {
      const el = document.querySelector('label[for="' + forId + '"]');
      if (el) {
        const note = el.querySelector(".field-note");
        const noteHtml = note ? " " + note.outerHTML : "";
        el.textContent = text;
        if (noteHtml) el.insertAdjacentHTML("beforeend", noteHtml);
      }
    }

    function refreshNamedCopy() {
      const n = playerFirst();
      document.getElementById("player-line").textContent = n
        ? (n + ", you are the entrepreneur. Invent one product.")
        : "You are the entrepreneur. Invent one product.";
      setLabel("product-name", n ? (n + ", give your product a catchy name") : "Product name");
      setLabel("product-does", n ? (n + ", what does it do? (one or two sentences)") : "What does it do? (one or two sentences)");
      setLabel("product-who", n ? (n + ", who is it for?") : "Who is it for?");
      setLabel("cust-who", n ? (n + ", who is the customer?") : "Who is the customer?");
      setLabel("cust-need", n ? (n + ", what problem does it solve for them?") : "What problem does it solve for them?");
      setLabel("cust-where", n ? (n + ", where will they buy it?") : "Where will they buy it?");
      setLabel("cust-hear", n ? (n + ", how will they hear about it?") : "How will they hear about it?");
      setLabel("unit-cost", n ? (n + ", what is the cost to make one? Write it in words.") : "Cost to make one");
      setLabel("sell-price", n ? (n + ", what is the selling price for one? Write it in words.") : "Selling price for one");
      setLabel("ask-amount", n ? (n + ", how much investment do you want? Write it in words.") : "How much investment do you want?");
      setLabel("equity-pct", n ? (n + ", what equity will you give away? Write it in words.") : "Equity you will give away");
      setLabel("pitch-edit", n ? (n + ", this is your full speech (you can still edit)") : "Full speech (you can still edit)");
      const custHint = document.getElementById("cust-hint");
      if (custHint) {
        custHint.innerHTML = address("Investors always ask: who will actually buy this? “Everyone” is too vague. You can write in the boxes, or tap Speak my answers once and say each part out loud (Chrome or Edge).")
          .replace("write", "<strong>write</strong>")
          .replace("Speak my answers", "<strong>Speak my answers</strong>");
      }
      const moneyHint = document.getElementById("money-intro-hint");
      if (moneyHint) {
        moneyHint.innerHTML = address("Before you fill these boxes, write every number in words, not figures. For example write forty thousand pounds, not 40000, and fifteen percent, not 15. You can write the words or speak them.")
          .replace("forty thousand pounds", "<strong>forty thousand pounds</strong>")
          .replace("fifteen percent", "<strong>fifteen percent</strong>");
      }
      const pitchHint = document.getElementById("pitch-intro-hint");
      if (pitchHint) {
        if (window.DDPlay && window.DDPlay.example) {
          pitchHint.innerHTML = "Sam’s finished pitch for <strong>BootDry Pegs</strong> is already written. Read the six stages and the full speech. You cannot edit this example.";
        } else {
          pitchHint.innerHTML = address("A pitch is a short speech in a set order. Write each stage in your own words from the product you invented — or tap Speak my answers once and say each stage out loud (Chrome or Edge). There is no sample product on this page.")
            .replace("write", "<strong>write</strong>")
            .replace("Speak my answers", "<strong>Speak my answers</strong>");
        }
      }
      const quizIntro = document.getElementById("quiz-intro-hint");
      if (quizIntro) quizIntro.textContent = address("Answer the following questions to move on to the next step.");
      const inventBox = document.getElementById("term-box-invent-copy") || document.getElementById("term-box-invent");
      if (inventBox && !inventBox.querySelector("strong")) {
        inventBox.textContent = address("Choose a golden word to see what it means in the Den.");
      }
      const journeyBox = document.getElementById("term-box-journey-copy") || document.getElementById("term-box-journey");
      if (journeyBox && !journeyBox.querySelector("strong")) {
        journeyBox.textContent = address("Choose a golden word to see what it means in the Den.");
      }
    }
    refreshNamedCopy();

    const denTerms = {
      percentage: "<strong>Percentage</strong> — a percentage is a number out of 100. If you own 100% of the business, you own all of it. When a Dragon invests, they usually want a percentage of the business as their share of ownership. If they take 20%, they own 20 parts out of every 100, and you keep 80%. Give away a bigger percentage and they own more of the company; keep a bigger percentage and you stay in charge of more of it.",
      investment: "<strong>Investment</strong> — money an investor puts into the business so you can grow (make more stock, advertise, hire help). It is not a gift, and it is not a loan you repay on a schedule.",
      valuation: "<strong>Valuation</strong> — what you claim the whole business is worth today. If you ask for £20,000 for 10% of the company, you are saying the whole business is worth £200,000.",
      entrepreneur: "<strong>Entrepreneur</strong> — the person who invents the product and tries to win investment. In this game, that is you. You do not sit in an investor's chair.",
      costs: "<strong>Costs</strong> — money you have to spend to make and sell the product. That includes what it costs to produce each item, plus marketing such as posters, ads, and stalls. Investors will ask if sales can cover these costs.",
      features: "<strong>Features of product</strong> — the facts about what it is and what it does: size, materials, how it works, or what is included. Features are the product itself, not yet the reason a customer cares.",
      benefits: "<strong>Benefits of product</strong> — the good it does for the customer: the problem it solves, the time it saves, or how it makes life easier. A strong pitch turns features into benefits.",
      product: "<strong>Product</strong> — the thing you want people to buy: a snack, an app, a gadget, a kit, or a service. Keep it simple enough to explain in one or two sentences.",
      customer: "<strong>Customer</strong> — the real group of people who will buy it. “Everyone” is too vague. Name who they are, where they buy, and how they hear about you.",
      cost: "<strong>Cost to make</strong> — the orange block. What you pay to produce one item, then how many you plan to make. This is money going out.",
      marketing: "<strong>Marketing</strong> — the purple block. The cost of telling people about your product: posters, ads, stalls. One, two or three options can add together.",
      profit: "<strong>Profit</strong> — money left after costs. Profit on one item is selling price minus cost to make. Yearly profit is sales money minus make-cost and marketing.",
      sales: "<strong>Projected sales</strong> — the green block. How many you <em>expect</em> to sell, and the money that would come in. It is a plan, not a promise.",
      out: "<strong>I'm out</strong> — an investor will not put money in. Another investor might still make an offer.",
      royalty: "<strong>Royalty</strong> — extra money an investor might want from each sale (for example 50p per item) instead of, or as well as, equity."
    };

    function bindDenDictionary(boxId) {
      const wrap = document.getElementById(boxId);
      if (!wrap) return;
      const box = wrap.querySelector(".term-box-copy") || wrap;
      const panel = wrap.closest(".panel");
      if (!panel) return;
      panel.querySelectorAll(".term").forEach((btn) => {
        btn.addEventListener("click", () => {
          box.innerHTML = denTerms[btn.dataset.term] || "Choose a golden word to see what it means in the Den.";
          if (window.speakMentorText) window.speakMentorText(box.innerText);
        });
      });
    }
    bindDenDictionary("term-box-invent");
    bindDenDictionary("term-box-journey");

    function paintVisual(el, cat) {
      el.style.background = cat.color;
      el.textContent = cat.ico;
    }

    function hideAllSteps() {
      choosePanel.classList.add("hidden");
      readyPanel.classList.add("hidden");
      inventPanel.classList.add("hidden");
      saveWrap.classList.add("hidden");
      document.getElementById("journey").classList.add("hidden");
      document.getElementById("dict-invent").classList.remove("hidden");
      document.getElementById("cat-scene-panel").classList.add("hidden");
    }

    const ownIdea = {
      id: "own",
      name: "My own idea",
      ico: "💡",
      color: "linear-gradient(160deg,#422006,#fbbf24)",
      spark: "You can invent anything you want. It does not have to match a category or a picture."
    };

    function setCatsLookOnly(on) {
      catsEl.classList.toggle("look-only", !!on);
      catsEl.querySelectorAll(".cat").forEach((b) => {
        b.disabled = !!on;
        b.setAttribute("aria-disabled", on ? "true" : "false");
      });
    }

    function setChooseCopy(path) {
      const mentor = document.getElementById("choose-mentor-copy");
      if (path === "unique") {
        chooseHeading.textContent = address("Look at the product categories");
        pickHint.textContent = address("These pictures show different product areas. Use them for ideas, then invent your own below. On this route you cannot tap a category to open ready-made suggestions.");
        if (mentor) {
          mentor.textContent = address("Look at the category pictures for inspiration. Invent something new in the boxes below. Tapping a category will not reveal ready-made products on this route.");
        }
        return;
      }
      chooseHeading.textContent = address("Choose a product area");
      pickHint.textContent = address("Tap a product area. Each category can give you three specific product ideas.");
      if (mentor) {
        mentor.textContent = address("Tap one product area. Then look at the picture of three ready-made ideas and pick one to develop. You can still change the name and details.");
      }
    }

    function openPath(path) {
      readyChoice = null;
      inventPath = path;
      document.querySelectorAll(".path-btn").forEach((b) => {
        b.classList.toggle("selected", b.dataset.path === path);
      });
      pathPanel.classList.add("hidden");
      hideAllSteps();
      setChooseCopy(path);
      if (path === "unique") {
        nameInput.value = "";
        doesInput.value = "";
        whoInput.value = "";
        saveMsg.textContent = "";
        uniquePhotoData = "";
        const inp = document.getElementById("product-photo");
        if (inp) inp.value = "";
        setCatsLookOnly(true);
        choosePanel.classList.remove("hidden");
        showInvent(ownIdea, ownIdea.spark, "Invent your unique product");
        return;
      }
      setCatsLookOnly(false);
      choosePanel.classList.remove("hidden");
    }

    function chooseInventPath(path) {
      if (document.getElementById("path-unique").disabled) return;
      openPath(path);
    }
    document.getElementById("path-unique").addEventListener("click", () => chooseInventPath("unique"));
    document.getElementById("path-ready").addEventListener("click", () => chooseInventPath("ready"));
    document.getElementById("sign-unique").addEventListener("click", () => chooseInventPath("unique"));
    document.getElementById("sign-ready").addEventListener("click", () => chooseInventPath("ready"));
    document.getElementById("back-path").addEventListener("click", () => {
      hideAllSteps();
      pathPanel.classList.remove("hidden");
      inventPath = null;
      selected = null;
    });

    categories.forEach((c) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "cat";
      b.dataset.id = c.id;
      b.setAttribute("aria-label", c.name);
      const vis = document.createElement("div");
      vis.className = "visual";
      vis.setAttribute("aria-hidden", "true");
      paintVisual(vis, c);
      const label = document.createElement("span");
      label.className = "cat-name";
      label.textContent = c.name;
      b.appendChild(vis);
      b.appendChild(label);
      b.addEventListener("click", () => selectCat(c));
      catsEl.appendChild(b);
    });

    const categoryScenes = {
      tech: {
        title: "Tech & Software in school",
        file: "tech-software-products-scene.png",
        alt: "A school classroom with LockerPing, HomeworkSplit, and PocketQueue shown on devices.",
        caption: "Left to right: LockerPing, HomeworkSplit, PocketQueue.",
        hint: "Look at LockerPing, HomeworkSplit and PocketQueue in this school scene. Use the picture to help you research what to invent, or which of the three to develop."
      },
      kids: {
        title: "Kids & Education in class",
        file: "kids-education-products-scene.png",
        alt: "A classroom with Times-Table Trail, StoryCube Lab, and Quiet Hood Kit.",
        caption: "Left to right: Times-Table Trail, StoryCube Lab, Quiet Hood Kit.",
        hint: "Look at Times-Table Trail, StoryCube Lab and Quiet Hood Kit. Use the picture to help you research what to invent, or which of the three to develop."
      },
      fashion: {
        title: "Fashion & Beauty at school",
        file: "fashion-beauty-products-scene.png",
        alt: "SwapBadge, Rain-Ready Cuffs, and Mirror-Mini Palette in a school setting.",
        caption: "Left to right: SwapBadge, Rain-Ready Cuffs, Mirror-Mini Palette.",
        hint: "Look at SwapBadge, Rain-Ready Cuffs and Mirror-Mini Palette. Use the picture to help you research what to invent, or which of the three to develop."
      },
      food: {
        title: "Food & Drink in the canteen",
        file: "food-drink-products-scene.png",
        alt: "A school canteen table with Break-Box Bites, Fizz-Free Cola Ice, and Jacket-Topper Pots.",
        caption: "Left to right: Break-Box Bites, Fizz-Free Cola Ice, Jacket-Topper Pots.",
        hint: "Look at Break-Box Bites, Fizz-Free Cola Ice and Jacket-Topper Pots in this school canteen. Use the picture to help you research what to invent, or which of the three to develop."
      },
      sports: {
        title: "Sports & Outdoors after the match",
        file: "sports-outdoors-products-scene.png",
        alt: "BootDry Pegs, Park-Run Ribbon, and Goal-Line Chalk at a park and pitch.",
        caption: "Left to right: BootDry Pegs, Park-Run Ribbon, Goal-Line Chalk.",
        hint: "Look at BootDry Pegs, Park-Run Ribbon and Goal-Line Chalk. Use the picture to help you research what to invent, or which of the three to develop."
      },
      home: {
        title: "Home & Lifestyle in the house",
        file: "home-lifestyle-products-scene.png",
        alt: "Door-Hook Drop, Morning Lane, and Sofa-Gap Saver in a family home.",
        caption: "Left to right: Door-Hook Drop, Morning Lane, Sofa-Gap Saver.",
        hint: "Look at Door-Hook Drop, Morning Lane and Sofa-Gap Saver. Use the picture to help you research what to invent, or which of the three to develop."
      },
      green: {
        title: "Green & CleanTech in action",
        file: "green-cleantech-products-scene.png",
        alt: "Pencil-Back Mill, Rain-Butt Shower, and Jar-Lid Library.",
        caption: "Left to right: Pencil-Back Mill, Rain-Butt Shower, Jar-Lid Library.",
        hint: "Look at Pencil-Back Mill, Rain-Butt Shower and Jar-Lid Library. Use the picture to help you research what to invent, or which of the three to develop."
      },
      business: {
        title: "Business Services on the high street",
        file: "business-services-products-scene.png",
        alt: "ClubPay Stickers, Queue-Bust Board, and Poster-in-an-Hour.",
        caption: "Left to right: ClubPay Stickers, Queue-Bust Board, Poster-in-an-Hour.",
        hint: "Look at ClubPay Stickers, Queue-Bust Board and Poster-in-an-Hour. Use the picture to help you research what to invent, or which of the three to develop."
      },
      health: {
        title: "Health & Wellness day to day",
        file: "health-wellness-products-scene.png?v=2",
        alt: "Breathe Beads, Sleep-Shade Strip, and Water-Win Bottle.",
        caption: "Left to right: Breathe Beads, Sleep-Shade Strip, Water-Win Bottle.",
        hint: "Look at Breathe Beads, Sleep-Shade Strip and Water-Win Bottle. Use the picture to help you research what to invent, or which of the three to develop."
      },
      electronics: {
        title: "Electronics on the homework desk",
        file: "electronics-products-scene.png",
        alt: "DeskGlow Clip, One-Plug Tower, and Lost-Bud Beacon.",
        caption: "Left to right: DeskGlow Clip, One-Plug Tower, Lost-Bud Beacon.",
        hint: "Look at DeskGlow Clip, One-Plug Tower and Lost-Bud Beacon. Use the picture to help you research what to invent, or which of the three to develop."
      },
      toys: {
        title: "Toys, Games & Hobbies at play",
        file: "toys-games-products-scene.png",
        alt: "Den of Deals, Marble-Run Mix, and Sticker-Quest Pack.",
        caption: "Left to right: Den of Deals, Marble-Run Mix, Sticker-Quest Pack.",
        hint: "Look at Den of Deals, Marble-Run Mix and Sticker-Quest Pack. Use the picture to help you research what to invent, or which of the three to develop."
      },
      pets: {
        title: "Pet Products at home and on walks",
        file: "pet-products-scene.png",
        alt: "Walk-Wipe Pouch, Cat-TV Tunnel, and Treat Timer Ball.",
        caption: "Left to right: Walk-Wipe Pouch, Cat-TV Tunnel, Treat Timer Ball.",
        hint: "Look at Walk-Wipe Pouch, Cat-TV Tunnel and Treat Timer Ball. Use the picture to help you research what to invent, or which of the three to develop."
      },
      auto: {
        title: "Automotive on the school run",
        file: "automotive-products-scene.png",
        alt: "Boot-Mud Mat, Spoke-Spark Lights, and Seat-Back Caddy.",
        caption: "Left to right: Boot-Mud Mat, Spoke-Spark Lights, Seat-Back Caddy.",
        hint: "Look at Boot-Mud Mat, Spoke-Spark Lights and Seat-Back Caddy. Use the picture to help you research what to invent, or which of the three to develop."
      },
      media: {
        title: "Media & Entertainment at home",
        file: "media-entertainment-products-scene.png",
        alt: "One-Minute Mic, Cinema-in-a-Box, and Beat-Step Mat.",
        caption: "Left to right: One-Minute Mic, Cinema-in-a-Box, Beat-Step Mat.",
        hint: "Look at One-Minute Mic, Cinema-in-a-Box and Beat-Step Mat. Use the picture to help you research what to invent, or which of the three to develop."
      },
      travel: {
        title: "Travel on the journey",
        file: "travel-products-scene.png",
        alt: "Queue Quest Cards, Roll-Flat Washbag, and Day-Out Map Band.",
        caption: "Left to right: Queue Quest Cards, Roll-Flat Washbag, Day-Out Map Band.",
        hint: "Look at Queue Quest Cards, Roll-Flat Washbag and Day-Out Map Band. Use the picture to help you research what to invent, or which of the three to develop."
      },
      other: {
        title: "Other ideas in the classroom",
        file: "other-products-scene.png",
        alt: "Lost-and-Found Tree, Compliment Tokens, and Idea Jar Lid.",
        caption: "Left to right: Lost-and-Found Tree, Compliment Tokens, Idea Jar Lid.",
        hint: "Look at Lost-and-Found Tree, Compliment Tokens and Idea Jar Lid. Use the picture to help you research what to invent, or which of the three to develop."
      },
      gadgets: {
        title: "Household Gadgets around the house",
        file: "household-gadgets-products-scene.png",
        alt: "Jar-Pop Wedge, Cable Comb, and Toast-Tongs Safe.",
        caption: "Left to right: Jar-Pop Wedge, Cable Comb, Toast-Tongs Safe.",
        hint: "Look at Jar-Pop Wedge, Cable Comb and Toast-Tongs Safe. Use the picture to help you research what to invent, or which of the three to develop."
      },
      personal: {
        title: "Personal Care for school days",
        file: "personal-care-products-scene.png",
        alt: "PE-Hair Tie Tin, Mint-Lid Brush, and Pocket Balm Stick.",
        caption: "Left to right: PE-Hair Tie Tin, Mint-Lid Brush, Pocket Balm Stick.",
        hint: "Look at PE-Hair Tie Tin, Mint-Lid Brush and Pocket Balm Stick. Use the picture to help you research what to invent, or which of the three to develop."
      },
      retail: {
        title: "Retail & E-commerce boxes and shops",
        file: "retail-ecommerce-products-scene.png",
        alt: "Science Saturday Box, Uniform Re-Shop, and Club Snack Drop.",
        caption: "Left to right: Science Saturday Box, Uniform Re-Shop, Club Snack Drop.",
        hint: "Look at Science Saturday Box, Uniform Re-Shop and Club Snack Drop. Use the picture to help you research what to invent, or which of the three to develop."
      },
      medical: {
        title: "Medical & Healthcare kits",
        file: "medical-healthcare-products-scene.png",
        alt: "First-Aid Pocket, Inhaler Clip Case, and Calm-Count Cards.",
        caption: "Left to right: First-Aid Pocket, Inhaler Clip Case, Calm-Count Cards.",
        hint: "Look at First-Aid Pocket, Inhaler Clip Case and Calm-Count Cards. Use the picture to help you research what to invent, or which of the three to develop."
      }
    };

    function showCategoryScene(c) {
      const panel = document.getElementById("cat-scene-panel");
      const scene = c && categoryScenes[c.id];
      if (!scene) {
        panel.classList.add("hidden");
        return;
      }
      document.getElementById("cat-scene-title").textContent = scene.title;
      const hintEl = document.getElementById("cat-scene-hint");
      if (inventPath === "ready") {
        hintEl.textContent = "";
        hintEl.classList.add("hidden");
        panel.classList.add("scene-roomy");
      } else {
        hintEl.textContent = address(scene.hint);
        hintEl.classList.remove("hidden");
        panel.classList.remove("scene-roomy");
      }
      const img = document.getElementById("cat-scene-img");
      img.src = scene.file;
      img.alt = scene.alt;
      document.getElementById("cat-scene-caption").textContent = scene.caption;
      const extra = document.getElementById("cat-scene-details");
      if (extra) {
        extra.innerHTML = "";
        extra.classList.add("hidden");
      }
      panel.classList.remove("hidden");
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function selectCat(c) {
      if (inventPath === "unique") return;
      selected = c;
      if (inventPath === "ready") {
        showReadyProducts(c);
        return;
      }
      readyChoice = null;
      nameInput.value = "";
      doesInput.value = "";
      whoInput.value = "";
      saveMsg.textContent = "";
      showInvent(c, c.spark, "Invent your unique product");
    }

    function showReadyProducts(c) {
      document.getElementById("ready-hint").textContent =
        address("Three ready-made products in " + c.name + ". Pick one to develop.");
      readyGrid.innerHTML = "";
      c.ready.forEach((p, i) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "ready-card";
        btn.innerHTML = "<strong>" + p.name + "</strong><p>" + p.does + "</p><p><em>For: " + p.who + "</em></p>";
        btn.addEventListener("click", () => pickReady(c, p, i));
        readyGrid.appendChild(btn);
      });
      choosePanel.classList.add("hidden");
      inventPanel.classList.add("hidden");
      saveWrap.classList.add("hidden");
      readyPanel.classList.remove("hidden");
      showCategoryScene(c);
    }

    let readyChoice = null;
    let uniquePhotoData = "";

    function setUniquePhotoUI(on) {
      const block = document.getElementById("unique-photo-block");
      if (!block) return;
      block.classList.toggle("hidden", !on);
      if (!on) {
        uniquePhotoData = "";
        const inp = document.getElementById("product-photo");
        if (inp) inp.value = "";
      }
    }

    function shrinkPhoto(file, done) {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        const max = 720;
        let w = img.width;
        let h = img.height;
        if (w > max || h > max) {
          const s = max / Math.max(w, h);
          w = Math.round(w * s);
          h = Math.round(h * s);
        }
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        canvas.getContext("2d").drawImage(img, 0, 0, w, h);
        URL.revokeObjectURL(url);
        done(canvas.toDataURL("image/jpeg", 0.72));
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        done("");
      };
      img.src = url;
    }

    function paintCornerPhoto(el) {
      if (!el) return;
      const layout = el.closest(".invent-layout");
      if (inventPath === "unique" && uniquePhotoData) {
        el.style.background = "transparent";
        el.innerHTML = "<img class=\"product-photo\" alt=\"Your product idea\" src=\"" + uniquePhotoData + "\">";
        if (layout) layout.classList.add("with-photo");
        return;
      }
      paintProductPhoto(el, selected, readyChoice && readyChoice.product, readyChoice ? readyChoice.index : 0);
    }

    function refreshProductPhotos() {
      paintCornerPhoto(chosenVisual);
      const journey = document.getElementById("journey-visual");
      if (journey) paintCornerPhoto(journey);
    }

    function paintProductPhoto(el, c, product, idx) {
      if (!c) {
        el.innerHTML = "";
        return;
      }
      const scene = categoryScenes[c.id];
      const layout = el.closest(".invent-layout");
      if (product && scene) {
        const pos = idx === 0 ? "18% 12%" : (idx === 2 ? "82% 12%" : "50% 12%");
        el.style.background = "transparent";
        const alt = String(product.name).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
        el.innerHTML = "<img class=\"product-photo\" alt=\"" + alt + "\" src=\"" + scene.file + "\" style=\"object-position:" + pos + "\">";
        if (layout) layout.classList.add("with-photo");
        return;
      }
      if (layout) layout.classList.remove("with-photo");
      el.innerHTML = "";
      paintVisual(el, c);
    }

    function pickReady(c, p, i) {
      readyChoice = { product: p, index: i };
      nameInput.value = p.name;
      doesInput.value = p.does;
      whoInput.value = p.who;
      saveMsg.textContent = "";
      readyPanel.classList.add("hidden");
      showInvent(c, "Develop this ready-made idea. Tweak the details to make the pitch yours.", "Develop this product");
    }

    function paintChosenName() {
      if (!chosenName) return;
      const typed = nameInput.value.trim();
      if (inventPath === "unique") {
        chosenName.textContent = typed || "My own idea";
        return;
      }
      if (readyChoice && readyChoice.product) {
        chosenName.textContent = typed || readyChoice.product.name;
        return;
      }
      chosenName.textContent = typed || (selected && selected.name) || "";
    }

    function showInvent(c, sparkText, heading) {
      selected = c;
      setUniquePhotoUI(inventPath === "unique");
      refreshProductPhotos();
      paintChosenName();
      spark.textContent = address(sparkText);
      spark.classList.toggle("hidden", inventPath === "unique");
      const uniqueMentor = document.getElementById("unique-mentor-box");
      if (uniqueMentor) uniqueMentor.classList.toggle("hidden", inventPath !== "unique");
      inventHeading.textContent = heading;
      const changeBtn = document.getElementById("change-cat");
      if (changeBtn) changeBtn.textContent = inventPath === "unique" ? "Change how I invent" : "Change category";
      readyPanel.classList.add("hidden");
      inventPanel.classList.remove("hidden");
      saveWrap.classList.remove("hidden");
      if (inventPath === "unique") {
        setCatsLookOnly(true);
        choosePanel.classList.remove("hidden");
        document.getElementById("cat-scene-panel").classList.add("hidden");
      } else {
        choosePanel.classList.add("hidden");
        if (readyChoice) {
          document.getElementById("cat-scene-panel").classList.add("hidden");
        } else {
          showCategoryScene(c);
        }
      }
      updateButtons();
      if (!(window.DDPlay && window.DDPlay.example)) nameInput.focus();
    }

    document.getElementById("change-cat").addEventListener("click", () => {
      readyChoice = null;
      inventPanel.classList.add("hidden");
      saveWrap.classList.add("hidden");
      readyPanel.classList.add("hidden");
      document.getElementById("journey").classList.add("hidden");
      document.getElementById("step-badge").textContent = "Step 1 of 5 · Entrepreneur only";
      document.getElementById("page-title").textContent = "First step invent the product";
      document.getElementById("cat-scene-panel").classList.add("hidden");
      if (inventPath === "unique") {
        nameInput.value = "";
        doesInput.value = "";
        whoInput.value = "";
        uniquePhotoData = "";
        const inp = document.getElementById("product-photo");
        if (inp) inp.value = "";
        hideAllSteps();
        pathPanel.classList.remove("hidden");
        return;
      }
      choosePanel.classList.remove("hidden");
    });

    document.getElementById("back-cats-ready").addEventListener("click", () => {
      readyPanel.classList.add("hidden");
      document.getElementById("cat-scene-panel").classList.add("hidden");
      choosePanel.classList.remove("hidden");
    });

    function filled() {
      return selected &&
        nameInput.value.trim().length >= 2 &&
        doesInput.value.trim().length >= 8 &&
        whoInput.value.trim().length >= 2;
    }

    function updateButtons() {
      saveBtn.disabled = !filled();
      nextBtn.disabled = !filled();
    }

    [nameInput, doesInput, whoInput].forEach((el) => {
      el.addEventListener("input", () => {
        if (el === nameInput) paintChosenName();
        updateButtons();
      });
    });

    document.getElementById("product-photo").addEventListener("change", (ev) => {
      const file = ev.target.files && ev.target.files[0];
      if (!file) return;
      shrinkPhoto(file, (data) => {
        uniquePhotoData = data;
        refreshProductPhotos();
      });
    });
    document.getElementById("clear-photo").addEventListener("click", () => {
      uniquePhotoData = "";
      document.getElementById("product-photo").value = "";
      refreshProductPhotos();
    });

    saveBtn.addEventListener("click", () => {
      tidyAllWriting();
      if (!filled()) return;
      const product = persist();
      saveMsg.textContent = address("Saved: “" + product.name + "”" + (product.category && product.category !== "My own idea" ? " in " + product.category : "") + ". Continue to customers, money and pitch.");
      nextBtn.disabled = false;
    });

    nextBtn.addEventListener("click", () => {
      if (!filled()) return;
      persist();
      applyStepView(1);
    });

    ["cust-who", "cust-need", "cust-where", "cust-hear"].forEach((id) => {
      document.getElementById(id).addEventListener("input", updateCustomersGate);
    });

    document.getElementById("save-customers").addEventListener("click", () => {
      tidyAllWriting();
      if (!customersReady()) return;
      persist();
      applyStepView(2);
    });

    document.getElementById("save-money").addEventListener("click", () => {
      tidyAllWriting();
      if (!moneyReadyForQuiz()) return;
      persist();
      setJourneyProgress("money");
      document.getElementById("money-save-msg").textContent = address("Money saved. See your progress above, then check the figures with four questions.");
      document.getElementById("money-quiz-panel").classList.remove("hidden");
      setQuizStartVisible(true);
      document.getElementById("progress-panel").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const WORD_ONES = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    const WORD_TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const WORD_VAL = {
      zero: 0, nought: 0, oh: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9,
      ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19,
      twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90,
      hundred: 100, thousand: 1000, million: 1000000
    };

    function underHundred(n) {
      n = Math.round(n);
      if (n < 20) return WORD_ONES[n];
      const t = Math.floor(n / 10);
      const u = n % 10;
      return WORD_TENS[t] + (u ? "-" + WORD_ONES[u] : "");
    }
    function numberToWords(n) {
      n = Math.round(Number(n));
      if (!Number.isFinite(n) || n < 0) return "";
      if (n === 0) return "zero";
      if (n >= 1000000) {
        const m = Math.floor(n / 1000000);
        const r = n % 1000000;
        return numberToWords(m) + " million" + (r ? " " + numberToWords(r) : "");
      }
      if (n >= 1000) {
        const th = Math.floor(n / 1000);
        const r = n % 1000;
        let s = numberToWords(th) + " thousand";
        if (r) s += (r < 100 ? " and " : " ") + numberToWords(r);
        return s;
      }
      if (n < 100) return underHundred(n);
      const h = Math.floor(n / 100);
      const rem = n % 100;
      return WORD_ONES[h] + " hundred" + (rem ? " and " + underHundred(rem) : "");
    }
    function numberToWordsMoney(n) {
      if (!Number.isFinite(n)) return "";
      const sign = n < 0 ? "minus " : "";
      n = Math.abs(n);
      const pounds = Math.floor(n + 1e-9);
      const pence = Math.round((n - pounds) * 100);
      if (pounds === 0 && pence > 0) return sign + numberToWords(pence) + " pence";
      let s = sign + numberToWords(pounds) + (pounds === 1 ? " pound" : " pounds");
      if (pence > 0) s += " " + numberToWords(pence);
      return s;
    }
    function numberToWordsPercent(n) {
      return numberToWords(n) + " percent";
    }
    function parseWordTokens(tokens) {
      let total = 0;
      let current = 0;
      let found = false;
      tokens.forEach((w) => {
        if (!w || w === "and") return;
        if (!(w in WORD_VAL)) return;
        found = true;
        const val = WORD_VAL[w];
        if (val === 100 || val === 1000 || val === 1000000) {
          current = (current || 1) * val;
          if (val >= 1000) {
            total += current;
            current = 0;
          }
        } else {
          current += val;
        }
      });
      if (!found) return NaN;
      return total + current;
    }
    function parseWrittenNumber(raw) {
      const original = String(raw || "").trim();
      if (!original) return NaN;
      if (/\d/.test(original)) return NaN;
      const t = original.toLowerCase().replace(/-/g, " ").replace(/[^a-z\s]/g, " ").replace(/\s+/g, " ").trim();
      if (!t) return NaN;
      if (/\bpercent\b|\bper cent\b/.test(t)) {
        return parseWordTokens(t.replace(/\bpercent\b|\bper cent\b/g, " ").split(/\s+/).filter(Boolean));
      }
      const poundParts = t.split(/\bpounds?\b/);
      if (poundParts.length > 1) {
        const pounds = parseWordTokens(poundParts[0].split(/\s+/).filter(Boolean));
        const rest = poundParts.slice(1).join(" ").replace(/\bpence\b|\bpennies\b/g, " ").trim();
        if (!Number.isFinite(pounds)) return NaN;
        if (!rest) return pounds;
        const pence = parseWordTokens(rest.split(/\s+/).filter(Boolean));
        if (!Number.isFinite(pence)) return pounds;
        return pounds + (pence >= 100 ? 0 : pence / 100);
      }
      if (/\bpence\b|\bpennies\b/.test(t)) {
        const n = parseWordTokens(t.replace(/\bpence\b|\bpennies\b/g, " ").split(/\s+/).filter(Boolean));
        return Number.isFinite(n) ? n / 100 : NaN;
      }
      const pointParts = t.split(/\bpoint\b/);
      if (pointParts.length === 2) {
        const whole = parseWordTokens(pointParts[0].split(/\s+/).filter(Boolean));
        const fracBits = pointParts[1].trim().split(/\s+/).filter((w) => w in WORD_VAL && WORD_VAL[w] < 10);
        let frac = 0;
        let div = 1;
        fracBits.forEach((w) => { div *= 10; frac = frac * 10 + WORD_VAL[w]; });
        if (!Number.isFinite(whole)) return NaN;
        return whole + (div > 1 ? frac / div : 0);
      }
      return parseWordTokens(t.split(/\s+/).filter(Boolean));
    }
    function fieldNumber(id) {
      return parseWrittenNumber(document.getElementById(id).value);
    }
    function showMoneyWordsWarn(on) {
      const el = document.getElementById("money-words-warn");
      if (el) el.classList.toggle("hidden", !on);
    }
    function wordsFromFigures(n, kind) {
      if (kind === "percent") return numberToWordsPercent(n);
      if (kind === "count") return numberToWords(n);
      return numberToWordsMoney(n);
    }
    function sanitizeMoneyWords(el) {
      let v = el.value;
      if (!v) return;
      const kind = el.dataset.moneyKind || "money";
      const fromSpeak = el.dataset.fromSpeak === "1";
      if (fromSpeak) el.dataset.fromSpeak = "";
      const trimmed = v.trim();
      const figuresOnly = /^[£$]?\s*[\d,]+(\.\d+)?\s*(pounds?|percent|%)?$/i.test(trimmed);
      if (fromSpeak && figuresOnly) {
        const n = Number(trimmed.replace(/[£$%,\s]/g, "").replace(/,/g, ""));
        if (Number.isFinite(n)) {
          el.value = wordsFromFigures(n, kind);
          showMoneyWordsWarn(false);
          return;
        }
      }
      if (/\d/.test(v)) {
        el.value = v.replace(/\d/g, "");
        showMoneyWordsWarn(true);
      }
    }

    let salesChoice = null;
    let projChoice = null;
    const marketPicks = new Set();
    let marketOwnOn = false;

    function salesQty() {
      if (salesChoice === "own") return fieldNumber("sales-own");
      return Number(salesChoice);
    }

    function projQty() {
      if (projChoice === "own") return fieldNumber("proj-own");
      return Number(projChoice);
    }

    function hasMarketing() {
      return marketPicks.size > 0 || marketOwnOn;
    }

    function marketCost() {
      let total = 0;
      marketPicks.forEach((n) => { total += n; });
      if (marketOwnOn) {
        const own = fieldNumber("market-own");
        if (Number.isFinite(own) && own >= 0) total += own;
      }
      return hasMarketing() ? total : NaN;
    }

    function marketBreakdown() {
      const bits = [];
      document.querySelectorAll("#market-choices button[data-label].selected").forEach((b) => {
        bits.push(b.dataset.label + " " + moneyLabel(Number(b.dataset.market)));
      });
      if (marketOwnOn) {
        const own = fieldNumber("market-own");
        bits.push("your figure " + (Number.isFinite(own) && own >= 0 ? moneyLabel(own) : "£0"));
      }
      return bits;
    }

    function moneyBits() {
      const cost = fieldNumber("unit-cost");
      const sell = fieldNumber("sell-price");
      const qty = salesQty();
      const sold = projQty();
      const marketing = marketCost();
      const makeTotal = (Number.isFinite(cost) && Number.isFinite(qty) && qty > 0) ? cost * qty : NaN;
      const monthNeed = (Number.isFinite(makeTotal) && Number.isFinite(marketing) && marketing >= 0) ? makeTotal + marketing : NaN;
      const monthSales = (Number.isFinite(sell) && Number.isFinite(sold) && sold > 0) ? sell * sold : NaN;
      const monthProfit = (Number.isFinite(monthSales) && Number.isFinite(monthNeed)) ? monthSales - monthNeed : NaN;
      const ask = fieldNumber("ask-amount");
      const equity = fieldNumber("equity-pct");
      const profit = (Number.isFinite(sell) && Number.isFinite(cost)) ? sell - cost : NaN;
      const valuation = (ask > 0 && equity > 0) ? ask / (equity / 100) : NaN;
      const suggest = Number.isFinite(monthNeed) ? Math.ceil(monthNeed * 3) : NaN;
      const yearMake = Number.isFinite(makeTotal) ? makeTotal * 12 : NaN;
      const yearMarket = (Number.isFinite(marketing) && hasMarketing()) ? marketing * 12 : NaN;
      const yearCosts = (Number.isFinite(yearMake) && Number.isFinite(yearMarket)) ? yearMake + yearMarket : NaN;
      const yearSales = Number.isFinite(monthSales) ? monthSales * 12 : NaN;
      const yearGap = (Number.isFinite(yearSales) && Number.isFinite(yearCosts)) ? yearSales - yearCosts : NaN;
      const yearTotal = yearCosts;
      return { cost, sell, qty, sold, marketing, makeTotal, monthNeed, monthSales, monthProfit, ask, equity, profit, valuation, suggest, yearMake, yearMarket, yearCosts, yearSales, yearGap, yearTotal };
    }

    function moneyLabel(n) {
      if (!Number.isFinite(n)) return "—";
      const rounded = Math.round(n * 100) / 100;
      if (Math.abs(rounded - Math.round(rounded)) < 1e-9) return "£" + String(Math.round(rounded));
      return "£" + rounded.toFixed(2);
    }

    function toggleOwn(kind, isOwn) {
      const input = document.getElementById(kind + "-own");
      const label = document.getElementById(kind + "-own-label");
      input.classList.toggle("hidden", !isOwn);
      label.classList.toggle("hidden", !isOwn);
      if (isOwn) input.focus();
    }

    function updateMoneyStats() {
      const m = moneyBits();
      const makeStat = document.getElementById("make-cost-stat");
      const sellStat = document.getElementById("sell-cost-stat");
      const projStat = document.getElementById("proj-sales-stat");
      const compare = document.getElementById("sales-compare");
      const stats = document.getElementById("money-stats");

      if (Number.isFinite(m.cost) && m.cost >= 0 && Number.isFinite(m.qty) && m.qty > 0) {
        makeStat.textContent = "Monthly make-cost: " + moneyLabel(m.makeTotal) +
          " (" + moneyLabel(m.cost) + " × " + m.qty + "). Yearly make-cost: " + moneyLabel(m.yearMake) + ".";
      } else {
        makeStat.textContent = "Pick how many you will make to see the monthly and yearly make-cost.";
      }

      if (hasMarketing() && Number.isFinite(m.marketing) && m.marketing >= 0) {
        const bits = marketBreakdown();
        sellStat.textContent = (bits.length ? bits.join(" + ") + " = " : "") +
          "Monthly marketing: " + moneyLabel(m.marketing) + ". Yearly marketing: " + moneyLabel(m.yearMarket) + ".";
      } else {
        sellStat.textContent = "Pick a marketing option to see the monthly and yearly cost of selling.";
      }

      if (Number.isFinite(m.sell) && m.sell > 0 && Number.isFinite(m.sold) && m.sold > 0) {
        projStat.textContent = "Monthly sales: " + m.sold + " items × " + moneyLabel(m.sell) + " = " + moneyLabel(m.monthSales) +
          ". Yearly sales: " + moneyLabel(m.yearSales) + ".";
      } else {
        projStat.textContent = "Add a selling price and pick how many you expect to sell.";
      }

      if (Number.isFinite(m.yearSales) && Number.isFinite(m.yearCosts)) {
        compare.classList.remove("hidden");
        compare.classList.remove("outcome-good", "outcome-bad", "outcome-tight");
        let note = "Yearly sales " + moneyLabel(m.yearSales) + " versus yearly costs " + moneyLabel(m.yearCosts) +
          " (make " + moneyLabel(m.yearMake) + " + marketing " + moneyLabel(m.yearMarket) + "). ";
        if (m.yearGap > m.yearCosts * 0.15) {
          compare.classList.add("outcome-good");
          note += "Outcome: the business would be in profit by about " + moneyLabel(m.yearGap) + " a year if these figures came true.";
        } else if (m.yearGap > 0) {
          compare.classList.add("outcome-tight");
          note += "Outcome: a small yearly profit of about " + moneyLabel(m.yearGap) + ". One slow month could wipe it out.";
        } else if (m.yearGap === 0) {
          compare.classList.add("outcome-tight");
          note += "Outcome: you would only break even. There is no spare money for mistakes or growth.";
        } else {
          compare.classList.add("outcome-bad");
          note += "Outcome: yearly sales would not cover yearly costs. You would be short about " + moneyLabel(Math.abs(m.yearGap)) + " a year.";
        }
        if (Number.isFinite(m.qty) && Number.isFinite(m.sold) && m.sold > m.qty) {
          note += " Careful: you expect to sell more (" + m.sold + ") than you plan to make (" + m.qty + "). You cannot sell stock you have not made.";
        } else if (Number.isFinite(m.qty) && Number.isFinite(m.sold) && m.sold < m.qty) {
          note += " You plan to make " + m.qty + " but sell " + m.sold + ", so leftover stock still costs money to produce.";
        }
        compare.textContent = note;
      } else {
        compare.classList.add("hidden");
        compare.textContent = "";
      }

      updateQuizGate();

      if (!Number.isFinite(m.cost) || !Number.isFinite(m.sell)) {
        stats.textContent = "Fill the orange, purple and green blocks: make-cost, marketing and projected sales.";
        return;
      }
      let text = "Profit on each item: " + moneyLabel(m.profit) + ".";
      if (m.profit <= 0) text += " Warning: you are not making money on each sale yet.";
      if (Number.isFinite(m.monthNeed)) {
        text += " One month of making + marketing costs " + moneyLabel(m.monthNeed) + ".";
      }
      if (Number.isFinite(m.monthSales) && Number.isFinite(m.monthProfit)) {
        text += " Projected monthly sales money: " + moneyLabel(m.monthSales) +
          ". After make-cost and marketing that month: " + moneyLabel(m.monthProfit) + ".";
      }
      if (Number.isFinite(m.suggest)) {
        text += " A cautious ask for three months of costs would be about " + moneyLabel(m.suggest) + ".";
      }
      if (Number.isFinite(m.ask) && m.ask > 0 && Number.isFinite(m.monthNeed) && m.ask < m.monthNeed) {
        text += " Careful: your ask is less than one month of making and marketing.";
      }
      if (Number.isFinite(m.valuation) && m.equity > 0) {
        text += " Your ask values the whole business at " + moneyLabel(m.valuation) + ".";
      } else {
        text += " Now choose how much to ask for, and how much equity to offer.";
      }
      stats.textContent = text;
    }

    function salesTiers() {
      const blob = (
        (nameInput.value || "") + " " +
        (doesInput.value || "") + " " +
        (selected ? selected.id : "") + " " +
        (selected ? selected.name : "")
      ).toLowerCase();
      if (/drink|fizz|cola|juice|soda|pop|mocktail|ice pop|smoothie/.test(blob)) {
        return { label: "a drink sold often and cheaply", tiers: [1000, 5000, 20000] };
      }
      if (/snack|bite|crisp|chocolate|sweet|food|recipe/.test(blob) || (selected && selected.id === "food")) {
        return { label: "a food product people buy again and again", tiers: [400, 1500, 6000] };
      }
      if (/app|software|planner|token app|digital/.test(blob) || (selected && selected.id === "tech")) {
        return { label: "a tech or software idea with fewer paying users at first", tiers: [10, 40, 120] };
      }
      if (selected && selected.id === "electronics") {
        return { label: "an electronic gadget that costs more to make", tiers: [15, 50, 150] };
      }
      if (selected && selected.id === "business") {
        return { label: "a service sold to other businesses, not to a huge crowd", tiers: [8, 20, 60] };
      }
      if (selected && selected.id === "medical") {
        return { label: "a healthcare kit sold carefully, not like a supermarket drink", tiers: [20, 80, 250] };
      }
      if (selected && selected.id === "auto") {
        return { label: "a car or bike accessory with a smaller market", tiers: [15, 45, 150] };
      }
      if (selected && selected.id === "retail") {
        return { label: "boxes or online orders that build month by month", tiers: [40, 150, 500] };
      }
      if (selected && (selected.id === "personal" || selected.id === "pets" || selected.id === "health")) {
        return { label: "an everyday product people might repurchase", tiers: [80, 300, 1200] };
      }
      if (selected && (selected.id === "toys" || selected.id === "kids" || selected.id === "media")) {
        return { label: "a toy, game or entertainment product", tiers: [40, 150, 500] };
      }
      if (selected && (selected.id === "fashion" || selected.id === "sports")) {
        return { label: "fashion or sports kit", tiers: [30, 100, 350] };
      }
      if (selected && (selected.id === "home" || selected.id === "gadgets" || selected.id === "green")) {
        return { label: "a household or green product", tiers: [25, 80, 250] };
      }
      if (selected && selected.id === "travel") {
        return { label: "a travel product for trips and days out", tiers: [40, 150, 500] };
      }
      return { label: "this kind of product", tiers: [25, 80, 250] };
    }

    function fillQtyRow(rowId, dataKey, labels) {
      const fit = salesTiers();
      const row = document.getElementById(rowId);
      row.innerHTML = "";
      fit.tiers.forEach((n, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.dataset[dataKey] = String(n);
        b.textContent = (labels[i] ? labels[i] + " · " : "") + numberToWords(n) + " a month";
        row.appendChild(b);
      });
      const own = document.createElement("button");
      own.type = "button";
      own.dataset[dataKey] = "own";
      own.textContent = "Choose my own figure";
      row.appendChild(own);
    }

    function fillSalesChoices() {
      const fit = salesTiers();
      document.getElementById("sales-fit-hint").textContent =
        address("These three monthly make figures are sized for " + fit.label + ". A fizzy drink needs far bigger numbers than a tech gadget.");
      document.getElementById("proj-fit-hint").textContent =
        address("Expected sales for " + fit.label + ": a cautious month, a likely month, or a busy month — or your own estimate.");
      fillQtyRow("sales-choices", "sales", ["Low", "Medium", "High"]);
      fillQtyRow("proj-choices", "proj", ["Cautious", "Likely", "Busy"]);
      salesChoice = null;
      projChoice = null;
      document.getElementById("sales-own").value = "";
      document.getElementById("proj-own").value = "";
      toggleOwn("sales", false);
      toggleOwn("proj", false);
    }

    document.getElementById("sales-choices").addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn || !btn.dataset.sales) return;
      salesChoice = btn.dataset.sales;
      document.querySelectorAll("#sales-choices button").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      toggleOwn("sales", salesChoice === "own");
      updateMoneyStats();
    });
    document.getElementById("proj-choices").addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn || !btn.dataset.proj) return;
      projChoice = btn.dataset.proj;
      document.querySelectorAll("#proj-choices button").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      toggleOwn("proj", projChoice === "own");
      updateMoneyStats();
    });
    document.querySelectorAll("#market-choices button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.market;
        if (key === "own") {
          marketOwnOn = !marketOwnOn;
          btn.classList.toggle("selected", marketOwnOn);
          toggleOwn("market", marketOwnOn);
        } else {
          const amount = Number(key);
          if (marketPicks.has(amount)) {
            marketPicks.delete(amount);
            btn.classList.remove("selected");
          } else {
            marketPicks.add(amount);
            btn.classList.add("selected");
          }
        }
        updateMoneyStats();
      });
    });

    ["unit-cost", "sell-price", "ask-amount", "equity-pct", "sales-own", "market-own", "proj-own"].forEach((id) => {
      const el = document.getElementById(id);
      el.addEventListener("input", () => {
        sanitizeMoneyWords(el);
        updateMoneyStats();
      });
    });

    function currentProduct() {
      return {
        categoryId: selected ? selected.id : "",
        category: selected ? selected.name : "",
        name: nameInput.value.trim(),
        does: doesInput.value.trim(),
        who: whoInput.value.trim(),
        path: inventPath,
        photo: inventPath === "unique" ? uniquePhotoData : "",
        custWho: document.getElementById("cust-who").value.trim(),
        custNeed: document.getElementById("cust-need").value.trim(),
        custWhere: document.getElementById("cust-where").value.trim(),
        custHear: document.getElementById("cust-hear").value.trim(),
        unitCost: Number.isFinite(fieldNumber("unit-cost")) ? fieldNumber("unit-cost") : "",
        sellPrice: Number.isFinite(fieldNumber("sell-price")) ? fieldNumber("sell-price") : "",
        salesChoice: salesChoice,
        salesOwn: Number.isFinite(fieldNumber("sales-own")) ? fieldNumber("sales-own") : document.getElementById("sales-own").value,
        projChoice: projChoice,
        projOwn: Number.isFinite(fieldNumber("proj-own")) ? fieldNumber("proj-own") : document.getElementById("proj-own").value,
        marketPicks: Array.from(marketPicks),
        marketOwnOn: marketOwnOn,
        marketOwn: Number.isFinite(fieldNumber("market-own")) ? fieldNumber("market-own") : "",
        askAmount: Number.isFinite(fieldNumber("ask-amount")) ? fieldNumber("ask-amount") : "",
        equityPct: Number.isFinite(fieldNumber("equity-pct")) ? fieldNumber("equity-pct") : "",
        pitch: document.getElementById("pitch-edit").value.trim(),
        pitchStages: collectPitchStages()
      };
    }

    function persist(extra) {
      const product = Object.assign(currentProduct(), extra || {});
      if (window.DDWriting) {
        window.DDWriting.addKnown([product.name, product.does, product.custWho, product.who].filter(Boolean).join(" "));
      }
      const key = (window.DDPlay && window.DDPlay.example) ? "dd_example_product" : "dd_product";
      try { localStorage.setItem(key, JSON.stringify(product)); } catch (e) {}
      if (window.DDPlay && typeof window.DDPlay.paintSteps === "function") window.DDPlay.paintSteps();
      return product;
    }

    function customersReady() {
      return document.getElementById("cust-who").value.trim().length >= 2 &&
        document.getElementById("cust-need").value.trim().length >= 8 &&
        document.getElementById("cust-where").value.trim().length >= 2 &&
        document.getElementById("cust-hear").value.trim().length >= 2;
    }

    function updateCustomersGate() {
      document.getElementById("save-customers").disabled = !customersReady();
    }

    const STEP_EXPLAIN = [
      "",
      "",
      "",
      "Write a short, honest pitch in six stages: hello, the problem, the product, the customer, the money, and the ask. Use your own invention. No waffle."
    ];
    const STEP_EXPLAIN_EXAMPLE = [
      "Example: Sam invented BootDry Pegs — vented pegs that clip muddy football boots open so they dry overnight. This page is finished — look, don’t type.",
      "Example: BootDry Pegs are for footballers and parents after wet matches. They buy from sports shops and club stalls.",
      "Example: Each set costs £2.50 to make and sells for £7.99. Sam makes 200 a month, expects to sell 180, and spends £330 on posters and social ads. The ask is £5,000 for 15%.",
      "Example: Sam’s six-stage pitch is already written. Read every stage, then open the Den to see the questions and the decision."
    ];

    function applyStepView(step) {
      const titles = [
        { badge: "Step 1 of 5 · Invent", title: "Invent the product" },
        { badge: "Step 2 of 5 · Customers", title: "Develop your target customers" },
        { badge: "Step 3 of 5 · Costs, sales and profits", title: "Costs, sales and profits" },
        { badge: "Step 4 of 5 · Your pitch", title: "Your pitch" }
      ];
      const meta = titles[step] || titles[0];
      document.getElementById("step-badge").textContent = meta.badge;
      document.getElementById("page-title").textContent = meta.title;
      const explain = (window.DDPlay && window.DDPlay.example) ? STEP_EXPLAIN_EXAMPLE : STEP_EXPLAIN;
      const lead = explain[step] || "";
      const leadEl = document.getElementById("step-lead");
      const leadText = (window.DDPlay && window.DDPlay.example) ? lead : address(lead);
      leadEl.textContent = leadText;
      leadEl.classList.toggle("hidden", !leadText);

      const journey = document.getElementById("journey");
      const inventChrome = [pathPanel, choosePanel, readyPanel, inventPanel, saveWrap];

      if (step === 0) {
        const exampleOn = window.DDPlay && window.DDPlay.example;
        document.getElementById("dict-invent").classList.remove("hidden");
        if (exampleOn) {
          pathPanel.classList.add("hidden");
          choosePanel.classList.add("hidden");
          readyPanel.classList.add("hidden");
          inventPanel.classList.remove("hidden");
          saveWrap.classList.add("hidden");
          document.getElementById("cat-scene-panel").classList.add("hidden");
          journey.classList.remove("hidden");
          document.getElementById("progress-panel").classList.remove("hidden");
          document.getElementById("dict-journey").classList.add("hidden");
          document.getElementById("customers-panel").classList.add("hidden");
          document.getElementById("money-panel").classList.add("hidden");
          document.getElementById("money-quiz-panel").classList.add("hidden");
          document.getElementById("pitch-panel").classList.add("hidden");
          document.getElementById("pitch-wrap").classList.add("hidden");
        } else {
          journey.classList.add("hidden");
          if (inventPanel.classList.contains("hidden") && choosePanel.classList.contains("hidden") && readyPanel.classList.contains("hidden")) {
            pathPanel.classList.remove("hidden");
          }
        }
        if (window.DDPlay && typeof window.DDPlay.paintSteps === "function") window.DDPlay.paintSteps();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      document.getElementById("dict-invent").classList.add("hidden");
      inventChrome.forEach((el) => el.classList.add("hidden"));
      document.getElementById("cat-scene-panel").classList.add("hidden");
      journey.classList.remove("hidden");
      document.getElementById("progress-panel").classList.toggle("hidden", !(window.DDPlay && window.DDPlay.example));
      document.getElementById("dict-journey").classList.add("hidden");
      document.getElementById("customers-panel").classList.toggle("hidden", step !== 1);
      document.getElementById("money-panel").classList.toggle("hidden", step !== 2);
      document.getElementById("money-quiz-panel").classList.toggle("hidden", step !== 2);
      document.getElementById("pitch-panel").classList.toggle("hidden", step !== 3);
      document.getElementById("pitch-wrap").classList.toggle("hidden", step !== 3);

      if (selected) {
        refreshProductPhotos();
        document.getElementById("journey-name").textContent = nameInput.value.trim() || selected.name;
        document.getElementById("journey-blurb").textContent = doesInput.value.trim();
      }
      if ((step === 1 || step === 2) && !document.getElementById("sales-choices").children.length) {
        fillSalesChoices();
      }
      updateCustomersGate();
      updateMoneyStats();
      if (window.DDPlay && typeof window.DDPlay.paintSteps === "function") window.DDPlay.paintSteps();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.openGameStep = function (step) {
      if (window.DDPlay && !window.DDPlay.example) {
        const block = window.DDPlay.blockedReason(step);
        if (block) {
          window.DDPlay.showGateMsg(block);
          window.DDPlay.paintSteps();
          return;
        }
      }
      if (window.DDPlay) window.DDPlay.showGateMsg("");
      document.getElementById("stage-two").classList.add("hidden");
      document.getElementById("stage-one").classList.remove("hidden");
      if (step === 4) {
        document.getElementById("stage-one").classList.add("hidden");
        document.getElementById("stage-two").classList.remove("hidden");
        if (typeof window.startDenStage === "function") window.startDenStage();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      document.getElementById("stage-briefing").classList.add("hidden");
      document.getElementById("stage-invent").classList.remove("hidden");
      if (typeof refreshNamedCopy === "function") refreshNamedCopy();
      applyStepView(step);
    };

    function returnToReady() {
      document.getElementById("stage-two").classList.add("hidden");
      document.getElementById("stage-one").classList.remove("hidden");
      document.getElementById("stage-invent").classList.add("hidden");
      document.getElementById("stage-briefing").classList.remove("hidden");
      if (window.DDPlay && typeof window.DDPlay.paintSteps === "function") window.DDPlay.paintSteps();
      const ready = document.getElementById("ready");
      if (ready) ready.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function setJourneyProgress(key) {
      const map = { invent: 0, customers: 1, money: 2, pitch: 3, den: 4 };
      const active = map[key];
      document.getElementById("progress-panel").classList.remove("hidden");
      document.querySelectorAll("#journey-steps .step").forEach((btn) => {
        const n = Number(btn.dataset.step);
        btn.classList.toggle("active", n === active);
        btn.classList.toggle("done", n < active);
      });
      if (key === "customers") {
        document.getElementById("step-badge").textContent = "Step 2 of 5 · Customers";
        document.getElementById("page-title").textContent = "Customers complete";
      } else if (key === "money") {
        document.getElementById("step-badge").textContent = "Step 3 of 5 · Costs, sales and profits";
        document.getElementById("page-title").textContent = "Costs, sales and profits complete";
      } else if (key === "pitch") {
        document.getElementById("step-badge").textContent = "Step 4 of 5 · Your pitch";
        document.getElementById("page-title").textContent = "Write your pitch";
      }
    }

    function setQuizStartVisible(show) {
      document.getElementById("quiz-start-wrap").classList.toggle("hidden", !show);
      document.getElementById("quiz-intro-hint").classList.toggle("hidden", !show);
    }

    function redoMoneyFigures() {
      document.getElementById("pitch-panel").classList.add("hidden");
      document.getElementById("pitch-wrap").classList.add("hidden");
      document.getElementById("money-quiz-body").classList.add("hidden");
      document.getElementById("mq-choices").innerHTML = "";
      document.getElementById("mq-feedback").textContent = "";
      try { localStorage.removeItem("dd_money_quiz"); } catch (e) {}
      document.getElementById("money-quiz-panel").classList.remove("hidden");
      setQuizStartVisible(true);
      document.getElementById("start-money-quiz").disabled = !moneyReadyForQuiz();
      document.getElementById("quiz-gate-msg").textContent =
        address("Change make-cost, marketing or projected sales if you have doubts. Then tap I’m ready for a fresh set of questions.");
      setJourneyProgress("money");
      persist({ pitchReady: false });
      document.getElementById("money-panel").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function addQuizAction(label, gold, onClick) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = gold ? "btn btn-gold" : "btn";
      b.textContent = label;
      b.style.margin = "6px 8px 0 0";
      b.addEventListener("click", onClick);
      document.getElementById("mq-choices").appendChild(b);
      return b;
    }

    function showJourney() {
      applyStepView(1);
    }

    function moneyReadyForQuiz() {
      const m = moneyBits();
      return Number.isFinite(m.cost) && m.cost >= 0 && Number.isFinite(m.qty) && m.qty > 0 &&
        hasMarketing() && Number.isFinite(m.sell) && m.sell > 0 && Number.isFinite(m.sold) && m.sold > 0;
    }

    function updateQuizGate() {
      const ready = moneyReadyForQuiz();
      document.getElementById("start-money-quiz").disabled = !ready;
      const saveMoney = document.getElementById("save-money");
      if (saveMoney) saveMoney.disabled = !ready;
      document.getElementById("quiz-gate-msg").textContent = ready
        ? address("Your three colour blocks are filled. Tap below for four questions. Score 3 out of 4 to unlock your pitch.")
        : address("Finish cost to make, marketing, and projected sales first. Then the questions unlock.");
    }

    function shuffle(arr) {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const t = a[i];
        a[i] = a[j];
        a[j] = t;
      }
      return a;
    }

    function choiceSet(correct, extras) {
      const labels = [correct];
      extras.forEach((x) => {
        if (x !== correct && labels.indexOf(x) === -1) labels.push(x);
      });
      let n = 1;
      while (labels.length < 3) {
        labels.push(correct + " (guess " + n + ")");
        n += 1;
      }
      return shuffle(labels.slice(0, 3));
    }

    let mqIndex = 0;
    let mqScore = 0;
    let mqLocked = false;
    let mqItems = [];

    function qItem(q, answer, wrongs, why) {
      return {
        q: address(q),
        choices: shuffle([answer].concat(wrongs)),
        answerLabel: answer,
        why: address(why || "Look back at the orange, purple and green blocks.")
      };
    }

    function buildMoneyQuiz() {
      const m = moneyBits();
      const name = nameInput.value.trim() || "your product";
      const gapWord = m.yearGap > 0 ? "a yearly profit" : (m.yearGap < 0 ? "a yearly shortfall" : "break-even");
      const gapExplain = m.yearGap > 0
        ? "Yearly sales are higher than yearly costs, so the plan shows a profit."
        : (m.yearGap < 0
          ? "Yearly sales are lower than yearly costs, so the plan would lose money."
          : "Sales would only match costs — that is break-even, with no spare cash.");
      const stockQ = (Number.isFinite(m.qty) && Number.isFinite(m.sold) && m.sold !== m.qty)
        ? (m.sold > m.qty
          ? qItem(
              "You plan to make " + m.qty + " of " + name + " but expect to sell " + m.sold + ". What is the problem?",
              "You cannot sell more than you have made unless you make extra",
              ["Investors love it when sales are bigger than production", "Leftover customers pay the make-cost for you"],
              "Stock has to exist before you can sell it. Make-volume and sales-volume should match, or you need a plan to make more."
            )
          : qItem(
              "You plan to make " + m.qty + " but only expect to sell " + m.sold + ". What still costs money?",
              "The extra items you made but did not sell",
              ["Nothing — unsold items are free", "Only the marketing on unsold items"],
              "You already paid to make leftover stock. That cash is tied up until the items sell — if they ever do."
            ))
        : qItem(
            "Why might an entrepreneur make fewer items than they *hope* to sell?",
            "So they do not spend a fortune on stock they cannot sell",
            ["Because investors forbid making products", "Because yearly sales ignore make-cost"],
            "Making costs money now. Hoping for huge sales later does not pay today's bills."
          );

      const bank = [
        qItem(
          "On " + name + ", each item costs " + moneyLabel(m.cost) + " to make and sells for " + moneyLabel(m.sell) + ". Profit on one item is…",
          moneyLabel(m.profit),
          [moneyLabel(m.sell + m.cost), moneyLabel(m.cost), moneyLabel(m.sell * 12)],
          "Profit on one item is selling price minus cost to make."
        ),
        qItem(
          "The orange block is mainly about…",
          "What it costs to produce the product",
          ["How customers hear about you", "How much cash comes in from buyers"],
          "Orange = cost to make. Purple = marketing. Green = projected sales."
        ),
        qItem(
          "The purple block is mainly about…",
          "Advertising and the cost of selling",
          ["The price of materials to build each item", "How many you will make in a factory"],
          "Marketing is the cost of telling people and getting them to buy — not the cost of making the thing."
        ),
        qItem(
          "The green block is mainly about…",
          "Money you hope buyers will pay you",
          ["The cost of posters only", "How much equity to give away"],
          "Projected sales is selling price × how many you expect to sell — cash in, not cash out."
        ),
        qItem(
          "If you tap posters (£80) and social ads (£250), the marketing total for the month is…",
          "£330, because the options add together",
          ["£250, because you only pay the bigger one", "£80, because the first tap cancels the rest"],
          "One, two or all three marketing choices stack. They do not replace each other."
        ),
        qItem(
          "Making " + m.qty + " items at " + moneyLabel(m.cost) + " each costs " + moneyLabel(m.makeTotal) + " this month. Over a year that make-cost is about…",
          moneyLabel(m.yearMake),
          [moneyLabel(m.makeTotal), moneyLabel(m.makeTotal + 12), moneyLabel(m.yearMarket || 0)],
          "A year has 12 months, so monthly make-cost × 12."
        ),
        qItem(
          "Your marketing this month is " + moneyLabel(m.marketing) + ". A whole year of that advertising is about…",
          moneyLabel(m.yearMarket),
          [moneyLabel(m.marketing), moneyLabel(m.marketing / 12), moneyLabel(m.yearMake)],
          "Same idea: monthly marketing × 12."
        ),
        qItem(
          "You expect to sell " + m.sold + " items a month at " + moneyLabel(m.sell) + ". Monthly sales money is " + moneyLabel(m.monthSales) + ". Yearly sales would be about…",
          moneyLabel(m.yearSales),
          [moneyLabel(m.monthSales), moneyLabel(m.sold * 12), moneyLabel(m.yearCosts)],
          "Yearly sales = monthly sales money × 12 — not the number of items × 12 on its own."
        ),
        qItem(
          "Yearly sales " + moneyLabel(m.yearSales) + " versus yearly costs " + moneyLabel(m.yearCosts) + " (make + marketing). Your plan currently shows…",
          gapWord,
          m.yearGap > 0
            ? ["a yearly shortfall", "that marketing is ignored"]
            : (m.yearGap < 0 ? ["a yearly profit", "that make-cost is free after month one"] : ["a huge guaranteed profit", "that costs do not matter"]),
          gapExplain
        ),
        qItem(
          "Why do fizzy-drink ideas get much bigger monthly sales options than a new app?",
          "Cheap drinks are bought often; tech products usually sell in smaller numbers at first",
          ["Apps are illegal to sell in shops", "Investors never back food"],
          "Volume should fit the product. A can of drink is not the same market as a £40 gadget."
        ),
        qItem(
          "If your selling price is below the cost to make one item, what is true?",
          "You lose money on every sale, even before marketing",
          ["Marketing will automatically fix the price", "Yearly sales will still be higher than costs"],
          "If sell price < make-cost, more sales just means a bigger loss."
        ),
        qItem(
          "Why might an investor worry if your ask is less than one month of make-cost plus marketing?",
          "You could run out of cash before the product has had a chance to sell",
          ["Equity would become 100% automatically", "Yearly sales would turn into a loan"],
          "Investment has to cover real bills at the start — making stock and telling people it exists."
        ),
        qItem(
          "Cautious, likely and busy sales figures are there so you can…",
          "Test a quiet month and a hectic month, not pretend every month is perfect",
          ["Trick investors with the biggest number only", "Avoid choosing a selling price"],
          "A good entrepreneur checks what happens if sales are slower than the dream."
        ),
        qItem(
          "Break-even means…",
          "Sales money covers costs, with nothing left over",
          ["You have made a huge profit", "You can ignore marketing forever"],
          "Break-even is survival, not success. There is no spare cash for mistakes."
        ),
        qItem(
          "Which is cash going *out* of the business?",
          "Make-cost and marketing",
          ["Projected yearly sales", "The number of customers who like the idea"],
          "Sales is money in. Making and advertising are money out."
        ),
        stockQ
      ];
      return shuffle(bank).slice(0, 4);
    }

    function showMq() {
      mqLocked = false;
      document.getElementById("mq-next").classList.add("hidden");
      document.getElementById("mq-feedback").textContent = "";
      const item = mqItems[mqIndex];
      document.getElementById("mq-progress").textContent = "Question " + (mqIndex + 1) + " of " + mqItems.length;
      document.getElementById("mq-q").textContent = item.q;
      const box = document.getElementById("mq-choices");
      box.innerHTML = "";
      item.choices.forEach((text) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "quiz-choice";
        b.textContent = text;
        b.addEventListener("click", () => pickMq(text, b));
        box.appendChild(b);
      });
    }

    function pickMq(text, btn) {
      if (mqLocked) return;
      mqLocked = true;
      const item = mqItems[mqIndex];
      document.querySelectorAll("#mq-choices .quiz-choice").forEach((b) => {
        if (b.textContent === item.answerLabel) b.classList.add("correct");
        if (b === btn && text !== item.answerLabel) b.classList.add("wrong");
      });
      const fb = document.getElementById("mq-feedback");
      if (text === item.answerLabel) {
        mqScore += 1;
        fb.style.color = "#1b7a3a";
        fb.textContent = "Yes. " + item.why;
      } else {
        fb.style.color = "#9b1c1c";
        fb.textContent = (playerFirst() ? "Not quite, " + playerFirst() + ". " : "Not quite. ") + item.why;
      }
      const nxt = document.getElementById("mq-next");
      nxt.classList.remove("hidden");
      nxt.textContent = mqIndex === mqItems.length - 1 ? "See your score" : "Next question";
    }

    document.getElementById("start-money-quiz").addEventListener("click", () => {
      if (!moneyReadyForQuiz()) return;
      mqIndex = 0;
      mqScore = 0;
      mqItems = buildMoneyQuiz();
      document.getElementById("pitch-panel").classList.add("hidden");
      document.getElementById("pitch-wrap").classList.add("hidden");
      document.getElementById("money-quiz-body").classList.remove("hidden");
      setQuizStartVisible(false);
      showMq();
    });

    document.getElementById("mq-next").addEventListener("click", () => {
      if (mqIndex < mqItems.length - 1) {
        mqIndex += 1;
        showMq();
        return;
      }
      const fb = document.getElementById("mq-feedback");
      document.getElementById("mq-q").textContent = address("Cost check complete!");
      document.getElementById("mq-choices").innerHTML = "";
      document.getElementById("mq-next").classList.add("hidden");
      document.getElementById("mq-progress").textContent = "Score: " + mqScore + " out of " + mqItems.length;
      setQuizStartVisible(false);
      if (mqScore >= 3) {
        fb.style.color = "#1b7a3a";
        fb.textContent = address("You scored " + mqScore + " out of 4. If the questions made you doubt your money or sales figures, you can change them before you write the pitch.");
        addQuizAction("Change my money and sales figures", false, redoMoneyFigures);
        addQuizAction("I'm happy with my figures — write my pitch", true, () => {
          if (!(window.DDPlay && window.DDPlay.example)) {
            try { localStorage.setItem("dd_money_quiz", "1"); } catch (e) {}
          }
          if (window.DDPlay && typeof window.DDPlay.paintSteps === "function") window.DDPlay.paintSteps();
          applyStepView(3);
        });
      } else {
        fb.style.color = "#9b1c1c";
        fb.textContent = address("You need 3 out of 4. You can try the questions again, or go back and change your money and sales figures.");
        addQuizAction("Try the questions again", true, () => {
          mqIndex = 0;
          mqScore = 0;
          mqItems = buildMoneyQuiz();
          showMq();
        });
        addQuizAction("Change my money and sales figures", false, redoMoneyFigures);
      }
    });

    const SAMPLE_PITCH = [
      "Hello, my name is Sam, and I am here to pitch BootDry Pegs.",
      "The problem is this: after a wet match, football boots stay soggy overnight. They smell, they get ruined, and parents are tired of stuffing them with newspaper.",
      "BootDry Pegs clip the boots open with little vents, so air can get in and they dry by morning — no batteries, no heater.",
      "It is for footballers and parents after wet matches. They can buy it from sports shops and club stalls. They will hear about it from coaches, team WhatsApp groups, and posters at the pitch.",
      "Each set costs £2.50 to make and sells for £7.99, so the profit is £5.49 on each one. I plan to make 200 a month, which costs £500 to make. I expect to sell 180 a month — about £1,438 of sales, or about £17,258 a year. I will spend £330 a month on posters and social ads. Yearly sales compared with yearly costs would leave a profit of about £6,658.",
      "I am asking for £5,000 for 15% of the business. That values the company at about £33,333. Thank you. I am ready for your questions."
    ];

    const PITCH_STAGES = [
      {
        id: "hello",
        n: "1",
        title: "Hello",
        job: "Say your name and the product name. One sentence. Look up, not at the floor.",
        example: SAMPLE_PITCH[0]
      },
      {
        id: "problem",
        n: "2",
        title: "The problem",
        job: "What is annoying, slow, messy or missing today? Make investors picture it.",
        example: SAMPLE_PITCH[1]
      },
      {
        id: "product",
        n: "3",
        title: "The product",
        job: "Name it and say what it does in one or two sentences. No waffle.",
        example: SAMPLE_PITCH[2]
      },
      {
        id: "customer",
        n: "4",
        title: "The customer",
        job: "Who buys it, where they buy it, and how they hear about it. “Everyone” is not an answer.",
        example: SAMPLE_PITCH[3]
      },
      {
        id: "money",
        n: "5",
        title: "The money",
        job: "Cost to make, selling price, profit on one, monthly make and sales, marketing, then yearly profit or shortfall.",
        example: SAMPLE_PITCH[4]
      },
      {
        id: "ask",
        n: "6",
        title: "The ask",
        job: "How much investment you want, what % of the business you will share, and the valuation. Then stop and wait.",
        example: SAMPLE_PITCH[5]
      }
    ];

    function collectPitchStages() {
      const out = {};
      PITCH_STAGES.forEach((s) => {
        const el = document.getElementById("stage-" + s.id);
        out[s.id] = el ? el.value.trim() : "";
      });
      return out;
    }

    function stageDrafts() {
      const m = moneyBits();
      const p = currentProduct();
      const who = p.custWho || p.who || "a real group of customers";
      const moneyBitsLine = [];
      if (Number.isFinite(m.cost) && Number.isFinite(m.sell)) {
        moneyBitsLine.push("It costs " + moneyLabel(m.cost) + " to make and sells for " + moneyLabel(m.sell) + ", so the profit is " + moneyLabel(m.profit) + " on each one.");
      }
      if (Number.isFinite(m.qty) && m.qty > 0 && Number.isFinite(m.makeTotal)) {
        moneyBitsLine.push("I plan to make " + m.qty + " a month, which costs " + moneyLabel(m.makeTotal) + " just to make the products.");
      }
      if (Number.isFinite(m.sold) && m.sold > 0 && Number.isFinite(m.monthSales)) {
        moneyBitsLine.push("I expect to sell " + m.sold + " a month, which is " + moneyLabel(m.monthSales) + " of sales, or " + moneyLabel(m.yearSales) + " a year.");
      }
      if (Number.isFinite(m.marketing) && hasMarketing()) {
        moneyBitsLine.push("I will spend " + moneyLabel(m.marketing) + " a month on advertising and marketing" +
          (marketBreakdown().length ? " (" + marketBreakdown().join(", ") + ")" : "") + ".");
      }
      if (Number.isFinite(m.yearSales) && Number.isFinite(m.yearCosts)) {
        moneyBitsLine.push("Yearly sales of " + moneyLabel(m.yearSales) + " compared with yearly costs of " + moneyLabel(m.yearCosts) +
          (m.yearGap > 0 ? " would leave a profit of about " + moneyLabel(m.yearGap) + "." : (m.yearGap < 0 ? " would leave a shortfall of about " + moneyLabel(Math.abs(m.yearGap)) + "." : " would only break even.")));
      }
      const askLine = Number.isFinite(m.ask) && m.ask > 0 && Number.isFinite(m.equity) && m.equity > 0
        ? "I am asking for " + moneyLabel(m.ask) + " for " + m.equity + "% of the business. That values the company at " + moneyLabel(m.valuation) + ". Thank you. I am ready for your questions."
        : "I will tell you how much money I want, and how much of the business I will share. Thank you. I am ready for your questions.";
      return {
        hello: "Hello, my name is " + player + (p.name ? ", and I am here to pitch " + p.name + "." : "."),
        problem: p.custNeed ? "The problem is this: " + p.custNeed : "The problem is this: say what is annoying, slow, messy or missing today.",
        product: (p.name ? p.name + ". " : "My product. ") + (p.does || "Say what it does in one or two sentences."),
        customer: "It is for " + who + "." +
          (p.custNeed ? " They need it because " + p.custNeed : "") +
          (p.custWhere ? " They can buy it from " + p.custWhere + "." : "") +
          (p.custHear ? " They will hear about it through " + p.custHear + "." : ""),
        money: moneyBitsLine.join(" ") || "Fill the orange, purple and green money blocks first, then come back.",
        ask: askLine
      };
    }

    const SpeechEngine = window.SpeechRecognition || window.webkitSpeechRecognition;
    let activeRec = null;
    let activeSpeakBtn = null;
    let recGeneration = 0;
    let sectionSpeak = { running: false, fields: [], index: 0, btn: null, timer: null };

    function speakErrorMessage(err) {
      if (err === "not-allowed") return "Microphone blocked. Allow it in the browser, then try again. You can still write in the boxes.";
      if (err === "no-speech") return "No speech heard. Write in the box, or tap Speak my answers and try again.";
      if (err === "audio-capture") return "No microphone found. You can still write in the boxes.";
      if (err === "network") return "Speech needs an internet connection in Chrome or Edge. You can still write in the boxes.";
      return "Could not listen. Try Chrome or Edge, or write in the boxes.";
    }

    function clearSpeakTargets() {
      document.querySelectorAll(".speak-target").forEach((el) => el.classList.remove("speak-target"));
    }

    function stopSpeaking() {
      recGeneration += 1;
      sectionSpeak.running = false;
      if (sectionSpeak.timer) {
        clearTimeout(sectionSpeak.timer);
        sectionSpeak.timer = null;
      }
      clearSpeakTargets();
      if (activeRec) {
        try { activeRec.stop(); } catch (e) {}
        activeRec = null;
      }
      if (activeSpeakBtn) {
        resetSpeakButton(activeSpeakBtn);
        activeSpeakBtn = null;
      }
    }
    window.stopInventSpeech = stopSpeaking;

    function parseSpokenNumber(raw) {
      const n = parseWrittenNumber(raw);
      if (Number.isFinite(n)) return String(n);
      const t = String(raw || "");
      const digit = t.match(/(\d+\.?\d*)/);
      if (digit) return digit[1];
      return null;
    }

    function fireInput(el) {
      if (window.DDWriting && window.DDWriting.fireInput) {
        window.DDWriting.fireInput(el);
        return;
      }
      el.dispatchEvent(new Event("input", { bubbles: true }));
    }

    function tidyWriting(text, mode) {
      return window.DDWriting ? window.DDWriting.tidyWriting(text, mode) : text;
    }

    function applyTidy(el) {
      if (window.DDWriting) window.DDWriting.applyTidy(el);
    }

    function tidyAllWriting() {
      if (window.DDWriting) window.DDWriting.tidyAllWriting();
    }

    function watchWriting(el, mode) {
      if (window.DDWriting) window.DDWriting.watchWriting(el, mode);
    }

    function resetSpeakButton(btn) {
      if (!btn) return;
      btn.classList.remove("listening");
      btn.textContent = btn.dataset.speakLabel || (btn.id === "speak-full" ? "Speak the full pitch" : "Speak my answers");
      const status = btn.parentElement && btn.parentElement.querySelector(".speak-status");
      if (status && status.textContent.indexOf("Listening") === 0) status.textContent = "";
    }

    function bindSpeakButton(btn) {
      btn.addEventListener("click", () => {
        const status = btn.parentElement.querySelector(".speak-status");
        const box = document.getElementById(btn.dataset.target);
        if (!box) return;
        if (!SpeechEngine) {
          status.textContent = "Speaking-to-text needs Chrome or Edge.";
          return;
        }
        if (activeSpeakBtn === btn && activeRec) {
          stopSpeaking();
          return;
        }
        stopSpeaking();
        const rec = new SpeechEngine();
        rec.lang = "en-GB";
        const isNum = box.type === "number";
        rec.continuous = !isNum;
        rec.interimResults = true;
        rec.maxAlternatives = 1;
        const startText = box.value.trim();
        const prefix = (!isNum && startText) ? startText.replace(/\s+$/, "") + " " : "";
        const cap = box.maxLength > 0 ? box.maxLength : 2200;

        rec.onresult = (ev) => {
          let finals = "";
          let interim = "";
          for (let i = 0; i < ev.results.length; i++) {
            const t = ev.results[i][0].transcript;
            if (ev.results[i].isFinal) finals += t + " ";
            else interim += t;
          }
          if (isNum) {
            const parsed = parseSpokenNumber(finals + " " + interim);
            if (parsed != null) box.value = parsed;
          } else {
            let next = (prefix + finals + interim).replace(/  +/g, " ");
            if (next.length > cap) next = next.slice(0, cap);
            box.value = next;
          }
          if (box.classList.contains("money-words")) box.dataset.fromSpeak = "1";
          fireInput(box);
        };
        rec.onerror = (ev) => {
          if (ev.error === "aborted") return;
          status.textContent = speakErrorMessage(ev.error);
        };
        rec.onend = () => {
          if (activeRec === rec) {
            activeRec = null;
            resetSpeakButton(activeSpeakBtn);
            activeSpeakBtn = null;
          }
          if (!isNum) applyTidy(box);
        };
        try {
          rec.start();
        } catch (e) {
          status.textContent = "Could not start the microphone. Try Chrome or Edge.";
          return;
        }
        activeRec = rec;
        activeSpeakBtn = btn;
        document.querySelectorAll(".speak-btn").forEach(resetSpeakButton);
        btn.classList.add("listening");
        btn.textContent = "Stop listening";
        status.textContent = isNum
          ? "Listening… say the number, then tap Stop listening."
          : "Listening… say your answer, then tap Stop listening.";
      });
    }

    function moneySpeakFields() {
      return [
        { id: "unit-cost", prompt: "Say the cost to make one." },
        { id: "sales-own", prompt: "Say how many you will make each month." },
        { id: "market-own", prompt: "Say the monthly marketing cost." },
        { id: "sell-price", prompt: "Say the selling price for one." },
        { id: "proj-own", prompt: "Say how many you expect to sell each month." },
        { id: "ask-amount", prompt: "Say how much investment you want." },
        { id: "equity-pct", prompt: "Say the equity percent you will share." }
      ].filter((spec) => {
        const el = document.getElementById(spec.id);
        return el && !el.classList.contains("hidden");
      });
    }

    function pitchSpeakFields() {
      return PITCH_STAGES.map((s) => ({
        id: "stage-" + s.id,
        prompt: "Say your line for stage " + s.n + ", " + s.title + "."
      }));
    }

    function sectionStatus(btn) {
      return btn && btn.parentElement ? btn.parentElement.querySelector(".speak-status") : null;
    }

    function finishSectionSpeak(message) {
      sectionSpeak.running = false;
      if (sectionSpeak.timer) {
        clearTimeout(sectionSpeak.timer);
        sectionSpeak.timer = null;
      }
      clearSpeakTargets();
      resetSpeakButton(sectionSpeak.btn);
      activeSpeakBtn = null;
      const status = sectionStatus(sectionSpeak.btn);
      if (status && message) status.textContent = message;
    }

    function listenToBox(box, status, opts) {
      opts = opts || {};
      const rec = new SpeechEngine();
      const gen = recGeneration;
      rec.lang = "en-GB";
      const isNum = box.type === "number";
      rec.continuous = opts.continuous != null ? opts.continuous : !isNum;
      rec.interimResults = true;
      rec.maxAlternatives = 1;
      const startText = box.value.trim();
      const prefix = (!isNum && startText) ? startText.replace(/\s+$/, "") + " " : "";
      const cap = box.maxLength > 0 ? box.maxLength : 2200;

      rec.onresult = (ev) => {
        let finals = "";
        let interim = "";
        for (let i = 0; i < ev.results.length; i++) {
          const t = ev.results[i][0].transcript;
          if (ev.results[i].isFinal) finals += t + " ";
          else interim += t;
        }
        if (isNum) {
          const parsed = parseSpokenNumber(finals + " " + interim);
          if (parsed != null) box.value = parsed;
        } else {
          let next = (prefix + finals + interim).replace(/  +/g, " ");
          if (next.length > cap) next = next.slice(0, cap);
          box.value = next;
        }
        if (box.classList.contains("money-words")) box.dataset.fromSpeak = "1";
        fireInput(box);
      };
      rec.onerror = (ev) => {
        if (ev.error === "aborted") return;
        if (status) status.textContent = speakErrorMessage(ev.error);
      };
      rec.onend = () => {
        if (gen !== recGeneration) return;
        if (activeRec === rec) activeRec = null;
        if (!isNum) applyTidy(box);
        if (opts.onEnd) opts.onEnd();
      };
      try {
        rec.start();
      } catch (e) {
        if (status) status.textContent = "Could not start the microphone. Try Chrome or Edge, or write in the boxes.";
        if (opts.onEnd) opts.onEnd();
        return null;
      }
      activeRec = rec;
      if (opts.btn) {
        activeSpeakBtn = opts.btn;
        document.querySelectorAll(".speak-btn").forEach(resetSpeakButton);
        opts.btn.classList.add("listening");
        opts.btn.textContent = "Stop listening";
      }
      return rec;
    }

    function speakNextInSection() {
      if (!sectionSpeak.running) {
        finishSectionSpeak("Stopped. You can write in the boxes, or tap Speak my answers again.");
        return;
      }
      const btn = sectionSpeak.btn;
      const status = sectionStatus(btn);
      while (sectionSpeak.index < sectionSpeak.fields.length) {
        const spec = sectionSpeak.fields[sectionSpeak.index];
        const box = document.getElementById(spec.id);
        if (box && !box.classList.contains("hidden")) break;
        sectionSpeak.index += 1;
      }
      if (sectionSpeak.index >= sectionSpeak.fields.length) {
        finishSectionSpeak("Finished. You can still write or edit in the boxes.");
        return;
      }
      const spec = sectionSpeak.fields[sectionSpeak.index];
      const box = document.getElementById(spec.id);
      clearSpeakTargets();
      box.classList.add("speak-target");
      box.scrollIntoView({ behavior: "smooth", block: "center" });
      if (spec.id.indexOf("stage-") === 0 && typeof showPitchStage === "function") {
        showPitchStage(spec.id.slice(6));
      }
      listenToBox(box, status, {
        continuous: false,
        btn: btn,
        onEnd: () => {
          if (!sectionSpeak.running) {
            finishSectionSpeak("Stopped. You can write in the boxes, or tap Speak my answers again.");
            return;
          }
          sectionSpeak.index += 1;
          sectionSpeak.timer = setTimeout(speakNextInSection, 350);
        }
      });
      if (status) {
        const step = sectionSpeak.index + 1;
        const total = sectionSpeak.fields.length;
        status.textContent = "Listening " + step + " of " + total + "… " + spec.prompt + " Pause when you finish this part. You can write instead if you prefer.";
      }
    }

    function startSectionSpeak(btn, fields) {
      const status = sectionStatus(btn);
      if (!SpeechEngine) {
        if (status) status.textContent = "Speaking-to-text needs Chrome or Edge. You can still write in the boxes.";
        return;
      }
      if (activeSpeakBtn === btn && (activeRec || sectionSpeak.running)) {
        stopSpeaking();
        if (status) status.textContent = "Stopped. You can write in the boxes, or tap Speak my answers again.";
        return;
      }
      stopSpeaking();
      const usable = (fields || []).filter((spec) => document.getElementById(spec.id));
      if (!usable.length) {
        if (status) status.textContent = "You can write in the boxes. There is nothing to speak yet.";
        return;
      }
      btn.dataset.speakLabel = "Speak my answers";
      sectionSpeak = { running: true, fields: usable, index: 0, btn: btn, timer: null };
      speakNextInSection();
    }

    function bindSectionSpeak(id, getFields) {
      const btn = document.getElementById(id);
      if (!btn) return;
      btn.dataset.speakLabel = "Speak my answers";
      btn.addEventListener("click", () => startSectionSpeak(btn, getFields()));
    }

    function bindAllSectionSpeak() {
      bindSectionSpeak("speak-invent-section", () => [
        { id: "product-name", prompt: "Say the product name." },
        { id: "product-does", prompt: "Say what it does." },
        { id: "product-who", prompt: "Say who it is for." }
      ]);
      bindSectionSpeak("speak-customers-section", () => [
        { id: "cust-who", prompt: "Say who the customer is." },
        { id: "cust-need", prompt: "Say what problem it solves." },
        { id: "cust-where", prompt: "Say where they will buy it." },
        { id: "cust-hear", prompt: "Say how they will hear about it." }
      ]);
      bindSectionSpeak("speak-money-section", moneySpeakFields);
      bindSectionSpeak("speak-pitch-section", pitchSpeakFields);
    }

    function renderPitchStages() {
      const host = document.getElementById("pitch-stages");
      const nav = document.getElementById("stage-nav");
      document.getElementById("full-example-text").textContent = SAMPLE_PITCH.join(" ");
      nav.innerHTML = "";
      host.innerHTML = "";
      PITCH_STAGES.forEach((s, i) => {
        const tab = document.createElement("button");
        tab.type = "button";
        tab.textContent = s.n + " " + s.title;
        tab.dataset.stage = s.id;
        if (i === 0) tab.classList.add("on");
        tab.addEventListener("click", () => showPitchStage(s.id));
        nav.appendChild(tab);

        const next = PITCH_STAGES[i + 1];
        const copyRow = s.id === "money"
          ? "<div class=\"copy-prep\"><p class=\"tiny\">Copy the figures you already wrote in the money boxes into this pitch line:</p>" +
            "<button type=\"button\" class=\"btn btn-gold copy-money\" data-chunk=\"all\">Copy all my money figures</button>" +
            "<button type=\"button\" class=\"btn copy-money\" data-chunk=\"costs\">Copy my costs</button>" +
            "<button type=\"button\" class=\"btn copy-money\" data-chunk=\"sales\">Copy my projected sales</button></div>"
          : "";
        const card = document.createElement("div");
        card.className = "stage-card";
        card.id = "card-" + s.id;
        card.innerHTML =
          "<h3>Stage " + s.n + " — " + s.title + "</h3>" +
          "<p class=\"job\">" + address(s.job) + "</p>" +
          "<div class=\"example-box\"><strong>Example — BootDry Pegs</strong>" + s.example + "</div>" +
          "<label for=\"stage-" + s.id + "\">" + (playerFirst() ? playerFirst() + ", your line" : "Your line") + "</label>" +
          "<textarea id=\"stage-" + s.id + "\" maxlength=\"500\" placeholder=\"Write this stage in your own words, or use Speak my answers at the top.\"></textarea>" +
          copyRow +
          (next ? "<p style=\"margin:12px 0 0\"><button type=\"button\" class=\"btn btn-gold stage-next\" data-next=\"" + next.id + "\">Next: " + next.title + "</button></p>" : "");
        host.appendChild(card);
      });
      host.querySelectorAll(".stage-next").forEach((btn) => {
        btn.addEventListener("click", () => {
          tidyAllWriting();
          showPitchStage(btn.dataset.next);
        });
      });
      host.querySelectorAll(".copy-money").forEach((btn) => {
        btn.addEventListener("click", () => copyMoneyIntoPitch(btn.dataset.chunk));
      });
      PITCH_STAGES.forEach((s) => watchWriting(document.getElementById("stage-" + s.id), "sentence"));
    }

    function showPitchStage(id) {
      document.querySelectorAll("#stage-nav button").forEach((b) => {
        b.classList.toggle("on", b.dataset.stage === id);
      });
      const card = document.getElementById("card-" + id);
      if (card) card.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function moneyPitchChunks() {
      const m = moneyBits();
      const costs = [];
      if (Number.isFinite(m.cost)) {
        costs.push("It costs " + moneyLabel(m.cost) + " to make each one.");
      }
      if (Number.isFinite(m.qty) && m.qty > 0 && Number.isFinite(m.makeTotal)) {
        costs.push("I plan to make " + m.qty + " a month, which costs " + moneyLabel(m.makeTotal) + " just to make the products.");
      }
      if (Number.isFinite(m.marketing) && hasMarketing()) {
        costs.push("I will spend " + moneyLabel(m.marketing) + " a month on advertising and marketing" +
          (marketBreakdown().length ? " (" + marketBreakdown().join(", ") + ")" : "") + ".");
      }
      if (Number.isFinite(m.yearCosts)) {
        costs.push("Yearly costs would be about " + moneyLabel(m.yearCosts) + ".");
      }
      const sales = [];
      if (Number.isFinite(m.sell)) {
        sales.push("It sells for " + moneyLabel(m.sell) + ".");
      }
      if (Number.isFinite(m.profit)) {
        sales.push("The profit is " + moneyLabel(m.profit) + " on each one.");
      }
      if (Number.isFinite(m.sold) && m.sold > 0 && Number.isFinite(m.monthSales)) {
        sales.push("I expect to sell " + m.sold + " a month, which is " + moneyLabel(m.monthSales) + " of sales, or " + moneyLabel(m.yearSales) + " a year.");
      }
      if (Number.isFinite(m.yearGap)) {
        sales.push(m.yearGap > 0
          ? "That would leave a yearly profit of about " + moneyLabel(m.yearGap) + "."
          : (m.yearGap < 0
            ? "That would leave a yearly shortfall of about " + moneyLabel(Math.abs(m.yearGap)) + "."
            : "That would only break even."));
      }
      return {
        costs: costs.join(" "),
        sales: sales.join(" "),
        all: stageDrafts().money
      };
    }

    function copyMoneyIntoPitch(chunk) {
      const el = document.getElementById("stage-money");
      if (!el) return;
      const bits = moneyPitchChunks();
      const text = bits[chunk];
      if (!text) {
        document.getElementById("pitch-status").textContent = address("Fill the money boxes first, then copy them here.");
        return;
      }
      if (chunk === "all") el.value = text;
      else {
        const cur = el.value.trim();
        el.value = cur ? (cur + " " + text) : text;
      }
      fireInput(el);
      applyTidy(el);
      document.getElementById("pitch-status").textContent = address("Copied from your money boxes into the pitch. You can still edit.");
      showPitchStage("money");
    }

    function pitchLooksEmpty(text, id) {
      const t = String(text || "").trim();
      if (!t) return true;
      if (id === "money" && t.indexOf("Fill the orange") !== -1) return true;
      if (id === "ask" && t.indexOf("I will tell you how much") !== -1) return true;
      if (id === "problem" && t.indexOf("say what is annoying") !== -1) return true;
      return false;
    }

    function factMissing(hay, fact) {
      const f = String(fact || "").trim();
      if (f.length < 2) return false;
      const h = String(hay || "").toLowerCase();
      const needle = f.toLowerCase().replace(/\s+/g, " ");
      const clip = needle.slice(0, Math.min(needle.length, 40));
      return h.indexOf(clip) === -1;
    }

    function appendIfMissing(current, extra) {
      extra = String(extra || "").trim();
      if (!extra) return current;
      if (!factMissing(current, extra)) return current;
      return (current ? String(current).replace(/\s+$/, "") + " " : "") + extra;
    }

    function enrichStagesFromBoxes() {
      const drafts = stageDrafts();
      const p = currentProduct();
      const m = moneyBits();

      PITCH_STAGES.forEach((s) => {
        const el = document.getElementById("stage-" + s.id);
        if (!el) return;
        if (pitchLooksEmpty(el.value, s.id)) el.value = drafts[s.id];
      });

      const hello = document.getElementById("stage-hello");
      if (hello && p.name && factMissing(hello.value, p.name)) {
        hello.value = appendIfMissing(hello.value, "I am here to pitch " + p.name + ".");
      }

      const product = document.getElementById("stage-product");
      if (product) {
        if (p.name && factMissing(product.value, p.name)) product.value = appendIfMissing(product.value, p.name + ".");
        if (p.does && factMissing(product.value, p.does)) product.value = appendIfMissing(product.value, p.does);
      }

      const problem = document.getElementById("stage-problem");
      if (problem && p.custNeed) {
        if (pitchLooksEmpty(problem.value, "problem")) problem.value = drafts.problem;
        else if (factMissing(problem.value, p.custNeed)) {
          problem.value = appendIfMissing(problem.value, "The problem is this: " + p.custNeed);
        }
      }

      const cust = document.getElementById("stage-customer");
      if (cust) {
        let t = cust.value.trim();
        const who = p.custWho || p.who;
        if (who && factMissing(t, who)) t = appendIfMissing(t, "It is for " + who + ".");
        if (p.custNeed && factMissing(t, p.custNeed)) t = appendIfMissing(t, "They need it because " + p.custNeed + ".");
        if (p.custWhere && factMissing(t, p.custWhere)) t = appendIfMissing(t, "They can buy it from " + p.custWhere + ".");
        if (p.custHear && factMissing(t, p.custHear)) t = appendIfMissing(t, "They will hear about it through " + p.custHear + ".");
        cust.value = t;
      }

      const moneyEl = document.getElementById("stage-money");
      if (moneyEl) {
        let t = moneyEl.value.trim();
        if (pitchLooksEmpty(t, "money")) t = drafts.money;
        else if (drafts.money.indexOf("Fill the orange") === -1) {
          const chunks = moneyPitchChunks();
          if (chunks.costs) t = appendIfMissing(t, chunks.costs);
          if (chunks.sales) t = appendIfMissing(t, chunks.sales);
          if (Number.isFinite(m.marketing) && hasMarketing()) {
            const marketLine = "I will spend " + moneyLabel(m.marketing) + " a month on advertising and marketing" +
              (marketBreakdown().length ? " (" + marketBreakdown().join(", ") + ")" : "") + ".";
            t = appendIfMissing(t, marketLine);
          }
        }
        moneyEl.value = t;
      }

      const ask = document.getElementById("stage-ask");
      if (ask) {
        let t = ask.value.trim();
        if (pitchLooksEmpty(t, "ask")) t = drafts.ask;
        else {
          if (Number.isFinite(m.ask) && m.ask > 0) t = appendIfMissing(t, "I am asking for " + moneyLabel(m.ask) + ".");
          if (Number.isFinite(m.equity) && m.equity > 0) t = appendIfMissing(t, "I will share " + m.equity + "% of the business.");
          if (Number.isFinite(m.valuation)) t = appendIfMissing(t, "That values the company at " + moneyLabel(m.valuation) + ".");
        }
        ask.value = t;
      }
    }

    function fillEmptyPitchStages() {
      enrichStagesFromBoxes();
    }

    function buildPitchText() {
      enrichStagesFromBoxes();
      const parts = PITCH_STAGES.map((s) => {
        const el = document.getElementById("stage-" + s.id);
        return el ? el.value.trim() : "";
      }).filter(Boolean);
      return parts.join(" ");
    }

    renderPitchStages();
    bindSpeakButton(document.getElementById("speak-full"));
    bindAllSectionSpeak();
    watchWriting(document.getElementById("product-name"), "title");
    watchWriting(document.getElementById("product-does"), "sentence");
    watchWriting(document.getElementById("product-who"), "short");
    watchWriting(document.getElementById("cust-who"), "short");
    watchWriting(document.getElementById("cust-need"), "sentence");
    watchWriting(document.getElementById("cust-where"), "short");
    watchWriting(document.getElementById("cust-hear"), "short");
    watchWriting(document.getElementById("pitch-edit"), "sentence");

    document.getElementById("fill-from-answers").addEventListener("click", () => {
      tidyAllWriting();
      fillEmptyPitchStages();
      tidyAllWriting();
      document.getElementById("pitch-status").textContent = address("Empty stages filled from customers, marketing and money. Edit anything that does not sound like you.");
    });

    document.getElementById("build-pitch").addEventListener("click", () => {
      tidyAllWriting();
      document.getElementById("pitch-edit").value = buildPitchText();
      applyTidy(document.getElementById("pitch-edit"));
      const spoken = (document.getElementById("pitch-edit").value || "").replace(/\s+/g, " ").trim();
      if (spoken && window.speakMentorText) {
        const mentorBtn = document.querySelector("#pitch-panel .pitch-actions .mentor-speak");
        window.speakMentorText(spoken, mentorBtn);
        document.getElementById("pitch-status").textContent = address("Stitched from your answers. Listen to the mentor, then amend anything that is not clear.");
      } else {
        document.getElementById("pitch-status").textContent = address("Fill the six stages first, then stitch again so the mentor can read your pitch.");
      }
    });

    function journeyReady() {
      const p = currentProduct();
      const m = moneyBits();
      return p.name && p.does && p.custWho && p.custNeed && p.custWhere && p.custHear &&
        Number.isFinite(m.cost) && Number.isFinite(m.sell) && Number.isFinite(m.qty) && m.qty > 0 &&
        Number.isFinite(m.sold) && m.sold > 0 &&
        Number.isFinite(m.marketing) && m.marketing >= 0 && hasMarketing() &&
        Number.isFinite(m.ask) && m.ask > 0 && Number.isFinite(m.equity) && m.equity > 0 &&
        p.pitch.length >= 40;
    }

    document.getElementById("save-pitch").addEventListener("click", () => {
      tidyAllWriting();
      const product = persist({ pitchReady: journeyReady() });
      const denBtn = document.getElementById("den-btn");
      const msg = document.getElementById("pitch-save-msg");
      if (journeyReady()) {
        msg.textContent = address("Pitch saved. Enter the Den when you are ready for questions.");
        denBtn.disabled = false;
        if (!(window.DDPlay && window.DDPlay.example)) {
          try { localStorage.setItem("dd_pitch_done", "1"); } catch (e) {}
        }
        if (window.DDPlay && typeof window.DDPlay.paintSteps === "function") window.DDPlay.paintSteps();
      } else {
        msg.textContent = address("Saved a draft — fill every customer box, the money, and build or write a pitch (at least a few sentences) to unlock the Den.");
        denBtn.disabled = true;
      }
    });

    document.getElementById("den-btn").addEventListener("click", () => {
      window.openGameStep(4);
    });

    document.querySelectorAll("#journey-steps .step, #den-steps .step").forEach((btn) => {
      btn.addEventListener("click", () => {
        window.openGameStep(Number(btn.dataset.step));
      });
    });

    window.startExampleRun = function startExampleRun() {
      player = "Sam";
      const sports = categories.find((c) => c.id === "sports");
      const pegs = sports && sports.ready ? sports.ready[0] : null;
      if (!sports || !pegs) return;
      inventPath = "ready";
      pickReady(sports, pegs, 0);
      document.getElementById("cust-who").value = pegs.who;
      document.getElementById("cust-need").value = "After a wet match, football boots stay soggy overnight. They smell, they get ruined, and parents are tired of stuffing them with newspaper.";
      document.getElementById("cust-where").value = "sports shops and club stalls";
      document.getElementById("cust-hear").value = "coaches, team WhatsApp groups, and posters at the pitch";
      document.getElementById("unit-cost").value = "two pounds fifty";
      document.getElementById("sell-price").value = "seven pounds ninety-nine";
      document.getElementById("ask-amount").value = "five thousand pounds";
      document.getElementById("equity-pct").value = "fifteen percent";
      fillSalesChoices();
      salesChoice = "own";
      projChoice = "own";
      document.getElementById("sales-own").value = "two hundred";
      document.getElementById("proj-own").value = "one hundred and eighty";
      toggleOwn("sales", true);
      toggleOwn("proj", true);
      document.querySelectorAll("#sales-choices button").forEach((b) => {
        b.classList.toggle("selected", b.dataset.sales === "own");
      });
      document.querySelectorAll("#proj-choices button").forEach((b) => {
        b.classList.toggle("selected", b.dataset.proj === "own");
      });
      marketPicks.clear();
      marketOwnOn = false;
      marketPicks.add(80);
      marketPicks.add(250);
      document.querySelectorAll("#market-choices button").forEach((b) => {
        const key = b.dataset.market;
        b.classList.toggle("selected", key === "80" || key === "250");
      });
      toggleOwn("market", false);
      PITCH_STAGES.forEach((s, i) => {
        const el = document.getElementById("stage-" + s.id);
        if (el) el.value = SAMPLE_PITCH[i] || "";
      });
      document.getElementById("pitch-edit").value = SAMPLE_PITCH.join(" ");
      document.getElementById("den-btn").disabled = false;
      document.getElementById("save-customers").disabled = false;
      document.getElementById("save-money").disabled = false;
      document.getElementById("change-cat").disabled = true;
      document.getElementById("path-unique").disabled = true;
      document.getElementById("path-ready").disabled = true;
      document.getElementById("sign-unique").disabled = true;
      document.getElementById("sign-ready").disabled = true;
      document.getElementById("pitch-status").textContent = "Sam’s pitch is complete. Open the Den to see the questions and the decision.";
      persist({ pitchReady: true });
      updateCustomersGate();
      updateMoneyStats();
      if (typeof refreshNamedCopy === "function") refreshNamedCopy();
      if (window.DDPlay && typeof window.DDPlay.paintSteps === "function") window.DDPlay.paintSteps();
      window.openGameStep(0);
    };

    window.startLiveRun = function startLiveRun() {
      player = (document.getElementById("player-name").value || "").trim() || "Entrepreneur";
      selected = null;
      inventPath = null;
      readyChoice = null;
      uniquePhotoData = "";
      nameInput.value = "";
      doesInput.value = "";
      whoInput.value = "";
      ["cust-who", "cust-need", "cust-where", "cust-hear", "unit-cost", "sell-price", "ask-amount", "equity-pct",
        "sales-own", "proj-own", "market-own", "pitch-edit"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.value = "";
      });
      const photo = document.getElementById("product-photo");
      if (photo) photo.value = "";
      marketPicks.clear();
      marketOwnOn = false;
      salesChoice = null;
      projChoice = null;
      document.querySelectorAll("#market-choices button").forEach((b) => b.classList.remove("selected"));
      toggleOwn("sales", false);
      toggleOwn("proj", false);
      toggleOwn("market", false);
      PITCH_STAGES.forEach((s) => {
        const el = document.getElementById("stage-" + s.id);
        if (el) el.value = "";
      });
      document.getElementById("den-btn").disabled = true;
      document.getElementById("pitch-save-msg").textContent = "";
      document.getElementById("save-msg").textContent = "";
      document.getElementById("change-cat").disabled = false;
      document.getElementById("path-unique").disabled = false;
      document.getElementById("path-ready").disabled = false;
      document.getElementById("sign-unique").disabled = false;
      document.getElementById("sign-ready").disabled = false;
      hideAllSteps();
      pathPanel.classList.remove("hidden");
      fillSalesChoices();
      updateButtons();
      updateCustomersGate();
      updateMoneyStats();
      if (typeof refreshNamedCopy === "function") refreshNamedCopy();
      if (window.DDPlay && typeof window.DDPlay.paintSteps === "function") window.DDPlay.paintSteps();
    };

    if (window.DDPlay && typeof window.DDPlay.paintSteps === "function") window.DDPlay.paintSteps();
