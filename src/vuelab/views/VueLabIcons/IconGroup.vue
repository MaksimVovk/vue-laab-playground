<template>
	<div class="vue-lab-icons__group">
    <div class="vue-lab-icons__group-title">{{ group.name || 'Group' }}</div>
    <div class="vue-lab-icons__group-body">
      <div
        v-for="(item, i) of group.components"
        :key="`${group.name}-${item.name}-${i}`"
        class="vue-lab-icons__group-item"
        @click="handleIconSelect(item)"
      >
        <component :is="item.component" v-bind="{ ...config, name: item.name}"/>
        <div class="vue-lab-icons__group-item-name">{{ item.name }}</div>
      </div>
    </div>
	</div>
</template>

<script setup>
	// Props
	const props = defineProps({
    group: {
      type: Object,
      default: () => ({})
    },
    config: {
      type: Object,
      default: () => ({})
    }
	})

	// Emits

  const emit = defineEmits(['input'])

	// Variables

	// Computed

	// Methods

  const handleIconSelect = (event) => {
    emit('input', event.name)
  }

</script>

<style lang="scss" scoped>
@use '../../../styles/index.scss' as *;
.vue-lab-icons__group {
  &-title {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 20px;
  }

  &-body {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
  }

  &-item {
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all .3s;

    padding: 5px;

    cursor: pointer;

    &:hover {
      background-color: adjust(clr($light, bg-tertiary), -1%);
    }

    &:active {
      background-color: adjust(clr($light, bg-tertiary), -2%);
    }

    &-name {
      text-decoration: none;
      color: #2c3239;
      transition: 0.3s;
      font-size: 14px;
      overflow-wrap: anywhere;
    }
  }
}

</style>
