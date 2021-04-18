<template lang="pug">
  .container.single-container
    .single-container__content
      .single-container__preview
        .single-container__category {{ post.category }}
        .single-container__title {{ post.title }}
        .single-container__date {{ post.createdAt }}
        .single-container__author
          img(:src=`post.author.url`, alt="").single-container__author-image
          .single-container__author-name {{ post.author.name }}
        .single-container__short {{ post.short }}
      .single-container__bottom
        Socials(title="", :items=`socials`).single-container__socials
        font-awesome-icon(:icon=`["far", "bookmark"]`).single-container__bookmark
      img(:src=`post.image`, alt="").single-container__image
      .fluid-container.single-container__row
        .single-container__left How Long Will Your Trip Be?
        .single-container__right
          Sidebar(with-categories=true)
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/composition-api"

import Socials from "~/components/base/social/Socials.vue"

import Sidebar from "~/components/common/sections/sidebar/Sidebar.vue"

export default defineComponent({
  components: {
    Sidebar,

    Socials
  },
  setup() {
    const post = reactive({
      category: "Travel",
      createdAt: "January 02, 2020",
      image: "/images/mock/blog/single/1.jpg",
      author: {
        url: "/images/mock/blog/avatar.png",
        name: "Afaty Poprita"
      },
      title: "The Most And Least Visited Countries In The World\n" +
        "There are 196 countries in the world",
      short: "There are 196 countries in the world. Whether you are a seasoned veteran or a newly bitten by the travel bug, it can be difficult to decide where to go.here are 196 \n" +
        "countries in the world",
      // TODO: Change content to post.content
      content: ""
    })

    const socials = ref([
      {
        icon: "pinterest",
        url: "https://pinterest.com"
      },
      {
        icon: "facebook",
        url: "https://facebook.com"
      },
      {
        icon: "twitter",
        url: "https://twitter.com"
      },
      {
        icon: "linkedin",
        url: "https://ru.linkedin.com"
      },
      {
        icon: "instagram",
        url: "https://instagram.com"
      }
    ])

    return {
      post,
      socials
    }
  }
})
</script>

<style lang="less" scoped>
.single-container {
  margin: 5rem 0;

  &__content {
    grid-column: col-start 1 / col-end 12;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: #0b0f18;
  }

  &__preview {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 60%;

    text-align: center;
  }

  &__category {
    margin-bottom: 2rem;
    padding: .4rem 1.6rem;

    font-size: 14px;

    color: #ffffff;
    background-color: #e68c8c;

    .pointer-on-hover();
  }

  &__title {
    margin-bottom: 1rem;

    font-family: Dosis, sans-serif;
    font-size: 28px;
    font-weight: 700;
  }

  &__date {
    margin-bottom: 2rem;

    font-size: 13px;
    text-decoration: underline;
  }

  /* TODO: Base component */
  &__author {
    display: flex;
    align-items: center;

    margin-bottom: 2.5rem;

    .pointer-on-hover();

    &-image {
      width: 3.8rem;
      height: 3.8rem;

      margin-right: 1rem;
    }

    &-name {
      font-size: 13px;
    }
  }

  &__short {
    margin-bottom: 3rem;

    font-size: 20px;
    opacity: 0.8;
  }

  &__image {
    width: 100%;

    margin-bottom: 4.5rem;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-bottom: 3rem;
  }

  &__socials {

  }

  &__bookmark {
    font-size: 20px;

    color: #797979;
  }

  &__left {
    grid-column: col-start 1 / col-end 9;
  }

  &__right {
    grid-column: col-start 10 / col-end 12;
  }
}
</style>
