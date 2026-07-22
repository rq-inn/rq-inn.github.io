const yearNode = document.getElementById("current-year");
const languageSelect = document.getElementById("language-select");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const translatableAttrNodes = document.querySelectorAll("[data-i18n-attr]");

const translations = {
  ja: {
    languageLabel: "Language",
    heroLogoAlt: "RQ Adventurers' Inn ロゴ",
    heroEyebrow: "RuneQuest Fan Club",
    heroTitle: "RQ Adventurers' Inn",
    heroLead: "RuneQuest 非公式ファンクラブ、RQ Adventurers' Inn へようこそ。",
    heroText1: "ここは RuneQuest ファン もぶ（Mobu）が運営するサイトです。",
    heroText2: "もっと便利に、もっと楽しく、みんなで遊ぶためのアプリや資料をまとめています。",
    heroTagline: "どうぞ、ごゆっくりお楽しみください。",
    heroPrimaryAction: "アプリを見る",
    heroSecondaryAction: "関連アカウントへ",
    heroTertiaryAction: "QRを表示",
    introText: "RuneQuest を遊ぶ時間が少し便利に、少し楽しくなるように。このページにはアプリ、サプリメント、公開作品、関連アカウントへの導線をまとめています。",
    informationLabel: "Information",
    informationTitle: "情報ページ",
    informationLead: "RuneQuest 関連の情報ページです。",
    gloranthaGisInfoAlt: "GloranthaGIS アイコン",
    informationCardTitle: "GloranthaGIS",
    informationCardDescription: "GloranthaGIS の情報ページはこちらから確認できます。",
    uploadsLabel: "DriveThruRPG",
    uploadsTitle: "アップロード作品",
    uploadsLead: "Matthew Mobu 名義で公開している作品一覧です。",
    uploadsAlt: "DriveThruRPG アップロード作品一覧",
    uploadsCardTitle: "DriveThruRPG アップロード作品",
    uploadsCardDescription: "公開中のシナリオやプレイ用資料をまとめて確認できます。",
    scenarioLabel: "Scenario",
    scenarioTitle: "シナリオ",
    scenarioLead: "RuneQuest 向け公開シナリオです。",
    scenarioAlt: "ある森の話 - A Tale of Woodcraft 表紙",
    scenarioCardTitle: "ある森の話 - A Tale of Woodcraft",
    scenarioCardDescription: "DriveThruRPG で公開中の RuneQuest 向けシナリオです。",
    supplementLabel: "Supplement",
    supplementTitle: "サプリメント",
    supplementLead: "DriveThruRPG で公開している補助資料やサプリメントです。",
    calendarImageAlt: "グローランサ カレンダー 日本語版",
    calendarTag: "Calendar",
    calendarTitle: "グローランサ カレンダー（日本語版）",
    calendarDescription: "RuneQuest の 21 カルトの祝日がわかる 6 か月カレンダー日本語版です。",
    applicationsLabel: "Applications",
    applicationsTitle: "アプリ",
    applicationsLead: "RuneQuest をもっと便利に楽しむためのツールです。",
    gloranthaGisAppTitle: "GloranthaGIS",
    gloranthaGisAppDescription: "GloranthaGIS の情報ページへ移動します。",
    pdfToolsIconAlt: "PDFつーる アイコン",
    pdfToolsTag: "PDF Tools",
    pdfToolsTitle: "PDFつーる",
    pdfToolsDescription: "ルーンクエストのためのお役立ち PDF ツールです。",
    pngMakerIconAlt: "透過PNGメーカー アイコン",
    pngMakerTag: "PNG Maker",
    pngMakerTitle: "透過PNGメーカー",
    pngMakerDescription: "AI 生成画像などの切り出しツールです。オンセ準備にも役立ちます。",
    mirrDictIconAlt: "ミルディクト アイコン",
    mirrDictTag: "Mirr Dict",
    mirrDictTitle: "ミルディクト",
    mirrDictDescription: "原書と日本語訳の 2 つの PDF を並べて、サクサク辞書を作れるツールです。",
    outlineFontMakerIconAlt: "アウトラインフォントメーカー アイコン",
    outlineFontMakerTag: "Outline Font Maker",
    outlineFontMakerTitle: "アウトラインフォントメーカー",
    outlineFontMakerDescription: "スクショ→ペーストで簡単にオリジナルフォントを作れます。",
    accountsLabel: "Related Accounts",
    accountsTitle: "関連アカウント",
    accountsLead: "更新情報、ブログ、動画、SNS の入口をまとめています。",
    accountNoteDescription: "ブログ",
    accountMainXTitle: "X メイン",
    accountMainXDescription: "公式更新",
    accountIntlXTitle: "X 海外",
    accountIntlXDescription: "英語圏向け",
    accountChineseXTitle: "X 海外",
    accountChineseXDescription: "中国語圏向け",
    accountPersonalXTitle: "X 個人",
    accountPersonalXDescription: "もぶ",
    accountFacebookDescription: "コミュニティ",
    accountYoutubeDescription: "動画",
    accountTiktokDescription: "ショート動画",
    accountInstagramDescription: "画像投稿",
    qrLabel: "Quick Access",
    qrTitle: "QR を表示する",
    qrDescription: "スマホから素早く開けるように、QR コードだけを表示するページも用意しています。",
    qrAction: "QR 画面を開く",
    footerLabel: "Company",
    footerTitle: "会社概要も確認できます",
    footerDescription: "サイト運営や会社情報については、こちらのページから確認できます。",
    footerLink: "会社概要を見る"
  },
  "zh-Hant": {
    languageLabel: "Language",
    heroLogoAlt: "RQ Adventurers' Inn 標誌",
    heroEyebrow: "RuneQuest Fan Club",
    heroTitle: "RQ Adventurers' Inn",
    heroLead: "歡迎來到 RuneQuest 非官方粉絲俱樂部 RQ Adventurers' Inn。",
    heroText1: "這是由 RuneQuest 粉絲 Mobu 經營的網站。",
    heroText2: "這裡整理了讓遊戲更方便、更有趣的應用程式與資料。",
    heroTagline: "請慢慢享受。",
    heroPrimaryAction: "查看應用程式",
    heroSecondaryAction: "相關帳號",
    heroTertiaryAction: "顯示 QR",
    introText: "希望 RuneQuest 的遊玩時間能更方便、更愉快。這個頁面整理了應用程式、補充資料、公開作品與相關帳號入口。",
    informationLabel: "Information",
    informationTitle: "資訊頁面",
    informationLead: "這裡是 RuneQuest 相關資訊頁面。",
    gloranthaGisInfoAlt: "GloranthaGIS 圖示",
    informationCardTitle: "GloranthaGIS",
    informationCardDescription: "可以從這裡查看 GloranthaGIS 的資訊頁面。",
    uploadsLabel: "DriveThruRPG",
    uploadsTitle: "上傳作品",
    uploadsLead: "這裡是以 Matthew Mobu 名義公開的作品列表。",
    uploadsAlt: "DriveThruRPG 上傳作品列表",
    uploadsCardTitle: "DriveThruRPG 上傳作品",
    uploadsCardDescription: "可以一次查看公開中的劇本與遊戲資料。",
    scenarioLabel: "Scenario",
    scenarioTitle: "劇本",
    scenarioLead: "公開中的 RuneQuest 劇本。",
    scenarioAlt: "A Tale of Woodcraft 封面",
    scenarioCardTitle: "ある森の話 - A Tale of Woodcraft",
    scenarioCardDescription: "在 DriveThruRPG 公開中的 RuneQuest 劇本。",
    supplementLabel: "Supplement",
    supplementTitle: "補充資料",
    supplementLead: "在 DriveThruRPG 公開的輔助資料與補充內容。",
    calendarImageAlt: "Glorantha Calendar 日文版",
    calendarTag: "Calendar",
    calendarTitle: "Glorantha Calendar（日文版）",
    calendarDescription: "可查看 RuneQuest 21 個 cult 祝日的六個月日文版月曆。",
    applicationsLabel: "Applications",
    applicationsTitle: "應用程式",
    applicationsLead: "讓 RuneQuest 更方便好玩的工具。",
    gloranthaGisAppTitle: "GloranthaGIS",
    gloranthaGisAppDescription: "前往 GloranthaGIS 的資訊頁面。",
    pdfToolsIconAlt: "PDF Tools 圖示",
    pdfToolsTag: "PDF Tools",
    pdfToolsTitle: "PDFつーる",
    pdfToolsDescription: "為 RuneQuest 準備的實用 PDF 工具。",
    pngMakerIconAlt: "PNG Maker 圖示",
    pngMakerTag: "PNG Maker",
    pngMakerTitle: "透過PNGメーカー",
    pngMakerDescription: "可裁切 AI 生成圖片等素材的工具，也適合線上團前準備。",
    mirrDictIconAlt: "Mirr Dict 圖示",
    mirrDictTag: "Mirr Dict",
    mirrDictTitle: "ミルディクト",
    mirrDictDescription: "把原文與日文翻譯 PDF 並排，快速建立字典的工具。",
    outlineFontMakerIconAlt: "Outline Font Maker 圖示",
    outlineFontMakerTag: "Outline Font Maker",
    outlineFontMakerTitle: "アウトラインフォントメーカー",
    outlineFontMakerDescription: "只要截圖後貼上，就能輕鬆製作原創字型。",
    accountsLabel: "Related Accounts",
    accountsTitle: "相關帳號",
    accountsLead: "這裡整理了更新、部落格、影片與 SNS 入口。",
    accountNoteDescription: "部落格",
    accountMainXTitle: "X 主帳號",
    accountMainXDescription: "官方更新",
    accountIntlXTitle: "X 海外",
    accountIntlXDescription: "英文圈",
    accountChineseXTitle: "X 海外",
    accountChineseXDescription: "中文圈",
    accountPersonalXTitle: "X 個人",
    accountPersonalXDescription: "Mobu",
    accountFacebookDescription: "社群",
    accountYoutubeDescription: "影片",
    accountTiktokDescription: "短影片",
    accountInstagramDescription: "圖片貼文",
    qrLabel: "Quick Access",
    qrTitle: "顯示 QR",
    qrDescription: "也準備了只顯示 QR Code 的頁面，方便用手機快速開啟。",
    qrAction: "開啟 QR 畫面",
    footerLabel: "Company",
    footerTitle: "也可查看公司資訊",
    footerDescription: "關於網站營運與公司資訊，可從這裡查看。",
    footerLink: "查看公司資訊"
  },
  en: {
    languageLabel: "Language",
    heroLogoAlt: "RQ Adventurers' Inn logo",
    heroEyebrow: "RuneQuest Fan Club",
    heroTitle: "RQ Adventurers' Inn",
    heroLead: "Welcome to RQ Adventurers' Inn, an unofficial RuneQuest fan club.",
    heroText1: "This site is run by the RuneQuest fan Mobu.",
    heroText2: "It gathers apps and materials to make play more convenient and more fun.",
    heroTagline: "Please take your time and enjoy.",
    heroPrimaryAction: "See Apps",
    heroSecondaryAction: "Related Accounts",
    heroTertiaryAction: "Show QR",
    introText: "We want RuneQuest time to feel a little easier and a little more fun. This page gathers apps, supplements, published works, and related accounts.",
    informationLabel: "Information",
    informationTitle: "Information",
    informationLead: "RuneQuest-related information pages.",
    gloranthaGisInfoAlt: "GloranthaGIS icon",
    informationCardTitle: "GloranthaGIS",
    informationCardDescription: "Open the GloranthaGIS information page here.",
    uploadsLabel: "DriveThruRPG",
    uploadsTitle: "Published Works",
    uploadsLead: "A list of works published under the name Matthew Mobu.",
    uploadsAlt: "DriveThruRPG published works list",
    uploadsCardTitle: "DriveThruRPG Published Works",
    uploadsCardDescription: "Browse published scenarios and play materials in one place.",
    scenarioLabel: "Scenario",
    scenarioTitle: "Scenario",
    scenarioLead: "A published scenario for RuneQuest.",
    scenarioAlt: "A Tale of Woodcraft cover",
    scenarioCardTitle: "A Tale of Woodcraft",
    scenarioCardDescription: "A RuneQuest scenario published on DriveThruRPG.",
    supplementLabel: "Supplement",
    supplementTitle: "Supplement",
    supplementLead: "Support materials and supplements published on DriveThruRPG.",
    calendarImageAlt: "Glorantha Calendar Japanese edition",
    calendarTag: "Calendar",
    calendarTitle: "Glorantha Calendar (Japanese Edition)",
    calendarDescription: "A six-month Japanese calendar showing the holy days of RuneQuest's 21 cults.",
    applicationsLabel: "Applications",
    applicationsTitle: "Applications",
    applicationsLead: "Tools to make RuneQuest easier and more enjoyable.",
    gloranthaGisAppTitle: "GloranthaGIS",
    gloranthaGisAppDescription: "Open the GloranthaGIS information page.",
    pdfToolsIconAlt: "PDF Tools icon",
    pdfToolsTag: "PDF Tools",
    pdfToolsTitle: "PDF Tools",
    pdfToolsDescription: "Helpful PDF tools made for RuneQuest.",
    pngMakerIconAlt: "PNG Maker icon",
    pngMakerTag: "PNG Maker",
    pngMakerTitle: "Transparent PNG Maker",
    pngMakerDescription: "A cutout tool for AI-generated images and other assets, handy for online session prep.",
    mirrDictIconAlt: "Mirr Dict icon",
    mirrDictTag: "Mirr Dict",
    mirrDictTitle: "Mirr Dict",
    mirrDictDescription: "Build a quick dictionary by placing the source PDF and Japanese translation side by side.",
    outlineFontMakerIconAlt: "Outline Font Maker icon",
    outlineFontMakerTag: "Outline Font Maker",
    outlineFontMakerTitle: "Outline Font Maker",
    outlineFontMakerDescription: "Create an original font easily by screenshotting and pasting.",
    accountsLabel: "Related Accounts",
    accountsTitle: "Related Accounts",
    accountsLead: "Links to updates, blog posts, videos, and social accounts.",
    accountNoteDescription: "Blog",
    accountMainXTitle: "X Main",
    accountMainXDescription: "Official updates",
    accountIntlXTitle: "X International",
    accountIntlXDescription: "English-speaking audience",
    accountChineseXTitle: "X Chinese",
    accountChineseXDescription: "Chinese-speaking audience",
    accountPersonalXTitle: "X Personal",
    accountPersonalXDescription: "Mobu",
    accountFacebookDescription: "Community",
    accountYoutubeDescription: "Videos",
    accountTiktokDescription: "Short videos",
    accountInstagramDescription: "Image posts",
    qrLabel: "Quick Access",
    qrTitle: "Show QR",
    qrDescription: "There is also a page that shows only the QR code for quick phone access.",
    qrAction: "Open QR Page",
    footerLabel: "Company",
    footerTitle: "Company information is also available",
    footerDescription: "You can check site operation and company information here.",
    footerLink: "View Company Info"
  }
};

