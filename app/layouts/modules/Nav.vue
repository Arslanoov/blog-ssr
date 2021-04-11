<template lang="pug">
  mixin navItem(title, link)
    li.nav__item
      nuxt-link(to=link).nav__link
        =title

  mixin hamburger(linesCount)
    .hamburger
      - for (let i = 0; i < linesCount; i++)
        .hamburger__line

  nav.nav
    +hamburger(3)

    ul.nav__list
      +navItem("Home", "/")
      +navItem("Posts", "/posts")
      +navItem("About us", "/about")
      +navItem("Contact", "/contact")
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({})
</script>

<style lang="less" scoped>
.nav {
  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;

    list-style: none;

    font-size: 1.6rem;

    .respond(@sizes[tablet], {
      display: none;
    }, @without-screen);
  }

  &__item {
    &:not(:last-of-type) {
      margin-right: 3rem;
    }
  }

  &__link {
    text-transform: uppercase;

    .link();
  }
}

.hamburger {
  display: none;

  .respond(@sizes[tablet], {
    display: block;
  }, @without-screen);

  &__line {
    width: @hamburger-width;
    height: @hamburger-height;

    background-color: @hamburger-color;

    &:not(:first-of-type) {
      margin-top: @hamburger-line-gap;
    }
  }
}
</style>
