<template lang="pug">
  .published-trending
    .published-trending__info
      h2.published-trending__title Published Trending
      button.published-trending__see-more See More

    PublishedPosts(:posts=`posts`)

    .published-trending__pagination
      .published-trending__page.published-trending__page_active 01
      .published-trending__page 02
      .published-trending__page 03
      .published-trending__page 04
      font-awesome-icon(:icon=`["fas", "arrow-right"]`).published-trending__next
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api"

import PublishedPosts from "~/components/common/post/published-posts/PublishedPosts.vue"

export default defineComponent({
  components: {
    PublishedPosts
  },
  setup() {
    const posts = ref([
      {
        id: 1,
        category: "Travel",
        createdAt: "January 02, 2020",
        title: "What If How We Respond to the Crisis is \n" +
          "Part of the Crisis?",
        short: "Today I’m going to share some of my top tips for booking with\n" +
          "AirBnB. For those of you who may not yet be familiar",
        image: "/images/mock/blog/published-posts/1.jpg",
        author: {
          url: "/images/mock/avatar/2.png",
          name: "Afaty Poprita"
        }
      },
      {
        id: 2,
        category: "Travel",
        createdAt: "January 02, 2020",
        title: "Visual Elements — Basic Things\n" +
          "That Can Be Seen",
        short: "Today I’m going to share some of my top tips for booking with\n" +
          "AirBnB. For those of you who may not yet be familiar",
        image: "/images/mock/blog/published-posts/2.jpg",
        author: {
          url: "/images/mock/avatar/2.png",
          name: "Afaty Poprita"
        }
      },
      {
        id: 3,
        category: "Travel",
        createdAt: "January 02, 2020",
        title: "Visual Elements — Basic Things\n" +
          "That Can Be Seen",
        short: "Today I’m going to share some of my top tips for booking with\n" +
          "AirBnB. For those of you who may not yet be familiar",
        image: "/images/mock/blog/published-posts/2.jpg",
        author: {
          url: "/images/mock/avatar/2.png",
          name: "Afaty Poprita"
        }
      },
      {
        id: 4,
        category: "Travel",
        createdAt: "January 02, 2020",
        title: "Visual Elements — Basic Things\n" +
          "That Can Be Seen",
        short: "Today I’m going to share some of my top tips for booking with\n" +
          "AirBnB. For those of you who may not yet be familiar",
        image: "/images/mock/blog/published-posts/2.jpg",
        author: {
          url: "/images/mock/avatar/2.png",
          name: "Afaty Poprita"
        }
      }
    ])

    return {
      posts
    }
  }
})
</script>

<style lang="less" scoped>
.published-trending {
  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 3.5rem;
    padding: 1.6rem 0;

    border-bottom: .1rem solid #eaeaea;
  }

  &__title {
    color: #0b0f18;
    font-family: Dosis, sans-serif;
    font-size: 4rem;
  }

  /* TODO: Reset styles for button */
  &__see-more {
    flex-shrink: 0;

    border: 0;
    outline: 0;

    background-color: #0b0f18;
    color: #fefefe;

    padding: 1.2rem;

    .pointer-on-hover();
  }

  &__pagination {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.6rem;
  }

  &__page,
  &__next {
    .pointer-on-hover();
  }

  &__page {
    margin-right: 1rem;

    &_active {
      color: #e88484;

      .without-pointer-on-hover();
    }
  }
}
</style>
