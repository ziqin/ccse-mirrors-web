module.exports = {
  base: '/',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'CCSE Open Source Mirrors',
      description: 'In-campus open source mirror site supported by SUSTech Center for Computational Science and Engineering',
    }
  },
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'News', link: '/news/' },
      { text: 'Help', link: '/help/' },
      { text: 'Status', link: '/status' },
      { text: 'SUSTech CCSE', link: 'http://hpc.sustech.edu.cn/' }
    ],
    sidebar: {
      '/help/': [
        ''
      ]
    },
    search: false,
    lastUpdated: 'Last Updated',
    serviceWorker: {
      updatePopup: true
    }
  },
  
  markdown: {
    lineNumbers: false,
    toc: {
      includeLevel: [2, 3]
    }
  }
}