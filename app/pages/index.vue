<template lang="pug">
  .container.home
    MainCard(:post=`post`).card
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api"

import MainCard from "~/components/common/post/main-card/MainCard.vue"

export default defineComponent({
  components: {
    MainCard
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

    return {
      post
    }
  }
})
</script>

<style lang="less" scoped>
.home {
  height: 85vh;

  align-content: center;

  background-color: #aeaeae;
}

.card {
  grid-column: col-start 1 / span 8;
}
</style>
