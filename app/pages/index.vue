<template lang="pug">
  .home
    .container.main-card-container
      MainCard(:post=`post`).main-card-container__card

    .container.cards-grid__container
      img(src="/images/pagination/left-arrow.png", alt="").pagination__arrow.pagination__arrow_left
      .cards-grid__cards
        CardsGrid(:posts=`posts`)
      img(src="/images/pagination/right-arrow.png", alt="").pagination__arrow.pagination__arrow_right

    .transformed
      .container
        img(src="/images/pagination/left-arrow.png", alt="").pagination__arrow.pagination__arrow_left
        .categories
          Category(v-for="category in categories", :key=`category.id`, :category=`category`).categories__item
        img(src="/images/pagination/right-arrow.png", alt="").pagination__arrow.pagination__arrow_right

      .container.popular-posts-container
        PopularPosts(:posts=`popularPosts`).popular-posts-container__posts

      .container.most-read-container
        MostReadPosts(:posts=`mostReadPosts`).most-read-container__posts

      .container.section-container
        .section-container__left
          PostsList(:posts=`postsList`).section-container__posts-list
          Newsletter().section-container__newsletter
        .section-container__right
          PostsRollupList()
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/composition-api"

import MainCard from "~/components/common/post/main-card/MainCard.vue"
import CardsGrid from "~/components/common/post/cards-grid/CardsGrid.vue"
import Category from "~/components/common/category/Category.vue"
import PopularPosts from "~/components/common/post/popular/PopularPosts.vue"
import MostReadPosts from "~/components/common/post/most-read/MostReadPosts.vue"
import Newsletter from "~/components/common/newsletter/Newsletter.vue"
import PostsList from "~/components/common/post/list/PostsList.vue"
import PostsRollupList from "~/components/common/post/rollup-list/PostsRollupList.vue"

