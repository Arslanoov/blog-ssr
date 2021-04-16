<template lang="pug">
  .published-trending
    h2.published-trending__title Published Trending
    button.published-trending__see-more See More
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({})
</script>

<style lang="less" scoped>
.published-trending {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.6rem 0;

  border-bottom: .1rem solid #eaeaea;

  &__title {
    color: #0b0f18;
    font-family: Dosis, sans-serif;
    font-size: 40px;
    font-weight: 700;
  }

  /* TODO: Reset styles for button */
  &__see-more {
    border: 0;
    outline: 0;

    background-color: #0b0f18;
    color: #fefefe;

    padding: 1.2rem;

    .pointer-on-hover();
  }
}
</style>
