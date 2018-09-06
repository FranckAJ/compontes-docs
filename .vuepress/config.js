module.exports = {
  title: 'POC Componentes',
  description: 'Especificação componentes',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    editLinks: true,
    nav: [
      {
        text: 'Components',
        link: '/components/',
      },
      {
        text: 'About',
        link: '/about/'
      }
    ],
    sidebar: {
      '/components/': genSidebarConfig('Guia')
    }

  }
}

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'buttom'
      ]
    }
  ]
}
