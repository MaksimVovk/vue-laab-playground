<template>
  <div class="vue-lab__color-block">
    <div class="vue-lab__color-block__title">{{ title }}</div>
    <div class="vue-lab__color-block__content">
      <Palette
        v-for="(palette, pi) of pallets"
        :key="`palette-${palette.title}-${pi}`"
        :title="palette.title"
        :colors="palette.colors"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Palette from './Palette.vue'

const props = defineProps({
  title: { type: String, default: () => 'palette' },
  options: { type: Array, default: () => [] },
})

const pallets = computed(() => {
  const keys = [...new Set(props.options.map((it) => it.colorGroupName))]
  return keys.map((it) => {
    return {
      title: it,
      colors: props.options.filter((f) => f.colorGroupName == it),
    }
  })
})

// [
//     { id: 'error-900', name: 'error-900', value: '#311107', group: 'Primary Colors', colorGroupName: 'error' },

// { id: 'purple-50', name: 'purple-50', value: '#F6F3FF', group: 'Secondary Colors', colorGroupName: 'purple' },
// ]
</script>

<style lang="scss" scoped>
@use '../../../../styles/index.scss' as *;
.vue-lab__color-block {
  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 32px;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
  }
}
</style>
