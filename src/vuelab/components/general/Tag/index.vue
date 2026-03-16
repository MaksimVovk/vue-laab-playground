<template>
  <div
    :class="[
      'vue-lab-tag',
      ...classes,
      {
        'vue-lab-tag_active': isActive,
      },
    ]"
    @click="handleClick"
  >
    <div class="vue-lab-tag__title">
      {{ label }}
    </div>
    <div v-if="isClose" class="vue-lab-tag__close">X</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  title: { type: [String, Number], default: () => null },
  isClose: { type: Boolean, default: () => false },
  isActive: { type: Boolean, default: () => false },
  value: { type: [String, Number, null], required: true },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  palette: {
    type: String,
    default: 'primary',
    validator: (v) => ['success', 'error', 'warning', 'info', 'primary'].includes(v),
  },
})

const emit = defineEmits(['input'])

const classes = computed(() => [
  `vue-lab-tag_size-${props.size}`,
  `vue-lab-tag_palette-${props.palette}`,
])
const label = computed(() => (props.title == null ? 'Null' : props.title))
const handleClick = () => emit('input', props.value)
</script>

<style lang="scss" scoped>
@use 'sass:map';
@use '../../../../styles/index.scss' as *;
.vue-lab-tag {
  font-family: var(--vue-lab-font-family);
  &__title {
    color: clr($light, text-inverse);
  }

  $palettes: (
    success: (
      color: clr($light, success),
      secondary: (
        $light,
        success,
      ),
    ),
    error: (
      color: clr($light, error),
      secondary: (
        $light,
        error,
      ),
    ),
    warning: (
      color: clr($light, warning),
      secondary: (
        $light,
        warning,
      ),
    ),
    info: (
      color: clr($light, info),
      secondary: (
        $light,
        info,
      ),
    ),
    primary: (
      color: clr($light, primary),
      secondary: (
        $light,
        primary,
      ),
    ),
  );

  $sizes: (
    sm: (
      padding: 4px 10px,
      height: 20px,
      border-radius: 4px,
    ),
    md: (
      padding: 6px 10px,
      height: 28px,
      border-radius: 6px,
    ),
    lg: (
      padding: 8px 12px,
      height: 34px,
      border-radius: 8px,
    ),
  );

  @function get($map, $key) {
    @return map.get($map, $key);
  }

  @mixin tag-color-scheme($color) {
    background-color: $color;
  }

  @mixin tag-size($padding, $height, $border-radius) {
    height: $height;
    padding: $padding;
    border-radius: $border-radius;
  }

  @each $name, $color in $palettes {
    &_palette-#{$name} {
      $base-color: get($color, color);
      @include tag-color-scheme($base-color);

      &:hover {
        @include tag-color-scheme(adjust($base-color, 10%));
      }

      &:active {
        @include tag-color-scheme(adjust($base-color, -10%));
      }

      &.vue-lab-tag_active {
        background-color: adjust($base-color, 20%);
      }
    }
  }

  @each $name, $size in $sizes {
    &_size-#{$name} {
      align-items: center;
      display: flex;
      width: fit-content;
      box-sizing: border-box;
      cursor: pointer;
      user-select: none;
      transition: 0.3s;
      font-size: 12px;

      @include tag-size(get($size, padding), get($size, height), get($size, border-radius));
    }
  }
}
</style>
