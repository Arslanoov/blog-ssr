<template lang="pug">
  footer.footer
    .container.footer__container
      .footer__content
        Deals().footer__deals
        FooterColumns().footer__columns
        nuxt-link(to="/").footer__link
          img(src="/images/logo.png", alt="").footer__logo
        .footer__copyright 2020. All Rights Reserved.
</template>

<script lang="ts">
import { defineComponent } from "@nuxt/composition-api"

import Deals from "~/components/common/newsletter/Deals.vue"
import FooterColumns from "~/components/modules/FooterColumns.vue"

export default defineComponent({
  components: {
    Deals,
    FooterColumns,
  },
})
</script>

<style lang="less" scoped>
.footer {
  padding: 8rem 0 3rem;

  color: @footer-color;
  background-color: @footer-background-color;

  &__content {
    grid-column: col-start 1 / col-end 12;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__deals {
    width: 100%;

    margin-bottom: 5rem;
  }

  &__columns {
    margin-bottom: 10rem;
  }

  &__logo {
    margin-bottom: 3rem;
  }

  &__copyright {
    font-size: @footer-copyright-font-size;
  }
}
</style>
