<template>
  <template v-if="slotConfig.type == 'text'">
    {{ slotConfig.value }}
  </template>
  <template v-else-if="slotConfig.type == 'component'">
    <component :is="slotConfig.value" v-bind="attrs"/>
  </template>
  <template v-else-if="slotConfig.type == 'html'">
    <div v-html="slotConfig.value" />
  </template>
</template>


<script setup>
  import { computed } from 'vue';
	// Props
	const props = defineProps({
    slotConfig: {
      type: Object,
      default: () => ({})
    },
    slotName: {
      type: String,
      default: null,
    }
	})

	// Emits
	const emit = defineEmits([])

	// Variables

	// Computed
  const attrs = computed(() => {
    if (!props.slotConfig?.props) return {}

    if (Array.isArray(props.slotConfig.props)) {
      if (!props.slotConfig?.props?.length) return {}

      return props.slotConfig?.props?.reduce((prev, next) => ({
        ...prev,
        [next.name]: next.value
      }), {})
    }
    return {
      ...props.slotConfig?.props
    }
  })
	// Methods

</script>

<style lang="scss" scoped>

</style>
