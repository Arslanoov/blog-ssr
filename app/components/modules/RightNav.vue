<template lang="pug">
  nav.right-nav
    template(v-if="isAuth")
      .right-nav__profile
        client-only
          img(v-if="user.photoURL", :src="user.photoURL", alt="").right-nav__profile-img
        .right-nav__profile-name {{ user.displayName }}
    template(v-else)
      nuxt-link(to="/auth/register").right-nav__auth
        .right-nav__auth-name Register
      nuxt-link(to="/auth/login").right-nav__auth
        .right-nav__auth-name Login
      img(src="/images/lock.png", alt="").right-nav__auth-icon
    .right-nav__line
    img(src="/images/search.png", alt="").right-nav__search
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { namespace } from "vuex-class"

import { User } from "~/interfaces/auth/user"

const authModule = namespace("auth")

@Component({})
export default class RightNav extends Vue {
  @authModule.State("user") user!: User | null

  @authModule.Getter("isAuth") isAuth!: boolean
}
</script>

<style lang="less" scoped>
.right-nav {
  &,
  &__auth {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__auth {
    font-size: 1.6rem;

    &-name {
      margin-right: 1rem;
    }

    .link();
  }

  &__profile {
    display: flex;
    align-items: center;

    .pointer-on-hover();

    &-img {
      width: 3rem;
      height: 3rem;

      margin-right: 1rem;
    }

    &-name {
      font-size: 1.3rem;
    }
  }

  &__line {
    align-self: stretch;

    width: 0.1rem;

    margin: 0 1rem;

    background-color: #ddd;
  }

  &__search {
    .pointer-on-hover();
  }
}
</style>
