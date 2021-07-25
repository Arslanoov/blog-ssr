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

const authStore = factory()

describe("auth store register form", () => {
  it("changes email", () => {
    expect(authStore.registerForm.email).toBe("")
    const email = "somemail@gmail.com"
    authStore.changeRegisterFormEmail(email)
    expect(authStore.registerForm.email).toBe(email)
  })

  it("changes password", () => {
    expect(authStore.registerForm.password).toBe("")
    const password = "111111"
    authStore.changeRegisterFormPassword(password)
    expect(authStore.registerForm.password).toBe(password)
  })

  it("changes confirm password", () => {
    expect(authStore.registerForm.confirmPassword).toBe("")
    const confirmPassword = "111111"
    authStore.changeRegisterFormConfirmPassword(confirmPassword)
    expect(authStore.registerForm.confirmPassword).toBe(confirmPassword)
  })

  it("clears error", () => {
    authStore.setRegisterFormError("some error")
    expect(authStore.registerForm.error).not.toBeNull()
    authStore.clearRegisterError()
    expect(authStore.registerForm.error).toBeNull()
  })

  it("sets error", () => {
    expect(authStore.registerForm.error).toBeNull()
    const error = "some error"
    authStore.setRegisterFormError(error)
    expect(authStore.registerForm.error).toBe(error)
  })
})
