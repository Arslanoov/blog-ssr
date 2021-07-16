<template lang="pug">
  button.button(@click="onClick", :style=`{
    padding
  }`) {{ content }}
</template>

<script lang="ts">
import { defineComponent } from "@nuxt/composition-api"

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

  .pointer-on-hover();
}
</style>
