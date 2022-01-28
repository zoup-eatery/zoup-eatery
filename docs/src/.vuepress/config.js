const { description } = require('../../package');
const getConfig = require('vuepress-bar');
let { sidebar } = getConfig({ addReadMeToFirstGroup: false, maxLevel: 3 });
module.exports = {
  dest: 'public',
  port: 5000,
  title: 'Zoup! Eatery Tech Documentation',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Documentation',
        link: '/guide'
      },
      {
        text: 'Github',
        link: 'https://www.github.com/zoup-eatery/zoup-eatery',
        external: true
      },
    ],
    sidebar: sidebar,
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/last-updated'
  ]
}
