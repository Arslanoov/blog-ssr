<template lang="pug">
  nav.right-nav
    nuxt-link(to="/auth/register").right-nav__auth
      .right-nav__auth-name Register
    nuxt-link(to="/auth/login").right-nav__auth
      .right-nav__auth-name Login
      img(src="/images/lock.png", alt="").right-nav__auth-icon
    .right-nav__line
    img(src="/images/search.png", alt="").right-nav__search
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({})
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
