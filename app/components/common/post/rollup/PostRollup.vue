<template lang="pug">
  .post-rollup(v-if=`inverted`)
    img(:src=`post.image`, alt="").post-rollup__image
    .post-rollup__content.inverted
      h5.post-rollup__name.post-rollup__item {{ post.title }} {{ inverted ? "true" : "false" }}
      p.post-rollup__short.post-rollup__item {{ post.short }}
      .post-rollup__date.post-rollup__item {{ post.createdAt }}
      font-awesome-icon(:icon=`["far", "bookmark"]`).post-rollup__bookmark
  .post-rollup(v-else)
    .post-rollup__content
      h5.post-rollup__name.post-rollup__item {{ post.title }}  {{ inverted ? "true" : "false" }}
      p.post-rollup__short.post-rollup__item {{ post.short }}
      .post-rollup__date.post-rollup__item {{ post.createdAt }}
      font-awesome-icon(:icon=`["far", "bookmark"]`).post-rollup__bookmark
    img(:src=`post.image`, alt="").post-rollup__image
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

import { PostInterface } from "~/interfaces/post"

export default defineComponent({
  props: {
    post: {
      type: Object as () => PostInterface,
      required: true,
    },

    inverted: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
})
</script>

<style lang="less" scoped>
.post-rollup {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__content {
    display: flex;
    flex-direction: column;

    margin-right: 2rem;

    &.inverted {
      margin-right: 0;
      margin-left: 2rem;
    }
  }

  &__item {
    margin-bottom: 1rem;
  }

  &__name,
  &__bookmark,
  &__image {
    .pointer-on-hover();
  }

  &__name {
    font-size: @post-rollup-name-font-size;
    font-weight: @post-rollup-name-font-weight;

    color: @post-rollup-name-color;
  }

  &__short {
    opacity: @post-rollup-short-opacity;

    font-size: @post-rollup-short-font-size;

    color: @post-rollup-short-color;
  }

  &__date {
    color: @post-rollup-date-color;

    font-size: @post-rollup-date-font-size;

    text-decoration: underline;
  }

  &__bookmark {
    align-self: flex-end;

    margin-top: -3rem;

    color: @post-rollup-bookmark-color;

    font-size: @post-rollup-bookmark-font-size;
  }
}
</style>
