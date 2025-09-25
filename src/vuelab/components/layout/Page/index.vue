<template>
  <div class="vue-lab">
    <slot />
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  .vue-lab {
    display: grid;
    grid-template-columns: 1fr 300px;
    overflow: hidden;
  }
</style>
