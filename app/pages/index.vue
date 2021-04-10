<template lang="pug">
  .container
    h2.class Hello
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({})
</script>

<style lang="less">
@test: green;

.class {
  grid-column: col-start 2 / span 2;
}
</style>
