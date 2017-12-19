module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'hackernuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { src: '/jquery-3.2.1.min.js' },
      { src: '/semantic-ui/semantic.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/semantic-ui/semantic.min.css' }
      
    ]
  },

  css: [
    '~/assets/main.css'
  ],

  build: {
  }

}
