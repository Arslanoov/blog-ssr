import Vuex from "vuex"

import { getModule } from "vuex-module-decorators"
import { createLocalVue } from "@vue/test-utils"

import Auth from "~/store/auth"

const Vue = createLocalVue()
Vue.use(Vuex)

const factory = () => {
  const store = new Vuex.Store({
    modules: {
      auth: Auth,
    },
  })

  return getModule(Auth, store)
}

const userStore = factory()

describe("auth store register form", () => {
  it("changes email", () => {
    expect(userStore.registerForm.email).toBe("")
    const email = "somemail@gmail.com"
    userStore.changeRegisterFormEmail(email)
    expect(userStore.registerForm.email).toBe(email)
  })

  it("changes password", () => {
    expect(userStore.registerForm.password).toBe("")
    const password = "111111"
    userStore.changeRegisterFormPassword(password)
    expect(userStore.registerForm.password).toBe(password)
  })

  it("changes confirm password", () => {
    expect(userStore.registerForm.confirmPassword).toBe("")
    const confirmPassword = "111111"
    userStore.changeRegisterFormConfirmPassword(confirmPassword)
    expect(userStore.registerForm.confirmPassword).toBe(confirmPassword)
  })

  it("clears error", () => {
    userStore.setRegisterFormError("some error")
    expect(userStore.registerForm.error).not.toBeNull()
    userStore.clearRegisterError()
    expect(userStore.registerForm.error).toBeNull()
  })

  it("sets error", () => {
    expect(userStore.registerForm.error).toBeNull()
    const error = "some error"
    userStore.setRegisterFormError(error)
    expect(userStore.registerForm.error).toBe(error)
  })
})
