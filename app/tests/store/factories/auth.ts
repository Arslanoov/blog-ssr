import Vuex from "vuex"
import { getModule } from "vuex-module-decorators"

import Auth from "~/store/auth"

export default () => {
  const store = new Vuex.Store({
    modules: {
      auth: Auth,
    },
  })

  return getModule(Auth, store)
}
