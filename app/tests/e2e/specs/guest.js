// TODO: Add more cases

module.exports = {
  "home page": (browser) => {
    const home = browser.page.home()

    home
      .navigate()
      .waitForElementVisible("#__nuxt")
      .assert.titleContains("Nuxt Blog")
      .assert.elementPresent("@logo")
      .assert.elementPresent("@nav")
      .expect.elements("@navItem")
      .count.to.equal(4)
  },

  "login page": (browser) => {
    const login = browser.page.login()

    login
      .navigate()
      .waitForElementVisible("#__nuxt")
      .assert.containsText("@bigTitle", "Login")
      .assert.containsText("@title", "Login")
      .assert.elementPresent("@emailInput")
      .assert.elementPresent("@passwordInput")
      .assert.elementPresent("@submitButton")
      .setValue("@emailInput", "somewrongemail@mail.com")
      .setValue("@passwordInput", "111111")
      .click("@submitButton")
      .assert.elementPresent("@errors")
  },

  "sign up page": (browser) => {
    const signUp = browser.page.signUp()

    signUp
      .navigate()
      .waitForElementVisible("#__nuxt")
      .assert.containsText("@bigTitle", "Register")
      .assert.containsText("@title", "Join")
      .assert.elementPresent("@emailInput")
      .assert.elementPresent("@passwordInput")
      .assert.elementPresent("@confirmPasswordInput")
      .assert.elementPresent("@submitButton")
      .setValue("@emailInput", "somewrongemail@mail.com")
      .setValue("@passwordInput", "111111")
      .setValue("@confirmPasswordInput", "222222")
      .click("@submitButton")
      .assert.elementPresent("@errors")
  },

  after: (browser) => {
    browser.end()
  },
}
