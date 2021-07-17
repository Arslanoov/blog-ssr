<template lang="pug">
  .most-read
    h2.most-read__title Most Read Articles
    .most-read__items
      .most-read__item(v-for="(post, index) in posts", :key=`post.id`)
        img.most-read__image(:src=`post.image`, alt="")
        .most-read__content
          .most-read__category {{ post.category }}
          .most-read__name {{ post.title }}
          .most-read__row
            .most-read__info
              .most-read__date {{ post.createdAt }}
              .most-read__read-more Read More
            .most-read__index {{ index < 9 ? "0" + (index + 1) : index + 1 }}

    .most-read__pagination
      .most-read__pagination-item.active
      .most-read__pagination-item
      .most-read__pagination-item
      .most-read__pagination-item
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api"

export default defineComponent({
  setup() {
    const posts = ref([
      {
        id: 1,
        category: "Beauty",
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/most-read-posts/1.jpg",
        title: "Travelling around the holidays\n" + " is always a bit more",
      },
      {
        id: 2,
        category: "Design",
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/most-read-posts/1.jpg",
        title: "Travelling around the holidays\n" + " is always a bit more",
      },
      {
        id: 3,
        category: "Travel",
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/most-read-posts/1.jpg",
        title: "Travelling around the holidays\n" + " is always a bit more",
      },
      {
        id: 4,
        category: "Food",
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/most-read-posts/1.jpg",
        title: "Travelling around the holidays\n" + " is always a bit more",
      },
    ])

    return {
      posts,
    }
  },
})
</script>

<style lang="less" scoped>
.most-read {
  &__title {
    margin-bottom: 3rem;

    text-align: center;

    color: @most-read-title-color;

    font-family: @most-read-title-font-family;
    font-size: @most-read-title-font-size;
    font-weight: @most-read-title-font-weight;
    line-height: @most-read-title-line-height;
  }

  &__items {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .respond(@sizes[tablet-land], {
      flex-wrap: wrap;
      justify-content: center;
    }, @without-screen);
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    background: @most-read-post-background;

    margin-right: 2rem;

    .respond(@sizes[tablet-land], {
      margin-right: 0;
      margin-bottom: 3rem;
    }, @without-screen);
  }

  &__image {
    .pointer-on-hover();
  }

  &__index {
    text-align: right;

    color: @most-read-post-index-color;

    font-size: @most-read-post-font-size;
    line-height: @most-read-post-line-height;
  }

  &__date {
    font-size: @most-read-post-date-font-size;

    color: @most-read-post-date-color;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  &__image {
    width: 100%;
  }

  &__content {
    position: relative;

    padding: 3rem 2rem;
  }

  &__category {
    position: absolute;
    top: -5%;
    left: 1rem;

    display: inline-flex;

    padding: 0.3rem 1.1rem;

    font-size: @most-read-post-category-font-size;

    background-color: @most-read-post-category-background;
    color: @most-read-post-category-color;

    .pointer-on-hover();
  }

  &__name {
    margin-bottom: 0.5rem;

    font-size: @most-read-post-name-font-size;
    font-weight: @most-read-post-name-font-weight;
    line-height: @most-read-post-name-line-height;

    color: @most-read-post-name-color;

    .pointer-on-hover();
  }

  &__date {
    margin-bottom: 1rem;

    color: @most-read-post-date-color;

    font-size: @most-read-post-date-font-size;
    text-decoration: underline;
  }

  &__read-more {
    color: @most-read-post-read-more-color;

    font-size: @most-read-post-read-more-font-size;

    .pointer-on-hover();
  }

  &__pagination {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 3rem;

    &-item {
      box-sizing: content-box;

      width: @dot-pagination-size;
      height: @dot-pagination-size;

      border-radius: 1rem;

      background-color: @dot-pagination-background;

      .pointer-on-hover();

      &:not(:last-of-type) {
        margin-right: @dot-pagination-margin;
      }

      &.active {
        border: @dot-pagination-active-border;
      }
    }
  }
}
</style>
