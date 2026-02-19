<template>
	<div
    :data-size="size"
    class="vue-lab__empty-screen"
  >
		<SadIcon :size="iconSize" palette="muted"/>
    <div class="vue-lab__empty-screen__text">
      <slot>Nothing to display</slot>
    </div>
	</div>
</template>

<script setup>
  import { computed } from 'vue';
  import SadIcon from '../Icon/General/SadIcon.vue';
	// Props
	const props = defineProps({
    size: {
      type: [String],
      default: () => 'md',
      validator: (v) => ['sm', 'md', 'lg'].includes(v),
    }
	})

	// Emits
	const emit = defineEmits([])

	// Variables

	// Computed
  const iconSize = computed(() => {
    switch (props.size) {
      case 'sm': return 24
      case 'md': return 36
      case 'lg': return 48
      default: return 48
    }
  })

	// Methods

</script>

<style lang="scss" scoped>
  @use '../../../../styles/index.scss' as *;
  $sizes: (
    sm: (padding: 10px, text: 14px),
    md: (padding: 15px, text: 16px),
    lg: (padding: 20px, text: 18px)
  );

  .vue-lab__empty-screen {
    $self: &;
    display: grid;
    justify-items: center;
    font-family: var(--vue-lab-font-family);
    box-sizing: border-box;

    @each $size, $value in $sizes {
      &[data-size='#{$size}'] {
        padding: get($value, padding);
        #{$self}__text {
          margin-top: 12px;
          text-align: center;
          line-height: 1.5;
          color: clr($light, text-muted);
          font-size: get($value, text);
        }
      }
    }
  }
</style>
