const yearNode = document.getElementById("current-year");
const languageSelect = document.getElementById("language-select");
const languageSwitcherNode = document.getElementById("language-switcher");
const languageSwitcherTopHost = document.getElementById("language-switcher-host-top");
const languageSwitcherFooterHost = document.getElementById("language-switcher-host-footer");
const pageTitleNode = document.getElementById("page-title");
const metaDescriptionNode = document.getElementById("meta-description");
const runeSlotNode = document.getElementById("rune-slot");
const runeReelNodes = Array.from(document.querySelectorAll("[data-slot-reel]"));
const heroImageNode = document.getElementById("hero-image");

const heroImageSources = [
  "images/header/S__56590338.jpg",
  "images/header/S__56590340_0.jpg",
  "images/header/S__56590341_0.jpg",
  "images/header/S__56590342_0.jpg"
];

const slotRunes = [
  "w", "e", "t", "y", "u", "i", "o", "p",
  "a", "s", "d", "g", "h", "j", "l",
  "x", "c", "b", ",", ".", "/",
  "Q", "W", "R", "O", "A", "K", "L", "X", "B", "?"
];

const translations = {
  ja: {
    pageTitle: "RQ Adventurers' Inn | RuneQuest 非公式ファンクラブ",
    metaDescription: "RuneQuest 非公式ファンクラブ RQ Adventurers' Inn のトップページ。アプリ、プレイエイド、関連アカウントへの入口をまとめています。",
    languageLabel: "言語",
    heroImageAlt: "RuneQuest Adventurers' Inn ヘッダー画像",
    heroLogoAlt: "RQ Adventurers' Inn ロゴ",
    heroEyebrow: "RuneQuest Fan Club",
    heroTitle: "RQ Adventurers' Inn",
    heroLead: "ようこそ！ RuneQuest 非公式ファンクラブ 「RQ Adventurers' Inn ― RQ冒険者の宿へ。」",
    heroText1: "ここは RuneQuestファン もぶ（Mobu）が運営するサイトです。 「もっと便利に、もっと楽しく、みんなで遊ぶ」をテーマに、さまざまな試みで RuneQuest を盛り上げていきます。",
    heroText2: "どうぞ、笑いと愛でゆる～くお付き合いください。それでは、ごゆっくり… ☕",
    heroPrimaryAction: "アプリを見る",
    heroSecondaryAction: "関連リンクへ",
    introText: "RuneQuest を遊ぶ時間が少しでも楽しく、少しでも便利になるように。 このページでは、配布中のツール、プレイに役立つ資料、発信中の各種アカウントをまとめています。",
    applicationsLabel: "Applications",
    applicationsTitle: "アプリ",
    pdfToolsIconAlt: "PDFつーる アイコン",
    pdfToolsTag: "PDF Tools",
    pdfToolsTitle: "PDFつーる",
    pdfToolsDescription: "ルーンクエストのためのPDFお役立ちツールです。ルールブックの印刷や お手軽翻訳を、少し気軽にするためのアプリをまとめました。※スマートフォン未対応",
    pngMakerIconAlt: "透過PNGメーカー アイコン",
    pngMakerTag: "PNG Maker",
    pngMakerTitle: "透過PNGメーカー",
    pngMakerDescription: "AI生成画像などの切り出しツールです。オンセの準備などに役立てて下さい。※スマートフォン未対応",
    mirrDictIconAlt: "ミルディクト アイコン",
    mirrDictTag: "Mirr Dict",
    mirrDictTitle: "ミルディクト",
    mirrDictDescription: "原書と日本語訳の2つのPDFを並べて、サクサク辞書を作れるツールです。※スマートフォン未対応",
    playAidLabel: "Play Aid",
    playAidTitle: "プレイエイド",
    calendarImageAlt: "グローランサ カレンダー 日本語版の表紙",
    calendarTag: "Calendar",
    calendarTitle: "グローランサ カレンダー（日本語版）",
    calendarDescription: "RuneQuest の 21カルトの聖日が分かる 6季カレンダー 日本語版 へのリンクです。",
    accountsLabel: "Related Accounts",
    accountsTitle: "関連アカウント",
    accountNoteDescription: "ブログと読み物",
    accountMainXTitle: "X メイン",
    accountMainXDescription: "最新のお知らせ",
    accountIntlXTitle: "X 海外",
    accountIntlXDescription: "英語圏向けの発信",
    accountChineseXTitle: "X 中国語圏",
    accountChineseXDescription: "中国語圏向けの発信",
    accountPersonalXTitle: "X 個人",
    accountPersonalXDescription: "もぶ個人アカウント",
    accountFacebookDescription: "コミュニティの記録",
    accountYoutubeDescription: "動画コンテンツ",
    accountTiktokDescription: "ショート動画",
    accountInstagramDescription: "ビジュアル更新",
    footerLabel: "Adventurers' Desk",
    footerTitle: "ゆっくり見ていってください",
    footerDescription: "スマートフォンからもアクセスしやすいように、トップページをシンプルに整理しています。",
    qrAlt: "RQ Adventurers' Inn サイトQRコード",
    qrText: "QR からもアクセスできます。"
  },
  "zh-Hant": {
    pageTitle: "RQ Adventurers' Inn | RuneQuest 非官方粉絲俱樂部",
    metaDescription: "RuneQuest 非官方粉絲俱樂部 RQ Adventurers' Inn 的首頁，集中整理應用程式、遊戲輔助資料與相關帳號連結。",
    languageLabel: "語言",
    heroImageAlt: "RuneQuest Adventurers' Inn 頁首圖片",
    heroLogoAlt: "RQ Adventurers' Inn 標誌",
    heroEyebrow: "RuneQuest Fan Club",
    heroTitle: "RQ Adventurers' Inn",
    heroLead: "歡迎來到 RuneQuest 非官方粉絲俱樂部「RQ Adventurers' Inn」。",
    heroText1: "這是由 RuneQuest 粉絲 Mobu 經營的網站。以「更方便、更快樂、一起遊玩」為主題，我們會透過各種嘗試讓 RuneQuest 更加熱鬧。",
    heroText2: "請帶著笑容與喜愛輕鬆逛逛。祝你在這裡度過愉快時光… ☕",
    heroPrimaryAction: "查看應用程式",
    heroSecondaryAction: "前往相關連結",
    introText: "希望你玩 RuneQuest 的時間能更愉快、也更方便。這一頁整理了目前提供的工具、遊戲輔助資料，以及正在更新的各種帳號。",
    applicationsLabel: "Applications",
    applicationsTitle: "應用程式",
    pdfToolsIconAlt: "PDF Tools 圖示",
    pdfToolsTag: "PDF Tools",
    pdfToolsTitle: "PDF Tools",
    pdfToolsDescription: "為 RuneQuest 準備的 PDF 實用工具。把規則書列印與簡易翻譯等功能整合成更容易上手的應用程式。※不支援智慧型手機",
    pngMakerIconAlt: "PNG Maker 圖示",
    pngMakerTag: "PNG Maker",
    pngMakerTitle: "PNG Maker",
    pngMakerDescription: "可用來裁切 AI 生成圖片等素材的工具，也很適合用於線上跑團前的準備。※不支援智慧型手機",
    mirrDictIconAlt: "Mirr Dict 圖示",
    mirrDictTag: "Mirr Dict",
    mirrDictTitle: "Mirr Dict",
    mirrDictDescription: "可將原文與日文翻譯兩份 PDF 並排顯示，快速建立字典的工具。※不支援智慧型手機",
    playAidLabel: "Play Aid",
    playAidTitle: "遊戲輔助",
    calendarImageAlt: "格羅蘭薩日曆日文版封面",
    calendarTag: "Calendar",
    calendarTitle: "格羅蘭薩日曆（日文版）",
    calendarDescription: "可查看 RuneQuest 21 個教團聖日的六季日曆日文版連結。",
    accountsLabel: "Related Accounts",
    accountsTitle: "相關帳號",
    accountNoteDescription: "部落格與文章",
    accountMainXTitle: "X 主帳號",
    accountMainXDescription: "最新消息",
    accountIntlXTitle: "X 海外",
    accountIntlXDescription: "面向英語圈的發佈",
    accountChineseXTitle: "X 中文圈",
    accountChineseXDescription: "面向中文圈的發佈",
    accountPersonalXTitle: "X 個人",
    accountPersonalXDescription: "Mobu 的個人帳號",
    accountFacebookDescription: "社群紀錄",
    accountYoutubeDescription: "影片內容",
    accountTiktokDescription: "短影音",
    accountInstagramDescription: "視覺更新",
    footerLabel: "Adventurers' Desk",
    footerTitle: "請慢慢瀏覽",
    footerDescription: "為了讓手機也能更容易瀏覽，我們將首頁整理得更簡潔。",
    qrAlt: "RQ Adventurers' Inn 網站 QR Code",
    qrText: "也可以透過 QR 碼存取。"
  },
  en: {
    pageTitle: "RQ Adventurers' Inn | RuneQuest Fan Club",
    metaDescription: "Top page of RQ Adventurers' Inn, an unofficial RuneQuest fan club, with links to apps, play aids, and related accounts.",
    languageLabel: "Language",
    heroImageAlt: "RuneQuest Adventurers' Inn header image",
    heroLogoAlt: "RQ Adventurers' Inn logo",
    heroEyebrow: "RuneQuest Fan Club",
    heroTitle: "RQ Adventurers' Inn",
    heroLead: "Welcome to RQ Adventurers' Inn, an unofficial RuneQuest fan club.",
    heroText1: "This site is run by Mobu, a RuneQuest fan. With the theme of making play more convenient, more fun, and more social, we share a variety of projects to celebrate RuneQuest.",
    heroText2: "Settle in, enjoy the jokes and affection, and make yourself at home... ☕",
    heroPrimaryAction: "View Apps",
    heroSecondaryAction: "Related Links",
    introText: "We want your RuneQuest time to be a little more fun and a little more convenient. This page gathers the tools we distribute, useful play aids, and the accounts where we post updates.",
    applicationsLabel: "Applications",
    applicationsTitle: "Apps",
    pdfToolsIconAlt: "PDF Tools icon",
    pdfToolsTag: "PDF Tools",
    pdfToolsTitle: "PDF Tools",
    pdfToolsDescription: "A set of handy PDF utilities for RuneQuest, including lighter ways to print rulebooks and work with quick translations. Not supported on smartphones.",
    pngMakerIconAlt: "PNG Maker icon",
    pngMakerTag: "PNG Maker",
    pngMakerTitle: "PNG Maker",
    pngMakerDescription: "A cutout tool for AI-generated images and other artwork, useful when preparing assets for online sessions. Not supported on smartphones.",
    mirrDictIconAlt: "Mirr Dict icon",
    mirrDictTag: "Mirr Dict",
    mirrDictTitle: "Mirr Dict",
    mirrDictDescription: "A tool for building dictionaries quickly by placing the original PDF and the Japanese translation side by side. Not supported on smartphones.",
    playAidLabel: "Play Aid",
    playAidTitle: "Play Aid",
    calendarImageAlt: "Cover of the Japanese Glorantha Calendar",
    calendarTag: "Calendar",
    calendarTitle: "Glorantha Calendar (Japanese Edition)",
    calendarDescription: "A link to the Japanese six-season calendar that shows the holy days of RuneQuest's 21 cults.",
    accountsLabel: "Related Accounts",
    accountsTitle: "Related Accounts",
    accountNoteDescription: "Blog posts and reading",
    accountMainXTitle: "X Main",
    accountMainXDescription: "Latest updates",
    accountIntlXTitle: "X International",
    accountIntlXDescription: "Posts for English-speaking audiences",
    accountChineseXTitle: "X Chinese",
    accountChineseXDescription: "Posts for Chinese-speaking audiences",
    accountPersonalXTitle: "X Personal",
    accountPersonalXDescription: "Mobu's personal account",
    accountFacebookDescription: "Community archive",
    accountYoutubeDescription: "Video content",
    accountTiktokDescription: "Short-form videos",
    accountInstagramDescription: "Visual updates",
    footerLabel: "Adventurers' Desk",
    footerTitle: "Take your time",
    footerDescription: "The top page is kept simple so it stays easy to browse from smartphones as well.",
    qrAlt: "RQ Adventurers' Inn site QR code",
    qrText: "You can also open the site from this QR code."
  }
};

