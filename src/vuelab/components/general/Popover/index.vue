<template>
  <div
    v-hoisted
    :style="style"
    class="vue-lab__popover"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'

const props = defineProps({
  width: String,
  height: String,
  left: String,
  top: String,
  right: String,
  bottom: String,
  centered: { type: Boolean, default: false },
  reference: [HTMLElement, Object, String, Function],
  position: {
    type: String,
    default: 'top',
    validator: v =>
      ['top', 'top:bottom', 'bottom:top', 'bottom', 'left', 'right'].includes(v),
  },
  alignment: {
    type: String,
    default: undefined,
    validator: v => [undefined, 'left', 'right'].includes(v),
  },
  margin: {
    type: [String, Number],
    default: 0,
  },
})

const emit = defineEmits(['close'])
const style = ref({})

function getReferenceElement() {
  if (!props.reference) {
    return null
  }
  if (props.reference instanceof HTMLElement) {
    return props.reference
  }
  if (props.reference?.$el) {
    return props.reference.$el
  }
  if (typeof props.reference === 'function') {
    return props.reference()
  }
  return null
}

function setStyle() {
  const refEl = getReferenceElement()
  if (!refEl) {
    return
  }

  const rect = refEl.getBoundingClientRect()
  let { width, height, left, top, right, bottom, position, alignment } = props

  if (!alignment) {
    alignment =
      style.value.width > window.innerWidth - rect.left &&
      rect.right > style.value.width
        ? 'right'
        : 'left'
    width = Math.max(style.value.width, rect.width)
  }

  if (alignment === 'left') {
    left = rect.left + 'px'
  } else {
    right = window.innerWidth - rect.right + 'px'
  }

  switch (position) {
    case 'top':
      top = rect.top + +props.margin + 'px'
      break
    case 'top:bottom':
      top = rect.bottom + +props.margin + 'px'
      break
    case 'bottom':
      bottom = window.innerHeight - rect.bottom - +props.margin + 'px'
      break
    case 'bottom:top':
      bottom = window.innerHeight - rect.bottom - +props.margin + 'px'
      break
    case 'left':
      left = rect.left - (width || 0) + 'px'
      break
    case 'right':
      left = rect.right + +props.margin + 'px'
      break
  }

  style.value = {
    width: width ? width + 'px' : undefined,
    height: height ? height + 'px' : undefined,
    left: props.centered ? '50%' : left,
    top: props.centered ? '50%' : top,
    transform: props.centered ? 'translate(-50%, -50%)' : undefined,
    right,
    bottom,
    position: 'absolute',
    zIndex: 999,
  }
}

function close(e) {
  emit('close', e)
}

onMounted(() => {
  nextTick(setStyle)
  window.addEventListener('resize', setStyle)
  window.addEventListener('scroll', setStyle, true)
})

watch(
  () => [props.reference, props.width, props.height, props.position, props.alignment],
  () => nextTick(setStyle)
)
</script>

<style scoped>
  .vue-lab__popover {
    position: absolute;
    overflow: hidden;
    z-index: 999;
    font-family: var(--vue-lab-font-family);
  }
</style>
