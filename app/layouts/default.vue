<template lang="pug">
  .layout
    Header()
    Nuxt()
</template>

<script lang="ts">
import Vue from "vue"

import Header from "@/layouts/modules/Header.vue"

export default Vue.extend({
  components: {
    Header
  }
})
</script>

<style lang="less"></style>
