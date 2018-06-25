module.exports = {
  base: '/',
  host: 'localhost',
  port: 8080,
  title: 'Represent Us San Francisco',
  description: 'fixing congress by outlawing corruption',
  ga: 'UA-77389901-1',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@img': 'assets/img'
      }
    }
  },
  themeConfig: {
    search: false,
    activeHeaderLinks: false,
    nav: [
        { text: 'Home', link: '/' },
        { text: 'Current', link: '/current' },
        { text: 'Past', link: '/past' },
    ]
  },
}
