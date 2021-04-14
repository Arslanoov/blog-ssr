<template lang="pug">
  .popular-posts
    h2.popular-posts__title Popular Post
    .popular-posts__items
      .popular-posts__item.post(v-for=`(post, index) in posts`, :key=`post.id`, :style=`{
        backgroundImage: index !== posts.length - 1 ? "url(" + post.image + ")" : ""
      }`)
        .post__content
          .post__category {{ post.category }}
          .post__name {{ post.title }}
          .post__date {{ post.createdAt }}
          .post__short {{ post.short }}
          .post__author(v-if=`post.author`)
            img(:src=`post.author.url`, alt="").post__author-image
            .post__author-name {{ post.author.name }}
          .post__read-more Read More
        img(:src=`post.image`, alt="").post__image
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    posts: {
      // TODO: Array<PostInterface>
      type: Array,
      required: true
    }
  }
})
</script>

<style lang="less" scoped>
.popular-posts {
  font-size: @popular-posts-base-font-size;

  &__title {
    text-align: center;

    color: @popular-posts-title-color;

    font-family: @popular-posts-title-font-family;
    font-size: @popular-posts-title-font-family;
    font-weight: @popular-posts-title-font-weight;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);

    gap: 3rem;

    .respond(@sizes[tablet-land], {
      grid-template-columns: 1fr;
      grid-auto-rows: minmax(min-content, max-content);
    }, @without-screen);
  }
}

.post {
  color: @popular-post-color;

  &__content {
    position: relative;

    height: 100%;

    padding: 2.5rem;
  }

  &__image {
    display: none;
  }

  &__category {
    display: inline-flex;

    margin-bottom: 2rem;

    padding: .3rem 1.1rem;

    .pointer-on-hover();
  }

  &__name {
    margin-bottom: 1.2rem;

    font-family: @popular-post-name-font-family;
    font-size: @popular-post-name-font-size;
    font-weight: @popular-post-name-font-weight;

    .pointer-on-hover();
  }

  &__date {
    font-size: 1.3rem;

    text-decoration: underline;

    margin-bottom: 2.1rem;
  }

  &__author {
    display: flex;
    align-items: center;

    .pointer-on-hover();

    &-image {
      margin-right: 1rem;
    }

    &-name {
      font-size: @popular-post-author-name-font-size;
    }
  }

  &__short {
    margin-bottom: 3.5rem;

    line-height: @popular-post-short-line-height;
  }

  &__read-more {
    position: absolute;

    right: 2.8rem;
    bottom: 2.3rem;

    text-decoration: underline;

    .pointer-on-hover();
  }

  &:first-of-type,
  &:last-of-type {
    .post {
      &__read-more {
        display: none;
      }
    }
  }

  &:first-of-type {
    grid-column: 1 / span 2;
    grid-row: 1 / span 1;

    .respond(@sizes[tablet-land], {
      grid-column: 1 / span 1;
      grid-row: 1 / span 1;
    }, @without-screen);

    .post {
      &__category {
        background: transparent;
      }

      &__content {
        width: 60%;

        .respond(@sizes[tablet-land], {
          width: 100%;
        }, @without-screen);
      }
    }
  }

  &:nth-of-type(2) {
    grid-column: 3 / -1;
    grid-row: 1 / span 1;

    .respond(@sizes[tablet-land], {
      grid-column: 1 / span 1;
      grid-row: 2 / span 1;
    }, @without-screen);

    .post {
      &__category {
        background: @second-popular-post-category-background;
        color: @second-popular-post-category-color;
      }
    }
  }

  &:nth-of-type(3),
  &:last-of-type {
    .post {
      &__category {
        background-color: @second-popular-post-category-color;
        color: @second-popular-post-category-background;
      }
    }
  }

  &:nth-of-type(3) {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;

    .respond(@sizes[tablet-land], {
      grid-column: 1 / span 1;
      grid-row: 3 / span 1;
    }, @without-screen);
  }

  &:last-of-type {
    grid-column: 2 / span 2;
    grid-row: 2 / span 1;

    display: flex;

    color: @last-popular-name-color;

    .respond(@sizes[tablet], {
      flex-direction: column;
    }, @without-screen);

    .respond(@sizes[tablet-land], {
      grid-column: 1 / span 1;
      grid-row: 4 / span 1;
    }, @without-screen);

    .post {
      &__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }

      &__image {
        display: block;

        max-width: 100%;
      }

      &__short {
        display: none;
      }
    }
  }
}
</style>
