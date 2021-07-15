export default {
  components: true,

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

  styleResources: {
    less: ["@/assets/styles/bootstrap.less"],
  },

  plugins: ["~/plugins/graphql", "~/plugins/orm"],

  buildModules: ["@nuxt/typescript-build", "@nuxtjs/style-resources", "@nuxtjs/composition-api", "@nuxtjs/fontawesome"],

  modules: ["@nuxtjs/pwa", "@nuxtjs/apollo"],

  build: {},

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "http://localhost:8081/graphql",
      },
    },
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

  server: {
    host: "0.0.0.0",
    port: 8086,
  },

  serverMiddleware: [{ path: "/api", handler: "~/api/index.js" }],
}
