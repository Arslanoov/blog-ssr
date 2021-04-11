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
import { defineComponent } from "@vue/composition-api"

import { PostInterface } from "~/interfaces/post"

export default defineComponent({
  props: {
    post: {
      type: Object as () => PostInterface,
      required: true
    }
  }
})
</script>

<style lang="less" scoped>
.main-card {
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 4.8rem 5.2rem;

  background-color: #fff;

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

    font-size: 1.6rem;

    background-color: #e68c8c;
    color: #fff;

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

    font-size: 1.4rem;

    color: rgba(#0b0f18, .8);
  }

  &__author {
    &-avatar,
    &-name {
      .pointer-on-hover();
    }

    &-avatar {
      width: 3.8rem;
      height: 3.8rem;
    }

    &-name {
      font-size: 1.3rem;
    }
  }

  &__title,
  &__short {
    color: #0b0f18;
  }

  &__title {
    margin-bottom: 3rem;

    font-family: Dosis, sans-serif;
    font-size: 5.5rem;
    font-weight: 700;

    line-height: 6rem;

    .pointer-on-hover();
  }

  &__short {
    font-size: 1.6rem;
    line-height: 2.5rem;
  }
}
</style>