const monthlyThemes = [
  { bg: "#f3ead8", bgStrong: "#d7b98c", surface: "rgba(255, 249, 239, 0.82)", accent: "#a63f22", accentStrong: "#7d2512", runeColor: "rgba(247, 213, 152, 0.9)" },
  { bg: "#efe4d7", bgStrong: "#cfaa94", surface: "rgba(255, 246, 241, 0.84)", accent: "#b0543c", accentStrong: "#843423", runeColor: "rgba(255, 216, 184, 0.92)" },
  { bg: "#e8eee0", bgStrong: "#b8c98d", surface: "rgba(248, 252, 242, 0.84)", accent: "#5d7c3f", accentStrong: "#3f5e27", runeColor: "rgba(232, 247, 188, 0.92)" },
  { bg: "#e5efe7", bgStrong: "#8bbca0", surface: "rgba(245, 252, 247, 0.84)", accent: "#2f7c61", accentStrong: "#1f5a46", runeColor: "rgba(189, 244, 214, 0.94)" },
  { bg: "#e2f0ea", bgStrong: "#77bea5", surface: "rgba(243, 253, 249, 0.85)", accent: "#198a72", accentStrong: "#10624f", runeColor: "rgba(177, 243, 220, 0.96)" },
  { bg: "#dfeef0", bgStrong: "#79b9c6", surface: "rgba(241, 251, 253, 0.84)", accent: "#227c96", accentStrong: "#17586b", runeColor: "rgba(184, 235, 249, 0.96)" },
  { bg: "#e0ebf3", bgStrong: "#83a8cf", surface: "rgba(244, 249, 255, 0.84)", accent: "#3f6fb2", accentStrong: "#274b80", runeColor: "rgba(193, 223, 255, 0.96)" },
  { bg: "#e9e7f3", bgStrong: "#ac97d2", surface: "rgba(249, 246, 255, 0.84)", accent: "#7053ad", accentStrong: "#513581", runeColor: "rgba(224, 206, 255, 0.96)" },
  { bg: "#f1e2ee", bgStrong: "#c38eb8", surface: "rgba(255, 245, 252, 0.84)", accent: "#a64f8d", accentStrong: "#7b3565", runeColor: "rgba(251, 210, 242, 0.96)" },
  { bg: "#f2e2df", bgStrong: "#ca8f81", surface: "rgba(255, 246, 244, 0.84)", accent: "#b55a3a", accentStrong: "#8a3f26", runeColor: "rgba(255, 216, 189, 0.96)" },
  { bg: "#efe8dc", bgStrong: "#baa382", surface: "rgba(254, 249, 241, 0.84)", accent: "#8f6332", accentStrong: "#64441f", runeColor: "rgba(247, 221, 171, 0.95)" },
  { bg: "#ece5df", bgStrong: "#ab9b8f", surface: "rgba(251, 248, 244, 0.84)", accent: "#75604a", accentStrong: "#564433", runeColor: "rgba(231, 219, 204, 0.95)" }
];

