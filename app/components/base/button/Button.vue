<template lang="pug">
  button.button(@click="onClick", :style=`{
    padding
  }`, type="submit") {{ content }}
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "nuxt-property-decorator"

@Component({})
export default class Button extends Vue {
  @Prop([String]) readonly content!: string
  @Prop([String]) readonly padding!: string

  @Emit("click")
  onClick(e: Event): Event {
    return e
  }
}
</script>

<style lang="less" scoped>
.button {
  border: 0;

  outline: 0;

  font-size: @button-font-size;

  background-color: @button-background-color;
  color: @button-color;

  transition: background-color 0.3s;

  &:hover {
    background-color: @button-background-color-hover;
  }

  .pointer-on-hover();
}
</style>
