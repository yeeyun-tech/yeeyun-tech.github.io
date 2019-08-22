module.exports = {
    title: '弋云科技',
    description: '弋云科技公司规范流程',
    base: '/',
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'path/to/some/dir'
            }
        }
    },
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        nav: [
            { text: '首页', link: ' / ' },
            { text: '财务', link: '/guide/' }
        ],
        sidebar: {},
        sidebarDepth: 2,
        displayAllHeaders: true, // 默认值：false
        lastUpdated: 'Last Updated', // string | boolean
        serviceWorker: {
            updatePopup: true
        }
    },
}