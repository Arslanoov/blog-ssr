<template lang="pug">
  .container.single-container
    .single-container__content
      .single-container__preview
        .single-container__category {{ post.category }}
        .single-container__title {{ post.title }}
        .single-container__date {{ post.createdAt }}
        .single-container__author
          img(:src=`post.author.url`, alt="").single-container__author-image
          .single-container__author-name {{ post.author.name }}
        .single-container__short {{ post.short }}
      .single-container__preview-bottom
        Socials(title="", :items=`socials`).single-container__socials
        font-awesome-icon(:icon=`["far", "bookmark"]`).single-container__bookmark

      img(:src=`post.image`, alt="").single-container__image

      .fluid-container.single-container__row
        .single-container__left
          // TODO: Change .content to post.content
          .content
            .content__title How Long Will Your Trip Be?
            p.content__text.
              Although it’s not impossible to backpack across Europe cheaply (You can – that’s why you’re reading this!), the dollar stretches much less there than in Southeast Asia. For those with less money and time, going somewhere a bit cheaper pays.
            .content__row
              img(src="/images/mock/blog/single/2.jpg", alt="").content__image
              img(src="/images/mock/blog/single/3.jpg", alt="").content__image
            p.content__text.
              There are 196 countries in the world. Whether you are a seasoned veteran or a newly bitten by the travel bug, it can be difficult to decide where to go. Where you want to go first is widely dependent on your personal preferences. Once a year, go Some place you’ve Never been before.
            p.content__text.
              WeChat mini programs are an essential part of the Chinese user experience,” Tencent WeChat team said. “Our partnership with Udacity is offering a great way of teaching engineers around the world how to enter the Chinese market
            img(src="/images/mock/blog/single/4.jpg", alt="").content__image.content__image_full
            p.content__text You can wander through the rooms of the Ice Hotel, where everything (except for bedding and covers) is made of ice and then sip a cocktail from an ice glass at the Ice Bar. The bookshelves at the Ice Café are, you guessed it,
            .content__group
              .content__line
              .content__quote.
                “The mystical world of snow invites guests to experience the magic of winter,” the Ice Village staff told Lonely Planet. Winter magic is also tailor-made for kids, with a whole set of activities ranging from playing ice instruments to ice sculpturing classes.
            p.content__text.
              The Ice Village is connected to the Hoshino Resort Tomamu, and it’s open both for day trips and longer stays for the resort’s guests— starting from the pre-opening in December and the official opening in January, going on until March 2019. The entrance fee is 500 yen, or US$5. The Ice Hotel will be in operation from 19 – 28 January of 2019.
          .single-container__left-bottom
            .single-container__group
              .single-container__share
                font-awesome-icon(:icon=`["fas", "share-alt"]`).single-container__share-icon
                span.single-container__share-text Share The Post
              .single-container__socials
                Socials(title="", :items=`bottomSocials`).single-container__socials

            .single-container__group
              Tags(:tags=`post.tags`).single-container__tags
              .single-container__comments-count {{ post.commentsCount }} Comments

          TimelinePosts(:prev-post=`prevPost`, :next-post=`nextPost`)

          CommentsList(:items=`comments`)
          CommentSendForm()

        .single-container__right
          Sidebar(with-categories=true)
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/composition-api"

import Socials from "~/components/base/social/Socials.vue"

import Sidebar from "~/components/common/sections/sidebar/Sidebar.vue"
import Tags from "~/components/common/tag/Tags.vue"
import TimelinePosts from "~/components/common/post/timeline/TimelinePosts.vue"
import CommentsList from "~/components/common/comment/list/CommentsList.vue"
import CommentSendForm from "~/components/common/comment/form/CommentSendForm.vue"

export default defineComponent({
  components: {
    Sidebar,

    Socials,
    Tags,
    TimelinePosts,
    CommentsList,
    CommentSendForm,
  },
  setup() {
    const post = reactive({
      category: "Travel",
      createdAt: "January 02, 2020",
      image: "/images/mock/blog/single/1.jpg",
      author: {
        url: "/images/mock/blog/avatar.png",
        name: "Afaty Poprita",
      },
      title: "The Most And Least Visited Countries In The World\n" + "There are 196 countries in the world",
      short:
        "There are 196 countries in the world. Whether you are a seasoned veteran or a newly bitten by the travel bug, it can be difficult to decide where to go.here are 196 \n" +
        "countries in the world",
      // TODO: Change content to post.content
      content: "",
      commentsCount: 3,
      tags: [
        {
          id: 1,
          name: "Travel",
        },
        {
          id: 2,
          name: "Trip",
        },
      ],
    })

    const socials = ref([
      {
        icon: "pinterest",
        url: "https://pinterest.com",
      },
      {
        icon: "facebook",
        url: "https://facebook.com",
      },
      {
        icon: "twitter",
        url: "https://twitter.com",
      },
      {
        icon: "linkedin",
        url: "https://ru.linkedin.com",
      },
      {
        icon: "instagram",
        url: "https://instagram.com",
      },
    ])

    const bottomSocials = ref([
      {
        icon: "facebook",
        url: "https://facebook.com",
      },
      {
        icon: "linkedin",
        url: "https://ru.linkedin.com",
      },
      {
        icon: "google",
        url: "https://google.com",
      },
      {
        icon: "twitter",
        url: "https://twitter.com",
      },
    ])

    const prevPost = reactive({
      id: 1,
      createdAt: "January 02, 2020",
      title: "The Most And Least Visited Countries In The World\n" + "There are 196 countries in the world",
    })

    const nextPost = reactive({
      id: 2,
      createdAt: "January 02, 2020",
      title: "The Most And Least Visited Countries In The World\n" + "There are 196 countries in the world",
    })

    const comments = ref([
      {
        id: 1,
        createdAt: "20 Jan, 2020",
        author: {
          url: "/images/mock/comment/1.jpg",
          name: "Tamim anj",
        },
        content:
          "Before we begin to build your home, we want to get to know you. Through our design \n" +
          "process, we will be asking",
        repliedTo: {
          id: 2,
          createdAt: "8 Jan, 2020",
          author: {
            url: "/images/mock/comment/2.jpg",
            name: "Mahfuz Riad",
          },
          content: "Can you imagine what we will be downloading in another twenty years?",
        },
      },
      {
        id: 3,
        createdAt: "20 Jan, 2020",
        author: {
          url: "/images/mock/comment/1.jpg",
          name: "Tamim anj",
        },
        content:
          "Before we begin to build your home, we want to get to know you. Through our design \n" +
          "process, we will be asking ",
      },
    ])

    return {
      post,
      socials,
      bottomSocials,
      prevPost,
      nextPost,
      comments,
    }
  },
})
</script>

