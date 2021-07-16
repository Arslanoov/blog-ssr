<template lang="pug">
  .comments-list
    h3.comments-list__title {{ items.length }} Comments on this
    .comments-list__items
      CommentSingle(v-for=`comment in items`, :item=`comment`, :key=`comment.id`).comments-list__item
</template>

<script lang="ts">
import { defineComponent } from "@nuxt/composition-api"

import CommentSingle from "~/components/common/comment/single/CommentSingle.vue"

export default defineComponent({
  components: {
    CommentSingle,
  },

  props: {
    items: {
      // TODO: Array<CommentInterface>
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="less" scoped>
.comments-list {
  &__title {
    margin: 3rem 0;

    font-size: @comments-list-font-size;
    font-weight: @comments-list-font-weight;

    color: @comments-list-title-color;
  }
}
</style>
