<template lang="pug">
  .tags
    .tags__item(v-for=`tag in tags`, :key=`tag.id`) {{ `#${tag.name}` }}
</template>

<script lang="ts">
import { defineComponent } from "@nuxt/composition-api"

export default defineComponent({
  props: {
    tags: {
      // TODO: Array<TagInterface>
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="less" scoped>
.tags {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  font-size: @tags-font-size;

  color: @tags-color;

  &__item {
    .pointer-on-hover();

    &:not(:last-of-type) {
      margin-right: 0.5rem;
    }
  }
}
</style>
