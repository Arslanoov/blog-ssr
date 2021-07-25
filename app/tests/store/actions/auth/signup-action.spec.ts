import "~/tests/store/helpers/instance"
import factory from "~/tests/store/factories/auth"

import { User, UserCredential } from "~/interfaces/auth/user"

import * as api from "~/api/v1/auth"
import ApiError from "~/errors/api"

const authStore = factory()

describe("sign-up action", () => {
  it("success sign up user", async (done) => {
    const user = {
      sendEmailVerification: jest.fn(),
    } as unknown as User

    jest.spyOn(api, "signUp").mockImplementation(() =>
      Promise.resolve({
        user: {},
      } as UserCredential)
    )
    jest.spyOn(api, "getCurrentUser").mockImplementation(() => user)

    authStore.setRegisterFormError("error")
    expect(authStore.registerForm.error).not.toBe(null)

    await expect(authStore.signUp()).resolves.toMatchObject({
      user: {},
    })

    expect(authStore.registerForm.error).toBe(null)

    expect(user.sendEmailVerification).toHaveBeenCalled()

    done()
  })

  it("with errors", async (done) => {
    const rawError = "firebase: Something went wrong with sign up"
    const error = "Something went wrong with sign up"
    jest.spyOn(api, "signUp").mockImplementation(() => Promise.reject(new ApiError(rawError)))

    authStore.clearRegisterFormError()
    expect(authStore.registerForm.error).toBe(null)

    await expect(authStore.signUp()).rejects.toBeInstanceOf(ApiError)

    expect(authStore.registerForm.error).toBe(error)

    done()
  })
})
