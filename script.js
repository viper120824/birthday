const prankScreen = document.getElementById("prankScreen");
const prankOkBtn = document.getElementById("prankOkBtn");
const prankNoActionButtons = document.querySelectorAll(".prank-yn-btn");
const loginScreen = document.getElementById("loginScreen");
const loveQuestionScreen = document.getElementById("loveQuestionScreen");
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const loginMessage = document.getElementById("loginMessage");
const yesLoveBtn = document.getElementById("yesLoveBtn");
const noLoveBtn = document.getElementById("noLoveBtn");
const valentineOverlay = document.getElementById("valentineOverlay");
const yesValentineBtn = document.getElementById("yesValentineBtn");
const noValentineBtn = document.getElementById("noValentineBtn");
const coverScreen = document.getElementById("coverScreen");
const openBookButton = document.getElementById("openBookButton");
const loader = document.getElementById("loader");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const bookExperience = document.getElementById("bookExperience");
const memoryStage = document.querySelector(".memory-stage");
const book = document.getElementById("book");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageIndicator = document.getElementById("pageIndicator");
const floatingHearts = document.getElementById("floatingHearts");
const closeOverlay = document.getElementById("closeOverlay");
const reopenBookButton = document.getElementById("reopenBookButton");
const lovePopup = document.getElementById("lovePopup");
const musicToggle = document.getElementById("musicToggle");
const bgMusic = document.getElementById("bgMusic");

