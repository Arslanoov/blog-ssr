<template lang="pug">
  .slider-posts
    .slider-posts__item(v-for="post in posts", :key=`post.id`)
      .slider-posts__title {{ post.title }}
      .slider-posts__date {{ post.createdAt }}
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxt/composition-api"

export default defineComponent({
  setup() {
    const posts = ref([
      {
        id: 1,
        createdAt: "January 02, 2020",
        title: "It's now easier to get between\n" + "the US and Cape Town ",
      },
      {
        id: 2,
        createdAt: "January 02, 2020",
        title: "It's now easier to get between\n" + "the US and Cape Town ",
      },
      {
        id: 3,
        createdAt: "January 02, 2020",
        title: "It's now easier to get between\n" + "the US and Cape Town ",
      },
    ])

    return {
      posts,
    }
  },
})
</script>

<style lang="less" scoped>
.slider-posts {
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
    align-items: flex-start;

    padding: 2.5rem;

    box-shadow: @horizontal-slider-item-shadow;

    &:not(:last-of-type) {
      margin-right: 3rem;

      .respond(@sizes[tablet-land], {
        margin-right: 0;
        margin-bottom: 3rem;
      }, @without-screen);
    }
  }

  &__title {
    margin-bottom: 2rem;

    font-size: @horizontal-slider-title-font-size;
    font-weight: @horizontal-slider-title-font-weight;
    line-height: @horizontal-slider-title-line-height;
  }

  &__date {
    font-size: @horizontal-slider-date-font-size;

    color: @horizontal-slider-date-color;

    text-decoration: underline;
  }
}
</style>
