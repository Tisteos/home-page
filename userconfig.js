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

window.matchMedia("(prefers-color-scheme: dark)");

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Vinnytsia",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "var(--red)",
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
              icon_color: "var(--green)",
            },
            {
              name: "Sharkey",
              url: "https://transfem.social/",
              icon: "fish",
              icon_color: "var(--mauve)",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube",
              icon_color: "var(--red)",
            },
            {
              name: "Ukrkey",
              url: "https://twink.men/",
              icon: "fish",
              icon_color: "var(--blue)",
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
              icon_color: "var(--green)",
            },
            {
              name: "hikka",
              url: "https://hikka.io/",
              icon: "device-tv",
              icon_color: "var(--mauve)",
            },
            {
              name: "animeua",
              url: "https://animeua.club/",
              icon: "player-pause",
              icon_color: "var(--red)",
            },
            {
              name: "nekoteka",
              url: "https://nekoteka.com/anime",
              icon: "paw",
              icon_color: "var(--blue)",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "dotfiles",
              url: "https://codeberg.org/tisteos/dotfiles",
              icon: "brand-github",
              icon_color: "var(--green)",
            },
            {
              name: "unixporn",
              url: "https://www.reddit.com/r/unixporn/",
              icon: "align-box-top-right",
              icon_color: "var(--mauve)",
            },
            {
              name: "learncpp",
              url: "https://www.learncpp.com",
              icon: "brand-cpp",
              icon_color: "var(--red)",
            },
            {
              name: "deepl",
              url: "https://www.deepl.com/translator",
              icon: "language",
              icon_color: "var(--blue)",
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
              icon_color: "var(--green)",
            },
            {
              name: "unixporn",
              url: "https://www.reddit.com/r/unixporn/",
              icon: "align-box-top-right",
              icon_color: "var(--peach)",
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
              icon_color: "var(--green)",
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: "var(--peach)",
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: "var(--red)",
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
              icon_color: "var(--green)",
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: "var(--peach)",
            },
            {
              name: "uber research",
              url: "https://eng.uber.com/category/articles",
              icon: "brand-uber",
              icon_color: "var(--red)",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config);
