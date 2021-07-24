import { Context, Middleware } from "@nuxt/types"

const noAuth: Middleware = ({ store, redirect }: Context) => {
  if (store.getters["auth/isAuth"]) {
    redirect("/")
  }
}

export default noAuth
