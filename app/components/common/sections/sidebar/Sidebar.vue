<template lang="pug">
  .sidebar
    PostsSlider(:posts=`sliderPosts`).sidebar__slider
    Categories(v-if=`withCategories`)
    PostsSlider(:posts=`secondSliderPosts`, detailed=true).sidebar__slider
    FeaturedPosts()
    Socials(title="SOCIAL", with-border=true)
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

import FeaturedPosts from "~/components/common/sections/featured-posts/FeaturedPosts.vue"

import PostsList from "~/components/common/post/list/PostsList.vue"
import PostsRollupList from "~/components/common/post/rollup-list/PostsRollupList.vue"
import PostsSlider from "~/components/common/post/slider/PostsSlider.vue"
import Socials from "~/components/common/social/Socials.vue"

export default defineComponent({
  props: {
    withCategories: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    FeaturedPosts,
    Categories: () => import("~/components/common/category/List.vue"),

    PostsList,
    PostsRollupList,
    PostsSlider,
    Socials
  },
  setup() {
    const sliderPosts = ref([
      {
        id: 1,
        category: "Travel",
        createdAt: "January 02, 2020",
        title: "The Most And Least Visited\n" +
          " Countries In The World",
        image: "/images/mock/blog/slider/1.png"
      }
    ])

    const secondSliderPosts = ref([
      {
        id: 1,
        category: "Travel",
        createdAt: "January 02, 2020",
        title: "Visual Elements — Basic Things\n" +
          "That Can Be Seen",
        image: "/images/mock/blog/slider/1.png"
      }
    ])

    return {
      sliderPosts,
      secondSliderPosts
    }
  }
})
</script>

<style lang="less" scoped>
.sidebar {
  &__slider {
    margin-bottom: 3rem;
  }
}
</style>
