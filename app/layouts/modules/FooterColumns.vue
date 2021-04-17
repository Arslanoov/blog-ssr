<template lang="pug">
  .footer-columns
    .footer-columns__item
      .footer-columns__name Contact
      .footer-columns__value.
        Tel: + 88 01912704287
        Mail: love@youremail.com
      .footer-columns__value.
        Add: 19 Stropking Street,
        North Melbourne VIC 3051, USA

    .footer-columns__item
      .footer-columns__name Archives
      .footer-columns__value November 2019
      .footer-columns__value October 2019
      .footer-columns__value September 2019
      .footer-columns__value August 2019

    .footer-columns__item
      .footer-columns__name Recent Post
      .footer-columns__value How to get to Kanchanaburi from Bangkok
      .footer-columns__value Best Christmas Gifts for Travelers
      .footer-columns__value Ultimate Europe Travel Bucket List for This Summer
      .footer-columns__value 5 Things to do in Barcelona This Summer

    .footer-columns__item
      .footer-columns__name Connect with us
      .footer-columns__value
        Socials(title="")
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

import Socials from "~/components/common/social/Socials.vue"

export default defineComponent({
  components: {
    Socials
  }
})
</script>

<style lang="less" scoped>
.footer-columns {
  display: grid;
  grid-template-columns: repeat(4, minmax(min-content, 1fr));
  grid-template-rows: auto;

  .respond(@sizes[tablet-land], {
    grid-template-columns: repeat(2, minmax(min-content, 1fr));

    column-gap: 3rem;
    row-gap: 5rem;
  }, @without-screen);

  .respond(@sizes[tablet], {
    grid-template-columns: repeat(1, minmax(min-content, 1fr));
  }, @without-screen);

  &__item {
    display: flex;
    flex-direction: column;
  }

  &__name {
    margin-bottom: 3rem;

    font-family: @footer-column-name-font-family;
    font-size: @footer-column-name-font-size;
    font-weight: @footer-column-name-font-weight;

    .respond(@sizes[tablet-land], {
      margin-bottom: 2rem;
    }, @without-screen);

    .respond(@sizes[mobile], {
      margin-bottom: 1rem;
    }, @without-screen);
  }

  &__value {
    font-size: @footer-column-name-value-font-size;

    opacity: @footer-column-value-opacity;

    .pointer-on-hover();

    &:not(:last-of-type) {
      margin-bottom: 2rem;
    }
  }
}
</style>
