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
.most-read {
  &__title {
    text-align: center;

    color: #fff;

    font-family: Dosis, sans-serif;
    font-size: 4rem;
    font-weight: 700;
    line-height: 6rem;
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

    background: #fff;

    margin-right: 2rem;

    .respond(@sizes[tablet-land], {
      margin-right: 0;
      margin-bottom: 3rem;
    }, @without-screen);
  }

  &__index {
    text-align: right;

    line-height: 1;

    color: #f7f3f3;
    font-size: 8rem;
  }

  &__date {
    color: #e68c8c;

    font-size: 1.3rem;
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

    padding: .3rem 1.1rem;

    font-size: 1.4rem;

    background-color: #e68c8c;
    color: #fff;

    .pointer-on-hover();
  }

  &__name {
    margin-bottom: .5rem;

    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.5rem;

    color: #0b0f18;

    .pointer-on-hover();
  }

  &__date {
    margin-bottom: 1rem;

    color: #e68c8c;

    font-size: 1.3rem;
    text-decoration: underline;
  }

  &__read-more {
    color: #0b0f18;
    font-size: 1.4rem;

    .pointer-on-hover();
  }
}
</style>
