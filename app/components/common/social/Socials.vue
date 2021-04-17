<template lang="pug">
  .socials
    .socials__title(v-if=`title`) {{ title }}
    .socials__items(:class=`{
      "socials__items_bordered": withBorder
    }`)
      font-awesome-icon(:icon=`["fab", "facebook"]`).socials__item
      font-awesome-icon(:icon=`["fab", "google"]`).socials__item
      font-awesome-icon(:icon=`["fab", "pinterest"]`).socials__item
      font-awesome-icon(:icon=`["fab", "linkedin"]`).socials__item
      font-awesome-icon(:icon=`["fab", "twitter"]`).socials__item
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    withBorder: {
      type: Boolean,
      required: false,
      default: false
    }
  }
})
</script>

<style lang="less" scoped>
.socials {
  &__title {
    margin: 1.5rem 0;

    font-size: @socials-title-font-size;
    font-weight: @socials-title-font-weight;

    color: @socials-title-color;
  }

  &__items {
    display: inline-block;

    padding: .8rem .7rem;

    &_bordered {
      border-bottom: @socials-border-bottom;
    }
  }

  &__item {
    font-size: @socials-item-font-size;

    color: @socials-item-color;

    .pointer-on-hover();

    &:not(:last-of-type) {
      margin-right: 2rem;
    }
  }
}
</style>
