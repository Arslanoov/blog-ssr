<template lang="pug">
  .address-list
    .address-list__item(v-for=`address in list`, :key=`address.id`)
      img(:src=`address.image`, alt="").address-list__image
      .address-list__content
        h4.address-list__name.address-list__element {{ address.name }}
        .address-list__address.address-list__element {{ address.address }}
        a(:href=`address.link`, target="_blank").address-list__link.address-list__element.
          View {{ address.name }} office in Google Maps
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    list: {
      // TODO: Array<AddressInterface>
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="less" scoped>
.address-list {
  display: flex;
  justify-content: space-between;

  margin: 5rem 0;

  .respond(@sizes[desktop-sm], {
    flex-direction: column;
    justify-content: center;
  }, @without-screen);

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .respond(@sizes[desktop-sm], {
      justify-content: flex-start;
    }, @without-screen);

    .respond(@sizes[tablet], {
      flex-direction: column;
      justify-content: center;
    }, @without-screen);

    &:not(:last-of-type) {
      .respond(@sizes[desktop-sm], {
        margin-bottom: 2rem;
      }, @without-screen);

      .respond(@sizes[tablet], {
        margin-bottom: 5rem;
      }, @without-screen);
    }
  }

  &__content {
    color: @address-list-content-color;

    .respond(@sizes[tablet], {
      width: 100%;
    }, @without-screen);
  }

  &__image,
  &__name {
    .pointer-on-hover();
  }

  &__image {
    margin-right: 3rem;

    .respond(@sizes[tablet], {
      width: 100%;

      margin-right: 0;
      margin-bottom: 1.5rem;
    }, @without-screen);
  }

  &__element {
    margin-bottom: 2rem;
  }

  &__name {
    font-size: @address-list-font-size;
    font-weight: @address-list-font-weight;
  }

  &__address {
    font-size: @address-list-address-font-size;
  }

  &__link {
    font-size: @address-list-link-font-size;

    color: @address-list-link-color;

    text-decoration: underline;
  }
}
</style>
