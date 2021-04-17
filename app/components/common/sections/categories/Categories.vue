<template lang="pug">
  .categories
    Category(v-for="category in categories", :key=`category.id`, :category=`category`).categories__item
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

import Category from "~/components/common/category/Category.vue"

export default defineComponent({
  components: {
    Category
  },
  setup() {
    const categories = ref([
      {
        id: 1,
        name: "Travel",
        background: "/images/mock/category/mock.jpg",
        postsCount: 30
      },
      {
        id: 2,
        name: "Lifestyle",
        background: "/images/mock/category/mock.jpg",
        postsCount: 60
      },
      {
        id: 3,
        name: "Beauty",
        background: "/images/mock/category/mock.jpg",
        postsCount: 60
      },
      {
        id: 4,
        name: "Technology",
        background: "/images/mock/category/mock.jpg",
        postsCount: 60
      }
    ])

    return {
      categories
    }
  }
})
</script>

<style lang="less" scoped>

</style>