// Edit this list to change titles/messages/dates for each memory page.
// Image paths are mapped automatically from all files in images-manifest.js
const memoryEntries = [
  {
    title: "The Day We First Met",
    message: "One look at you and time slowed down.\nMy heart recognized home before my mind did.",
    date: "14 February 2020",
  },
  {
    title: "Our First Long Call",
    message: "Hours passed like minutes that night.\nYour voice became my favorite place to rest.",
    date: "20 February 2020",
  },
  {
    title: "Coffee and Shy Smiles",
    message: "A small table, two cups, and endless butterflies.\nI still remember your smile more than the coffee.",
    date: "3 March 2020",
  },
  {
    title: "First Walk Together",
    message: "The road was ordinary, the moment was not.\nEvery step felt like a promise beginning.",
    date: "17 March 2020",
  },
  {
    title: "Laughing in the Rain",
    message: "We got soaked and didn't care.\nThat day taught me joy is simply you beside me.",
    date: "2 April 2020",
  },
  {
    title: "That Surprise Chocolate",
    message: "A tiny gift, a huge memory.\nYou always know how to sweeten my world.",
    date: "18 April 2020",
  },
  {
    title: "First Movie Night",
    message: "I forgot half the story of the film.\nI was too busy watching your expressions.",
    date: "1 May 2020",
  },
  {
    title: "Holding Hands Forever",
    message: "Your hand in mine felt like destiny.\nEven silence was beautiful with you.",
    date: "16 May 2020",
  },
  {
    title: "Our First Selfie",
    message: "That photo still glows in my gallery.\nTwo shy hearts learning to become one.",
    date: "29 May 2020",
  },
  {
    title: "Sunset by the Lake",
    message: "The sky turned gold, but you were brighter.\nI wished that moment would never end.",
    date: "12 June 2020",
  },
  {
    title: "The Day You Said Yes",
    message: "That little word changed my whole life.\nMy future finally had your name in it.",
    date: "25 June 2020",
  },
  {
    title: "Our Tiny Road Trip",
    message: "Windows down, playlists loud, hearts full.\nEvery mile felt like a chapter of forever.",
    date: "10 July 2020",
  },
  {
    title: "Midnight Ice Cream",
    message: "Cold hands, warm laughter.\nYou make the simplest nights unforgettable.",
    date: "23 July 2020",
  },
  {
    title: "Festival Lights and You",
    message: "The streets sparkled, and so did your eyes.\nI remember feeling unbelievably lucky.",
    date: "7 August 2020",
  },
  {
    title: "First Birthday Together",
    message: "Cake, candles, and your happy face.\nMy favorite gift that day was being yours.",
    date: "19 August 2020",
  },
  {
    title: "The Long Hug at the Station",
    message: "A goodbye that felt like a thousand words.\nDistance only proved how deep this love is.",
    date: "2 September 2020",
  },
  {
    title: "Messages Past Midnight",
    message: "Sleep lost, love found.\nYour texts made every night feel gentle and close.",
    date: "15 September 2020",
  },
  {
    title: "Cooking Disaster, Perfect Night",
    message: "The recipe failed, but we laughed all evening.\nPerfection is being imperfect together.",
    date: "30 September 2020",
  },
  {
    title: "Your Favorite Song in the Car",
    message: "You sang every word, I watched in awe.\nThat melody still reminds me of your joy.",
    date: "11 October 2020",
  },
  {
    title: "Diwali Glow With You",
    message: "Lamps around us, love within us.\nThat night looked like magic because of you.",
    date: "24 October 2020",
  },
  {
    title: "Warm Winter Evenings",
    message: "Blankets, tea, and endless talks.\nYou made the coldest nights feel warm.",
    date: "7 November 2020",
  },
  {
    title: "Our First Family Dinner",
    message: "Nervous smiles turned into happy comfort.\nYou held my hand under the table and I smiled.",
    date: "20 November 2020",
  },
  {
    title: "Starry Rooftop Talk",
    message: "We counted stars and shared dreams.\nThat night, forever felt very close.",
    date: "3 December 2020",
  },
  {
    title: "First New Year Countdown",
    message: "3...2...1... and then your hug.\nThe year began with the best blessing.",
    date: "31 December 2020",
  },
  {
    title: "Promise Ring Moment",
    message: "A tiny circle, an endless vow.\nI still feel that heartbeat in my chest.",
    date: "14 January 2021",
  },
  {
    title: "Our Engagement Day",
    message: "Happy tears and shaking hands.\nI said yes in my heart a thousand times.",
    date: "28 February 2021",
  },
  {
    title: "Wedding Morning Smiles",
    message: "The day began with hope and prayers.\nEvery breath whispered your name.",
    date: "17 April 2021",
  },
  {
    title: "You Walked Toward Me",
    message: "In that moment, the world disappeared.\nThere was only you, and a forever beginning.",
    date: "17 April 2021",
  },
  {
    title: "Our Wedding Vows",
    message: "Promises spoken from trembling hearts.\nI meant every word then, and even more now.",
    date: "17 April 2021",
  },
  {
    title: "First Home, First Dream",
    message: "Boxes everywhere, laughter in every room.\nWe turned walls into a warm little universe.",
    date: "8 May 2021",
  },
  {
    title: "Breakfasts and Soft Sunlight",
    message: "Morning tea tastes better with your smile.\nOur routine became my favorite romance.",
    date: "22 May 2021",
  },
  {
    title: "Rainy Window Conversations",
    message: "Raindrops on glass, your head on my shoulder.\nPeace has your name written on it.",
    date: "6 June 2021",
  },
  {
    title: "Sunday Saree and Tea",
    message: "You looked breathtaking and completely at ease.\nI fell in love all over again that day.",
    date: "20 June 2021",
  },
  {
    title: "Little Celebrations",
    message: "No occasion needed, we made one anyway.\nYour joy turns ordinary days into festivals.",
    date: "4 July 2021",
  },
  {
    title: "Our First Big Trip",
    message: "New roads, old love, deeper stories.\nTraveling with you feels like poetry in motion.",
    date: "18 July 2021",
  },
  {
    title: "Mountain Morning Together",
    message: "Cold breeze, warm fingers, shared silence.\nNature watched us love each other softly.",
    date: "2 August 2021",
  },
  {
    title: "Letters on Sticky Notes",
    message: "Tiny notes on mirrors and doors.\nYour little words made big happiness.",
    date: "16 August 2021",
  },
  {
    title: "Building Our Traditions",
    message: "From recipes to rituals, we made them ours.\nHome became a story we write daily.",
    date: "1 September 2021",
  },
  {
    title: "Quiet Nights, Loud Love",
    message: "No grand plans, only your presence.\nThat has always been more than enough.",
    date: "15 September 2021",
  },
  {
    title: "Dancing in the Living Room",
    message: "No audience, no rules, just us.\nI still smile when I remember your spin.",
    date: "1 October 2021",
  },
  {
    title: "Anniversary Under Fairy Lights",
    message: "One more year, a million more reasons.\nYou are still my favorite miracle.",
    date: "17 April 2022",
  },
  {
    title: "Dreaming About Tomorrow",
    message: "We spoke of future plans with shining eyes.\nEvery dream felt safer with you beside me.",
    date: "30 April 2022",
  },
  {
    title: "Through Every Storm",
    message: "Hard days came, but we held stronger.\nYour love is my calm in every chaos.",
    date: "13 June 2022",
  },
  {
    title: "Best Friends Again",
    message: "In every season we choose each other.\nLovers, partners, and best friends always.",
    date: "27 July 2022",
  },
  {
    title: "Your Smile, My Home",
    message: "I can cross any distance for that smile.\nIt still feels like the first time.",
    date: "10 September 2022",
  },
  {
    title: "Festival of Lights, Festival of Us",
    message: "Candles flickered, our laughter glowed.\nLove shone brightest in your eyes.",
    date: "24 October 2022",
  },
  {
    title: "Another Year, Deeper Love",
    message: "Time has only made us kinder and closer.\nMy heart keeps choosing you, every day.",
    date: "17 April 2023",
  },
  {
    title: "Growing Stronger Together",
    message: "Step by step, hand in hand.\nYou are my courage and my comfort.",
    date: "12 August 2023",
  },
  {
    title: "Still Falling for You",
    message: "Years later, the butterflies are still here.\nYou are my first thought and favorite prayer.",
    date: "14 February 2024",
  },
  {
    title: "Today, Always, Forever",
    message: "After all these memories, my promise remains.\nI love you more with every new sunrise.",
    date: "24 February 2026",
  },
];

