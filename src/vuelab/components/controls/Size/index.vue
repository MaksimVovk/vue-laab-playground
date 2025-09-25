<template>
  <CtrlLayout name="Size">
  <div class="vue-lab__size" ref="root">
    <div class="vue-lab__size-track" ref="track" @click="onTrackClick($event)">
      <div
        v-for="(s, i) in options"
        :key="i"
        :class="['vue-lab__size-tick', {
          'vue-lab__size-tick_active': i === currentIndex
        }]"
        :style="{ left: positions[i] + '%' }"
        @click.stop="selectIndex(i)"
        role="button"
        :aria-label="`Select ${s}`"
        tabindex="0"
        @keydown.enter.prevent="selectIndex(i)"
        @keydown.space.prevent="selectIndex(i)"
      />

      <div
        class="vue-lab__size-range-fill"
        :style="{ width: positions[currentIndex] + '%' }"
        aria-hidden="true"
      />

      <div
        class="vue-lab__size-handle"
        ref="handle"
        :style="{ left: positions[currentIndex] + '%' }"
        role="slider"
        :aria-valuemin="0"
        :aria-valuemax="options.length - 1"
        :aria-valuenow="currentIndex"
        :aria-valuetext="String(displayValue)"
        tabindex="0"
        @pointerdown.prevent="startDrag"
        @keydown.left.prevent="onArrow(-1)"
        @keydown.right.prevent="onArrow(1)"
        @keydown.up.prevent="onArrow(1)"
        @keydown.down.prevent="onArrow(-1)"
      />
    </div>

    <div class="vue-lab__size-value">
     {{ value }}
    </div>
  </div>
</CtrlLayout>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import CtrlLayout from '../CtrlLayout.vue';

const props = defineProps({
  value: { type: [Number, String], default: 0 },
  options: { type: Array, default: () => [] },
})

const emit = defineEmits(['input']);

const currentIndex = ref(0);
const root = ref(null);
const track = ref(null);
const handle = ref(null);

const optionsCount = computed(() => props.options.length);

const valueToIndex = (v) => {
  if (typeof v === 'number' && Number.isInteger(v) && v >= 0 && v < optionsCount.value) {
    return v
  }

  const idx = props.options.findIndex(x => String(x) === String(v))
  return idx >= 0 ? idx : 0
}

watch(() => props.value, (v)=>{
  currentIndex.value = valueToIndex(v)
}, { immediate: true })

watch(currentIndex, (id)=>{
  emit('input', props.options[id]);
});

const positions = computed(() => {
  const n = optionsCount.value
  if (n === 1) {
    return [0]
  }
  return Array.from({ length: n }, (_, i) => (i / (n - 1)) * 100)
});

const displayValue = computed(() => props.options[currentIndex.value])

let dragging = false
let pointerId = null

const clamp = (v, a, b) => Math.max(a, Math.min(b, v))

const clientXToIndex = (clientX) => {
  const rect = track.value.getBoundingClientRect()
  const x = clamp(clientX - rect.left, 0, rect.width)
  const ratio = x / rect.width
  const nearest = Math.round(ratio * (optionsCount.value - 1))
  return clamp(nearest, 0, optionsCount.value - 1)
}

const selectIndex = (i) => {
  currentIndex.value = clamp(i, 0, optionsCount.value - 1)
}

const onTrackClick = (e) => {
  const idx = clientXToIndex(e.clientX)
  selectIndex(idx)
}

const startDrag = (e) =>{
  dragging = true
  pointerId = e.pointerId
  e.target.setPointerCapture(pointerId)
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', stopDrag)
}

function onPointerMove (e) {
  if (!dragging || e.pointerId !== pointerId) {
    return
  }
  const idx = clientXToIndex(e.clientX)
  currentIndex.value = idx
}

const stopDrag = () => {
  if (!dragging) {
    return
  }
  dragging = false
  try {
    handle.value.releasePointerCapture(pointerId)
  } catch(_) {}

  pointerId = null
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', stopDrag)
}

const onArrow = (dir) => {
  selectIndex(currentIndex.value + dir)
}

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', stopDrag)
})

onMounted(() => {
  currentIndex.value = valueToIndex(props.value)
})
</script>

<style lang="scss" scoped>
  @use '../../../../styles/index.scss' as *;
  .vue-lab__size {
    width: 100%;
    user-select: none;

    &-track {
      position: relative;
      height: 20px;
      margin: 18px 0 6px 0;
      background: transparent;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        height: 4px;
        transform: translateY(-50%);
        background: clr($light, gray-200);
        border-radius: 4px;
      }
    }

    &-tick {
      position: absolute;
      top: 50%;
      width: 12px;
      height: 12px;
      transform: translate(-50%, -50%);
      background: #fff;
      border: 2px solid #bbb;
      border-radius: 50%;
      box-sizing: border-box;
      cursor: pointer;
      z-index: 1;

      &_active {
        border-color: clr($light, success);
      }
    }

    &-range-fill {
      position: absolute;
      left: 0;
      top: 50%;
      height: 4px;
      transform: translateY(-50%);
      background: clr($light, gray-300);
      border-radius: 4px;
    }

    &-handle {
      position: absolute;
      top: 50%;
      width: 20px;
      height: 20px;
      transform: translate(-50%, -50%);
      background: #2b8aef;
      border-radius: 50%;
      box-shadow: 0 2px 6px rgba(0,0,0,0.12);
      cursor: grab;
      touch-action: none;
      z-index: 2;

      &:active {
        cursor: grabbing;
      }
    }

    &-value {
      font-size: 13px;
      color: clr($light, text-primary);
    }
  }
</style>
