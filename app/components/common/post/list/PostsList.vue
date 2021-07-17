<template lang="pug">
  .posts-list
    .posts-list__item(v-for=`post in posts`, :key=`post.id`, :style=`{
      backgroundImage: "url(" + post.image + ")"
    }`)
      h4.posts-list__title {{ post.title }}
      .posts-list__date {{ post.createdAt }}
      .posts-list__read-more Read More
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api"

export default defineComponent({
  setup() {
    const posts = ref([
      {
        id: 1,
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/posts/3.jpg",
        title: "It's now easier to get between\n" + "the US and Cape Town ",
      },
      {
        id: 2,
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/posts/3.jpg",
        title: "The 12 Best Beaches in Southern\n" + "Vietnam",
      },
    ])

    return {
      posts,
    }
  },
})
</script>

<style lang="less" scoped>
.posts-list {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .respond(@sizes[tablet-land], {
    flex-direction: column;
    justify-content: center;
  }, @without-screen);

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    width: 37rem;
    height: 45rem;

    padding: 4rem 2.5rem;

    .respond(@sizes[tablet-land], {
      width: 100%;
    }, @without-screen);

    &:not(:last-of-type) {
      margin-right: 2rem;

      .respond(@sizes[tablet-land], {
        margin-right: 0;
        margin-bottom: 3rem;
      }, @without-screen);
    }
  }

  &__title {
    font-size: @posts-list-title-font-size;
    font-weight: @posts-list-title-font-weight;

    color: @posts-list-title-color;

    .pointer-on-hover();
  }

  &__date {
    margin-bottom: 2rem;

    color: @posts-list-date-color;

    font-size: @posts-list-date-font-size;

    text-decoration: underline;
  }

  &__read-more {
    color: @posts-list-read-more-color;

    font-size: @posts-list-read-more-font-size;

    text-decoration: underline;

    .pointer-on-hover();
  }
}
</style>
