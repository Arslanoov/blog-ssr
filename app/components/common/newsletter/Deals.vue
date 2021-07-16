<template lang="pug">
  .deals
    .deals__title Get travel deals and news right to your inbox
    .deals__form
      input(type="text", placeholder="Your email address").deals__input
      Button(content="Submit", padding="1.6rem 5.8rem")
</template>

<script lang="ts">
import { defineComponent } from "@nuxt/composition-api"

import Button from "~/components/base/button/Button.vue"

export default defineComponent({
  components: {
    Button,
  },
})
</script>

<style lang="less" scoped>
.deals {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 5rem 4rem;

  background-color: @deals-background-color;

  &__title {
    margin-bottom: 4.5rem;

    font-family: @deals-title-font-family;
    font-size: @deals-title-font-size;
    font-weight: @deals-title-font-weight;

    color: @deals-title-color;
  }

  &__form {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    .respond(@sizes[tablet-land], {
      flex-direction: column;
      justify-content: center;
    }, @without-screen);
  }

  &__input {
    border: 0;
    outline: 0;

    width: 37rem;

    margin-right: 1rem;
    padding: 1.7rem 1.5rem;

    background-color: @deals-input-background-color;

    .respond(@sizes[tablet-land], {
      width: 100%;

      margin-right: 0;
      margin-bottom: 1.5rem;
    }, @without-screen);

    &::placeholder {
      color: @deals-input-color;
    }
  }
}
</style>
