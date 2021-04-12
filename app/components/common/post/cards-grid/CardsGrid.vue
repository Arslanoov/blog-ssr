<template lang="pug">
  .cards-grid
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
  grid-column: col-start 1 / col-end 12;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);

  gap: 3rem;

  margin: 5rem 0;

  .respond(@sizes[tablet-land], {
    grid-template-rows: repeat(4, 1fr);
  }, @without-screen);

  .respond(@sizes[tablet], {
    grid-template-rows: repeat(4, minmax(min-content, max-content));
  }, @without-screen);

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
      box-shadow: 0 0 2rem rgba(215, 215, 215, .35);
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

        box-shadow: 0 0 2rem rgba(215, 215, 215, .35);

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
    font-size: 2rem;
    font-weight: 500;

    line-height: 2.8rem;

    color: #0b0f18;

    &_underlined {
      text-decoration: underline;
    }
  }

  &__date,
  &__short {
    font-size: 1.4rem;
  }

  &__date {
    color: #e68c8c;
  }

  &__short {
    color: rgba(#0b0f18, .8);
  }
}
</style>
