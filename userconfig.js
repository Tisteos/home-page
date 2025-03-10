let saved_config = JSON.parse(localStorage.getItem("CONFIG"));
const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

const checkTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

let currentTheme = checkTheme();

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const newTheme = e.matches ? "dark" : "light";

    if (newTheme !== currentTheme) {
      location.reload();
    }
  });

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Kyiv",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#f38ba8",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  disabled: [],
  fastlink: "https://github.com/catppuccin/catppuccin",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "social medias",
          links: [
            {
              name: "reddit",
              url: "https://reddit.com",
              icon: "brand-reddit",
              icon_color: theme === "dark" ? "#a6e3a1" : "#a6d189",
            },
            {
              name: "Ukrkey",
              url: "https://shkey.cakestwix.com/",
              icon: "fish",
              icon_color: theme === "dark" ? "#cba6f7" : "#ca9ee6",
            },
            {
              name: "youtube",
              url: "https/www.youtube.com/",
              icon: "brand-youtube",
              icon_color: theme === "dark" ? "#f38ba8" : "#e78284",
            },
            {
              name: "куток",
              url: "https://kutok.io",
              icon: "border-radius",
              icon_color: theme === "dark" ? "#89b4fa" : "#8caaee",
            },
          ],
        },
        {
          name: "anime",
          links: [
            {
              name: "anitube",
              url: "https://anitube.in.ua/",
              icon: "player-play",
              icon_color: theme === "dark" ? "#a6e3a1" : "#a6d189",
            },
            {
              name: "hikka",
              url: "https://hikka.io/",
              icon: "device-tv",
              icon_color: theme === "dark" ? "#cba6f7" : "#ca9ee6",
            },
            {
              name: "animeua",
              url: "https://animeua.club/",
              icon: "player-pause",
              icon_color: theme === "dark" ? "#f38ba8" : "#e78284",
            },
            {
              name: "nekoteka",
              url: "https://nekoteka.com/anime",
              icon: "paw",
              icon_color: theme === "dark" ? "#89b4fa" : "#8caaee",
            },
          ],
        },
        {
          name: "ai",
          links: [
            {
              name: "gemini",
              url: "https://gemini.google.com/app",
              icon: "artboard",
              icon_color: theme === "dark" ? "#a6e3a1" : "#a6d189",
            },
            {
              name: "chatgpt",
              url: "https://chatgpt.com/",
              icon: "brain",
              icon_color: theme === "dark" ? "#cba6f7" : "#ca9ee6",
            },
            {
              name: "agnai",
              url: "https://agnai.chat/",
              icon: "robot",
              icon_color: theme === "dark" ? "#f38ba8" : "#e78284",
            },
            {
              name: "deepl",
              url: "https://www.deepl.com/translator",
              icon: "language",
              icon_color: theme === "dark" ? "#89b4fa" : "#8caaee",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "resources",
          links: [
            {
              name: "dotfiles",
              url: "https://codeberg.org/tisteos/dotfiles",
              icon: "brand-github",
              icon_color: theme === "dark" ? "#a6e3a1" : "#a6d189",
            },
            {
              name: "unixporn",
              url: "https://www.reddit.com/r/unixporn/",
              icon: "align-box-top-right",
              icon_color: theme === "dark" ? "#fab387" : "#ef9f76",
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "learncpp",
              url: "https://www.learncpp.com",
              icon: "brand-cpp",
              icon_color: theme === "dark" ? "#a6e3a1" : "#a6d189",
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: theme === "dark" ? "#fab387" : "#ef9f76",
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: theme === "dark" ? "#f38ba8" : "#e78284",
            },
          ],
        },
        {
          name: "blogs",
          links: [
            {
              name: "dou",
              url: "https://dou.ua",
              icon: "brand-prisma",
              icon_color: theme === "dark" ? "#a6e3a1" : "#a6d189",
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: theme === "dark" ? "#fab387" : "#ef9f76",
            },
            {
              name: "uber research",
              url: "https://eng.uber.com/category/articles",
              icon: "brand-uber",
              icon_color: theme === "dark" ? "#f38ba8" : "#e78284",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config);
