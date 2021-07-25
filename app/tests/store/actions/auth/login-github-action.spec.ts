import "~/tests/store/helpers/instance"
import factory from "~/tests/store/factories/auth"

import { UserCredential } from "~/interfaces/auth/user"

import * as api from "~/api/v1/auth"
import ApiError from "~/errors/api"

const authStore = factory()

describe("github auth action", () => {
  it("success login user", async (done) => {
    jest.spyOn(api, "authGithub").mockImplementation(() =>
      Promise.resolve({
        user: {},
      } as UserCredential)
    )

    authStore.setAuthFormError("error")
    expect(authStore.authForm.error).not.toBe(null)

    await expect(authStore.loginGithub()).resolves.toMatchObject({
      user: {},
    })

    expect(authStore.authForm.error).toBe(null)

    done()
  })

  it("with errors", async (done) => {
    const rawError = "firebase: Something went wrong"
    const error = "Something went wrong"
    jest.spyOn(api, "authGithub").mockImplementation(() => Promise.reject(new ApiError(rawError)))

    authStore.clearAuthFormError()
    expect(authStore.authForm.error).toBe(null)

    await expect(authStore.loginGithub()).rejects.toBeInstanceOf(ApiError)

    expect(authStore.authForm.error).toBe(error)

    done()
  })
})
