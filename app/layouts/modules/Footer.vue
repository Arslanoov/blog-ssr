<template lang="pug">
  footer.footer
    .container.footer__container
      .footer__content
        Deals().footer__deals
        .footer__columns
        img(src="/images/logo.png", alt="").footer__logo
        .footer__copyright 2020. All Rights Reserved.
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

import Deals from "~/components/common/newsletter/Deals.vue"

export default defineComponent({
  components: {
    Deals
  }
})
</script>

<style lang="less" scoped>
.footer {
  padding: 3rem 0;

  color: @footer-color;
  background-color: @footer-background-color;

  &__content {
    grid-column: col-start 3 / col-end 10;

    display: flex;
    flex-direction: column;
    align-items: center;

    .respond(@sizes[tablet], {
      grid-column: col-start 1 / col-end 12;
    }, @without-screen);
  }

  &__deals {
    width: 100%;
  }

  &__copyright {
    font-size: @footer-copyright-font-size;
  }
}
</style>