function detectInitialLanguage() {
  const languageCandidates = Array.isArray(navigator.languages) && navigator.languages.length > 0
    ? navigator.languages
    : [navigator.language || "en"];
  const normalizedCandidates = languageCandidates.filter(Boolean).map((language) => language.toLowerCase());

  if (normalizedCandidates.some((language) => language.startsWith("ja"))) {
    return "ja";
  }

  if (normalizedCandidates.some((language) => language.startsWith("zh-hant"))) {
    return "zh-Hant";
  }

  if (normalizedCandidates.some((language) => language.startsWith("zh-hans") || language.startsWith("zh"))) {
    return "zh-Hant";
  }

  return "en";
}

function applyLanguage(language) {
  const locale = translations[language] ? language : "en";
  const dictionary = translations[locale];

  document.documentElement.lang = locale;

  if (languageSelect) {
    languageSelect.value = locale;
    languageSelect.setAttribute("aria-label", dictionary.languageLabel);
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

if (languageSelect) {
  applyLanguage(detectInitialLanguage());
  languageSelect.addEventListener("change", (event) => {
    applyLanguage(event.target.value);
  });
}

const fadeItems = document.querySelectorAll(".section-fade");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.14,
    rootMargin: "0px 0px -6% 0px"
  });

  fadeItems.forEach((item) => observer.observe(item));
} else {
  fadeItems.forEach((item) => item.classList.add("is-visible"));
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js", { updateViaCache: "none" })
      .then((registration) => registration.update())
      .catch((error) => {
        console.error("Service worker registration failed:", error);
      });
  });
}
