module.exports = {
    base: '/',
    lang: 'zh-Hant',
    title: '深圳新聞類編',
    description: '考古；文化遺產；非物質文化遺產；國際公約；博物館',
    head: [
      [
        "script",
        {
          "data-ad-client": "ca-pub-8975507583219124",
          async: true,
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        }
      ]
    ],
    plugins: [
      [
        '@vuepress/plugin-google-analytics',
        {
          id: 'G-3BT2HTNJK0',
        },
      ],
      [
        '@vuepress/plugin-search',
        {
          placeholder: '搜索',
        },
      ],
    ],
    themeConfig: {
      darkMode: false,
      lastUpdated: true,
      lastUpdatedText: '更新',
      contributors: true,
      contributorsText: '編輯',
      navbar:[
        {
          text: '總覽',
          children: [
            '',
            '', 
          ],
        },
//        {
//          text: '數據庫',
//          link: '/database/', 
//        },
        {
          text: '簡介',
          link: '/about/', 
        },
    ],
      sidebar: {
    }
  }
}