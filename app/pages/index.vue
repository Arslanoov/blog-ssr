<template lang="pug">
  h2.class Hello
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="less">
@test: green;

.class {
  color: @test;
}
</style>
