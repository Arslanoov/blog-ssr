<template lang="pug">
  .post-rollup
    .post-rollup__content
      h5.post-rollup__name.post-rollup__item {{ post.title }}
      p.post-rollup__short.post-rollup__item {{ post.short }}
      .post-rollup__date.post-rollup__item {{ post.createdAt }}
      font-awesome-icon(:icon=`["far", "bookmark"]`).post-rollup__bookmark
    img(:src=`post.image`, alt="").post-rollup__image
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

import { PostInterface } from "~/interfaces/post"

export default defineComponent({
  props: {
    post: {
      type: Object as () => PostInterface,
      required: true
    }
  },
  computed: {
  }
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
  }

  &__item {
    margin-bottom: 1rem;
  }

  &__name {
    color: #0b0f18;
    font-size: 1.6rem;
    font-weight: 500;

    .pointer-on-hover();
  }

  &__short {
    opacity: 0.8;
    color: #0b0f18;
    font-size: 14px;
  }

  &__date {
    color: #e68c8c;
    font-size: 13px;

    text-decoration: underline;
  }

  &__bookmark {
    align-self: flex-end;

    margin-top: -3rem;

    color: #0b0f18;
    font-size: 16px;

    .pointer-on-hover();
  }

  &__image {
    .pointer-on-hover();
  }
}
</style>
