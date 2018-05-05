module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'vue-project',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto'},
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {color: '#3B8070'},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend (config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    // node.js module but we specify the pre-processor
    {src: '~assets/sass/foundation/main.scss', lang: 'scss'}
    // { src: 'bulma/bulma.sass', lang: 'sass' }
  ]
  modules: [
    ['nuxt-sass-resources-loader', [
      '@../node_modules/bulma/bulma.sass',
      // '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css',
      // '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
      // '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
      // '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css',
    ]],
  ],
}




