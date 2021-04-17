<template lang="pug">
  .layout
    Header()
    Nuxt()
    Footer()
</template>

<script lang="ts">
import Vue from "vue"

import Header from "@/layouts/modules/Header.vue"
import Footer from "@/layouts/modules/Footer.vue"

export default Vue.extend({
  components: {
    Header,
    Footer
  }
})
</script>

<style lang="less"></style>
