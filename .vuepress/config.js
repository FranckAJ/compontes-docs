module.exports = {
  dest: 'dist',
  base: '/compontes-docs/',
  title: 'POC Componentes',
  description: 'Guia de referência para uso e desenvolvimento de componentes Front-End',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['meta', { name: 'theme-color', content: '#609' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  serviceWorker: true,
  themeConfig: {
    editLinks: true,
    nav: [
      {
        text: 'Guia',
        link: '/intro/',
      },
      {
        text: 'Componentes',
        link: '/components/',
      },
      {
        text: 'Sobre',
        link: '/about/'
      }
    ],
    sidebar: {
      '/intro/': sidebarIntro('Guia de uso'),
      '/components/': sidebarComponents('Componentes')
    }

  }
}

function sidebarComponents(title) {
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

function sidebarIntro(title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'how'
      ]
    }
  ]
}
