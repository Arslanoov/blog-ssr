import { Context } from "@nuxt/types"

import VuexORM from "@vuex-orm/core"
import orm from "~/orm"

export default ({ store }: Context) => {
  VuexORM.install(orm)(store)
}
