const moment = require('moment')

module.exports = {
  base: '/',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'SUSTech Open Source Mirrors',
      description: 'In-campus open source mirror site supported by SUSTech Center for Computational Science and Engineering & SUSTech Computer Research Association',
    }
  },

  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [{
          id: 'news',
          dirname: '_news',
          path: '/news/',
          itemPermalink: '/news/:year/:month/:slug.html',
          layout: 'IndexNews',
          itemLayout: 'Layout',
          pagination: {
            lengthPerPage: 9,
            layout: 'IndexNews'
          }
        }]
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "手册内容有更新！",
          buttonText: "刷新"
        },
        generateSWConfig: {
          importWorkboxFrom: 'local'
        }
      },
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          return moment(timestamp).format('YYYY-MM-DD HH:mm')
        }
      }
    ],
    '@vuepress/back-to-top'
  ],

  themeConfig: {
    locales: {
      '/': {
        nav: [{
            text: 'Home',
            link: '/'
          },
          {
            text: 'News',
            link: '/news/'
          },
          {
            text: 'Help',
            link: '/help/'
          },
          {
            text: 'Status',
            link: '/status/'
          },
          {
            text: 'SUSTech CCSE',
            link: 'http://hpc.sustech.edu.cn/'
          },
          {
            text: 'SUSTech CRA',
            link: 'https://blog.sustcra.com/'
          }
        ],
        sidebar: {}
      }
    },
    docsRepo: 'ziqin/ccse-mirrors-web',
    docsDir: 'site',
    editLinks: true,
    editLinkText: 'Edit on GitHub',
    search: false,
    lastUpdated: 'Last Updated',
    logo: '/mirrors-logo.svg',
    serviceWorker: {
      updatePopup: true
    }
  },

  markdown: {
    lineNumbers: false,
    toc: {
      includeLevel: [2, 3, 4]
    }
  }
}
