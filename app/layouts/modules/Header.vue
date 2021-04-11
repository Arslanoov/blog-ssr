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
  padding: 3.2rem 4.2rem 1.8rem;

  border: 2px solid red;

  .respond(@sizes[desktop-sm], {
    padding: 2rem 2.4rem 1rem;
  }, @without-screen);

  &__container {
    align-items: center;

    border: 2px solid green;
  }

  &__logo {
    grid-column: start / span 1;

    width: 100%;
    min-width: 8rem;
    max-width: 14rem;
    object-fit: cover;

    .respond(@sizes[tablet], {
      grid-column: start / col-start 3;
    }, @without-screen);

    .respond(@sizes[mobile], {
      grid-column: start / col-start 4;
    }, @without-screen);
  }

  &__nav {
    grid-column: col-start 1 / col-start 12;

    display: flex;
    justify-content: center;

    .respond(@sizes[tablet], {
      grid-column: col-start 6 / col-start 7;
    }, @without-screen);
  }

  &__nav-right {
    grid-column: end / span 1;
    justify-self: end;
  }
}
</style>