<style lang="less" scoped>
.single-container {
  margin: 5rem 0;

  &__content {
    grid-column: col-start 1 / col-end 12;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: @single-article-color;
  }

  &__preview {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 60%;

    text-align: center;
  }

  &__preview-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-bottom: 1rem;
  }

  &__category {
    margin-bottom: 2rem;
    padding: 0.4rem 1.6rem;

    font-size: @single-article-category-font-size;

    color: @single-article-category-color;
    background-color: @single-article-category-background-color;

    .pointer-on-hover();
  }

  &__title {
    margin-bottom: 1rem;

    font-family: @single-article-title-font-family;
    font-size: @single-article-title-font-size;
    font-weight: @single-article-title-font-weight;
  }

  &__date {
    margin-bottom: 2rem;

    font-size: @single-article-date-font-size;
    text-decoration: underline;
  }

  /* TODO: Base component */
  &__author {
    display: flex;
    align-items: center;

    margin-bottom: 2.5rem;

    .pointer-on-hover();

    &-image {
      width: 3.8rem;
      height: 3.8rem;

      margin-right: 1rem;
    }

    &-name {
      font-size: @single-article-name-font-size;
    }
  }

  &__short {
    margin-bottom: 3rem;

    font-size: @single-article-short-font-size;
    opacity: @single-article-short-opacity;
  }

  &__image {
    width: 100%;

    margin-bottom: 4.5rem;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-bottom: 3rem;
  }

  &__bookmark {
    font-size: @single-article-bookmark-font-size;

    color: @single-article-category-bookmark-color;

    .pointer-on-hover();
  }

  &__row {
    column-gap: 3rem;
  }

  &__left {
    grid-column: col-start 1 / col-end 9;
  }

  &__right {
    grid-column: col-start 10 / col-end 12;
  }

  &__left,
  &__right {
    .respond(@sizes[tablet-land], {
      grid-column: col-start 1 / col-end 12;
    }, @without-screen);
  }

  &__left-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .respond(@sizes[tablet-land], {
      margin: 3rem 0;
    }, @without-screen);

    .respond(@sizes[tablet], {
      flex-direction: column;
      align-items: flex-start;
    }, @without-screen);
  }

  &__group {
    display: flex;
    align-items: center;

    .respond(@sizes[tablet], {
      flex-wrap: wrap;
    }, @without-screen);

    .respond(@sizes[tablet], {
      margin-bottom: 2rem;
    }, @without-screen);
  }

  &__share {
    display: flex;
    align-items: center;

    margin-right: 3.5rem;

    .pointer-on-hover();

    &-icon {
      margin-right: 1.5rem;

      font-size: @single-article-share-icon-font-size;
    }

    &-text {
      font-size: @single-article-share-text-font-size;
    }
  }

  &__tags {
    margin-right: 2rem;
  }

  &__comments-count {
    font-size: @single-article-comments-count-font-size;
  }
}

.content {
  color: #0b0f18;

  &__title {
    font-size: 2.4rem;
    font-weight: 700;
  }

  &__text {
    margin: 3rem 0;

    font-size: 1.6rem;
    opacity: 0.8;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .respond(@sizes[desktop-md], {
      flex-wrap: wrap;
    }, @without-screen);
  }

  &__group {
    display: flex;
    align-items: center;

    width: 85%;
  }

  &__line {
    align-self: stretch;

    width: 1rem;

    padding: 1rem 0;
    margin-right: 1rem;

    background-color: #e68c8c;
  }

  &__quote {
    font-size: 1.8rem;
  }

  &__image {
    &:first-of-type {
      margin-right: 1.8rem;

      .respond(@sizes[tablet-land], {
        margin-right: 0;
      }, @without-screen);
    }

    &:nth-of-type(2) {
      max-width: 70%;
    }

    &:first-of-type,
    &:nth-of-type(2) {
      margin-bottom: 1rem;

      .respond(@sizes[mobile], {
        width: 100%;
        max-width: 100%;
      }, @without-screen);
    }

    &_full {
      width: 100%;
    }
  }
}
</style>
