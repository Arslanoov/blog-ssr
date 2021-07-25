// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  "home page": (browser) => {
    browser.url(process.env.APP_URL).waitForElementVisible("#__nuxt").assert.elementPresent(".header__image").end()
  },
}