export default defineComponent({
  components: {
    MainCard,
    CardsGrid,
    Category,
    PopularPosts,
    MostReadPosts,
    Newsletter,
    PostsList,
    PostsRollupList
  },
  setup() {
    const post = reactive({
      category: "Travel",
      createdAt: "January 02, 2020",
      author: {
        url: "/images/mock/blog/avatar.png",
        name: "Masum Rana"
      },
      title: "Ultimate Europe Travel Bucket List for This Summer",
      short: "Europe may be famous for its history, monuments and sightseeing," +
        " but summer is for enjoying the outdoors. For hiking, cycling, swimming, " +
        "splashing around in the water and exploring your limits. "
    })

    const posts = ref([
      {
        id: 1,
        createdAt: "January 02, 2020",
        title: "It's now easier to get between the US and Cape Town ",
        image: "/images/mock/blog/posts/1.png"
      },
      {
        id: 2,
        createdAt: "January 02, 2020",
        title: "The best Vietnam islands to visit",
      },
      {
        id: 3,
        createdAt: "January 02, 2020",
        title: "12 Things to do in Barcelona in September",
      },
      {
        id: 4,
        createdAt: "January 02, 2020",
        title: "5 Things to do in Barcelona This Summer That Are Not in Your Guide Book",
        image: "/images/mock/blog/posts/2.jpg",
        short: "The plan in the beginning was always to leave after a year." +
          " I’ve spent my share of summers here, as I tend to leave vacations " +
          "for the winter. "
      }
    ])

    const categories = ref([
      {
        id: 1,
        name: "Travel",
        background: "/images/mock/category/mock.jpg",
        postsCount: 30
      },
      {
        id: 2,
        name: "Lifestyle",
        background: "/images/mock/category/mock.jpg",
        postsCount: 60
      },
      {
        id: 3,
        name: "Beauty",
        background: "/images/mock/category/mock.jpg",
        postsCount: 60
      },
      {
        id: 4,
        name: "Technology",
        background: "/images/mock/category/mock.jpg",
        postsCount: 60
      }
    ])

    const popularPosts = ref([
      {
        id: 1,
        category: "Travel",
        createdAt: "January 02, 2020",
        title: "Travelling around the holidays\n" +
          " is always a bit more",
        short: "Today I’m going to share some of my top tips for booking with\n" +
          "AirBnB. For those of you who may not yet be familiar",
        image: "/images/mock/blog/popular-posts/1.jpg"
      },
      {
        id: 2,
        category: "Travel",
        createdAt: "January 02, 2020",
        title: "5 Things to do in Barcelona\n" +
          "This Summer That Are\n" +
          "Not in Your Guide Book",
        short: "Today I’m going to share some of my top tips \n" +
          "for booking with AirBnB. For those of you\n" +
          "who may not yet be familiar",
        image: "/images/mock/blog/popular-posts/1.jpg",
        author: {
          url: "/images/mock/avatar/1.png",
          name: "Afaty Poprita"
        }
      },
      {
        id: 3,
        category: "Beauty",
        createdAt: "January 02, 2020",
        title: "The Islands Of Japan \n" +
          "Stretch Down The Asian\n" +
          "Mainland",
        image: "/images/mock/blog/popular-posts/2.jpg",
        author: {
          url: "/images/mock/avatar/1.png",
          name: "Afaty Poprita"
        }
      },
      {
        id: 4,
        category: "Beauty",
        createdAt: "January 02, 2020",
        title: "Visual Elements — Basic Things\n" +
          "That Can Be Seen",
        short: "The plan in the beginning was always to leave after a year." +
          " I’ve spent my share of summers here, as I tend to leave vacations " +
          "for the winter. ",
        image: "/images/mock/blog/popular-posts/3.jpg",
        author: {
          url: "/images/mock/avatar/2.png",
          name: "Afaty Poprita"
        }
      }
    ])

    const mostReadPosts = ref([
      {
        id: 1,
        category: "Beauty",
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/most-read-posts/1.jpg",
        title: "Travelling around the holidays\n" +
          " is always a bit more"
      },
      {
        id: 2,
        category: "Design",
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/most-read-posts/1.jpg",
        title: "Travelling around the holidays\n" +
          " is always a bit more"
      },
      {
        id: 3,
        category: "Travel",
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/most-read-posts/1.jpg",
        title: "Travelling around the holidays\n" +
          " is always a bit more"
      },
      {
        id: 4,
        category: "Food",
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/most-read-posts/1.jpg",
        title: "Travelling around the holidays\n" +
          " is always a bit more"
      }
    ])

    const postsList = ref([
      {
        id: 1,
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/posts/3.jpg",
        title: "It's now easier to get between\n" +
          "the US and Cape Town "
      },
      {
        id: 2,
        createdAt: "January 02, 2020",
        image: "/images/mock/blog/posts/3.jpg",
        title: "The 12 Best Beaches in Southern\n" +
          "Vietnam"
      },
    ])

    return {
      post,
      posts,
      categories,
      popularPosts,
      mostReadPosts,
      postsList
    }
  }
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

.categories {
  &__container {
    margin: 5rem 0;

    .respond(@sizes[tablet-land], {
      margin: 0;
    }, @without-screen);
  }
}

.pagination__arrow {
  margin-top: 7.5rem;

  border-radius: 5rem;

  background: @cards-grid-pagination-arrow-background;

  .pointer-on-hover();

  .respond(@sizes[tablet-land], {
    background-color: @cards-grid-pagination-arrow-phone-background;

    transform: scale(.7);
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

.categories {
  grid-column: col-start 1 / col-end 12;

  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;

  &__item {
    margin-bottom: 3rem;
  }

  .respond(@sizes[tablet], {
    flex-direction: column;
    justify-content: center;
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

  background: url("/images/blog/most-read.jpg") no-repeat @most-read-posts-background;

  &__posts {
    grid-column: col-start 1 / col-end 12;
  }
}

.section-container {
  column-gap: 3rem;

  padding: 5rem 0;

  &__left {
    grid-column: col-start 1 / col-end 8;
  }

  &__posts-list {
    margin-bottom: 3.5rem;
  }

  &__right {
    grid-column: col-start 9 / col-end 12;
  }

  .respond(@sizes[tablet-land], {
    &__left,
    &__right {
      grid-column: col-start 1 / col-end 12;
    }
  }, @without-screen);
}
</style>
