export default {
  head: {
    title: "app",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["@/assets/styles/main.less"],

  plugins: [
    '~/plugins/graphql',
    '~/plugins/orm'
  ],

  components: true,

  buildModules: ["@nuxt/typescript-build", "@nuxtjs/style-resources", "@nuxtjs/composition-api", "@nuxtjs/fontawesome"],

  styleResources: {
    less: ["@/assets/styles/bootstrap.less"],
  },

  modules: ['@nuxtjs/pwa', '@nuxtjs/apollo',],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:4000',
      }
    }
  },

  fontawesome: {
    icons: {
      regular: ["faBookmark"],
      solid: ["faArrowLeft", "faArrowRight", "faShareAlt", "faCaretLeft", "faCaretRight"],
      brands: ["faFacebook", "faGoogle", "faPinterest", "faLinkedin", "faTwitter", "faInstagram"],
    },
  },

  pwa: {
    manifest: {
      lang: "en",
    },
  },

  build: {},

  server: {
    host: "0.0.0.0",
    port: 8086,
  },
}
