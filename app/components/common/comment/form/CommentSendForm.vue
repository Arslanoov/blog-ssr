<template lang="pug">
  form.comment-send-form
    h4.comment-send-form__title Leave a Comment
    .comment-send-form__row
      input(type="text", placeholder="Name").comment-send-form__input
      input(type="email", placeholder="Your email address").comment-send-form__input
      input(type="text", placeholder="Subject").comment-send-form__input
    .comment-send-form__row
      textarea(rows=17).comment-send-form__textarea
    Button(content="Post comment", padding="1.7rem 4.3rem").comment-send-form__send
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
.comment-send-form {
  margin: 4rem 0;

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 3rem;

    color: @comment-color;

    .respond(@sizes[tablet], {
      flex-direction: column;
      justify-content: center;

      width: 100%;
    }, @without-screen);
  }

  &__title {
    margin-bottom: 3rem;

    font-family: @comment-form-title-font-family;
    font-size: @comment-form-title-font-size;
    font-weight: @comment-form-title-font-weight;
  }

  &__input,
  &__textarea {
    padding: 1.8rem 1.5rem;

    border: @comment-input-textarea-border;
    outline: 0;

    .respond(@sizes[tablet], {
      width: 100%;
    }, @without-screen);
  }

  &__input {
    flex-basis: 33%;

    &:not(:last-of-type) {
      margin-right: 1.5rem;

      .respond(@sizes[tablet], {
        margin-right: 0;
        margin-bottom: 1.5rem;
      }, @without-screen);
    }
  }

  &__textarea {
    flex-basis: 100%;
  }
}
</style>
