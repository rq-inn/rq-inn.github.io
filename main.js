const yearNode = document.getElementById("current-year");
const languageSelect = document.getElementById("language-select");
const pageTitleNode = document.getElementById("page-title");
const metaDescriptionNode = document.getElementById("meta-description");
const runeSlotNode = document.getElementById("rune-slot");
const runeReelNodes = Array.from(document.querySelectorAll("[data-slot-reel]"));

const slotRunes = [
  "w", "e", "t", "y", "u", "i", "o", "p",
  "a", "s", "d", "g", "h", "j", "l",
  "x", "c", "b", ",", ".", "/",
  "Q", "W", "R", "O", "A", "K", "L", "X", "B", "?"
];

const translations = {
  ja: {
    pageTitle: "GloranthaGIS | RQ Adventurers' Inn",
    metaDescription: "GloranthaGIS を中心に、RuneQuest をもっと遊べるようにするプロモーションと各種アプリ、プレイエイド、関連リンクをまとめたトップページです。",
    languageLabel: "言語",
    gloranthaIconAlt: "GloranthaGIS アイコン",
    heroEyebrow: "Cosmic Promotion",
    heroSignalLabel: "注目アプリ",
    heroSignalTitle: "GloranthaGIS",
    heroSignalText: "距離、旅路、土地勘をセッションに持ち込むための地図インターフェースです。",
    heroTitle: "GloranthaGIS",
    heroLead: "地図は「見るもの」じゃない。遊ぶものだ。",
    heroTagline: "距離を測る。土地を知る。セッションの現実感が変わる。",
    heroText1: "ドラゴン・パスやプラックスは、眺める背景ではなく、卓上で判断と会話を生むプレイ空間になります。",
    heroText2: "まずはプロモーションを一巡して、そのままいつもの Adventurers' Inn へどうぞ。",
    heroPrimaryAction: "アプリを開く",
    heroSecondaryAction: "動画を見る",
    heroTertiaryAction: "宿へ入る",
    heroJapaneseGuide: "日本語解説",
    heroEnglishGuide: "英語・その他言語",
    promoVideoLabel: "Demo Movie",
    promoVideoTitle: "遊ぶ前に、世界が動く感覚を見せる。",
    promoVideoText: "スクロール前の短い動画で、このアプリが何を変えるのかを一目で伝えます。",
    promoVideoFrameTitle: "GloranthaGIS デモ動画",
    featuresLabel: "What You Can Do",
    featuresTitle: "地図を、ただの画像ではなくプレイ面に変える。",
    featuresLead: "GloranthaGIS は地理情報を、卓のみんなが読んで判断できる情報に変換します。",
    feature1Title: "Place Jump",
    feature1Text: "日本語でも英語でも地名検索して、その場所へすぐにジャンプできます。",
    feature2Title: "Distance Measurement",
    feature2Text: "ルートを引いて、地点間の距離を実感のある長さで確認できます。",
    feature3Title: "Range Circle",
    feature3Text: "半径ツールで移動圏、勢力圏、効果範囲を視覚化できます。",
    feature4Title: "Layer View",
    feature4Text: "PNG地図を読み込み、ズーム、ドラッグ、レイヤー感覚で世界を見渡せます。",
    feature5Title: "Distance Origin Flag",
    feature5Text: "青い基準旗を置いて、画面中心からの南北東西距離を読み取れます。",
    feature6Title: "Built For Play",
    feature6Text: "実際のセッション中に使うことで、移動や地理の感覚が一気に具体的になります。",
    howtoLabel: "How to Start",
    howtoTitle: "3ステップですぐ始める。",
    howtoLead: "最初の体験は、技術的ではなく直感的であるべきです。",
    step1Title: "地図を用意",
    step1Text: "使いたい高解像度の Dragon Pass や Prax 地図を準備します。",
    step2Title: "PNGを読み込む",
    step2Text: "GloranthaGIS を開き、アプリ画面から PNG ファイルを読み込みます。",
    step3Title: "探索して遊ぶ",
    step3Text: "ズーム、距離計測、経路比較をしながら、セッションの中でそのまま使います。",
    howtoGuideJa: "完全ガイド（JP）",
    howtoGuideEn: "完全ガイド（EN）",
    useCasesLabel: "Use Cases",
    useCasesTitle: "卓で効く場面を、先に想像させる。",
    useCasesLead: "機能説明だけで終わらず、実際のプレイで役立つ絵が見えるようにします。",
    useCase1Title: "Travel Planning",
    useCase1Text: "今どこにいて、どこへ向かい、その旅がどれほどの意味を持つのかを共有できます。",
    useCase2Title: "Route Decisions",
    useCase2Text: "道、川、山脈、距離を並べて比較し、グループ全体で進路判断できます。",
    useCase3Title: "Range And Area",
    useCase3Text: "勢力圏、危険地帯、移動スケールを円と距離で理解できます。",
    useCase4Title: "Session Immersion",
    useCase4Text: "地図は背景絵ではなく、会話そのものを支える道具になります。",
    introText: "RuneQuest を遊ぶ時間が少しでも楽しく、少しでも便利になるように。ここから先は、いつもの Adventurers' Inn として、配布中のツール、プレイに役立つ資料、発信中の各種アカウントをまとめています。",
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
    pageTitle: "GloranthaGIS | RQ Adventurers' Inn",
    metaDescription: "以 GloranthaGIS 為主軸，集中展示 RuneQuest 宣傳內容、應用程式、遊戲輔助資料與相關連結的首頁。",
    languageLabel: "語言",
    gloranthaIconAlt: "GloranthaGIS 圖示",
    heroEyebrow: "Cosmic Promotion",
    heroSignalLabel: "Featured App",
    heroSignalTitle: "GloranthaGIS",
    heroSignalText: "把距離、旅程與地理感帶進實際遊戲中的地圖介面。",
    heroTitle: "GloranthaGIS",
    heroLead: "地圖不是只拿來看，而是拿來玩的。",
    heroTagline: "測量距離，理解土地，讓每場跑團更有真實感。",
    heroText1: "Dragon Pass 與 Prax 不再只是背景圖，而會變成能在遊戲桌上導航、比較與判斷的空間。",
    heroText2: "先看完這段宣傳，再一路滑進熟悉的 Adventurers' Inn。",
    heroPrimaryAction: "開啟應用程式",
    heroSecondaryAction: "觀看影片",
    heroTertiaryAction: "進入旅店",
    heroJapaneseGuide: "日文解說",
    heroEnglishGuide: "English / Other Languages",
    promoVideoLabel: "Demo Movie",
    promoVideoTitle: "在遊戲開始前，先讓世界動起來。",
    promoVideoText: "用一段短片，先讓訪客知道這個工具會如何改變桌上的感受。",
    promoVideoFrameTitle: "GloranthaGIS 示範影片",
    featuresLabel: "What You Can Do",
    featuresTitle: "把地圖從圖片，變成可操作的遊戲介面。",
    featuresLead: "GloranthaGIS 讓整桌玩家都能一起閱讀、判斷並使用地理資訊。",
    feature1Title: "Place Jump",
    feature1Text: "支援日文與英文地名搜尋，直接跳到指定位置。",
    feature2Title: "Distance Measurement",
    feature2Text: "在地圖上畫出路線，立刻知道旅程實際有多遠。",
    feature3Title: "Range Circle",
    feature3Text: "用半徑工具視覺化移動範圍、勢力圈與效果區域。",
    feature4Title: "Layer View",
    feature4Text: "載入 PNG 地圖後，可縮放、拖曳並分層式地探索世界。",
    feature5Title: "Distance Origin Flag",
    feature5Text: "放置藍色基準旗後，可讀取畫面中心的南北東西距離。",
    feature6Title: "Built For Play",
    feature6Text: "在實際跑團中使用，能立刻讓移動與地理判斷變得具體。",
    howtoLabel: "How to Start",
    howtoTitle: "三步就能開始。",
    howtoLead: "第一次體驗應該直覺，而不是技術導向。",
    step1Title: "準備地圖",
    step1Text: "先準備想探索的高解析度 Dragon Pass 或 Prax 地圖。",
    step2Title: "載入 PNG",
    step2Text: "開啟 GloranthaGIS，從介面中載入 PNG 檔案。",
    step3Title: "探索並遊玩",
    step3Text: "縮放、測距、比較路線，直接在團務進行中使用。",
    howtoGuideJa: "完整指南（JP）",
    howtoGuideEn: "完整指南（EN）",
    useCasesLabel: "Use Cases",
    useCasesTitle: "先讓人想像它在桌上怎麼發揮作用。",
    useCasesLead: "不只介紹功能，也讓訪客立刻想像真實跑團中的用途。",
    useCase1Title: "Travel Planning",
    useCase1Text: "讓玩家清楚知道身在何處、要去哪裡，以及旅程真正代表什麼。",
    useCase2Title: "Route Decisions",
    useCase2Text: "把道路、河流、山脈與距離放在同一張視圖裡一起比較。",
    useCase3Title: "Range And Area",
    useCase3Text: "利用圓形與距離工具理解勢力範圍、危險區域與移動尺度。",
    useCase4Title: "Session Immersion",
    useCase4Text: "地圖不再只是背景畫，而會成為遊戲對話的一部分。",
    introText: "希望你玩 RuneQuest 的時間更愉快也更方便。從這裡開始，頁面會回到熟悉的 Adventurers' Inn，整理所有工具、遊戲輔助與更新中的各類帳號。",
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
    pageTitle: "GloranthaGIS | RQ Adventurers' Inn",
    metaDescription: "A promotional landing version of RQ Adventurers' Inn focused on GloranthaGIS, followed by the usual apps, play aids, and related links.",
    languageLabel: "Language",
    gloranthaIconAlt: "GloranthaGIS icon",
    heroEyebrow: "Cosmic Promotion",
    heroSignalLabel: "Featured App",
    heroSignalTitle: "GloranthaGIS",
    heroSignalText: "A map interface for bringing distance, travel, and place into active play.",
    heroTitle: "GloranthaGIS",
    heroLead: "Maps are not just for looking at. They are for play.",
    heroTagline: "Measure distance. Know the land. Make every session feel real.",
    heroText1: "Dragon Pass and Prax stop being passive artwork and become a space your table can navigate, compare, and use during live sessions.",
    heroText2: "Start with the promo, watch the demo, and then flow naturally into the familiar Adventurers' Inn below.",
    heroPrimaryAction: "Open App",
    heroSecondaryAction: "Watch Demo",
    heroTertiaryAction: "Enter the Inn",
    heroJapaneseGuide: "Japanese Guide",
    heroEnglishGuide: "English / Other Languages",
    promoVideoLabel: "Demo Movie",
    promoVideoTitle: "Show the world in motion before play even begins.",
    promoVideoText: "A short video makes the core value obvious before visitors scroll into the rest of the site.",
    promoVideoFrameTitle: "GloranthaGIS demo video",
    featuresLabel: "What You Can Do",
    featuresTitle: "Turn maps into a play surface, not just a picture.",
    featuresLead: "GloranthaGIS makes geography readable, actionable, and shared across the table.",
    feature1Title: "Place Jump",
    feature1Text: "Search place names in Japanese or English and jump straight to the location.",
    feature2Title: "Distance Measurement",
    feature2Text: "Draw routes on the map and see how far journeys really are.",
    feature3Title: "Range Circle",
    feature3Text: "Visualize travel range, territory, and effect areas with radius tools.",
    feature4Title: "Layer View",
    feature4Text: "Load PNG maps and inspect the world with zoom, drag, and layered viewing.",
    feature5Title: "Distance Origin Flag",
    feature5Text: "Set a blue reference flag and read north and east offsets from the screen center.",
    feature6Title: "Built For Play",
    feature6Text: "Use it during sessions to make movement, geography, and travel feel concrete.",
    howtoLabel: "How to Start",
    howtoTitle: "Get running in three steps.",
    howtoLead: "The first experience should feel obvious, not technical.",
    step1Title: "Get the Map",
    step1Text: "Prepare the high-resolution Dragon Pass or Prax map you want to explore.",
    step2Title: "Load PNG",
    step2Text: "Open GloranthaGIS and load the PNG file from the app interface.",
    step3Title: "Explore And Play",
    step3Text: "Zoom, measure, compare routes, and use the map during live sessions.",
    howtoGuideJa: "Full Guide (JP)",
    howtoGuideEn: "Full Guide (EN)",
    useCasesLabel: "Use Cases",
    useCasesTitle: "Help visitors picture it at the table.",
    useCasesLead: "These scenes turn a feature list into a reason to want the app.",
    useCase1Title: "Travel Planning",
    useCase1Text: "Let players see where they are, where they are headed, and what the journey really means.",
    useCase2Title: "Route Decisions",
    useCase2Text: "Compare roads, rivers, mountains, and distance with one shared visual reference.",
    useCase3Title: "Range And Area",
    useCase3Text: "Understand territory, danger zones, and movement scale with circles and measurements.",
    useCase4Title: "Session Immersion",
    useCase4Text: "The map stops being background art and becomes part of the conversation itself.",
    introText: "We want your RuneQuest time to be a little more fun and a little more convenient. From here down, the page returns to the familiar Adventurers' Inn with the usual tools, play aids, and update channels.",
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
  { bg: "#081120", bgStrong: "#15305b", surface: "rgba(8, 18, 35, 0.78)", accent: "#75d6ff", accentStrong: "#2c91d8", runeColor: "rgba(147, 224, 255, 0.95)" },
  { bg: "#091427", bgStrong: "#1c3e70", surface: "rgba(8, 20, 38, 0.8)", accent: "#82d6ff", accentStrong: "#3795de", runeColor: "rgba(171, 233, 255, 0.96)" },
  { bg: "#081625", bgStrong: "#15516a", surface: "rgba(8, 22, 36, 0.8)", accent: "#67e2d1", accentStrong: "#289a90", runeColor: "rgba(152, 245, 231, 0.96)" },
  { bg: "#09192c", bgStrong: "#255a74", surface: "rgba(9, 25, 44, 0.8)", accent: "#62d8ff", accentStrong: "#2f92d7", runeColor: "rgba(165, 229, 255, 0.96)" },
  { bg: "#0c1c2d", bgStrong: "#2b5d65", surface: "rgba(10, 27, 42, 0.8)", accent: "#79e1d0", accentStrong: "#2b9a86", runeColor: "rgba(180, 249, 233, 0.96)" },
  { bg: "#0b1830", bgStrong: "#2f5ea1", surface: "rgba(9, 22, 43, 0.8)", accent: "#7acbff", accentStrong: "#3c89dd", runeColor: "rgba(184, 225, 255, 0.96)" },
  { bg: "#0b1837", bgStrong: "#4b65b9", surface: "rgba(10, 23, 52, 0.8)", accent: "#8ab7ff", accentStrong: "#507ddb", runeColor: "rgba(194, 213, 255, 0.96)" },
  { bg: "#11183b", bgStrong: "#6359c7", surface: "rgba(16, 24, 57, 0.8)", accent: "#a7b6ff", accentStrong: "#6c6ef0", runeColor: "rgba(214, 211, 255, 0.96)" },
  { bg: "#17163a", bgStrong: "#8656b3", surface: "rgba(20, 21, 55, 0.8)", accent: "#d1a7ff", accentStrong: "#9d63db", runeColor: "rgba(235, 208, 255, 0.96)" },
  { bg: "#1c1835", bgStrong: "#ad5d91", surface: "rgba(26, 23, 51, 0.8)", accent: "#ffb0d8", accentStrong: "#db6f9f", runeColor: "rgba(255, 214, 236, 0.96)" },
  { bg: "#1b162d", bgStrong: "#b66a6a", surface: "rgba(26, 22, 44, 0.8)", accent: "#ffbc9b", accentStrong: "#df7f59", runeColor: "rgba(255, 219, 194, 0.96)" },
  { bg: "#111723", bgStrong: "#567189", surface: "rgba(15, 21, 33, 0.8)", accent: "#8dc1f2", accentStrong: "#4e83b8", runeColor: "rgba(199, 226, 250, 0.96)" }
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

  if (normalizedCandidates.some((language) => language.startsWith("zh-tw") || language.startsWith("zh-hk"))) {
    return "zh-Hant";
  }

  if (normalizedCandidates.some((language) => language.startsWith("zh-cn") || language.startsWith("zh-sg"))) {
    return "zh-Hant";
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
  const smartphoneLayout = isSmartphoneLayout();
  htmlNode.classList.toggle("is-sp-layout", smartphoneLayout);
  htmlNode.classList.toggle("is-pc-layout", !smartphoneLayout);
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
