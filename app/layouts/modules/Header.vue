<template lang="pug">
  header.header
    .container.header__container
      img(src="/images/logo.png", alt="").header__logo
      nav.header__nav.
        Nav
      nav.header__nav-right.
        Right nav
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({})
</script>

<style lang="less" scoped>
.header {
  padding: 3.2rem 4.2rem 1.8rem 4.2rem;

  border: 2px solid red;

  &__container {
    align-items: center;

    border: 2px solid green;
  }

  &__logo {
    grid-column: start / span 1;

    width: 100%;
    max-width: 14rem;
    object-fit: cover;

    border: 2px solid orange;
  }

  &__nav {
    grid-column: col-start 1 / col-start 12;

    display: flex;
    justify-content: center;

    border: 2px solid orangered;
  }

  &__right-nav {
    grid-column: end / span 1;
    align-self: end;

    border: 2px solid black;
  }
}
</style>
