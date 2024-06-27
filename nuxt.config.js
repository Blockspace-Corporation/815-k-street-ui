const env = require('dotenv').config();
const api_url = env.parsed.API_URL

export default {
  env: env.parsed,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '815 K Street',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'preconnect',  href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect',  href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap'},
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: 'plugins/owl.js', ssr: false}
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
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: api_url,
    credentials: true,
  },

  auth: {
    rewriteRedirects: true,
    fullPathRedirect: true,
    redirect: {
      login: '/login',
      logout: '/login',
      callback: false,
      home: false,
    },
    strategies: {
      local: {
        token: {
          maxAge: 259200,
        },
        endpoints: {
          login: { url: `${api_url}/login`, method: 'post', propertyName: 'token' },
          logout: { url: `${api_url}/logout`, method: 'post' },
          user: { url: `${api_url}/self`, method: 'get', propertyName: false },
        },
        tokenType: 'Bearer',
        user: {
          property: false,
        },
      },
    },
    watchLoggedIn: true,
  },

  router: {
    middleware: [
      'auth',
      // 'maintenance'
    ],
  },

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
          'shadowed-white': '#F9F9F9',
          'stroke-grey': '#E4E4E4',
          'input-default': '#F1F1F1'
        }),
        textColor: {
          'white': '#FFFFFF',
          'primary': '#FFB700',
          'link-hover': '#F4B618',
          'secondary': '#C00A27',
          'danger': '#e3342f',
          'grey': '#3A3A3A',
          'grey-lighter': '#686464'
        },
        extend: {
          height: {
            'almost': '65vh',
          },
          minHeight: {
            'almost': '65vh',
          },
        }
      }
    }
  },

  toast: {
    position: 'top-right',
    duration: 3000,
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  }
}
