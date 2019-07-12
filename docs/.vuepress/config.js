module.exports = {
  title: 'EMPRESA',
  description: 'Descripción',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Link Externo', link: 'https://www.google.cl/' }
    ],
    sidebar: [
      {
        title: 'Usuario y Amigos',
        path: '/content/auth/user/',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          '/content/auth/user/',
          '/content/auth/friend/',
        ]
      },
      {
        title: 'Invitaciones',
        path: '/content/invitation/email/',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          '/content/invitation/email/',
        ]
      }
    ],
    lastUpdated: 'Última Vez Actualizado', // string | boolean
  }
}