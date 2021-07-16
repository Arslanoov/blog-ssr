<template lang="pug">
  .timeline-posts
    .timeline-posts__item.timeline-posts__prev
      font-awesome-icon(:icon=`["fas", "caret-left"]`).timeline-posts__icon.timeline-posts__icon_left
      .timeline-posts__content
        .timeline-posts__title The Go Ahead Tours difference As the world’s largest private education company
        .timeline-posts__read-more Read more

    .timeline-posts__item.timeline-posts__next
      .timeline-posts__content
        .timeline-posts__title The Go Ahead Tours difference As the world’s largest private education company
        .timeline-posts__read-more Read more
      font-awesome-icon(:icon=`["fas", "caret-right"]`).timeline-posts__icon.timeline-posts__icon_right
</template>

<script lang="ts">
import { defineComponent } from "@nuxt/composition-api"

import { TagInterface } from "~/interfaces/tag"

export default defineComponent({
  props: {
    prevPost: {
      type: Object as () => TagInterface,
      required: true,
    },
    nextPost: {
      type: Object as () => TagInterface,
      required: true,
    },
  },
})
</script>

<style lang="less" scoped>
.timeline-posts {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 4rem 0 2rem;

  .respond(@sizes[tablet], {
    flex-direction: column;
    justify-content: center;
  }, @without-screen);

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 4rem 2rem;

    color: @timeline-posts-color;
    background-color: @timeline-posts-background-color;

    box-shadow: @timeline-posts-shadow;

    &:not(:last-of-type) {
      margin-right: 3rem;

      .respond(@sizes[tablet], {
        margin-right: 0;
        margin-bottom: 3rem;
      }, @without-screen);
    }
  }

  &__next {
    text-align: right;
  }

  &__icon,
  &__title,
  &__read-more {
    .pointer-on-hover();
  }

  &__icon {
    &_left {
      margin-right: 2rem;
    }

    &_right {
      margin-left: 2rem;
    }
  }

  &__title {
    margin-bottom: 2rem;

    font-size: @timeline-posts-title-font-size;
  }

  &__icon {
    font-size: @timeline-posts-icon-font-size;
  }

  &__read-more {
    font-size: @timeline-posts-read-more-font-size;

    color: @timeline-read-more-color;
  }
}
</style>
