<template lang="pug">
  .category-list
    h4.category-list__title Categories:
    .category-list__item(v-for=`category in categories`, :key=`category.id`)
      span.category-list__name {{ category.name }}
      span.category-list__posts-count  ({{ category.postsCount }})
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api"

export default defineComponent({
  setup() {
    const categories = ref([
      {
        id: 1,
        name: "Life style",
        postsCount: 30,
      },
      {
        id: 2,
        name: "News",
        postsCount: 7,
      },
      {
        id: 3,
        name: "Food supply chains",
        postsCount: 6,
      },
      {
        id: 4,
        name: "Wedding",
        postsCount: 20,
      },
      {
        id: 5,
        name: "Beauty",
        postsCount: 12,
      },
      {
        id: 6,
        name: "Other",
        postsCount: 15,
      },
    ])

    return {
      categories,
    }
  },
})
</script>

<style lang="less" scoped>
.category-list {
  margin: 3.5rem 0;

  &__title {
    margin-bottom: 2rem;

    font-family: @category-list-title-font-family;
    font-size: @category-list-title-font-size;
    font-weight: @category-list-title-font-weight;

    color: @category-list-title-color;
  }

  &__item {
    font-size: @category-list-item-font-size;

    color: @category-list-item-color;

    .pointer-on-hover();

    &:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }
}
</style>
