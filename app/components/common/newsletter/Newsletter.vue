<template lang="pug">
  .newsletter
    img(src="/images/newsletter/background/1.png", alt="").newsletter__background
    img(src="/images/newsletter/background/2.png", alt="").newsletter__background
    img(src="/images/newsletter/background/3.png", alt="").newsletter__background
    .newsletter__content
      h3.newsletter__title Sign up for our weekly newsletter
      .newsletter__line
      p.newsletter__description Get more travel inspiration, tips and exclusive offers sent straight to your inbox
      input(type="text", placeholder="Your email address").newsletter__input
      button.newsletter__subscribe Subscribe
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({})
</script>

<style lang="less">
.newsletter {
  position: relative;

  background-color: @newsletter-background;
  color: @newsletter-color;

  .respond(@sizes[tablet], {
    text-align: center;
  }, @without-screen);

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 5.7rem;

    .respond(@sizes[tablet], {
      padding: 2rem 3rem;
    }, @without-screen);
  }

  &__background {
    &:first-of-type,
    &:last-of-type {
      z-index: 1;
    }

    &:first-of-type {
      position: absolute;

      top: 0;
      left: 0;
    }

    &:nth-of-type(2) {
      position: absolute;

      bottom: 1rem;
      right: 0;

      z-index: 0;
    }

    &:last-of-type {
      position: absolute;

      right: 0;
      bottom: 0;
    }
  }

  &__content {
    position: relative;

    z-index: 2;
  }

  &__title {
    font-family: Dosis, sans-serif;
    font-size: 2.4rem;
    line-height: 1;
  }

  &__line {
    width: 3.7rem;
    height: .1rem;
    background-color: @newsletter-line-background;
  }

  &__description,
  &__input {
    margin-bottom: 2.7rem;
  }

  &__description {
    font-size: 1.8rem;
    opacity: 0.8;
  }

  &__input {
    width: 80%;
    height: 5rem;

    padding: 2rem 2.6rem;

    /* TODO: Add box shadow */
    border: 0;
    outline: 0;

    background-color: @newsletter-input-background;

    color: @newsletter-input-color;
  }

  &__subscribe {
    padding: 2rem 5rem;

    border: 0;

    font-size: 1.6rem;

    background-color: @newsletter-subscribe-button-background;
    color: @newsletter-subscribe-button-color;

    .pointer-on-hover();
  }
}
</style>
