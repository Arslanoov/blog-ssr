<template lang="pug">
  .main-card
    .main-card__category {{ post.category }}
    .main-card__header
      .main-card__date.main-card__item {{ post.createdAt }}
      img(:src=`post.author.url`, alt="").main-card__author-avatar.main-card__item
      .main-card__author-name.main-card__item {{ post.author.name }}
    .main-card__title {{ post.title }}
    .main-card__short {{ post.short }}
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api"

export default defineComponent({
  setup() {
    const post = reactive({
      category: "Travel",
      createdAt: "January 02, 2020",
      author: {
        url: "/images/mock/blog/avatar.png",
        name: "Masum Rana",
      },
      title: "Ultimate Europe Travel Bucket List for This Summer",
      short:
        "Europe may be famous for its history, monuments and sightseeing," +
        " but summer is for enjoying the outdoors. For hiking, cycling, swimming, " +
        "splashing around in the water and exploring your limits. ",
    })

    return {
      post,
    }
  },
})
</script>

<style lang="less" scoped>
.main-card {
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 4.8rem 5.2rem;

  background-color: @main-card-background-color;

  &__category,
  &__header {
    margin-bottom: 1rem;
  }

  &__category {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 6rem;
    height: 2.2rem;

    font-size: @main-card-category-font-size;

    background-color: @main-card-category-background-color;
    color: @main-card-category-color;

    .pointer-on-hover();
  }

  &__header {
    display: flex;
    align-items: center;
  }

  &__item {
    margin-right: 1.4rem;
  }

  &__date {
    text-decoration: underline;

    font-size: @main-card-date-font-size;

    color: @main-card-date-color;
  }

  &__author {
    &-avatar,
    &-name {
      .pointer-on-hover();
    }

    &-avatar {
      width: @main-section-avatar-size;
      height: @main-section-avatar-size;
    }

    &-name {
      font-size: @main-card-author-name-font-size;
    }
  }

  &__title,
  &__short {
    color: @main-card-title-short-color;
  }

  &__title {
    margin-bottom: 3rem;

    font-family: @main-card-title-font-family;
    font-size: @main-card-title-font-size;
    font-weight: @main-card-title-font-weight;

    line-height: @main-card-title-line-height;

    .pointer-on-hover();

    .respond(@sizes[tablet], {
      font-size: @main-card-title-mobile-font-size;
      line-height: @main-card-title-mobile-line-height;
    }, @without-screen);
  }

  &__short {
    font-size: @main-card-short-font-size;
    line-height: @main-card-short-line-height;
  }
}
</style>
