export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'restaurant',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect',  href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect',  href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  tailwindcss: {
    config: {
      theme: {
        backgroundColor: theme => ({
          ...theme('colors'),
          'primary': '#FFB700',
          'secondary': '#C00A27',
          'secondary-hover': '#FF0029',
          'tertiary': '#C00A27',
          'danger': '#e3342f',
        }),
        textColor: {
          'white': '#FFFFFF',
          'primary': '#FFB700',
          'link-hover': '#F4B618',
          'secondary': '#C00A27',
          'danger': '#e3342f',
          'grey': '#3A3A3A',
        },
        extend: {
          height: {
            'almost': '65vh',
          },
        }
      }
    }
  }
}
