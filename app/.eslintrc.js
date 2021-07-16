module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
    "hardcore",
  ],

  plugins: [],

  rules: {
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "vue/no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "warn",
    "@typescript-eslint/no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-unused-vars": "off",
    "no-unused-expressions": "off",
    "no-template-curly-in-string": "off",
    "import/no-mutable-exports": "off",
    "no-shadow": "off",
    "strict-mode/add": "off",
    "putout/putout": "off",
    "unicorn/prefer-module": "off",
    "import/no-commonjs": "off",
    "import/unambiguous": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-shadow": ["error"],
  },
}
