<template>
  <div
    :style="iconStyles"
    role="img"
  >
    <svg
      :viewBox="viewBox"
      :stroke-width="2"
      :class="[
        'icon-svg',
        $attrs?.class,
        ...classes,
      ]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="handleClick"
    >
      <slot />
    </svg>
  </div>
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
    default: null
  },
  name: {
    type: [String],
    default: null
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
    '--custom-color': props.color
  }
})

const classes = computed(() => ([
  'icon',
  `icon_${props.name}`,
  `icon_palette-${props.palette}`,
]))

const handleClick = () => emit('click')

</script>

<style lang="scss" scoped>
@use '../../styles/index.scss' as *;

$palettes: (
  default: #3A424A,
  disabled: #C7CED4,
  primary: #003A5D,
  success: #0BB060,
  warning: #FAAD14,
  error: #D64B4C,
  info: #1C4EBF,
  light: #fff,
  neutral: #cacaca,
  accent: #3781F0,
  deep: #292D32
);

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--icon-size);
  height: var(--icon-size);

  transition: 0.5s;
  &_clickable {
    cursor: pointer;
  }

  &_disabled {
    cursor: not-allowed!important;
    .icon__geometry {
      fill: var(--custom-color, icon-clr(disabled))!important;
    }

    .icon__geometry_stroke {
      stroke: icon-clr(disabled)!important;
    }

    .icon__geometry_fill-empty {
      fill: transparent!important;
    }
  }

  @each $name, $value in $palettes {
    @warn "Processing palette: #{$name}";
    @if ($name != none) {
      &.icon_palette-#{"#{$name}"} {
        transition: 0.5s;

        :deep(.icon__geometry) {
          transition: 0.3s;
          fill: var(--custom-color, $value);
        }

        :deep(.icon__geometry_stroke) {
          transition: 0.3s;
          stroke:$value;
        }

        :deep(.icon__geometry_fill-empty) {
          transition: 0.3s;
          fill: transparent;
        }

        &:hover:not(.icon_disabled),
        &.icon_focused:not(.icon_disabled) {
          :deep(.icon__geometry) {
            transition: 0.3s;
            fill: $value;
          }

          :deep(.icon__geometry_stroke) {
            transition: 0.3s;
            stroke: $value;
          }

          :deep(.icon__geometry_fill-empty) {
            transition: 0.3s;
            fill: transparent;
          }
        }
      }
    }
  }

}

.icon :deep(svg) {
  width: 100%;
  height: 100%;
  // fill: none;
  // stroke: currentColor;
}
</style>