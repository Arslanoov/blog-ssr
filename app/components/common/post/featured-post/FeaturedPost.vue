<template lang="pug">
  .featured-post
    img(:src=`post.image`, alt="").featured-post__image
    .featured-post__content
      h5.featured-post__title {{ post.title }}
      .featured-post__date {{ post.createdAt }}
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
  }
})
</script>

<style lang="less" scoped>
.featured-post {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .respond(@sizes[tablet-land], {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }, @without-screen);

  &__content {
    color: #0b0f18;
  }

  &__image,
  &__title {
    .pointer-on-hover();
  }

  &__image {
    width: 7rem;
    height: 8.2rem;

    margin-right: 2rem;

    .respond(@sizes[tablet-land], {
      width: 100%;
      height: auto;

      margin-bottom: 2rem;
    }, @without-screen);
  }

  &__title {
    margin-bottom: 1rem;

    font-size: 1.6rem;
    font-weight: 500;
  }

  &__date {
    font-size: 1.3rem;

    text-decoration: underline;

    opacity: .8;
  }
}
</style>