const htmlNode = document.documentElement;
const translatableNodes = document.querySelectorAll("[data-i18n]");
const translatableAttrNodes = document.querySelectorAll("[data-i18n-attr]");

function detectInitialLanguage() {
  const languageCandidates = Array.isArray(navigator.languages) && navigator.languages.length > 0
    ? navigator.languages
    : [navigator.language || "en"];
  const normalizedCandidates = languageCandidates.filter(Boolean).map((language) => language.toLowerCase());

  if (normalizedCandidates.some((language) => language.startsWith("ja"))) {
    return "ja";
  }

  if (normalizedCandidates.some((language) => language.startsWith("zh"))) {
    return "zh-Hant";
  }

  return "en";
}

function isSmartphoneLayout() {
  const narrowViewport = window.matchMedia("(max-width: 640px)").matches;
  const userAgent = navigator.userAgent || "";
  const mobileUserAgent = /iPhone|Android.+Mobile|Windows Phone|iPod/i.test(userAgent);

  return narrowViewport || mobileUserAgent;
}

function applyDeviceLayout() {
  if (!languageSwitcherNode || !languageSwitcherTopHost || !languageSwitcherFooterHost) {
    return;
  }

  const smartphoneLayout = isSmartphoneLayout();
  htmlNode.classList.toggle("is-sp-layout", smartphoneLayout);
  htmlNode.classList.toggle("is-pc-layout", !smartphoneLayout);

  const targetHost = smartphoneLayout ? languageSwitcherFooterHost : languageSwitcherTopHost;

  if (languageSwitcherNode.parentElement !== targetHost) {
    targetHost.appendChild(languageSwitcherNode);
  }
}

