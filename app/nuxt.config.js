module.exports = {
  components: true,

  head: {
    title: "Nuxt Blog",

    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],

    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["~/assets/styles/main.less"],

  styleResources: {
    less: ["~/assets/styles/bootstrap.less"],
  },

  plugins: [
    "~/plugins/accessors/firebase",
    {
      src: "~/plugins/validation",
      ssr: false,
    },
  ],

  buildModules: ["@nuxt/typescript-build", "@nuxtjs/style-resources", "@nuxtjs/composition-api", "@nuxtjs/fontawesome"],

  modules: ["@nuxtjs/pwa", "@nuxtjs/firebase", "@nuxtjs/toast"],

  build: {},

  firebase: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      databaseURL: process.env.FIREBASE_PROJECT_ID,
    },

    services: {
      auth: {
        ssr: true,
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

  toast: {
    position: "top-center",
    register: [],
  },

  server: {
    host: "0.0.0.0",
    port: 8086,
  },

  serverMiddleware: [{ path: "/api", handler: "~/server/index.js" }],
}
