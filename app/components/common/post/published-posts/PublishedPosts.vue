<template lang="pug">
  .published-posts
    template(v-for=`(post, index) in posts`)
      .published-posts__main-item(v-if=`index === 0`, :key=`post.id`, :style=`{
        backgroundImage: "url(" + post.image + ")"
      }`)
        .published-posts__half
          .published-posts__category {{ post.category }}
          .published-posts__title {{ post.title }}
          .published-posts__date {{ post.createdAt }}
          .published-posts__short {{ post.short }}
          .published-posts__author
            img(:src=`post.author.url`).published-posts__author-image
            .published-posts__author-name {{ post.author.name }}
      .published-posts__item(v-else, :key=`post.id`)
        img(:src=`post.image`, alt="").published-posts__image
        .published-posts__content
          .published-posts__category {{ post.category }}
          .published-posts__title {{ post.title }}
          .published-posts__date {{ post.createdAt }}
          .published-posts__short {{ post.short }}
          .published-posts__bottom
            .published-posts__author
              img(:src=`post.author.url`, alt="").published-posts__author-image
              .published-posts__author-name {{ post.author.name }}
            font-awesome-icon(:icon=`["far", "bookmark"]`).published-posts__bookmark
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    posts: {
      // TODO: Array<PostInterface>
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="less" scoped>
.published-posts {
  display: flex;
  flex-direction: column;

  &__main-item,
  &__item {
    margin-bottom: 3rem;
  }

  &__main-item {
    height: 50rem;

    padding: 3.2rem 2.8rem;

    color: @published-posts-main-item-color;
  }

  &__half {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 50%;

    .respond(@sizes[tablet-land], {
      width: 100%;
    }, @without-screen);
  }

  &__item {
    display: flex;
    justify-content: space-between;

    .respond(@sizes[tablet], {
      flex-direction: column;
      justify-content: center;
    }, @without-screen);

    .published-posts {
      &__date {
        color: @published-posts-date-color;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 2.5rem 1.3rem 1rem 6rem;

    background-color: @published-posts-content-background-color;

    .respond(@sizes[tablet], {
      padding: 2.5rem 2rem;
    }, @without-screen);
  }

  &__category,
  &__title,
  &__date {
    margin-bottom: 1rem;
  }

  &__category,
  &__title,
  &__author,
  &__bookmark {
    .pointer-on-hover();
  }

  &__category {
    padding: 0.6rem 1.1rem;

    font-size: @published-posts-category-font-size;

    background-color: @published-posts-category-background-color;
    color: @published-posts-category-color;
  }

  &__image {
    .respond(@sizes[tablet-land], {
      max-width: 40%;
    }, @without-screen);

    .respond(@sizes[tablet], {
      width: 100%;
      max-width: 100%;
    }, @without-screen);
  }

  &__title {
    font-family: @published-posts-title-font-family;
    font-size: @published-posts-title-font-size;
  }

  &__date {
    text-decoration: underline;

    font-size: @published-posts-date-font-size;
  }

  &__short {
    margin-bottom: 4rem;

    font-size: @published-posts-short-font-size;
  }

  &__author {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-image {
      width: 3.8rem;
      height: 3.8rem;

      margin-right: 1rem;
    }

    &-name {
      font-size: @published-posts-author-name-font-size;
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  &__bookmark {
    font-size: @published-posts-bookmark-font-size;

    color: @published-posts-bookmark-color;
  }
}
</style>
