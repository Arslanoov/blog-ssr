<template lang="pug">
  .category-swiper
    .category-swiper__item(:style=`{
      backgroundImage: "url(" + category.background + ")"
    }`)
      img(:src=`category.background`, alt="").category-swiper__hidden
      .category-swiper__content
        .category-swiper__name {{ category.name }}
        .category-swiper__posts-count {{ category.postsCount }}
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

import { CategoryInterface } from "~/interfaces/category"

export default defineComponent({
  props: {
    category: {
      type: Object as () => CategoryInterface,
      required: true
    }
  }
})
</script>

<style lang="less">
.category-swiper {
  &__item {
    position: relative;

    background-repeat: no-repeat;
  }

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
    color: #fff;
  }

  &__name {
    font-size: 2rem;
    font-weight: 500;
  }

  &__posts-count {
    font-size: 1.4rem;
  }
}
</style>
