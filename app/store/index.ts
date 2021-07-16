import Vue from "vue"
import Vuex from "vuex"

import { config } from "vuex-module-decorators"
import auth from "./auth"

config.rawError = true

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {},
  modules: {
    auth,
  },
})
