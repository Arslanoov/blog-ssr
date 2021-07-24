<template lang="pug">
  .container.login-container
    .login-container__content
      h2.login-container__title Login
      .login-container__line
      .login-container__form.form
        form(@submit.prevent="onSubmit").form__overlay
          .form__title Login
          .form__socials
            .form__social(@click="onGoogleAuth")
              img(class="form__social-img", src="/images/auth/login/google.svg", alt="")
            .form__social(@click="onFacebookAuth")
              img(class="form__social-img", src="/images/auth/login/facebook.svg", alt="")
            .form__social(@click="onGithubAuth")
              img(class="form__social-img", src="/images/auth/login/github.svg", alt="")
          base-error(:error="form.error").form__error-base
          validation-observer(ref="validator", tag="div").form__observer
            validation-provider(
              rules="required|min:6|max:32",
              tag="div",
              name="email",
              v-slot="{ errors }"
            ).form__input
              base-input(
                @input="changeEmail",
                :value="form.email",
                type="email",
                autocomplete="email",
                placeholder="Email"
              )
              base-error(:errors="errors").form__error-field
            validation-provider(
              rules="required|min:6|max:32",
              tag="div",
              name="password",
              v-slot="{ errors }"
            ).form__input
              base-input(
                @input="changePassword",
                :value="form.password",
                tag="div",
                type="password",
                autocomplete="password",
                placeholder="Password"
              )
              base-error(:errors="errors").form__error-field
          Button(
            :disabled="isProcessing"
            content="LOG IN",
            padding="1.6rem 4rem"
          ).form__auth
          .form__info
            .form__group
              input(type="checkbox").form__checkbox
              .form__remember Remember Me
            nuxt-link(to="/").form__link Lost your password?
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { namespace } from "vuex-class"
import { ValidationProvider, ValidationObserver } from "vee-validate"

import { AuthFormInterface } from "~/interfaces/forms/register"
import AuthStoreModule from "~/store/auth"
import Button from "~/components/base/button/Button.vue"
import BaseInput from "~/components/base/input/BaseInput.vue"
import BaseError from "~/components/base/error/BaseError.vue"

const authModule = namespace("auth")

@Component({
  components: {
    ValidationProvider,
    ValidationObserver,
    Button,
    BaseInput,
    BaseError,
  },
})
export default class Login extends Vue {
  @authModule.State("authForm") form!: AuthFormInterface

  @authModule.Mutation("changeAuthFormEmail") changeEmail!: typeof AuthStoreModule.prototype.changeAuthFormEmail
  @authModule.Mutation("changeAuthFormPassword")
  changePassword!: typeof AuthStoreModule.prototype.changeAuthFormPassword

  @authModule.Action("login") login!: typeof AuthStoreModule.prototype.login
  @authModule.Action("loginGoogle") loginGoogle!: typeof AuthStoreModule.prototype.loginGoogle
  @authModule.Action("loginFacebook") loginFacebook!: typeof AuthStoreModule.prototype.loginFacebook
  @authModule.Action("loginGithub") loginGithub!: typeof AuthStoreModule.prototype.loginGithub

  public $refs!: {
    validator: any
  }

  public isFormValid = false
  public isProcessing = false

  public onGithubAuth(): void {
    this.loginGithub().then(() => {
      this.$router.push("/")
    })
  }

  public onFacebookAuth(): void {
    this.loginFacebook().then(() => {
      this.$router.push("/")
    })
  }

  public onGoogleAuth(): void {
    this.loginGoogle().then(() => {
      this.$router.push("/")
    })
  }

  public onSubmit(): void {
    this.$refs.validator.validate()
    if (this.$refs.validator.flags.valid) {
      this.isProcessing = true
      this.login()
        .then(() => {
          this.$router.push("/")
        })
        .finally(() => {
          this.isProcessing = false
        })
    }
  }
}
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

  background: url("/images/auth/login/overlay.jpg") no-repeat @auth-form-background-color;
  background-size: cover;

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

  &__observer,
  &__input {
    width: 100%;
  }

  &__input {
    margin-bottom: 2rem;
  }

  &__title {
    margin-bottom: 2.5rem;

    font-size: @auth-form-title-font-size;
    font-weight: @auth-form-title-font-weight;
  }

  &__socials {
    display: flex;
    align-items: center;

    margin: 1.5rem 0;
  }

  &__social {
    &:not(:last-of-type) {
      margin-right: 1rem;
    }

    &-img {
      width: 2.7rem;
      height: 2.7rem;
    }
  }

  &__auth,
  &__social {
    .pointer-on-hover();
  }

  &__auth {
    margin-bottom: 2.4rem;
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
