<template lang="pug">
  .featured-posts
    h4.featured-posts__title Featured Post
    .featured-posts__items
      FeaturedPost(v-for=`post in posts`, :key=`post.id`, :post=`post`).featured-posts__item
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxt/composition-api"

import FeaturedPost from "~/components/common/post/featured-post/FeaturedPost.vue"

export default defineComponent({
  components: {
    FeaturedPost,
  },
  setup() {
    const posts = ref([
      {
        id: 1,
        createdAt: "January 02, 2020",
        title: "Cape Breton was the \n" + "second stop of our road",
        image: "/images/mock/blog/featured-posts/1.jpg",
      },
      {
        id: 2,
        createdAt: "January 02, 2020",
        title: "How to Apply \n" + "Maximalist Design ",
        image: "/images/mock/blog/featured-posts/1.jpg",
      },
      {
        id: 3,
        createdAt: "January 02, 2020",
        title: "Augmented Reality vs \n" + "Virtual Reality Games",
        image: "/images/mock/blog/featured-posts/1.jpg",
      },
      {
        id: 4,
        createdAt: "January 02, 2020",
        title: "Best virtual reality apps\n" + "for 2019",
        image: "/images/mock/blog/featured-posts/1.jpg",
      },
    ])

    return {
      posts,
    }
  },
})
</script>

<style lang="less" scoped>
.featured-posts {
  &__title {
    margin-bottom: 2.3rem;

    font-size: @featured-posts-title-font-size;
    font-weight: @featured-posts-title-font-weight;

    color: @featured-posts-title-color;
  }

  &__items {
    display: flex;
    flex-direction: column;
  }

  &__item {
    margin-bottom: 2rem;

    .respond(@sizes[tablet-land], {
      margin-bottom: 4rem;
    }, @without-screen);
  }
}
</style>
