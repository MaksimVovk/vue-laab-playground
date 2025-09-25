<template>
  <div class="ctrl-layout">
    <div class="ctrl-layout__title">{{ name }}</div>
    <div class="ctrl-layout__body">
      <slot />
    </div>
  </div>
</template>

<script setup>
  defineProps({
    name: { type: String, required: true },
  })
</script>

<style lang="scss" scoped>
  @use '../../../styles/index.scss' as *;

  .ctrl-layout {
    &:not(:first-child) {
      padding-top: 20px;
    }
    &:not(:last-child) {
      border-bottom: 1px solid clr($light, border-primary);
      padding-bottom: 12px;
    }
    &__title {
      color: clr($light, text-muted);
      font-size: 13px;
      margin-bottom: 8px;
    }
  }
</style>
