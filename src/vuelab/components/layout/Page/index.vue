<template>
  <div class="vue-lab">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  isControls: { type: Boolean, default: () => true },
})

const gridTemplate = computed(() => (props.isControls ? '1fr 300px' : '1fr'))
</script>

<style lang="scss" scoped>
.vue-lab {
  display: grid;
  grid-template-columns: v-bind(gridTemplate);
  overflow: hidden;
}
</style>
