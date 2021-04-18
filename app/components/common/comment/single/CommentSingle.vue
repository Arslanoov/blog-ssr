<template lang="pug">
  .comment
    .comment__item
      img(v-if=`item.author.url`, :src=`item.author.url`).comment__avatar
      .comment__content
        h5.comment__author {{ item.author.name }}
        .comment__date {{ item.createdAt }}
        .comment__text {{ item.content }}
        .comment__reply Reply

    template(v-if=`item.repliedTo`)
      repliedComment(:item=`item.repliedTo`).comment__replied
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

import { CommentInterface } from "~/interfaces/comment"

export default defineComponent({
  components: {
    repliedComment: () => import("~/components/common/comment/single/CommentSingle.vue")
  },
  props: {
    item: {
      type: Object as () => CommentInterface,
      required: true
    }
  }
})
</script>

<style lang="less" scoped>
.comment {
  &__item {
    display: flex;

    width: 100%;

    margin-bottom: 3rem;
    padding: 1.3rem 3.5rem;

    box-shadow: @comment-shadow;

    .respond(@sizes[mobile], {
      padding: 1rem 1.5rem;
    }, @without-screen);
  }

  &__avatar,
  &__author,
  &__reply {
    .pointer-on-hover();
  }

  &__avatar {
    width: 8rem;
    height: 8rem;

    margin-right: 2rem;

    .respond(@sizes[mobile], {
      width: 5rem;
      height: 5rem;
    }, @without-screen);
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    color: @comment-content-color;
  }

  &__author,
  &__date,
  &__text {
    margin-bottom: 1.2rem;
  }

  &__author {
    font-size: @comment-author-font-size;
  }

  &__date,
  &__text,
  &__reply {
    opacity: @comment-elements-opacity;
  }

  &__date {
    font-size: @comment-date-font-size;
  }

  &__text {
    font-size: @comment-text-font-size;
  }

  &__reply {
    padding: .8rem 2rem;

    border-radius: 1rem;

    font-size: @comment-reply-font-size;

    color: @comment-reply-color;
    background-color: @comment-reply-background-color;
  }

  &__replied {
    margin-left: 8rem;

    .respond(@sizes[tablet-land], {
      margin-left: 5rem;
    }, @without-screen);

    .respond(@sizes[tablet], {
      margin-left: 3rem;
    }, @without-screen);

    .respond(@sizes[mobile], {
      margin-left: 2rem;
    }, @without-screen);
  }
}
</style>
