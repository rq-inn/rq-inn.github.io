const yearNode = document.getElementById("current-year");
const languageSelect = document.getElementById("language-select");
const pageTitleNode = document.getElementById("page-title");
const metaDescriptionNode = document.getElementById("meta-description");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const translatableAttrNodes = document.querySelectorAll("[data-i18n-attr]");

const translations = {
  ja: {
    pageTitle: "RQ Adventurers' Inn | RuneQuest 非公式ファンクラブ",
    metaDescription: "RQ Adventurers' Inn のトップページです。RuneQuest のためのアプリ、プレイエイド、関連アカウント、QR 導線をまとめています。",
    languageLabel: "言語",
    heroLogoAlt: "RQ Adventurers' Inn ロゴ",
    heroEyebrow: "RuneQuest Fan Club",
    heroTitle: "RQ Adventurers' Inn",
    heroLead: "RuneQuest 非公式ファンクラブ、RQ冒険者の宿へようこそ。",
    heroText1: "ここは RuneQuest ファン もぶ（Mobu）が運営するサイトです。",
    heroText2: "「もっと便利に、もっと楽しく、みんなで遊ぶ」をテーマに、さまざまな試みで RuneQuest を盛り上げていきます。",
    heroTagline: "どうぞ、笑いと愛でゆる〜くお付き合いください。それでは、ごゆっくり… ☕",
    heroPrimaryAction: "アプリを見る",
    heroSecondaryAction: "関連アカウントへ",
    heroTertiaryAction: "QRを表示",
    introText: "RuneQuest を遊ぶ時間が、少しでも便利に、少しでも楽しくなるように。配布中のアプリ、プレイエイド、各種発信先をこのページにまとめています。",
    applicationsLabel: "Applications",
    applicationsTitle: "アプリ",
    applicationsLead: "RuneQuest をもっと便利に楽しむためのツールです。",
    pdfToolsIconAlt: "PDFつーる アイコン",
    pdfToolsTag: "PDF Tools",
    pdfToolsTitle: "PDFつーる",
    pdfToolsDescription: "ルーンクエストのためのお役立ちツールです。",
    pngMakerIconAlt: "透過PNGメーカー アイコン",
    pngMakerTag: "PNG Maker",
    pngMakerTitle: "透過PNGメーカー",
    pngMakerDescription: "AI生成画像などの切り出しツールです。オンセの準備などに役立てて下さい。",
    mirrDictIconAlt: "ミルディクト アイコン",
    mirrDictTag: "Mirr Dict",
    mirrDictTitle: "ミルディクト",
    mirrDictDescription: "原書と日本語訳の2つのPDFを並べて、サクサク辞書を作れるツールです。",
    playAidLabel: "Play Aid",
    playAidTitle: "プレイエイド",
    playAidLead: "卓でそのまま役立つ資料もまとめています。",
    calendarImageAlt: "グローランサ カレンダー 日本語版の表紙",
    calendarTag: "Calendar",
    calendarTitle: "グローランサ カレンダー（日本語版）",
    calendarDescription: "RuneQuest の 21カルトの聖日が分かる 6季カレンダー 日本語版 へのリンクです。",
    qrLabel: "Quick Access",
    qrTitle: "QR を表示する",
    qrDescription: "スマートフォンから開きたいときのために、QR コードだけを大きく表示する専用画面を用意しました。",
    qrAction: "QR画面を開く",
    informationLabel: "Information",
    informationTitle: "ご案内",
    informationLead: "RuneQuest 関連の追加案内ページです。",
    gloranthaGisInfoAlt: "GloranthaGIS アイコン",
    informationCardTitle: "GloranthaGIS",
    informationCardDescription: "GloranthaGIS のご案内ページはこちらからご覧いただけます。",
    gloranthaGisAppTitle: "GloranthaGIS",
    gloranthaGisAppDescription: "GloranthaGIS のご案内ページへ進めます。",
    accountsLabel: "Related Accounts",
    accountsTitle: "関連アカウント",
    accountsLead: "更新情報や読み物、動画はここからどうぞ。",
    accountNoteDescription: "ブログ",
    accountMainXTitle: "X メイン",
    accountMainXDescription: "お知らせ",
    accountIntlXTitle: "X 海外",
    accountIntlXDescription: "英語圏向け",
    accountChineseXTitle: "X 中国語圏",
    accountChineseXDescription: "中国語圏向け",
    accountPersonalXTitle: "X 個人",
    accountPersonalXDescription: "もぶ",
    accountFacebookDescription: "コミュニティ",
    accountYoutubeDescription: "動画",
    accountTiktokDescription: "ショート動画",
    accountInstagramDescription: "画像投稿",
    footerLabel: "Company",
    footerTitle: "会社概要もご案内しています",
    footerDescription: "サイト案内とあわせて、運営情報の確認が必要な方はこちらからどうぞ。",
    footerLink: "会社概要を見る",
    qrAlt: "RQ Adventurers' Inn サイトQRコード",
    qrText: "QR からもアクセスできます。"
  },
  "zh-Hant": {
    pageTitle: "RQ Adventurers' Inn | RuneQuest 非官方同好會",
    metaDescription: "RQ Adventurers' Inn 首頁，整理了 RuneQuest 相關應用程式、遊戲輔助、相關帳號與 QR 入口。",
    languageLabel: "語言",
    heroLogoAlt: "RQ Adventurers' Inn 標誌",
    heroEyebrow: "RuneQuest Fan Club",
    heroTitle: "RQ Adventurers' Inn",
    heroLead: "歡迎來到 RuneQuest 非官方同好會，RQ 冒險者之宿。",
    heroText1: "這是由 RuneQuest 粉絲 Mobu 經營的網站。",
    heroText2: "以「更方便、更有趣、一起遊玩」為主題，我們會用各種方式讓 RuneQuest 更熱鬧。",
    heroTagline: "請帶著笑意與喜愛輕鬆逛逛。慢慢看… ☕",
    heroPrimaryAction: "查看應用程式",
    heroSecondaryAction: "前往相關帳號",
    heroTertiaryAction: "顯示 QR",
    introText: "希望 RuneQuest 的遊玩時間能更方便、也更愉快。這一頁整理了正在提供的應用程式、遊戲輔助資料與各種發佈管道。",
    applicationsLabel: "Applications",
    applicationsTitle: "應用程式",
    applicationsLead: "讓 RuneQuest 玩起來更方便的工具。",
    pdfToolsIconAlt: "PDF Tools 圖示",
    pdfToolsTag: "PDF Tools",
    pdfToolsTitle: "PDF Tools",
    pdfToolsDescription: "為 RuneQuest 準備的實用 PDF 工具。",
    pngMakerIconAlt: "PNG Maker 圖示",
    pngMakerTag: "PNG Maker",
    pngMakerTitle: "PNG Maker",
    pngMakerDescription: "可裁切 AI 生成圖片等素材，也適合線上跑團前的準備。",
    mirrDictIconAlt: "Mirr Dict 圖示",
    mirrDictTag: "Mirr Dict",
    mirrDictTitle: "Mirr Dict",
    mirrDictDescription: "將原文與日文翻譯 PDF 並排顯示，快速建立字典的工具。",
    playAidLabel: "Play Aid",
    playAidTitle: "遊戲輔助",
    playAidLead: "也整理了可直接在桌上使用的資料。",
    calendarImageAlt: "格羅蘭薩日曆日文版封面",
    calendarTag: "Calendar",
    calendarTitle: "格羅蘭薩日曆（日文版）",
    calendarDescription: "可查看 RuneQuest 21 個教團聖日的六季日曆日文版連結。",
    qrLabel: "Quick Access",
    qrTitle: "顯示 QR",
    qrDescription: "為了方便用手機開啟，另外準備了只會大尺寸顯示 QR Code 的專用頁面。",
    qrAction: "打開 QR 頁面",
    informationLabel: "Information",
    informationTitle: "導覽",
    informationLead: "這裡整理了 RuneQuest 相關的補充介紹頁面。",
    gloranthaGisInfoAlt: "GloranthaGIS 圖示",
    informationCardTitle: "GloranthaGIS",
    informationCardDescription: "可由此開啟 GloranthaGIS 的介紹頁面。",
    gloranthaGisAppTitle: "GloranthaGIS",
    gloranthaGisAppDescription: "可由此進入 GloranthaGIS 的介紹頁面。",
    accountsLabel: "Related Accounts",
    accountsTitle: "相關帳號",
    accountsLead: "更新、文章與影片都可以從這裡前往。",
    accountNoteDescription: "部落格",
    accountMainXTitle: "X 主帳號",
    accountMainXDescription: "通知",
    accountIntlXTitle: "X 海外",
    accountIntlXDescription: "英語圈",
    accountChineseXTitle: "X 中文圈",
    accountChineseXDescription: "中文圈",
    accountPersonalXTitle: "X 個人",
    accountPersonalXDescription: "Mobu",
    accountFacebookDescription: "社群",
    accountYoutubeDescription: "影片",
    accountTiktokDescription: "短影音",
    accountInstagramDescription: "圖片貼文",
    footerLabel: "Company",
    footerTitle: "也提供公司概要資訊",
    footerDescription: "若需要確認站點與營運資訊，也可以從這裡前往。",
    footerLink: "查看公司概要",
    qrAlt: "RQ Adventurers' Inn 網站 QR Code",
    qrText: "也可以透過 QR Code 開啟網站。"
  },
  en: {
    pageTitle: "RQ Adventurers' Inn | Unofficial RuneQuest Fan Club",
    metaDescription: "Top page for RQ Adventurers' Inn, gathering RuneQuest apps, play aids, related accounts, and a QR shortcut.",
    languageLabel: "Language",
    heroLogoAlt: "RQ Adventurers' Inn logo",
    heroEyebrow: "RuneQuest Fan Club",
    heroTitle: "RQ Adventurers' Inn",
    heroLead: "Welcome to the unofficial RuneQuest fan club, RQ Adventurers' Inn.",
    heroText1: "This site is run by the RuneQuest fan Mobu.",
    heroText2: "With the theme of making RuneQuest more useful, more fun, and more social, we keep trying new things to support the game.",
    heroTagline: "Please settle in with laughter and affection, and take your time... ☕",
    heroPrimaryAction: "See Apps",
    heroSecondaryAction: "Related Accounts",
    heroTertiaryAction: "Show QR",
    introText: "We want RuneQuest time to feel a little easier and a little more fun. This page gathers the apps, play aids, and places where we share updates.",
    applicationsLabel: "Applications",
    applicationsTitle: "Applications",
    applicationsLead: "Tools to make RuneQuest easier and more enjoyable.",
    pdfToolsIconAlt: "PDF Tools icon",
    pdfToolsTag: "PDF Tools",
    pdfToolsTitle: "PDF Tools",
    pdfToolsDescription: "Helpful PDF tools made for RuneQuest.",
    pngMakerIconAlt: "PNG Maker icon",
    pngMakerTag: "PNG Maker",
    pngMakerTitle: "PNG Maker",
    pngMakerDescription: "A cutout tool for AI-generated images and other assets, useful when preparing online sessions.",
    mirrDictIconAlt: "Mirr Dict icon",
    mirrDictTag: "Mirr Dict",
    mirrDictTitle: "Mirr Dict",
    mirrDictDescription: "A tool for building a quick dictionary by placing the original PDF and Japanese translation side by side.",
    playAidLabel: "Play Aid",
    playAidTitle: "Play Aid",
    playAidLead: "Useful materials for the table are collected here too.",
    calendarImageAlt: "Cover of the Japanese Glorantha Calendar",
    calendarTag: "Calendar",
    calendarTitle: "Glorantha Calendar (Japanese Edition)",
    calendarDescription: "A link to the Japanese six-season calendar showing the holy days of RuneQuest's 21 cults.",
    qrLabel: "Quick Access",
    qrTitle: "Show QR",
    qrDescription: "There is also a dedicated page that shows only the QR code in a large format for quick phone access.",
    qrAction: "Open QR Page",
    informationLabel: "Information",
    informationTitle: "Information",
    informationLead: "Additional RuneQuest-related guide pages are collected here.",
    gloranthaGisInfoAlt: "GloranthaGIS icon",
    informationCardTitle: "GloranthaGIS",
    informationCardDescription: "Open the GloranthaGIS information page here.",
    gloranthaGisAppTitle: "GloranthaGIS",
    gloranthaGisAppDescription: "Open the GloranthaGIS information page from this app card.",
    accountsLabel: "Related Accounts",
    accountsTitle: "Related Accounts",
    accountsLead: "Updates, posts, and videos are all linked here.",
    accountNoteDescription: "Blog",
    accountMainXTitle: "X Main",
    accountMainXDescription: "News",
    accountIntlXTitle: "X International",
    accountIntlXDescription: "English-speaking audiences",
    accountChineseXTitle: "X Chinese",
    accountChineseXDescription: "Chinese-speaking audiences",
    accountPersonalXTitle: "X Personal",
    accountPersonalXDescription: "Mobu",
    accountFacebookDescription: "Community",
    accountYoutubeDescription: "Videos",
    accountTiktokDescription: "Short videos",
    accountInstagramDescription: "Photo posts",
    footerLabel: "Company",
    footerTitle: "Company information is available too",
    footerDescription: "If you need operating and site information, you can jump there from here.",
    footerLink: "View Company Info",
    qrAlt: "RQ Adventurers' Inn site QR code",
    qrText: "You can also open the site from the QR code."
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

  if (normalizedCandidates.some((language) => language.startsWith("zh"))) {
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
