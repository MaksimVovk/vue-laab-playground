<template>
  <div class="vue-lab__search">
    <div :class="['vue-lab__search__field', ...classes]">
      <input
        ref="searchInput"
        :id="uuid"
        type="text"
        class="vue-lab__search-input"
        placeholder=" "
        @keydown.esc="unFocus"
        @input="handleInput"
      />
      <label :for="uuid" class="vue-lab__search-label">
        {{ label }}
      </label>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, ref } from 'vue'
// Props
const props = defineProps({
  label: { type: String, default: () => 'Search' },
  size: { type: String, default: () => 'md', validator: (v) => ['sm', 'md', 'lg'].includes(v) },
  focus: { type: Boolean, default: false },
})

const uuid = Math.random().toString(36).slice(2, 9)

onMounted(() => {
  if (props.focus) {
    nextTick(() => {
      searchInput.value.focus()
    })
  }
})

// Emits
const emit = defineEmits(['input'])

// Variables
const searchInput = ref(null)

// Computed
const classes = computed(() => [`vue-lab__search_size-${props.size}`])

// Methods

const handleInput = (e) => {
  emit('input', e.target.value)
}

const unFocus = () => {
  searchInput.value.blur()
}
</script>

<style lang="scss" scoped>
@use '../../../../styles/index.scss' as *;
@use 'sass:map';

.vue-lab__search {
  $self: &;
  $sizes: (
    sm: (
      padding: 5px 10px,
      fontsize: 14px,
      top: 7px,
      topAfter: -12px,
      leftBefore: 10px,
      leftAfter: 10px,
    ),
    md: (
      padding: 10px 10px,
      fontsize: 14px,
      top: 13px,
      topAfter: -12px,
      leftBefore: 10px,
      leftAfter: 0px,
    ),
    lg: (
      padding: 15px 10px,
      fontsize: 14px,
      top: 17px,
      topAfter: -12px,
      leftBefore: 10px,
      leftAfter: 0px,
    ),
  );

  font-family: var(--vue-lab-font-family);
  * {
    font: inherit;
  }
  &__field {
    position: relative;
    margin-top: 12px;
  }

  @each $size, $value in $sizes {
    #{$self}_size-#{$size} {
      #{$self}-input {
        width: 100%;
        padding: map.get($value, padding);
        font-size: map.get($value, fontsize);
        border: none;
        border-bottom: 1px solid clr($light, border-primary);
        outline: none;
        background: transparent;
        transition: border-color 0.2s;
        box-sizing: border-box;
      }

      #{$self}-label {
        position: absolute;
        top: map.get($value, top);
        left: map.get($value, leftBefore);
        font-size: map.get($value, fontsize);
        color: #999;
        pointer-events: none;
        transition: all 0.2s ease;
      }

      #{$self}-input:focus + #{$self}-label,
      #{$self}-input:not(:placeholder-shown) + #{$self}-label {
        top: map.get($value, topAfter);
        left: map.get($value, leftAfter);
        color: #6b7280;
        font-size: calc(map.get($value, fontsize) - 1px);
      }
    }
  }
}
</style>
