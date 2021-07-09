<template lang="pug">
  .article
    img(v-if=`article.image`, :src=`article.image`, alt="").article__image
    .article__content
      .article__category {{ article.category }}
      .article__name {{ article.title }}
      .article__date {{ article.createdAt }}
      .article__bottom
        .article__author
          img(:src=`article.author.url`).article__author-image
          .article__author-name {{ article.author.name }}
        font-awesome-icon(:icon=`["far", "bookmark"]`).article__bookmark
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

import { PostInterface } from "~/interfaces/post"

export default defineComponent({
  props: {
    article: {
      type: Object as () => PostInterface,
      required: true,
    },
  },
})
</script>

<style lang="less" scoped>
.article {
  display: flex;
  justify-content: space-between;

  .respond(@sizes[tablet], {
    flex-direction: column;
    justify-content: center;
  }, @without-screen);

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;

    padding: 2.5rem 2.3rem 1.5rem 5.7rem;

    color: @article-color;
    background-color: @article-background-color;

    .respond(@sizes[tablet], {
      padding: 2.5rem;
    }, @without-screen);
  }

  &__image,
  &__category,
  &__name,
  &__author,
  &__bookmark {
    .pointer-on-hover();
  }

  &__image {
    width: 100%;
  }

  &__category {
    margin-bottom: 2rem;

    padding: 0.6rem 0.8rem;

    font-size: @article-category-font-size;

    color: @article-category-color;
    background-color: @article-category-background-color;
  }

  &__name {
    margin-bottom: 1rem;

    font-family: @article-name-font-family;
    font-size: @article-name-font-size;
  }

  &__date {
    margin-bottom: 4rem;

    font-size: @article-date-font-size;
    text-decoration: underline;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  &__author {
    display: flex;
    align-items: center;

    &-image {
      margin-right: 1rem;
    }

    &-name {
      font-size: @article-author-name-font-size;
    }
  }

  &__bookmark {
    font-size: @article-bookmark-font-size;

    color: @article-category-bookmark-color;
  }
}
</style>
