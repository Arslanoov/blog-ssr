<template lang="pug">
  .container.articles-container
    .articles-container__left
      Article(v-for=`article in articles`, :key=`article.id`, :article=`article`).articles-container__item
    .articles-container__right
      Sidebar()
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxt/composition-api"

import Sidebar from "~/components/common/sections/sidebar/Sidebar.vue"
import Article from "~/components/common/post/article/Article.vue"

export default defineComponent({
  components: {
    Article,
    Sidebar,
  },

  setup() {
    const articles = ref([
      {
        id: 1,
        category: "Travel",
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/article/1.jpg",

        author: {
          url: "/images/mock/blog/avatar.png",
          name: "Masum Rana",
        },

        title: "Ultimate Europe Travel Bucket List for This Summer",

        short:
          "Europe may be famous for its history, monuments and sightseeing," +
          " but summer is for enjoying the outdoors. For hiking, cycling, swimming, " +
          "splashing around in the water and exploring your limits. ",
      },
      {
        id: 2,
        category: "Travel",
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/article/1.jpg",

        author: {
          url: "/images/mock/blog/avatar.png",
          name: "Masum Rana",
        },

        title: "Ultimate Europe Travel Bucket List for This Summer",

        short:
          "Europe may be famous for its history, monuments and sightseeing," +
          " but summer is for enjoying the outdoors. For hiking, cycling, swimming, " +
          "splashing around in the water and exploring your limits. ",
      },
      {
        id: 3,
        category: "Travel",
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/article/1.jpg",

        author: {
          url: "/images/mock/blog/avatar.png",
          name: "Masum Rana",
        },

        title: "3 Things You Should Know about \n" + "Social Media Marketing for Creatives",

        short:
          "Europe may be famous for its history, monuments and sightseeing," +
          " but summer is for enjoying the outdoors. For hiking, cycling, swimming, " +
          "splashing around in the water and exploring your limits. ",
      },
      {
        id: 4,
        category: "Travel",
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/article/1.jpg",

        author: {
          url: "/images/mock/blog/avatar.png",
          name: "Masum Rana",
        },

        title: "How to Apply Maximalist Design \n" + "to a Small Living Space",

        short:
          "Europe may be famous for its history, monuments and sightseeing," +
          " but summer is for enjoying the outdoors. For hiking, cycling, swimming, " +
          "splashing around in the water and exploring your limits. ",
      },
      {
        id: 5,
        category: "Travel",
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/article/1.jpg",

        author: {
          url: "/images/mock/blog/avatar.png",
          name: "Masum Rana",
        },

        title: "How to Apply Maximalist Design \n" + "to a Small Living Space",

        short:
          "Europe may be famous for its history, monuments and sightseeing," +
          " but summer is for enjoying the outdoors. For hiking, cycling, swimming, " +
          "splashing around in the water and exploring your limits. ",
      },
      {
        id: 6,
        category: "Travel",
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/article/1.jpg",

        author: {
          url: "/images/mock/blog/avatar.png",
          name: "Masum Rana",
        },

        title: "The best Vietnam islands to visit\n" + "Vietnam’s popularity ",

        short:
          "Europe may be famous for its history, monuments and sightseeing," +
          " but summer is for enjoying the outdoors. For hiking, cycling, swimming, " +
          "splashing around in the water and exploring your limits. ",
      },
      {
        id: 7,
        category: "Travel",
        createdAt: "January 02, 2020",

        author: {
          url: "/images/mock/blog/avatar.png",
          name: "Masum Rana",
        },

        title: "Kim Kardashian West's Hairstylist Told Us How to Stop \n" + "Breakage Once and for All",

        short:
          "Europe may be famous for its history, monuments and sightseeing," +
          " but summer is for enjoying the outdoors. For hiking, cycling, swimming, " +
          "splashing around in the water and exploring your limits. ",
      },
      {
        id: 8,
        category: "Travel",
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/article/1.jpg",

        author: {
          url: "/images/mock/blog/avatar.png",
          name: "Masum Rana",
        },

        title: "10 Beauty Bloggers Who Leveled\n" + "Up in 2019",

        short:
          "Europe may be famous for its history, monuments and sightseeing," +
          " but summer is for enjoying the outdoors. For hiking, cycling, swimming, " +
          "splashing around in the water and exploring your limits. ",
      },
    ])

    return {
      articles,
    }
  },
})
</script>

<style lang="less" scoped>
.articles-container {
  column-gap: 3rem;

  margin: 5rem 0;

  &__left {
    grid-column: col-start 1 / col-end 9;
    justify-self: start;
  }

  &__right {
    grid-column: col-start 10 / col-end 12;
  }

  &__item {
    &:not(:last-of-type) {
      margin-bottom: 3rem;
    }
  }

  .respond(@sizes[tablet-land], {
    column-gap: 0;

    &__left,
    &__right {
      grid-column: col-start 1 / col-end 12;
    }
  }, @without-screen);
}
</style>
