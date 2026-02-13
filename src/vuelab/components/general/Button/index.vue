<template>
  <div
    :class="['vue-lab__lab-button', ...classes]"
    @click="handleClick"
  >
    <slot />
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
    }
  })

  const emit = defineEmits(['click'])

  const classes = computed(() => [`vue-lab__lab-button_size-${props.size}`, `vue-lab__lab-button_palette-${props.palette}`])
  const handleClick = () => emit('click')

</script>

<style lang="scss" scoped>
  @use "sass:map";
  @use '../../../../styles/index.scss' as *;
  .vue-lab__lab-button {
    font-family: var(--font-family);
    $palettes: (
      success: (color: clr($light, success), secondary: ($light, success)),
      error: (color: clr($light, error), secondary: ($light, error)),
      warning: (color: clr($light, warning), secondary: ($light, warning)),
      info: (color: clr($light, info), secondary: ($light, info)),
      primary: (color: clr($light, primary), secondary: ($light, primary)),
    );

    $sizes: (
      sm: (padding: 6px 12px, height: 24px, border-radius: 4px),
      md: (padding: 8px 12px, height: 32px, border-radius: 6px),
      lg: (padding: 10px 14px, height: 40px, border-radius: 8px),
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
        }
      }
    }

    @each $name, $size in $sizes {
      &_size-#{$name} {
        width: fit-content;
        box-sizing: border-box;
        cursor: pointer;
        user-select: none;
        color: clr($light, text-inverse);
        transition: .3s;

        @include button-size(
          get($size, padding),
          get($size, height),
          get($size, border-radius)
        );
      }
    }
  }
</style>