<template>
  <div class="vue-lab__description">
    {{ description }}
  </div>
</template>

<script setup>
const props = defineProps({
  description: String
})
</script>

<style lang="scss" scoped>
  @use '../../../../styles/index.scss' as *;
  .vue-lab__description {
    color: clr($light, text-muted);
    font-size: 13px;
    border-left: clr($light, gray-300) 4px solid;
    padding-left: 16px;
    line-height: 1.4;
    font-family: var(--font-family);
  }
</style>