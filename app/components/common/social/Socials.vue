<template lang="pug">
  .socials
    .socials__title Social
    .socials__items
      font-awesome-icon(:icon=`["fab", "facebook"]`).socials__item
      font-awesome-icon(:icon=`["fab", "google"]`).socials__item
      font-awesome-icon(:icon=`["fab", "pinterest"]`).socials__item
      font-awesome-icon(:icon=`["fab", "linkedin"]`).socials__item
      font-awesome-icon(:icon=`["fab", "twitter"]`).socials__item
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({})
</script>

<style lang="less" scoped>
.socials {
  &__title {
    margin: 1.5rem 0;

    font-size: @socials-title-font-size;
    font-weight: @socials-title-font-weight;
    text-transform: uppercase;

    color: @socials-title-color;
  }

  &__items {
    display: inline-block;

    padding: .8rem .7rem;

    border-bottom: @socials-border-bottom;
  }

  &__item {
    font-size: @socials-item-font-size;

    color: @socials-item-color;

    &:not(:last-of-type) {
      margin-right: 2rem;
    }

    .pointer-on-hover();
  }
}
</style>
