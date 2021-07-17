<template lang="pug">
  .posts-slider
    .posts-slider__pagination
      .posts-slider__dots
        .posts-slider__dot(v-for=`(dot, index) in length`, :key=`dot`, :class=`{
          "posts-slider__dot_active": index === 0
        }`)
      .posts-slider__arrows
        img(src="/images/blog/icons/arrow-left.png", alt="").posts-slider__arrow-left
        img(src="/images/blog/icons/arrow-right.png", alt="").posts-slider__arrow-right

    .posts-slider__items
      .posts-slider__item(v-for=`post in posts`, :key=`post.id`, :style=`{
        backgroundImage: "url(" + post.image + ")"
      }`)
        h5.posts-slider__title(:class=`{
          "posts-slider__title_only": !detailed
        }`) {{ post.title }}
        template(v-if=`detailed`)
          .posts-slider__date {{ post.createdAt }}
          .posts-slider__read-more Read More
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  props: {
    posts: {
      // TODO: Array<PostInterface>
      type: Array,
      required: true,
    },

    detailed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  setup() {
    // TODO: Change length to posts.length
    const length = 4

    return {
      length,
    }
  },
})
</script>

<style lang="less" scoped>
.posts-slider {
  &__pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 2rem;
  }

  &__dots {
    display: flex;
    align-items: center;
  }

  &__dot,
  &__arrow-left,
  &__arrow-right {
    .pointer-on-hover();
  }

  &__dot {
    width: @dot-pagination-size;
    height: @dot-pagination-size;

    border-radius: 1.5rem;

    background-color: @posts-slider-dot-background-color;

    &:not(:last-of-type) {
      margin-right: 0.4rem;
    }

    &_active {
      background-color: @posts-slider-active-dot-background-color;
    }
  }

  &__arrows {
    display: flex;
    align-items: center;
  }

  &__arrow {
    width: @arrow-width;
    height: @arrow-height;

    color: @posts-slider-arrow-color;

    &-left {
      margin-right: 1rem;
    }

    &-right {
      transform: scale(1, -1);

      margin-top: -0.1rem;
    }
  }

  &__items {
    display: flex;
    justify-content: center;
    align-self: center;
  }

  &__item {
    width: 100%;
    height: 29.5rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    padding: 2.5rem;

    background-repeat: no-repeat;
    background-size: cover;

    border-radius: 1rem;

    color: @posts-slider-item-color;

    .respond(@sizes[tablet-land], {
      width: 27rem;
    }, @without-screen);
  }

  &__title,
  &__read-more {
    .pointer-on-hover();
  }

  &__title {
    margin-bottom: 0.9rem;

    font-size: @posts-slider-font-size;
    font-weight: @posts-slider-font-weight;
    line-height: @posts-slider-line-height;

    &_only {
      margin-bottom: 0;

      text-align: center;
    }
  }

  &__date {
    margin-bottom: 2rem;

    font-size: @posts-slider-date-font-size;

    text-decoration: underline;
  }

  &__read-more {
    font-size: @posts-slider-read-more-font-size;
  }
}
</style>
