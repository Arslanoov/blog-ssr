<template lang="pug">
  .category(:style=`{
    backgroundImage: "url(" + category.background + ")"
  }`)
    img(:src=`category.background`, alt="").category__hidden
    .category__content
      .category__name {{ category.name }}
      .category__posts-count {{ category.postsCount }}
</template>

<script lang="ts">
import { defineComponent } from "@nuxt/composition-api"

import { CategoryInterface } from "~/interfaces/category"

export default defineComponent({
  props: {
    category: {
      type: Object as () => CategoryInterface,
      required: true,
    },
  },
})
</script>

<style lang="less" scoped>
.category {
  position: relative;

  background-repeat: no-repeat;
  background-size: cover;

  .pointer-on-hover();

  &__hidden {
    visibility: hidden;
  }

  &__content {
    position: absolute;

    left: 50%;
    bottom: 1rem;

    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__name,
  &__posts-count {
    color: @category-text-color;
  }

  &__name {
    margin-bottom: 1rem;

    font-size: @category-name-font-size;
    font-weight: @category-name-font-weight;
  }

  &__posts-count {
    font-size: @category-posts-count-font-size;
  }
}
</style>
