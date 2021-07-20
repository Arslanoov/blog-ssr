import Vue from "vue"
import Vuex, { ActionTree } from "vuex"
import { config } from "vuex-module-decorators"

import auth from "./auth"

config.rawError = true

Vue.use(Vuex)

const state = () => ({})
type RootState = ReturnType<typeof state>

const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ dispatch }, { res }): Promise<void> {
    if (res && res.locals && res.locals.user) {
      const { allClaims: claims, idToken: token, ...authUser } = res.locals.user

      await dispatch("auth/onAuthStateChanged", {
        authUser,
        claims,
        token,
      })
    }
  },
}

const store = new Vuex.Store({
  state,

  modules: {
    auth,
  },
})

export { actions, store }
