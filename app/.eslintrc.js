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
    semi: ["error", "never"],
    "no-unused-vars": "warn",
    // TODO: Check env
    "vue/no-unused-vars": "warn",

    "no-unused-expressions": "off",
    "no-template-curly-in-string": "off",
  },
}
