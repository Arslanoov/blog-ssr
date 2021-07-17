<template lang="pug">
  .posts-rollup-list
    h2.posts-rollup-list__title {{ title }}
    .posts-rollup-list__line
    PostRollup(v-for=`(post, index) in posts`, v-if=`index < length`, :key=`post.id`, :post=`post`, :class=`{
      inverted: inverted && index % 2 !== 0
    }` :inverted=`inverted && index % 2 !== 0`).posts-rollup-list__item
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api"

import PostRollup from "~/components/common/post/rollup/PostRollup.vue"

export default defineComponent({
  components: {
    PostRollup,
  },

  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },

    inverted: {
      type: Boolean,
      required: false,
      default: false,
    },

    length: {
      type: Number,
      required: true,
    },
  },

  setup() {
    const posts = ref([
      {
        id: 1,
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/rollup/1.jpg",
        title: "Travelling around the  holidays \nis always a bit more ",
        short: "Lorem quis bibendum auctor, \n rmninkis elit ipsum,",
      },
      {
        id: 2,
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/rollup/1.jpg",
        title: "The Importance of \nImagination – an interview",
        short: "Lorem quis bibendum auctor, \n rmninkis elit ipsum,",
      },
      {
        id: 3,
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/rollup/1.jpg",
        title: "How do we collaborate to\nbring about Transition",
        short: "Lorem quis bibendum auctor, \n rmninkis elit ipsum,",
      },
    ])

    return {
      posts,
    }
  },
})
</script>

<style lang="less" scoped>
.posts-rollup-list {
  display: flex;
  flex-direction: column;

  width: 100%;

  margin: 3rem 0;

  &.inverted {
    &:nth-child(odd) {
      align-self: end;
    }
  }

  &__title {
    margin-bottom: 0.8rem;

    color: @posts-rollup-title-color;

    font-size: @posts-rollup-title-font-size;
    font-weight: @posts-rollup-title-font-weight;
    text-transform: uppercase;
  }

  &__line {
    width: 10rem;
    height: 0.1rem;
    background-color: @posts-rollup-line-background-color;
  }

  &__item {
    margin-top: 2.5rem;
  }
}
</style>
