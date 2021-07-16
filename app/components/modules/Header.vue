<template lang="pug">
  header.header
    .container.header__container
      nuxt-link(to="/").header__logo
       img(src="/images/logo.png", alt="").header__image
      Nav().header__nav
      RightNav().header__nav-right
</template>

<script lang="ts">
import Vue from "vue"
import Nav from "@/components/modules/Nav.vue"
import RightNav from "@/components/modules/RightNav.vue"

export default Vue.extend({
  components: {
    Nav,
    RightNav,
  },
})
</script>

<style lang="less" scoped>
.header {
  padding: 3.2rem 4.2rem 1.8rem;

  border-bottom: @header-border-bottom;

  .respond(@sizes[desktop-sm], {
    padding: 2rem 2.4rem 1rem;
  }, @without-screen);

  &__container {
    align-items: center;
  }

  &__logo {
    grid-column: start / span 1;

    .pointer-on-hover();

    .respond(@sizes[tablet], {
      grid-column: start / col-start 3;
    }, @without-screen);

    .respond(@sizes[mobile], {
      grid-column: start / col-start 4;
    }, @without-screen);
  }

  &__image {
    width: 100%;
    min-width: 8rem;
    max-width: 14rem;
    object-fit: cover;
  }

  &__nav {
    grid-column: col-start 1 / col-start 12;

    display: flex;
    justify-content: center;

    .respond(@sizes[tablet], {
      grid-column: col-start 6 / col-start 8;
    }, @without-screen);
  }

  &__nav-right {
    grid-column: end / span 1;
    justify-self: end;
  }
}
</style>
