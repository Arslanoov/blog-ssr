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

  ignorePatterns: ["server/*", "static/*", "tests/*"],

  rules: {
    quotes: ["error", "double"],
    semi: ["error", "never"],

    "max-lines": ["error", { max: 500, skipBlankLines: true }],

    "vue/no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "warn",
    "@typescript-eslint/no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-alert": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-warning-comments": process.env.NODE_ENV === "production" ? "error" : "off",

    // TODO: Remove new Promise
    "promise/always-return": "off",
    "init-declarations": "off",
    "import/max-dependencies": "off",
    "nuxt/no-cjs-in-config": "off",
    "no-unused-expressions": "off",
    "id-length": "off",
    "no-template-curly-in-string": "off",
    "import/no-mutable-exports": "off",
    "no-shadow": "off",
    "strict-mode/add": "off",
    "putout/putout": "off",
    "unicorn/no-null": "off",
    "unicorn/prefer-module": "off",
    "import/no-commonjs": "off",
    "import/unambiguous": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "func-style": "off",
    "promise/avoid-new": "off",
    "promise/prefer-await-to-then": "off",
    "@typescript-eslint/no-shadow": ["error"],
  },
}
