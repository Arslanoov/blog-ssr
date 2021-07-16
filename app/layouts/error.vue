<template lang="pug">
  .error
    h2.error__code {{ error.statusCode }}
    nuxt-link(to="/").error__link Home page
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="less" scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 5rem 0;

  &,
  &__link {
    color: @error-color;
  }

  &__code {
    font-size: @error-code-font-size;
    font-family: @error-code-font-family;
    font-weight: @error-code-font-weight;
  }

  &__link {
    font-size: @error-link-font-size;

    text-decoration: none;
  }
}
</style>
