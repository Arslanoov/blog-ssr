<template lang="pug">
  .categories
    Category(v-for="category in categories", :key=`category.id`, :category=`category`).categories__item
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxt/composition-api"

import Category from "~/components/common/category/Category.vue"

export default defineComponent({
  components: {
    Category,
  },

  setup() {
    const categories = ref([
      {
        id: 1,
        name: "Travel",
        background: "/images/mock/category/mock.jpg",
        postsCount: 30,
      },
      {
        id: 2,
        name: "Lifestyle",
        background: "/images/mock/category/mock.jpg",
        postsCount: 60,
      },
      {
        id: 3,
        name: "Beauty",
        background: "/images/mock/category/mock.jpg",
        postsCount: 60,
      },
      {
        id: 4,
        name: "Technology",
        background: "/images/mock/category/mock.jpg",
        postsCount: 60,
      },
    ])

    return {
      categories,
    }
  },
})
</script>

<style lang="less" scoped>
.categories {
  grid-column: col-start 1 / col-end 12;

  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;

  &__item {
    margin-bottom: 3rem;
  }

  .respond(@sizes[tablet], {
    flex-direction: column;
    justify-content: center;
  }, @without-screen);

  &__container {
    margin: 5rem 0;

    .respond(@sizes[tablet-land], {
      margin: 0;
    }, @without-screen);
  }
}
</style>
