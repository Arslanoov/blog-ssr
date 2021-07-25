<template lang="pug">
  .errors
    .errors__item(v-if="error") {{ error }}
    .errors__items(v-if="errors.length > 0")
      .errors__item(v-for="text in errors") {{ text }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"

@Component({})
export default class BaseError extends Vue {
  @Prop([String]) readonly error!: string | undefined
  @Prop({ type: Array, default: () => [] }) readonly errors!: string[]
}
</script>

<style lang="less" scoped>
.errors {
  font-size: @error-font-size;
  color: @base-error-color;
}
</style>
