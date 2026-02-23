<template>
  <div
    :class="['vue-lab__button', ...classes]"
    @click="handleClick"
  >
    <slot></slot>
    <slot name="icon"></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue';

  const props = defineProps({
    size: {
      type: String,
      default: 'md',
      validator: (v) => ['sm', 'md', 'lg'].includes(v)
    },
    palette: {
      type: String,
      default: 'primary',
      validator: (v) => ['success', 'error', 'warning', 'info', 'primary'].includes(v)
    },
    title: {
      type: String,
      default: 'Click me'
    },
    animation: {
      type: String,
      default: null,
      validator: (v) => ['clicked', 'flash'].includes(v)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  })

  const emit = defineEmits(['click'])

  const classes = computed(() => [
    `vue-lab__button_size-${props.size}`,
    `vue-lab__button_palette-${props.palette}`,
    props.disabled ? 'vue-lab__button_disabled' : ''
  ])
  const handleClick = () => emit('click')

</script>

<style lang="scss" scoped>
  @use "sass:map";

  @use '../../styles/index.scss' as *;
  .vue-lab__button {
    font-family: var(--vue-lab-font-family);
    $palettes: (
      success: (color: clr($light, success), secondary: ($light, success)),
      error: (color: clr($light, error), secondary: ($light, error)),
      warning: (color: clr($light, warning), secondary: ($light, warning)),
      info: (color: clr($light, info), secondary: ($light, info)),
      primary: (color: clr($light, primary), secondary: ($light, primary)),
    );

    $sizes: (
      sm: (padding: 6px 12px, height: 24px, border-radius: 4px, font-size: 13px),
      md: (padding: 8px 12px, height: 32px, border-radius: 6px, font-size: 14px),
      lg: (padding: 10px 14px, height: 40px, border-radius: 8px, font-size: 15px),
    );

    @function get($map, $key) {
      @return map.get($map, $key);
    }

    @mixin vue-lab__button-color-scheme ($color) {
      background-color: $color;
    }

    @mixin vue-lab__button-size ($padding, $height, $border-radius) {
      height: $height;
      padding: $padding;
      border-radius: $border-radius;
    }

    @each $name, $color in $palettes {
      &_palette-#{$name} {
        $base-color: get($color, color);
        @include vue-lab__button-color-scheme($base-color);

        &:hover {
          @include vue-lab__button-color-scheme(adjust($base-color, 10%));
        }

        &:active {
          @include vue-lab__button-color-scheme(adjust($base-color, -10%));
          // @include vue-lab__button-color-scheme(darken($base-color, 10%));
        }
      }
    }

    &_disabled {
      background-color: clr($light, gray-300);
      cursor: not-allowed;
      pointer-events: none;
    }

    @each $name, $size in $sizes {
      &_size-#{$name} {
        width: fit-content;
        box-sizing: border-box;
        cursor: pointer;
        user-select: none;
        color: clr($light, text-inverse);
        transition: .3s;
        font-size: get($size, font-size);
        display: flex;
        align-items: center;

        @include vue-lab__button-size(
          get($size, padding),
          get($size, height),
          get($size, border-radius)
        );
      }
    }
  }
</style>