<template lang="pug">
  .cards-grid
    .cards-grid__pagination
      span.cards-grid__pagination_current 1
      span.cards-grid__pagination_slash /
      | 2 3
    .cards-grid__wrapper
      .cards-grid__item(v-for="(post, index) in posts", key=`post.id`)
        img(v-if=`post.image`, :src=`post.image`, alt="").cards-grid__image
        .cards-grid__content(:class=`index === posts.length - 1 ? "cards-grid__content_resettled" : ""`)
          .cards-grid__element.cards-grid__title(:class=`index === 0 ? "cards-grid__title_underlined" : ""`) {{ post.title }}
          .cards-grid__element.cards-grid__date {{ post.createdAt }}
          .cards-grid__element.cards-grid__short(v-if=`post.short`) {{ post.short }}
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    posts: {
      /* TODO: Array<PostInterface> */
      type: Array,
      required: true
    }
  }
})
</script>

<style lang="less" scoped>
.cards-grid {
  width: 100%;

  &__pagination {
    grid-column: col-start 1 / span 1;

    transform: translateY(-3.8rem);

    color: @cards-grid-pagination-color;

    font-size: @cards-grid-pagination-font-size;

    &_current {
      font-size: @cards-grid-pagination-current-font-size;
    }

    &_slash {
      font-size: @cards-grid-pagination-slash-font-size;
    }

    .respond(@sizes[tablet-land], {
      transform: translateY(-1.8rem);

      color: #0b0f18;
    }, @without-screen);
  }

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);

    gap: 3rem;

    .respond(@sizes[tablet-land], {
      grid-template-rows: repeat(3, 1fr);
    }, @without-screen);

    .respond(@sizes[tablet], {
      grid-template-rows: repeat(4, minmax(min-content, max-content));
    }, @without-screen);
  }

  &__item,
  &__image {
    &:not(:last-of-type) {
      border-radius: 1rem;
    }
  }

  &__image {
    width: 100%;
  }

  &__image,
  &__title {
    .pointer-on-hover();
  }

  &__item {
    &:not(:last-of-type) {
      box-shadow: @cards-grid-shadow;
      background: @cards-grid-background;
    }

    &:first-child {
      grid-column: 1 / span 1;
      grid-row: 1 / -1;
    }

    &:nth-of-type(2) {
      grid-column: 2 / span 1;
      grid-row: 1 / span 2;
    }

    &:nth-of-type(3) {
      grid-column: 3 / span 1;
      grid-row: 1 / span 2;
    }

    &:last-of-type {
      grid-column: 2 / span 2;
      grid-row: 3 / -1;

      display: flex;
      justify-content: space-between;
      align-items: center;

      & > * {
        &:first-of-type {
          margin-right: 2.5rem;

          .respond(@sizes[tablet], {
            margin-right: 0;
          }, @without-screen);
        }
      }
    }

    .respond(@sizes[tablet-land], {
      &:first-child {
        grid-row: 1 / span 2;
      }

      &:last-of-type {
        grid-column: 1 / -1;
        grid-row: 3 / -1;

        align-self: start;
      }
    }, @without-screen);

    .respond(@sizes[tablet], {
      &:first-child,
      &:nth-of-type(2),
      &:nth-of-type(3),
      &:last-of-type {
        grid-column: 1 / -1;
      }

      &:first-child {
        grid-row: 1 / span 1;
      }

      &:nth-of-type(2) {
        grid-row: 2 / span 1;
      }

      &:nth-of-type(3) {
        grid-row: 3 / span 1;
      }

      &:last-of-type {
        grid-row: 4 / span 1;

        box-shadow: @cards-grid-shadow;
        background: @cards-grid-background;

        flex-direction: column;
        justify-content: center;
      }
    }, @without-screen);
  }

  &__content {
    padding: 2.5rem;

    &_resettled {
      padding: 0;

      .respond(@sizes[tablet], {
        padding: 2.5rem;
      }, @without-screen);
    }
  }

  &__element {
    &:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }

  &__title {
    font-size: @cards-grid-title-font-size;
    font-weight: @cards-grid-title-font-weight;

    line-height: @cards-grid-title-line-height;

    color: @cards-grid-title-color;

    &_underlined {
      text-decoration: underline;
    }
  }

  &__date,
  &__short {
    font-size: @cards-grid-date-short-font-size;
  }

  &__date {
    color: @cards-grid-date-color;
  }

  &__short {
    color: @cards-grid-short-color;
  }
}
</style>
