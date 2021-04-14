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
  font-size: 1.4rem;

  &__title {
    text-align: center;

    color: #0b0f18;

    font-family: Dosis, sans-serif;
    font-size: 4rem;
    font-weight: 700;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);

    gap: 3rem;
  }
}

.post {
  color: #fff;

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

    font-family: Dosis, sans-serif;
    font-size: 2.8rem;
    font-weight: 700;

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
      font-size: 13px;
    }
  }

  &__short {
    margin-bottom: 3.5rem;

    line-height: 2.5rem;
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

    .post {
      &__category {
        background: transparent;
      }

      &__content {
        width: 60%;
      }
    }
  }

  &:nth-of-type(2) {
    grid-column: 3 / -1;
    grid-row: 1 / span 1;

    .post {
      &__category {
        background: #fff;
        color: #e68c8c;
      }
    }
  }

  &:nth-of-type(3),
  &:last-of-type {
    .post {
      &__category {
        background-color: #e68c8c;
        color: #fff;
      }
    }
  }

  &:nth-of-type(3) {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
  }

  &:last-of-type {
    grid-column: 2 / span 2;
    grid-row: 2 / span 1;

    display: flex;

    color: #0b0f18;

    .post {
      &__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }

      &__name {
        color: #0b0f18;
      }

      &__image {
        display: block;
      }

      &__author {
        &-name {
          color: #0b0f18;
        }
      }

      &__short {
        display: none;
      }
    }
  }
}
</style>
