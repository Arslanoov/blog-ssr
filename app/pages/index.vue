<template lang="pug">
  .home
    .container.main-card-container
      MainCard().main-card-container__card

    .container.cards-grid__container
      img(src="/images/pagination/left-arrow.png", alt="").pagination__arrow.pagination__arrow_left
      .cards-grid__cards
        CardsGrid()
      img(src="/images/pagination/right-arrow.png", alt="").pagination__arrow.pagination__arrow_right

    .transformed
      .container
        img(src="/images/pagination/left-arrow.png", alt="").pagination__arrow.pagination__arrow_left
        Categories()
        img(src="/images/pagination/right-arrow.png", alt="").pagination__arrow.pagination__arrow_right

      .container.popular-posts-container
        PopularPosts().popular-posts-container__posts

      .container.most-read-container
        MostReadPosts().most-read-container__posts

      .container.section-container
        .section-container__left
          PostsList().section-container__posts-list
          Newsletter().section-container__newsletter
        .section-container__right
          PostsRollupList(title="Posts rollup", :length=3)
          PostsRollupList(title="Top reviews posts", :length=2, inverted=true)

      .container.published-trending-container
        PublishedTrending().published-trending-container__left
        .published-trending-container__right
          Sidebar()
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

import PublishedTrending from "~/components/common/sections/published-trending/PublishedTrending.vue"
import Categories from "~/components/common/sections/categories/Categories.vue"
import Sidebar from "~/components/common/sections/sidebar/Sidebar.vue"
import MainCard from "~/components/common/post/main-card/MainCard.vue"
import CardsGrid from "~/components/common/post/cards-grid/CardsGrid.vue"
import PopularPosts from "~/components/common/post/popular/PopularPosts.vue"
import PostsList from "~/components/common/post/list/PostsList.vue"
import PostsRollupList from "~/components/common/post/rollup-list/PostsRollupList.vue"
import MostReadPosts from "~/components/common/post/most-read/MostReadPosts.vue"
import Newsletter from "~/components/common/newsletter/Newsletter.vue"

export default defineComponent({
  components: {
    PublishedTrending,
    Categories,
    Sidebar,

    MainCard,
    PostsList,
    CardsGrid,
    PopularPosts,
    PostsRollupList,
    MostReadPosts,
    Newsletter,
  },
})
</script>

<style lang="less" scoped>
.main-card-container {
  align-content: center;

  height: @main-section-height;

  background-color: @home-main-card-background;

  &__card {
    grid-column: col-start 1 / span 8;

    .respond(@sizes[tablet-land], {
      grid-column: col-start 1 / span 10;
    }, @without-screen);

    .respond(@sizes[tablet], {
      grid-column: col-start 1 / col-end 12;
    }, @without-screen);
  }

  .respond(@sizes[desktop-sm], {
    height: auto;
    min-height: @main-section-height;

    padding: 2rem 0;
  }, @without-screen);
}

.cards-grid {
  &__container {
    z-index: 2;

    position: relative;

    transform: translateY(-15vh);

    .respond(@sizes[tablet-land], {
      transform: none;
    }, @without-screen);
  }

  &__cards {
    grid-column: col-start 1 / col-end 12;

    margin: 6rem 0;
  }
}

.pagination__arrow {
  margin-top: 7.5rem;

  border-radius: 5rem;

  background: @cards-grid-pagination-arrow-background;

  .pointer-on-hover();

  .respond(@sizes[tablet-land], {
    background-color: @cards-grid-pagination-arrow-phone-background;

    transform: scale(0.7);
  }, @without-screen);

  .respond(@sizes[tablet], {
    display: none;
  }, @without-screen);

  &_left {
    grid-column: start / span 1;
    justify-self: right;

    margin-right: 1rem;
    padding: 2.1rem 1.5rem 1.9rem 1.4rem;

    .respond(@sizes[tablet-land], {
      margin-right: 0;
    }, @without-screen);
  }

  &_right {
    grid-column: end / span 1;
    justify-self: start;

    margin-left: 1rem;
    padding: 1.9rem 1.4rem 2.1rem 1.5rem;

    .respond(@sizes[tablet-land], {
      margin-left: 0;
    }, @without-screen);
  }
}

.transformed {
  transform: translateY(-15vh);

  .respond(@sizes[tablet-land], {
    transform: none;
  }, @without-screen);
}

.popular-posts-container {
  &__posts {
    grid-column: col-start 1 / col-end 12;

    padding: 3rem 0;
  }
}

.most-read-container {
  padding: 3rem 0;

  background: url("/images/mock/blog/most-read.jpg") no-repeat @most-read-posts-background;

  &__posts {
    grid-column: col-start 1 / col-end 12;
  }
}

.section-container {
  &__left {
    grid-column: col-start 1 / col-end 8;
  }

  &__right {
    grid-column: col-start 9 / col-end 12;
  }
}

.published-trending-container {
  &__left {
    grid-column: col-start 1 / col-end 9;
  }

  &__right {
    grid-column: col-start 10 / col-end 12;
  }
}

.section-container,
.published-trending-container {
  column-gap: 3rem;

  padding: 5rem 0;

  &__posts-list {
    margin-bottom: 3.5rem;
  }

  .respond(@sizes[tablet-land], {
    column-gap: 0;

    &__left,
    &__right {
      grid-column: col-start 1 / col-end 12;
    }
  }, @without-screen);
}
</style>
