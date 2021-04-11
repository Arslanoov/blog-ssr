<template lang="pug">
  .home
    .container.main-card-container
      MainCard(:post=`post`).main-card-container__card

    .container
      CardsGrid(:posts=`posts`)
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/composition-api"

import MainCard from "~/components/common/post/main-card/MainCard.vue"
import CardsGrid from "~/components/common/post/cards-grid/CardsGrid.vue"

export default defineComponent({
  components: {
    MainCard,
    CardsGrid
  },
  setup() {
    const post = reactive({
      category: "Travel",
      createdAt: "January 02, 2020",
      author: {
        url: "/images/mock/blog/avatar.png",
        name: "Masum Rana"
      },
      title: "Ultimate Europe Travel Bucket List for This Summer",
      short: "Europe may be famous for its history, monuments and sightseeing," +
        " but summer is for enjoying the outdoors. For hiking, cycling, swimming, " +
        "splashing around in the water and exploring your limits. "
    })

    const posts = ref([
      {
        id: 1,
        createdAt: "January 02, 2020",
        title: "It's now easier to get between the US and Cape Town ",
        image: "/images/mock/blog/posts/1.jpg"
      },
      {
        id: 2,
        createdAt: "January 02, 2020",
        title: "The best Vietnam islands to visit",
      },
      {
        id: 3,
        createdAt: "January 02, 2020",
        title: "12 Things to do in Barcelona in September",
      },
      {
        id: 4,
        createdAt: "January 02, 2020",
        title: "5 Things to do in Barcelona This Summer That Are Not in Your Guide Book",
        image: "/images/mock/blog/posts/2.jpg",
        short: "The plan in the beginning was always to leave after a year." +
          " I’ve spent my share of summers here, as I tend to leave vacations " +
          "for the winter. "
      }
    ])

    return {
      post,
      posts
    }
  }
})
</script>

<style lang="less" scoped>
.main-card-container {
  height: @main-section-height;

  align-content: center;

  background-color: @home-main-card-background;

  &__card {
    grid-column: col-start 1 / span 8;

    .respond(@sizes[tablet-land], {
      grid-column: col-start 1 / span 10;
    }, @without-screen);

    .respond(@sizes[tablet], {
      grid-column: col-start 1 / col-end 12;
    }, @without-screen);
  }

  .respond(@sizes[desktop-sm], {
    height: auto;
    min-height: @main-section-height;

    padding: 2rem 0;
  }, @without-screen);
}
</style>
