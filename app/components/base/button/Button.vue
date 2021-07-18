<template lang="pug">
  button.button(@click="onClick", :style=`{
    padding
  }`, type="submit") {{ content }}
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  props: {
    content: {
      type: String,
      required: true,
    },

    padding: {
      type: String,
      required: true,
    },
  },

  setup(_, { emit }) {
    const onClick = (e: Event) => emit("click", e)

    return {
      onClick,
    }
  },
})
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
