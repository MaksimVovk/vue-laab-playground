<template>
  <div
    :class="['button', ...classes]"
    @click="handleClick"
  >
    {{ title }}
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
    disabled: {
      type: Boolean,
      default: false
    }
  })

  const emit = defineEmits(['click'])

  const classes = computed(() => [
    `button_size-${props.size}`,
    `button_palette-${props.palette}`,
    props.disabled ? 'button_disabled' : ''
  ])
  const handleClick = () => emit('click')

</script>

<style lang="scss" scoped>
  @use "sass:map";

  @use '../../styles/index.scss' as *;
  .button {
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

    @mixin button-color-scheme ($color) {
      background-color: $color;
    }

    @mixin button-size ($padding, $height, $border-radius) {
      height: $height;
      padding: $padding;
      border-radius: $border-radius;
    }

    @each $name, $color in $palettes {
      &_palette-#{$name} {
        $base-color: get($color, color);
        @include button-color-scheme($base-color);

        &:hover {
          @include button-color-scheme(adjust($base-color, 10%));
        }

        &:active {
          @include button-color-scheme(adjust($base-color, -10%));
          // @include button-color-scheme(darken($base-color, 10%));
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

        @include button-size(
          get($size, padding),
          get($size, height),
          get($size, border-radius)
        );
      }
    }
  }
</style>