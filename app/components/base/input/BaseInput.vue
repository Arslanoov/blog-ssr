<template lang="pug">
  .input
    input(
      v-bind="$attrs",
      v-bind:value="value",
      v-on:input="$emit('input', $event.target.value)",
      v-on:change="$emit('change', $event.target.value)"
    ).input__item
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"

@Component({
  inheritAttrs: false,
})
export default class BaseInput extends Vue {
  @Prop([String, Number]) readonly value!: string | number | undefined
}
</script>

<style lang="less" scoped>
.input {
  &__item {
    flex-grow: 1;

    width: 100%;

    padding: 1.8rem 1.5rem;

    border: @auth-input-border;
    outline: 0;

    &::placeholder {
      font-size: @auth-input-placeholder-font-size;

      color: @auth-input-placeholder-color;
    }
  }
}
</style>