function shuffleArray(values) {
  for (let i = values.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [values[i], values[j]] = [values[j], values[i]];
  }
  return values;
}

const validImageExtPattern = /\.(jpg|jpeg|png|webp|gif|avif)$/i;
const manifestImages = Array.isArray(window.IMAGE_FILES) ? window.IMAGE_FILES : [];
const normalizedManifestImages = manifestImages
  .map((path) => String(path).trim())
  .filter((path) => validImageExtPattern.test(path))
  .map((path) => (path.startsWith("images/") ? path : `images/${path}`));

const dateBySlideNumber = {
  0: "June 22, 2024",
  1: "January 11, 2025",
  2: "March 31, 2025",
  3: "April 13, 2025",
  4: "June 28, 2025",
  5: "August 10, 2025",
  6: "August 13, 2025",
  7: "September 4, 2025",
  8: "September 8, 2025",
  9: "January 18, 2026",
  10: "March 31, 2026",
};

const shortTitleBySlideNumber = {
  0: "The Shivering Day☺️",
  1: "The First Liplock💋",
  2: "First Outing Ever💙💚",
  3: "The Day with Special💖",
  4: "The Forevr Hands Together🫂",
  5: "The First Movie Date💘",
  6: "The First Nyt As Together🫣",
  7: "The Travel With Sareee!!!💓",
  8: "Just Her On My Shoulder❣️",
  9: "The Day After Long time❤️‍🩹",
  10: "The Day With More Maturity✨",
};

const customDescriptions = {
  11: "The Bond between Dr💕 and Er💕....such an amazing bond Priya💚💙...",
  12: "Those nostalgic pics where we joined together first time😍...",
  13: "The biscuits too tell💞... Its always \"VP\"❣️💫",
  14: "Its amazing hold you in my hands my young child🌸✨",
  15: "The pic that we unexpected but the art of samthanafying you 🤌❤️‍🩹",
  16: "The pic we wanted to take🥺... Just us of 8 is enough for life❤️...",
};

function getSlideNumber(imagePath) {
  const fileName = (imagePath.split("/").pop() || "").replace(/\.[^.]+$/, "");
  const parsed = Number.parseInt(fileName, 10);
  return Number.isNaN(parsed) ? Number.MAX_SAFE_INTEGER : parsed;
}

