let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "London",
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
  keybindings: {
    s: "search-bar",
    q: "config-tab",
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
              url: "https://discuss.whatever.social/",
              icon: "brand-reddit",
              icon_color: "#a6e3a1",
            },
            {
              name: "mastodon",
              url: "https://twiukraine.com/home",
              icon: "brand-mastodon",
              icon_color: "#cba6f7",
            },
            {
              name: "freetube",
              url: "https://youtube.com/",
              icon: "brand-youtube",
              icon_color: "#f38ba8",
            },
            {
              name: "куток",
              url: "https://kutok.io",
              icon: "border-radius",
              icon_color: "#89b4fa",
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
              icon_color: "#a6e3a1",
            },
            {
              name: "animeua",
              url: "https://animeua.club/",
              icon: "player-pause",
              icon_color: "#cba6f7",
            },
            {
              name: "nekoteka",
              url: "https://nekoteka.com/anime",
              icon: "paw",
              icon_color: "#f38ba8",
            },
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: "#89b4fa",
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
              icon_color: "#a6e3a1",
            },
            {
              name: "chatgpt",
              url: "https://chatgpt.com/",
              icon: "brain",
              icon_color: "#cba6f7",
            },
            {
              name: "agnai",
              url: "https://agnai.chat/",
              icon: "robot",
              icon_color: "#f38ba8",
            },
            {
              name: "deepl",
              url: "https://www.deepl.com/translator",
              icon: "language",
              icon_color: "#89b4fa",
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
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: "#a6e3a1",
            },
            {
              name: "neptune",
              url: "https://ui.neptune.ai",
              icon: "circle-triangle",
              icon_color: "#fab387",
            },
            {
              name: "wakatime",
              url: "https://wakatime.com/dashboard",
              icon: "24-hours",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com/volodymyrpivoshenko",
              icon: "brain",
              icon_color: "#a6e3a1",
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: "#fab387",
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: "#f38ba8",
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
              icon_color: "#a6e3a1",
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: "#fab387",
            },
            {
              name: "uber research",
              url: "https://eng.uber.com/category/articles",
              icon: "brand-uber",
              icon_color: "#f38ba8",
            },
            {
              name: "google research",
              url: "https://blog.research.google",
              icon: "hexagon-letter-g",
              icon_color: "#89b4fa",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config);
