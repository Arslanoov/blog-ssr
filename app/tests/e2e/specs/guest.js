module.exports = {
  "home page": (browser) => {
    const home = browser.page.homepage()

    home
      .navigate()
      .waitForElementVisible("#__nuxt")
      .assert.titleContains("Nuxt Blog")
      .assert.elementPresent("@logo")
      .assert.elementPresent("@nav")
      .expect.elements("@navItem")
      .count.to.equal(4)
  },

  after: (browser) => {
    browser.end()
  },
}
