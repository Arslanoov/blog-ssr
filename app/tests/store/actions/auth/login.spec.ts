import Vuex from "vuex"

import { getModule } from "vuex-module-decorators"
import { createLocalVue } from "@vue/test-utils"

import { UserCredential } from "~/interfaces/auth/user"

import * as api from "~/api/v1/auth"
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

jest.spyOn(api, "auth").mockImplementation((email: string, password: string) => Promise.resolve({} as UserCredential))

describe("auth action", () => {
  it("success fetch user", async (done) => {
    await expect(authStore.login()).resolves.toStrictEqual({})

    done()
  })
})
