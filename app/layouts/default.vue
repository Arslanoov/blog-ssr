<template lang="pug">
  .layout
    Header()
    Nuxt()
    Footer()
</template>

<script lang="ts">
import Vue from "vue"

import Header from "@/components/modules/Header.vue"
import Footer from "@/components/modules/Footer.vue"

export default Vue.extend({
  components: {
    Header,
    Footer,
  },
})
</script>

<style lang="less"></style>
