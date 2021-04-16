<template lang="pug">
  .posts-rollup-list
    h2.posts-rollup-list__title {{ title }}
    PostRollup(v-for=`(post, index) in posts`, v-if=`index < length`, :key=`post.id`, :post=`post`, :class=`{
      inverted: inverted && index % 2 !== 0
    }` :inverted=`inverted && index % 2 !== 0`).posts-rollup-list__item
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

import PostRollup from "~/components/common/post/rollup/PostRollup.vue"

export default defineComponent({
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },
    inverted: {
      type: Boolean,
      required: false,
      default: false
    },
    length: {
      type: Number,
      required: true
    }
  },
  components: {
    PostRollup
  },
  setup() {
    const posts = ref([
      {
        id: 1,
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/rollup/1.jpg",
        title: "Travelling around the  holidays \n" +
          "is always a bit more ",
        short: "Lorem quis bibendum auctor, \n" +
          "rmninkis elit ipsum,"
      },
      {
        id: 2,
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/rollup/1.jpg",
        title: "The Importance of \n" +
          "Imagination – an interview",
        short: "Lorem quis bibendum auctor, \n" +
          "rmninkis elit ipsum,"
      },
      {
        id: 3,
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/rollup/1.jpg",
        title: "How do we collaborate to\n" +
          "bring about Transition",
        short: "Lorem quis bibendum auctor, \n" +
          "rmninkis elit ipsum,"
      }
    ])

    return {
      posts
    }
  }
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
    color: #0b0f18;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
  }

  &__item {
    margin-top: 3rem;
  }
}
</style>
