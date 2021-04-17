<template lang="pug">
  button.button(:style=`{
    padding
  }`) {{ content }}
</template>

<script>
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    content: {
      type: String,
      required: true
    },
    padding: {
      type: String,
      required: true
    }
  }
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