function getTokyoDateParts(date = new Date()) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short"
  });
  const parts = formatter.formatToParts(date);
  const values = Object.fromEntries(parts.filter((part) => part.type !== "literal").map((part) => [part.type, part.value]));
  const weekdayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

  return {
    year: Number(values.year),
    month: Number(values.month),
    day: Number(values.day),
    weekday: weekdayMap[values.weekday]
  };
}

function getTokyoWeekIndex(date = new Date()) {
  const tokyoDate = new Date(date.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
  const startOfYear = new Date(tokyoDate.getFullYear(), 0, 1);
  const dayCount = Math.floor((tokyoDate - startOfYear) / 86400000);

  return Math.floor(dayCount / 7);
}

function padDatePart(value) {
  return String(value).padStart(2, "0");
}

function toDateKey(year, month, day) {
  return `${year}-${padDatePart(month)}-${padDatePart(day)}`;
}

function nthWeekdayOfMonth(year, month, weekday, occurrence) {
  const firstDay = new Date(year, month - 1, 1).getDay();
  const offset = (weekday - firstDay + 7) % 7;
  return 1 + offset + (occurrence - 1) * 7;
}

function calculateVernalEquinoxDay(year) {
  return Math.floor(20.8431 + 0.242194 * (year - 1980) - Math.floor((year - 1980) / 4));
}

function calculateAutumnalEquinoxDay(year) {
  return Math.floor(23.2488 + 0.242194 * (year - 1980) - Math.floor((year - 1980) / 4));
}

function buildJapanHolidayMap(year) {
  const holidays = new Map();
  const addHoliday = (month, day, name) => {
    holidays.set(toDateKey(year, month, day), name);
  };

  addHoliday(1, 1, "New Year's Day");
  addHoliday(1, nthWeekdayOfMonth(year, 1, 1, 2), "Coming of Age Day");
  addHoliday(2, 11, "National Foundation Day");
  addHoliday(2, 23, "Emperor's Birthday");
  addHoliday(3, calculateVernalEquinoxDay(year), "Vernal Equinox Day");
  addHoliday(4, 29, "Showa Day");
  addHoliday(5, 3, "Constitution Memorial Day");
  addHoliday(5, 4, "Greenery Day");
  addHoliday(5, 5, "Children's Day");
  addHoliday(7, nthWeekdayOfMonth(year, 7, 1, 3), "Marine Day");
  addHoliday(8, 11, "Mountain Day");
  addHoliday(9, nthWeekdayOfMonth(year, 9, 1, 3), "Respect for the Aged Day");
  addHoliday(9, calculateAutumnalEquinoxDay(year), "Autumnal Equinox Day");
  addHoliday(10, nthWeekdayOfMonth(year, 10, 1, 2), "Sports Day");
  addHoliday(11, 3, "Culture Day");
  addHoliday(11, 23, "Labor Thanksgiving Day");

  [...holidays.keys()].sort().forEach((dateKey) => {
    const [holidayYear, holidayMonth, holidayDay] = dateKey.split("-").map(Number);
    const holidayDate = new Date(holidayYear, holidayMonth - 1, holidayDay);

    if (holidayDate.getDay() !== 0) {
      return;
    }

    let substituteDate = new Date(holidayYear, holidayMonth - 1, holidayDay + 1);
    let substituteKey = toDateKey(substituteDate.getFullYear(), substituteDate.getMonth() + 1, substituteDate.getDate());

    while (holidays.has(substituteKey)) {
      substituteDate.setDate(substituteDate.getDate() + 1);
      substituteKey = toDateKey(substituteDate.getFullYear(), substituteDate.getMonth() + 1, substituteDate.getDate());
    }

    if (substituteDate.getFullYear() === year) {
      holidays.set(substituteKey, "Observed Holiday");
    }
  });

  for (let month = 1; month <= 12; month += 1) {
    const daysInMonth = new Date(year, month, 0).getDate();

    for (let day = 2; day < daysInMonth; day += 1) {
      const currentKey = toDateKey(year, month, day);

      if (holidays.has(currentKey)) {
        continue;
      }

      const previousKey = toDateKey(year, month, day - 1);
      const nextKey = toDateKey(year, month, day + 1);

      if (holidays.has(previousKey) && holidays.has(nextKey)) {
        holidays.set(currentKey, "Citizen's Holiday");
      }
    }
  }

  return holidays;
}

function applyMonthlyTheme(dateParts) {
  const theme = monthlyThemes[dateParts.month - 1];

  if (!theme) {
    return;
  }

  htmlNode.style.setProperty("--bg", theme.bg);
  htmlNode.style.setProperty("--bg-strong", theme.bgStrong);
  htmlNode.style.setProperty("--surface", theme.surface);
  htmlNode.style.setProperty("--accent", theme.accent);
  htmlNode.style.setProperty("--accent-strong", theme.accentStrong);
  htmlNode.style.setProperty("--rune-color", theme.runeColor);
}

function applyHolidayState(dateParts) {
  if (!runeSlotNode) {
    return;
  }

  const holidayMap = buildJapanHolidayMap(dateParts.year);
  const isHoliday = holidayMap.has(toDateKey(dateParts.year, dateParts.month, dateParts.day));

  runeSlotNode.classList.toggle("is-holiday", isHoliday);
}

function applyWeeklyHeroImage() {
  if (!heroImageNode || heroImageSources.length === 0) {
    return;
  }

  const source = heroImageSources[getTokyoWeekIndex() % heroImageSources.length];
  heroImageNode.src = source;
}

function pickRandomRune() {
  return slotRunes[Math.floor(Math.random() * slotRunes.length)];
}

function getLosingRunes() {
  const runes = runeReelNodes.map(() => pickRandomRune());

  if (runes.every((rune) => rune === runes[0])) {
    runes[2] = slotRunes.find((rune) => rune !== runes[0]) || "?";
  }

  return runes;
}

function getWinningRunes() {
  if (Math.random() < 0.7) {
    return ["s", "s", "s"];
  }

  const jackpotRune = pickRandomRune();
  return [jackpotRune, jackpotRune, jackpotRune];
}

function setSlotRunes(runes) {
  runeReelNodes.forEach((reelNode, index) => {
    reelNode.textContent = runes[index] || "?";
  });
}

function spinRuneSlot() {
  if (!runeSlotNode || runeSlotNode.dataset.spinning === "true") {
    return;
  }

  runeSlotNode.dataset.spinning = "true";
  runeSlotNode.classList.remove("is-winning");

  const isWinning = Math.random() < 0.5;
  const finalRunes = isWinning ? getWinningRunes() : getLosingRunes();

  runeReelNodes.forEach((reelNode, index) => {
    reelNode.classList.add("is-spinning");

    const frameTimer = window.setInterval(() => {
      reelNode.textContent = pickRandomRune();
    }, 90);

    const stopDelay = 1650 + index * 320 + Math.floor(Math.random() * 180);

    window.setTimeout(() => {
      window.clearInterval(frameTimer);
      reelNode.classList.remove("is-spinning");
      reelNode.textContent = finalRunes[index];

      if (index === runeReelNodes.length - 1) {
        runeSlotNode.dataset.spinning = "false";

        if (isWinning) {
          runeSlotNode.classList.add("is-winning");
          window.setTimeout(() => {
            runeSlotNode.classList.remove("is-winning");
          }, 1800);
        }
      }
    }, stopDelay);
  });
}

function applyLanguage(language) {
  const locale = translations[language] ? language : "en";
  const dictionary = translations[locale];

  if (languageSelect) {
    languageSelect.value = locale;
    languageSelect.setAttribute("aria-label", dictionary.languageLabel);
  }

  htmlNode.lang = locale;

  if (pageTitleNode) {
    pageTitleNode.textContent = dictionary.pageTitle;
    document.title = dictionary.pageTitle;
  }

  if (metaDescriptionNode) {
    metaDescriptionNode.setAttribute("content", dictionary.metaDescription);
  }

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;

    if (key && dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  translatableAttrNodes.forEach((node) => {
    node.dataset.i18nAttr.split(",").forEach((directive) => {
      const [attributeName, key] = directive.split(":").map((part) => part.trim());

      if (attributeName && key && dictionary[key]) {
        node.setAttribute(attributeName, dictionary[key]);
      }
    });
  });
}

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const tokyoToday = getTokyoDateParts();
applyDeviceLayout();
applyWeeklyHeroImage();
applyMonthlyTheme(tokyoToday);
applyHolidayState(tokyoToday);
setSlotRunes(getLosingRunes());

if (runeSlotNode) {
  runeSlotNode.dataset.spinning = "false";
  runeSlotNode.addEventListener("click", spinRuneSlot);
  spinRuneSlot();
}

if (languageSelect) {
  applyLanguage(detectInitialLanguage());
  languageSelect.addEventListener("change", (event) => {
    applyLanguage(event.target.value);
  });
}

window.addEventListener("resize", applyDeviceLayout);

const fadeItems = document.querySelectorAll(".section-fade");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  fadeItems.forEach((item) => observer.observe(item));
} else {
  fadeItems.forEach((item) => item.classList.add("is-visible"));
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.error("Service worker registration failed:", error);
    });
  });
}
