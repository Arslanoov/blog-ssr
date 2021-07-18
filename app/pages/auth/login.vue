<template lang="pug">
  .container.login-container
    .login-container__content
      // TODO: Replace into layout
      h2.login-container__title Login
      .login-container__line
      .login-container__form.form
        .form__overlay
          .form__title Login
          input(type="text", placeholder="Username").form__input
          input(type="email", placeholder="Email").form__input
          .form__info
            .form__group
              input(type="checkbox").form__checkbox
              .form__remember Remember Me
            nuxt-link(to="/").form__link Lost your password?
          Button(content="LOG IN", padding="1.6rem 4rem").form__auth
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

import Button from "~/components/base/button/Button.vue"

export default defineComponent({
  components: {
    Button,
  },
})
</script>

<style lang="less" scoped>
.login-container {
  margin: 5rem 0;

  &__content {
    grid-column: col-start 1 / col-end 12;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: @auth-content-color;
  }

  &__title {
    font-family: @auth-title-font-family;
    font-size: @auth-title-font-size;
    font-weight: @auth-title-font-weight;
  }

  &__line {
    margin: 3rem 0;

    background-color: @auth-line-background-color;
    width: 40rem;
    height: 0.1rem;

    .respond(@sizes[mobile], {
      width: 100%;
    }, @without-screen);
  }
}

.form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;

  padding: 8rem 7.4rem;

  background-color: @auth-form-background-color;

  .respond(@sizes[tablet], {
    padding: 4rem 3rem;
  }, @without-screen);

  .respond(@sizes[mobile], {
    padding: 1rem;
  }, @without-screen);

  &__overlay {
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 4.8rem 5.5rem;

    background-color: @auth-overlay-background-color;

    .respond(@sizes[tablet-land], {
      width: 100%;
    }, @without-screen);
  }

  &__title {
    margin-bottom: 3rem;

    font-size: @auth-form-title-font-size;
    font-weight: @auth-form-title-font-weight;
  }

  &__input {
    flex-grow: 1;

    width: 100%;

    margin-bottom: 2rem;
    padding: 1.8rem 1.5rem;

    border: @auth-input-border;
    outline: 0;

    &::placeholder {
      font-size: @auth-input-placeholder-font-size;

      color: @auth-input-placeholder-color;
    }
  }

  &__auth {
    margin-bottom: 2.4rem;

    .pointer-on-hover();
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-bottom: 3.5rem;

    font-size: @auth-info-font-size;

    .respond(@sizes[mobile], {
      flex-direction: column;
      align-items: flex-start;
    }, @without-screen);
  }

  &__group {
    display: flex;
    align-items: center;

    .respond(@sizes[mobile], {
      margin-bottom: 0.5rem;
    }, @without-screen);
  }

  &__checkbox {
    margin-right: 1rem;
  }

  &__link {
    color: @auth-link-color;
  }
}
</style>
