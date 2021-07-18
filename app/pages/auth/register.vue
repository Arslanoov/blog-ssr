<template lang="pug">
  .container.register-container
    .register-container__content
      h2.register-container__title Register
      .register-container__line
      .register-container__form.form
        form(@submit.prevent="onSubmit").form__overlay
          .form__title Join
          base-error(:error="form.error").form__error-base
          validation-observer(ref="validator").form__observer
            validation-provider(
              rules="required|email",
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
              rules="required|min:6|max:32|confirmed:password confirm",
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
            validation-provider(
              rules="required|min:6|max:32",
              tag="div",
              name="password confirm",
              v-slot="{ errors }"
            ).form__input
              base-input(
                @input="changeConfirmPassword",
                :value="form.confirmPassword",
                tag="div",
                type="password",
                autocomplete="confirm_password",
                placeholder="Confirm Password"
              )
              base-error(:errors="errors").form__error-field
          Button(
            :disabled="isProcessing"
            content="REGISTER",
            padding="1.6rem 4rem"
          ).form__register
          .form__info
            .form__text Already have an account?
            nuxt-link(to="/auth/login").form__link Login here.
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { namespace } from "vuex-class"
import { ValidationProvider, ValidationObserver } from "vee-validate"

import { RegisterFormInterface } from "~/interfaces/forms/register"
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
export default class Register extends Vue {
  @authModule.State("registerForm") form!: RegisterFormInterface

  @authModule.Mutation("changeRegisterFormEmail") changeEmail!: typeof AuthStoreModule.prototype.changeRegisterFormEmail
  @authModule.Mutation("changeRegisterFormPassword")
  changePassword!: typeof AuthStoreModule.prototype.changeRegisterFormPassword

  @authModule.Mutation("changeRegisterFormConfirmPassword")
  changeConfirmPassword!: typeof AuthStoreModule.prototype.changeRegisterFormConfirmPassword

  @authModule.Action("signUp") signUp!: typeof AuthStoreModule.prototype.signUp

  public $refs!: {
    validator: any
  }

  public isFormValid = false
  public isProcessing = false

  public onSubmit(): void {
    this.$refs.validator.validate()
    if (this.$refs.validator.flags.valid) {
      this.isProcessing = true
      this.signUp()
        .then(() => {
          this.$router.push("/")
          this.$toast.success("Check your email to finish registration")
        })
        .finally(() => {
          this.isProcessing = false
        })
    }
  }
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

  background: url("/images/auth/register/overlay.jpg") no-repeat @auth-form-background-color;
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

  &__title {
    margin-bottom: 3rem;

    font-size: @auth-form-title-font-size;
    font-weight: @auth-form-title-font-weight;
  }

  &__error {
    &-base {
      margin-bottom: 0.5rem;
    }

    &-field {
      margin-top: 0.5rem;
    }
  }

  &__observer,
  &__input {
    width: 100%;
  }

  &__input {
    margin-bottom: 2rem;
  }

  &__register {
    margin-bottom: 2.4rem;

    .pointer-on-hover();
  }

  &__info {
    display: flex;
    align-items: center;

    font-size: @auth-info-font-size;
  }

  &__text {
    margin-right: 0.5rem;
  }

  &__link {
    color: @auth-input-link-color;

    text-decoration: none;
  }
}
</style>
