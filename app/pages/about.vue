<template lang="pug">
  .about
    .container.about-container
      .about-container__content
        .about-container__top
          h2.about-container__title About
          .about-container__line
          .about-container__info.
            If you found your way over here, it would appear you like to travel. You and me both, so welcome!
        img(src="/images/about/1.jpg", alt="").about-container__image

    .container.slider-container
      img(src="/images/pagination/left-arrow.png", alt="").pagination__arrow.pagination__arrow_left
      .slider-container__posts
        PostsHorizontalSlider()
      img(src="/images/pagination/right-arrow.png", alt="").pagination__arrow.pagination__arrow_right

    .container.about-container
      .about-container__content
        p.about-container__paragraph.about-container__paragraph_main.
          I supposed I should tell you a bit about myself since you’ve clicked onmy ‘About’ page and all. My name is
          Audrey and That Backpacker is the place where I share my love for travel and where I try to help you travel
          in a way that suits your budget and your lifestyle. Travel can be done so many different ways! For some, that
          might mean a one week stay at an all inclusive resort, a two week whirlwind tour of Europe, a month long
          language course abroad, a six month internship in a developing community, or a year long RTW backpacking
          adventure.

        .about-container__group
          .about-container__content
            h4.about-container__paragraph-title Some thoughts on motivation
            p.about-container__paragraph.
              I supposed I should tell you a bit about myself since you’ve clicked on my ‘About’ page and all. My name is
              Audrey and That Backpacker is the place where I share my love for travel and where I try to help you travel in
              a way that suits your budget and your lifestyle. Travel can be done so many different ways! For some, that
              might mean a one week stay at an all inclusive resort, a two week whirlwind tour of Europe, a month long
              language course abroad, a six month internship in a developing community, or a year long RTW backpacking
              adventure.
            p.about-container__paragraph.
              I supposed I should tell you a bit about myself since you’ve clicked on my ‘About’ page and all. My name is
              Audrey and That Backpacker is the place where I share my love for travel and where I try to help you travel
              in a way that suits your budget and your lifestyle.
          img(src="/images/about/2.jpg", alt="").about-container__paragraph-image

        .about-container__group
          .about-container__content
            h4.about-container__paragraph-title Our History
            p.about-container__paragraph.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolore
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur,
          img(src="/images/about/3.jpg", alt="").about-container__paragraph-image
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

import PostsHorizontalSlider from "~/components/common/post/horizontal-slider/PostsHorizontalSlider.vue"

export default defineComponent({
  components: {
    PostsHorizontalSlider
  }
})
</script>

<style lang="less" scoped>
.about-container {
  margin: 4rem 0;

  color: @about-color;

  &__content {
    grid-column: col-start 1 / col-end 12;
  }

  &__image {
    width: 100%;
  }

  &__top {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-family: @about-title-font-family;
    font-size: @about-title-font-size;
    font-weight: @about-title-font-weight;
  }

  &__line {
    width: 40rem;
    height: .1rem;

    margin: 3rem 0;

    background-color: @about-line-background-color;

    .respond(@sizes[mobile], {
      width: 100%;
    }, @without-screen);
  }

  &__info {
    position: relative;

    margin-bottom: 2.9rem;

    font-size: @contact-info-font-size;
  }

  &__group {
    display: flex;
    justify-content: space-between;

    .respond(@sizes[tablet], {
      flex-direction: column;
      justify-content: flex-start;
    }, @without-screen);

    &:not(:last-of-type) {
      margin-bottom: 6rem;
    }
  }

  &__paragraph {
    font-size: @about-paragraph-font-size;
    opacity: @about-paragraph-opacity;

    &,
    &-title {
      margin-bottom: 2rem;
    }

    &-title {
      font-family: @about-paragraph-title-font-family;
      font-size: @about-paragraph-title-font-size;
      font-weight: @about-paragraph-title-font-weight;
    }

    &-image {
      margin-left: 6rem;

      .respond(@sizes[tablet], {
        margin-left: 0;
        max-width: 100%;
      }, @without-screen);
    }

    &_main {
      margin: 2rem 0;

      font-size: @about-main-paragraph-font-size;
    }
  }
}

.slider-container {
  align-items: center;

  &__posts {
    grid-column: col-start 1 / col-end 12;
  }
}

.pagination__arrow {
  border: 1px solid #ecf0ff;
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
</style>
