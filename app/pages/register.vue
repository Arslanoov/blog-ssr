<template lang="pug">
  .container.register-container
    .register-container__content
      h2.register-container__title Register
      .register-container__line
      .register-container__form.form
        .form__overlay
          .form__title Join Us
          base-input(
            @change="changeEmail",
            :value="form.email",
            type="email",
            placeholder="Email"
          ).form__input
          base-input(
            @change="changePassword",
            :value="form.password",
            type="password",
            placeholder="Password"
          ).form__input
          Button(@click="signUp", content="REGISTER", padding="1.6rem 4rem").form__register
          .form__info
            span.form__text Already have an account?
            nuxt-link(to="/login").form__link Login here.
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { namespace } from "vuex-class"

import Button from "~/components/base/button/Button.vue"
import BaseInput from "~/components/base/input/BaseInput.vue"
import { RegisterFormInterface } from "~/interfaces/forms/register"
import AuthStoreModule from "~/store/auth"

const authModule = namespace("auth")

@Component({
  components: {
    Button,
  },
})
export default class Register extends Vue {
  @authModule.State("registerForm") form!: RegisterFormInterface

  @authModule.Mutation("changeRegisterFormEmail") changeEmail!: typeof AuthStoreModule.prototype.changeRegisterFormEmail
  @authModule.Mutation("changeRegisterFormPassword")
  changePassword!: typeof AuthStoreModule.prototype.changeRegisterFormPassword

  @authModule.Action("signUp") signUp!: typeof AuthStoreModule.prototype.signUp
}
</script>

<style lang="less" scoped>
.register-container {
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

  &__register {
    margin-bottom: 2.4rem;

    .pointer-on-hover();
  }

  &__info {
    font-size: @auth-info-font-size;
  }

  &__link {
    color: @auth-input-link-color;

    text-decoration: none;
  }
}
</style>
