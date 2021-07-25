import "~/tests/store/helpers/instance"
import factory from "~/tests/store/factories/auth"
import { User } from "~/interfaces/auth/user"

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

  it("sets error", () => {
    expect(authStore.registerForm.error).toBeNull()
    const error = "some error"
    authStore.setRegisterFormError(error)
    expect(authStore.registerForm.error).toBe(error)
  })

  it("clears error", () => {
    authStore.setRegisterFormError("some error")
    expect(authStore.registerForm.error).not.toBeNull()
    authStore.clearRegisterFormError()
    expect(authStore.registerForm.error).toBeNull()
  })

  it("clears form", () => {
    const email = "somemail@email.com"
    const password = "22222222"
    const confirmPassword = "22222222"
    const error = "some error"
    authStore.changeRegisterFormEmail(email)
    authStore.changeRegisterFormPassword(password)
    authStore.changeRegisterFormConfirmPassword(confirmPassword)
    authStore.setRegisterFormError(error)

    expect(authStore.registerForm).toStrictEqual({
      email,
      password,
      confirmPassword,
      error: error,
    })

    authStore.clearRegisterForm()

    expect(authStore.registerForm).toStrictEqual({
      email: "",
      password: "",
      confirmPassword: "",
      error: null,
    })
  })
})

describe("auth store login form", () => {
  it("changes email", () => {
    expect(authStore.authForm.email).toBe("")
    const email = "somemail1@gmail.com"
    authStore.changeAuthFormEmail(email)
    expect(authStore.authForm.email).toBe(email)
  })

  it("changes password", () => {
    expect(authStore.authForm.password).toBe("")
    const password = "222222"
    authStore.changeAuthFormPassword(password)
    expect(authStore.authForm.password).toBe(password)
  })

  it("sets error", () => {
    expect(authStore.authForm.error).toBeNull()
    const error = "some auth error"
    authStore.setAuthFormError(error)
    expect(authStore.authForm.error).toBe(error)
  })

  it("clears error", () => {
    authStore.setAuthFormError("some error")
    expect(authStore.authForm.error).not.toBeNull()
    authStore.clearAuthFormError()
    expect(authStore.authForm.error).toBeNull()
  })

  it("clears form", () => {
    const email = "somemail1@email.com"
    const password = "333333"
    const error = "some error 2"
    authStore.changeAuthFormEmail(email)
    authStore.changeAuthFormPassword(password)
    authStore.setAuthFormError(error)

    expect(authStore.authForm).toStrictEqual({
      email,
      password,
      error: error,
    })

    authStore.clearAuthForm()

    expect(authStore.authForm).toStrictEqual({
      email: "",
      password: "",
      error: null,
    })
  })
})

describe("auth store user", () => {
  it("sets user", () => {
    expect(authStore.user).toBeNull()
    expect(authStore.isAuth).toBe(false)
    authStore.setUser({} as User)
    expect(authStore.user).toStrictEqual({})
    expect(authStore.isAuth).toBe(true)
  })
})
