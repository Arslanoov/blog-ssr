<template lang="pug">
  .container.contact-container
    .contact-container__content
      h2.contact-container__title Contact us
      .contact-container__line
      .contact-container__info.
        Feel free to get in touch if you have any questions, comments, want to say hello, or are interested in working with me
      .contact-container__form.form
        img(src="/images/contact/map.png", alt="").contact-container__map
        .form__overlay
          .form__text Send me a message at:  youremail@gmail.com
          .form__row
            input(type="text", placeholder="Name").form__input
            input(type="email", placeholder="Your email address").form__input
            input(type="text", placeholder="Subject").form__input
          .form__row
            textarea(rows=17).form__textarea
          Button(content="Send now", padding="1.6rem 3.3rem").form__send
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

import Button from "~/components/base/button/Button.vue"

export default defineComponent({
  components: {
    Button
  }
})
</script>

<style lang="less" scoped>
.contact-container {
  margin: 5rem 0;

  &__content {
    grid-column: col-start 1 / col-end 12;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-family: Dosis, sans-serif;
    font-size: 55px;
    font-weight: 700;
  }

  &__line {
    margin: 3rem 0;

    background-color: #ececec;
    width: 45rem;
    height: .1rem;
  }

  &__info {
    position: relative;

    margin-bottom: 2.9rem;

    text-align: center;

    font-size: 25px;
  }

  &__form {
    position: relative;

    width: 100%;

    background-color: #fafafa;
  }

  &__map {
    position: absolute;

    top: 50%;
    left: 50%;

    transform: translateX(-50%) translateY(-50%);
  }
}

.form {
  padding: 7.2rem 15rem;

  &__overlay {
    /* TODO: Fix */
    * {
      z-index: 3;
    }
  }

  &__text,
  &__send {
    position: relative;
  }

  &__text {
    margin-bottom: 3rem;

    font-family: Dosis, sans-serif;
    font-size: 20px;
    font-weight: 700;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 3rem;
  }

  &__send {
    .pointer-on-hover();
  }

  &__input,
  &__textarea {
    flex-grow: 1;

    padding: 1.8rem 1.5rem;

    border: 1px solid #e6e6e6;
    outline: 0;

    &:not(:last-of-type) {
      margin-right: 1.5rem;
    }

    &::placeholder {
      color: #503c57;
    }
  }
}
</style>
