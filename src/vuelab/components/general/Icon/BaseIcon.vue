<template>
  <span
    class="icon"
    :style="iconStyles"
    role="img"
  >
    <svg
      :viewBox="viewBox"
      :stroke-width="2"
      :width="width"
      :height="height"
      :class="[
        'icon-svg',
        $attrs?.class,
      ]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="handleClick"
    >
      <slot />
    </svg>
  </span>
</template>

<script setup>
import { computed } from 'vue';

const emit = defineEmits(['click'])
const props = defineProps({
  viewBox: {
    type: String,
    default: '0 0 24 24'
  },
  size: {
    type: [String, Number],
    default: 24
  },
  color: {
    type: String,
    default: 'currentColor'
  },
  name: {
    type: [String],
    default: null
  },
  width: {
    type: [String, Number],
    default: 24
  },
  height: {
    type: [String, Number],
    default: 24
  },
  palette: {
    type: String,
    default: 'primary',
    validator: (v) => ['success', 'error', 'warning', 'info', 'primary', 'accent', 'neutral'].includes(v),
  }
});

const sizeValue = computed(() => isNaN(props.size) ? props.size : `${props.size}px`)

const iconStyles = computed(() => {
  return {
    '--icon-size': sizeValue.value,
    'color': props.color
  }
})

const handleClick = () => emit('click')

</script>

<style scoped>
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--icon-size);
  height: var(--icon-size);
}

.icon :deep(svg) {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: currentColor;
}
</style>