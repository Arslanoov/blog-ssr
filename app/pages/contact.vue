<template lang="pug">
  .container.contact-container
    .contact-container__content
      h2.contact-container__title Contact us
      .contact-container__line
      .contact-container__info.
        Feel free to get in touch if you have any questions, comments, want to say hello, or are interested in
        working with me
      .contact-container__form.form
        img(src="/images/contact/map.png", alt="").contact-container__map
        .form__overlay
          .form__text Send me a message at: youremail@gmail.com
          .form__row
            input(type="text", placeholder="Name").form__input
            input(type="email", placeholder="Your email address").form__input
            input(type="text", placeholder="Subject").form__input
          .form__row
            textarea(rows=17).form__textarea
          Button(content="Send now", padding="1.6rem 3.3rem").form__send

      AddressList(:list=`addresses`)
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api"

import Button from "~/components/base/button/Button.vue"
import AddressList from "~/components/common/contact/address-list/AddressList.vue"

export default defineComponent({
  components: {
    AddressList,
    Button,
  },

  setup() {
    const addresses = ref([
      {
        image: "/images/mock/contact/addresses/1.jpg",
        name: "London",
        address: "3 Waterhouse Square, 138-142 \nHolborn London, England EC1N 2SW\nUK",
        link: "/",
      },
      {
        image: "/images/mock/contact/addresses/1.jpg",
        name: "New York City",
        address: "627 Broadway, 9th Floor\nNew York, NY 10012\nUSA",
        link: "/",
      },
    ])

    return {
      addresses,
    }
  },
})
</script>

<style lang="less" scoped>
.contact-container {
  margin: 5rem 0;

  &__content {
    grid-column: col-start 1 / col-end 12;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-family: @contact-title-font-family;
    font-size: @contact-title-font-size;
    font-weight: @contact-title-font-weight;
  }

  &__line {
    margin: 3rem 0;

    background-color: @contact-line-background-color;
    width: 40rem;
    height: 0.1rem;

    .respond(@sizes[mobile], {
      width: 100%;
    }, @without-screen);
  }

  &__info {
    position: relative;

    margin-bottom: 2.9rem;

    text-align: center;

    font-size: @contact-info-font-size;
  }

  &__form {
    position: relative;

    width: 100%;

    background-color: @contact-form-background-color;

    .respond(@sizes[tablet-land], {
      overflow-x: hidden;
    }, @without-screen);
  }

  &__map {
    position: absolute;

    top: 50%;
    left: 50%;

    width: 100%;

    transform: translateX(-50%) translateY(-50%);

    .respond(@sizes[tablet-land], {
      width: auto;
      height: 100%;
    }, @without-screen);
  }
}

.form {
  padding: 7.2rem 15rem;

  .respond(@sizes[desktop-sm], {
    padding: 3.5rem 7.5rem;
  }, @without-screen);

  .respond(@sizes[tablet-land], {
    padding: 1.5rem;
  }, @without-screen);

  &__overlay {
    /* TODO: Fix */
    * {
      z-index: 3;
    }
  }

  &__text,
  &__send {
    position: relative;
  }

  &__text {
    margin-bottom: 3rem;

    font-family: @contact-text-font-family;
    font-size: @contact-text-font-size;
    font-weight: @contact-text-font-weight;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 3rem;

    .respond(@sizes[tablet-land], {
      flex-direction: column;
      justify-content: center;
    }, @without-screen);
  }

  &__send {
    .pointer-on-hover();
  }

  &__input,
  &__textarea {
    flex-grow: 1;

    padding: 1.8rem 1.5rem;

    border: @contact-input-textarea-border;
    outline: 0;

    .respond(@sizes[tablet-land], {
      width: 100%;
    }, @without-screen);

    &:not(:last-of-type) {
      margin-right: 1.5rem;

      .respond(@sizes[tablet-land], {
        margin-right: 0;
        margin-bottom: 1.5rem;
      }, @without-screen);
    }

    &::placeholder {
      color: @contact-input-placeholder-color;
    }
  }
}
</style>