const slideImages = normalizedManifestImages
  .slice()
  .sort((a, b) => getSlideNumber(a) - getSlideNumber(b))
  .slice(0, 17);

const memories = slideImages.map((imagePath) => {
  const slideNumber = getSlideNumber(imagePath);
  const dateText = dateBySlideNumber[slideNumber] || "";
  const shortTitle = shortTitleBySlideNumber[slideNumber] || "";
  return {
  image: imagePath,
  dateLabel: dateText && shortTitle ? `${dateText} • ${shortTitle}` : dateText || shortTitle,
  description: customDescriptions[slideNumber] || "",
};
});

const totalMemoryCount = memories.length;
const pages = [];
let currentPage = 0;
let popupTimer = null;
let touchStartX = 0;
let touchStartY = 0;
let mobileNoFloatTimer = null;
let hasStartedBookLoading = false;
let slideEffectTimer = null;
const PRELUDE_DURATION = 1300;

bgMusic.volume = 0.38;

function createFloatingHearts() {
  // Locked by user: do not change symbols or palette below.
  const symbols = ["❤", "❤"];
  const palette = [
    "rgba(0, 222, 22, 0.72)",
    "rgba(7, 18, 145, 1)",
    "rgba(0, 222, 22, 0.72)",
    "rgba(7, 18, 145, 1)",
  ];

  for (let i = 0; i < 34; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    const color = palette[Math.floor(Math.random() * palette.length)];
    heart.style.color = color;
    heart.style.textShadow = "0 0 14px rgba(165, 242, 228, 0.72)";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${0.7 + Math.random() * 1.2}rem`;
    heart.style.animationDuration = `${12 + Math.random() * 14}s`;
    heart.style.animationDelay = `${Math.random() * -24}s`;
    heart.style.setProperty("--drift", `${Math.round((Math.random() - 0.5) * 150)}px`);
    floatingHearts.appendChild(heart);
  }
}

function burstHearts(count = 34) {
  // Locked by user: do not change symbols or palette below.
  const symbols = ["❤", "❤"];
  const palette = [
    "rgba(0, 222, 22, 0.72)",
    "rgba(7, 18, 145, 1)",
    "rgba(0, 222, 22, 0.72)",
    "rgba(7, 18, 145, 1)",
  ];

  for (let i = 0; i < count; i += 1) {
    const heart = document.createElement("span");
    heart.className = "burst-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.color = palette[Math.floor(Math.random() * palette.length)];
    heart.style.fontSize = `${0.85 + Math.random() * 1.45}rem`;
    heart.style.setProperty("--x", `${Math.round((Math.random() - 0.5) * 620)}px`);
    heart.style.setProperty("--y", `${Math.round((Math.random() - 0.5) * 470 - 170)}px`);
    document.body.appendChild(heart);

    window.setTimeout(() => {
      heart.remove();
    }, 2800);
  }
}

function showLovePopup() {
  lovePopup.classList.add("show");

  if (popupTimer) {
    window.clearTimeout(popupTimer);
  }

  popupTimer = window.setTimeout(() => {
    lovePopup.classList.remove("show");
  }, 2600);
}

function createMemoryPage(memory, index) {
  const page = document.createElement("article");
  page.className = "page";
  page.classList.add(`slide-fx-${(index % 17) + 1}`);
  page.dataset.index = String(index);
  if (memory.description) {
    page.classList.add("has-description");
  }

  const front = document.createElement("div");
  front.className = "page-face front";

  const imageWrap = document.createElement("div");
  imageWrap.className = "memory-image-wrap";

  const image = document.createElement("img");
  image.className = "memory-image";
  image.dataset.src = memory.image;
  image.alt = `Slide ${index + 1}`;
  image.loading = "lazy";
  image.decoding = "async";
  image.fetchPriority = "low";

  if (memory.dateLabel) {
    const dateLabel = document.createElement("p");
    dateLabel.className = "slide-date";
    dateLabel.textContent = memory.dateLabel;
    imageWrap.appendChild(dateLabel);
  }

  image.addEventListener("error", () => {
    image.remove();
    imageWrap.style.setProperty("--bg-image", "none");
    const placeholder = document.createElement("div");
    placeholder.className = "image-placeholder";
    placeholder.textContent = `Add ${memory.image}`;
    imageWrap.appendChild(placeholder);
  });

  imageWrap.appendChild(image);

  if (memory.description) {
    const description = document.createElement("p");
    description.className = "slide-description";
    description.textContent = memory.description;
    imageWrap.appendChild(description);
  }

  front.append(imageWrap);
  page.append(front);
  return page;
}

function loadPageImage(page) {
  if (!page) {
    return;
  }

  const image = page.querySelector(".memory-image");
  const imageWrap = page.querySelector(".memory-image-wrap");
  if (!image || !imageWrap || image.dataset.loaded === "1" || image.dataset.loading === "1") {
    return;
  }

  const src = image.dataset.src;
  if (!src) {
    return;
  }

  const encodedSrc = `./${encodeURI(src)}`;
  image.dataset.loading = "1";
  image.src = encodedSrc;
  imageWrap.style.setProperty("--bg-image", `url("./${encodeURI(src)}")`);

  const markLoaded = () => {
    image.dataset.loaded = "1";
    delete image.dataset.loading;
  };

  if (image.complete && image.naturalWidth > 0) {
    markLoaded();
    return;
  }

  image.addEventListener("load", markLoaded, { once: true });
  image.addEventListener(
    "error",
    () => {
      delete image.dataset.loading;
    },
    { once: true }
  );
}

function preloadNearbyImages() {
  if (!hasStartedBookLoading) {
    return;
  }

  const radius = 2;
  const start = Math.max(0, currentPage - radius);
  const end = Math.min(pages.length - 1, currentPage + radius);

  for (let i = start; i <= end; i += 1) {
    loadPageImage(pages[i]);
  }
}

function closeBook() {
  valentineOverlay.classList.add("show");
  valentineOverlay.setAttribute("aria-hidden", "false");
}

function completeEnding() {
  valentineOverlay.classList.remove("show");
  valentineOverlay.setAttribute("aria-hidden", "true");
  closeOverlay.classList.add("show");
  closeOverlay.setAttribute("aria-hidden", "false");
  burstHearts();
  showLovePopup();
}

function createFinalPage(index) {
  const page = document.createElement("article");
  page.className = "page";
  page.dataset.index = String(index);

  const front = document.createElement("div");
  front.className = "page-face front final-front";

  const title = document.createElement("h2");
  title.textContent = "Forever isn't long enough with you ❤️";

  const note = document.createElement("p");
  note.textContent = "Thank you for being my once-in-a-lifetime love story.";

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "close-book-btn";
  closeButton.textContent = "Close Book";
  closeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    closeBook();
  });

  front.append(title, note, closeButton);

  const back = document.createElement("div");
  back.className = "page-face back";
  back.textContent = "I love you, endlessly.";

  page.append(front, back);
  return page;
}

const imageCache = new Set();
const INITIAL_PRELOAD_COUNT = 3;
const BATCH = 2;
const DELAY = 800;
let bgIndex = 0;
let bgLoaderTimer = null;
let isBackgroundLoaderRunning = false;
const loadingMessages = [
  "Loading our life...",
  "Meeting you again...",
  "Saving our smiles...",
  "Collecting our memories...",
  "Replaying our laughter...",
  "Turning our story pages...",
  "Almost at the best chapter...",
  "Opening our love story...",
];

function preloadImage(src) {
  return new Promise((resolve) => {
    if (imageCache.has(src)) {
      resolve();
      return;
    }

    const img = new Image();
    img.src = `./${encodeURI(src)}`;

    img.onload = () => {
      imageCache.add(src);
      resolve();
    };

    img.onerror = resolve;
  });
}

function updateLoaderProgress(loaded, total) {
  const safeTotal = Math.max(total, 1);
  const percent = Math.floor((loaded / safeTotal) * 100);
  const messageIndex = Math.floor((percent / 100) * loadingMessages.length);
  const message = loadingMessages[Math.min(messageIndex, loadingMessages.length - 1)];

  if (progressFill) {
    progressFill.style.width = `${percent}%`;
  }

  if (progressText) {
    progressText.textContent = `${message} ${percent}%`;
  }
}

async function preloadAllImagesWithProgress() {
  const target = Math.min(INITIAL_PRELOAD_COUNT, memories.length);
  let loaded = 0;
  updateLoaderProgress(0, target);

  for (let i = 0; i < target; i += 1) {
    await preloadImage(memories[i].image);
    loaded += 1;
    updateLoaderProgress(loaded, target);
    await new Promise((resolve) => window.setTimeout(resolve, 0));
  }
}

function startBackgroundLoader() {
  if (!hasStartedBookLoading || isBackgroundLoaderRunning || bgIndex >= memories.length) {
    return;
  }

  isBackgroundLoaderRunning = true;

  function loadBatch() {
    if (!hasStartedBookLoading || bgIndex >= memories.length) {
      isBackgroundLoaderRunning = false;
      bgLoaderTimer = null;
      return;
    }

    for (let i = 0; i < BATCH; i += 1) {
      if (bgIndex >= memories.length) {
        break;
      }
      void preloadImage(memories[bgIndex].image);
      bgIndex += 1;
    }

    bgLoaderTimer = window.setTimeout(loadBatch, DELAY);
  }

  loadBatch();
}

function playActiveSlideEffect() {
  // Date is now fixed at bottom caption position (same as description).
}

function buildBook() {
  const fragment = document.createDocumentFragment();

  memories.forEach((memory, index) => {
    const page = createMemoryPage(memory, index);
    pages.push(page);
    fragment.appendChild(page);
  });

  book.appendChild(fragment);
}

function updateBook() {
  pages.forEach((page, index) => {
    page.classList.toggle("active", index === currentPage);
    page.style.zIndex = index === currentPage ? "20" : "1";
  });

  if (pageIndicator) {
    pageIndicator.textContent = "";
  }

  nextBtn.textContent = currentPage < pages.length - 1 ? "Next" : "Finish";

  prevBtn.disabled = currentPage === 0;
  preloadNearbyImages();
  startBackgroundLoader();
}

function turnForward() {
  if (closeOverlay.classList.contains("show")) {
    return;
  }

  if (currentPage < pages.length - 1) {
    currentPage += 1;
    updateBook();
    return;
  }

  closeBook();
}

function turnBackward() {
  if (closeOverlay.classList.contains("show")) {
    return;
  }

  if (currentPage > 0) {
    currentPage -= 1;
    updateBook();
  }
}

async function openBook() {
  if (openBookButton.disabled) return;

  hasStartedBookLoading = true;
  openBookButton.style.display = "none";
  openBookButton.disabled = true;

  if (loader) {
    loader.style.display = "block";
  }

  await preloadAllImagesWithProgress();
  bgIndex = Math.min(INITIAL_PRELOAD_COUNT, memories.length);
  startBackgroundLoader();
  updateBook();

  coverScreen.classList.add("is-opening");

  window.setTimeout(() => {
    if (loader) {
      loader.style.display = "none";
    }
    coverScreen.classList.add("hidden");
    bookExperience.classList.remove("hidden");
    window.requestAnimationFrame(() => {
      if (memoryStage) {
        memoryStage.classList.add("prelude");
        window.setTimeout(() => {
          memoryStage.classList.remove("prelude");
        }, PRELUDE_DURATION);
      }
      bookExperience.classList.add("show");
    });
  }, 650);
}

function validateLogin(username, password) {
  return username === "VasanthPriyaMahi" && password === "1208";
}

function moveToLoveQuestion() {
  loginScreen.classList.add("hidden");
  loveQuestionScreen.classList.remove("hidden");
}

function moveToLogin() {
  prankScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  document.body.classList.remove("prank-mode");
}

function unlockCover() {
  loveQuestionScreen.classList.add("hidden");
  coverScreen.classList.remove("hidden");
}

function moveNoButtonAway(button, pointerX, pointerY) {
  const container = button.parentElement;
  if (!container) {
    return;
  }

  const rect = container.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();
  const centerX = buttonRect.left + buttonRect.width / 2;
  const centerY = buttonRect.top + buttonRect.height / 2;
  const dx = pointerX - centerX;
  const dy = pointerY - centerY;
  const distance = Math.hypot(dx, dy);

  if (distance > 130) {
    return;
  }

  const maxLeft = rect.width - buttonRect.width / 2;
  const minLeft = buttonRect.width / 2;
  const maxTop = rect.height - buttonRect.height / 2;
  const minTop = buttonRect.height / 2;
  const currentLeft = parseFloat(button.dataset.left || "64");
  const currentTop = parseFloat(button.dataset.top || "50");
  const fleeX = dx === 0 ? (Math.random() > 0.5 ? 1 : -1) : -dx / Math.abs(dx);
  const fleeY = dy === 0 ? (Math.random() > 0.5 ? 1 : -1) : -dy / Math.abs(dy);
  const stepX = 14 + Math.random() * 20;
  const stepY = 12 + Math.random() * 18;
  let nextLeftPx = (currentLeft / 100) * rect.width + fleeX * stepX;
  let nextTopPx = (currentTop / 100) * rect.height + fleeY * stepY;

  nextLeftPx = Math.max(minLeft, Math.min(maxLeft, nextLeftPx));
  nextTopPx = Math.max(minTop, Math.min(maxTop, nextTopPx));

  const nextLeftPercent = (nextLeftPx / rect.width) * 100;
  const nextTopPercent = (nextTopPx / rect.height) * 100;

  button.style.left = `${nextLeftPercent}%`;
  button.style.top = `${nextTopPercent}%`;
  button.dataset.left = String(nextLeftPercent);
  button.dataset.top = String(nextTopPercent);
}

function randomizeNoButtonPosition(button) {
  const container = button.parentElement;
  if (!container) {
    return;
  }

  const rect = container.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();
  const minLeft = buttonRect.width / 2;
  const maxLeft = rect.width - buttonRect.width / 2;
  const minTop = buttonRect.height / 2;
  const maxTop = rect.height - buttonRect.height / 2;

  if (maxLeft <= minLeft || maxTop <= minTop) {
    return;
  }

  const nextLeftPx = minLeft + Math.random() * (maxLeft - minLeft);
  const nextTopPx = minTop + Math.random() * (maxTop - minTop);
  const nextLeftPercent = (nextLeftPx / rect.width) * 100;
  const nextTopPercent = (nextTopPx / rect.height) * 100;

  button.style.left = `${nextLeftPercent}%`;
  button.style.top = `${nextTopPercent}%`;
  button.dataset.left = String(nextLeftPercent);
  button.dataset.top = String(nextTopPercent);
}

function runMobileNoButtonFloat() {
  const isMobile = window.matchMedia("(max-width: 940px)").matches;
  if (!isMobile) {
    return;
  }

  if (!loveQuestionScreen.classList.contains("hidden")) {
    randomizeNoButtonPosition(noLoveBtn);
  }

  if (valentineOverlay.classList.contains("show")) {
    randomizeNoButtonPosition(noValentineBtn);
  }
}

function setupMobileNoButtonFloat() {
  if (mobileNoFloatTimer) {
    window.clearInterval(mobileNoFloatTimer);
  }

  mobileNoFloatTimer = window.setInterval(runMobileNoButtonFloat, 900);
}

function resetBook() {
  if (bgLoaderTimer) {
    window.clearTimeout(bgLoaderTimer);
    bgLoaderTimer = null;
  }
  isBackgroundLoaderRunning = false;
  bgIndex = Math.min(INITIAL_PRELOAD_COUNT, memories.length);
  valentineOverlay.classList.remove("show");
  valentineOverlay.setAttribute("aria-hidden", "true");
  closeOverlay.classList.remove("show");
  closeOverlay.setAttribute("aria-hidden", "true");
  currentPage = 0;
  updateBook();
}

function updateMusicButton(isPlaying) {
  musicToggle.classList.toggle("playing", isPlaying);
  musicToggle.setAttribute("aria-pressed", String(isPlaying));
  musicToggle.textContent = isPlaying ? "Music: On" : "Music: Off";
}

async function toggleMusic() {
  if (bgMusic.paused) {
    try {
      await bgMusic.play();
      updateMusicButton(true);
    } catch (error) {
      updateMusicButton(false);
      console.warn("Music playback is blocked until user interaction.", error);
    }
  } else {
    bgMusic.pause();
    updateMusicButton(false);
  }
}

document.body.classList.add("prank-mode");
prankNoActionButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
});
prankOkBtn.addEventListener("click", moveToLogin);
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!validateLogin(username, password)) {
    loginMessage.textContent = "Wrong username or password.";
    return;
  }

  loginMessage.textContent = "Welcome, my love.";
  moveToLoveQuestion();
});

yesLoveBtn.addEventListener("click", unlockCover);
noLoveBtn.addEventListener("click", (event) => {
  event.preventDefault();
});
noLoveBtn.addEventListener("mouseenter", () => {
  const rect = noLoveBtn.getBoundingClientRect();
  moveNoButtonAway(noLoveBtn, rect.left, rect.top);
});
loveQuestionScreen.addEventListener("mousemove", (event) => {
  moveNoButtonAway(noLoveBtn, event.clientX, event.clientY);
});
loveQuestionScreen.addEventListener(
  "touchstart",
  (event) => {
    const touch = event.changedTouches[0];
    moveNoButtonAway(noLoveBtn, touch.clientX, touch.clientY);
  },
  { passive: true }
);
yesValentineBtn.addEventListener("click", completeEnding);
noValentineBtn.addEventListener("click", (event) => {
  event.preventDefault();
});
noValentineBtn.addEventListener("mouseenter", () => {
  const rect = noValentineBtn.getBoundingClientRect();
  moveNoButtonAway(noValentineBtn, rect.left, rect.top);
});
valentineOverlay.addEventListener("mousemove", (event) => {
  if (valentineOverlay.classList.contains("show")) {
    moveNoButtonAway(noValentineBtn, event.clientX, event.clientY);
  }
});
valentineOverlay.addEventListener(
  "touchstart",
  (event) => {
    if (valentineOverlay.classList.contains("show")) {
      const touch = event.changedTouches[0];
      moveNoButtonAway(noValentineBtn, touch.clientX, touch.clientY);
    }
  },
  { passive: true }
);
openBookButton.addEventListener("click", openBook);
prevBtn.addEventListener("click", turnBackward);
nextBtn.addEventListener("click", turnForward);
reopenBookButton.addEventListener("click", resetBook);
musicToggle.addEventListener("click", toggleMusic);

book.addEventListener("click", (event) => {
  if (event.target.closest(".close-book-btn")) {
    return;
  }

  const bounds = book.getBoundingClientRect();
  const clickX = event.clientX - bounds.left;
  const mobileLayout = window.matchMedia("(max-width: 940px)").matches;

  if (mobileLayout) {
    if (clickX < bounds.width * 0.35) {
      turnBackward();
    } else {
      turnForward();
    }
    return;
  }

  if (clickX < bounds.width * 0.5) {
    turnBackward();
  } else {
    turnForward();
  }
});

book.addEventListener(
  "touchstart",
  (event) => {
    const touch = event.changedTouches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  },
  { passive: true }
);

book.addEventListener(
  "touchend",
  (event) => {
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartX;
    const deltaY = touch.clientY - touchStartY;

    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        turnForward();
      } else {
        turnBackward();
      }
    }
  },
  { passive: true }
);

document.addEventListener("keydown", (event) => {
  if (bookExperience.classList.contains("hidden")) {
    return;
  }

  if (event.key === "ArrowRight") {
    turnForward();
  }

  if (event.key === "ArrowLeft") {
    turnBackward();
  }
});

createFloatingHearts();
buildBook();
updateBook();
updateMusicButton(false);
setupMobileNoButtonFloat();
window.addEventListener("resize", runMobileNoButtonFloat);
