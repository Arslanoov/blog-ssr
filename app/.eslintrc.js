module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended", "plugin:nuxt/recommended"],
  plugins: [],
  rules: {
    quotes: ["error", "double"],
    "no-unused-vars": "warn",
    "vue/no-unused-vars": "warn",
  },
}
