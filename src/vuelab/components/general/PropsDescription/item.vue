<template>
  <div class="vue-lab__props-description__item">
    <div class="vue-lab__props-description__item__header">
      <div class="vue-lab__props-description__item__header_name">{{ data.name }}</div>
      <div class="vue-lab__props-description__item__header_type">{{ data.type }}</div>
    </div>
    <div
      v-if="isDefault || isValues || isDescription"
      class="vue-lab__props-description__item__body"
    >
      <div v-if="isDefault" class="vue-lab__props-description__item__body__row">
        <div class="vue-lab__props-description__item__body__row-key">Default:</div>
        <div class="vue-lab__props-description__item__body__row-value">{{ data.default }}</div>
      </div>
      <div v-if="isValues" class="vue-lab__props-description__item__body__row">
        <div class="vue-lab__props-description__item__body__row-key">Values:</div>
        <div class="vue-lab__props-description__item__body__row-value">{{ itemValues }}</div>
      </div>
      <div v-if="isDescription" class="vue-lab__props-description__item__body__row">
        <div class="vue-lab__props-description__item__body__row-key">Description:</div>
        <div class="vue-lab__props-description__item__body__row-value">{{ data.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
})

const isExist = (val) => {
  if (val === undefined || val === null) {
    return false
  }

  if (typeof val === 'string' && val.trim() === '') {
    return false
  }

  if (Array.isArray(val) && val.length === 0) {
    return false
  }

  if (typeof val === 'object' && Object.keys(val).length === 0) {
    return false
  }

  return true
}

const isDefault = computed(() => isExist(props.data.default))
const isValues = computed(() => isExist(props.data.values))
const isDescription = computed(() => isExist(props.data.description))
const itemValues = computed(() => {
  if (!isValues.value) return null
  if (props.data.type == 'list') {
    return 'List of options'
  }

  return props.data.values
})
</script>

<style lang="scss" scoped>
@use '../../../../styles/index.scss' as *;
.vue-lab__props-description__item {
  font-family: var(--vue-lab-font-family);
  &:not(:last-child) {
    padding-bottom: 8px;
    border-bottom: 1px solid clr($light, border-primary);
  }

  &:not(:first-child) {
    padding-top: 8px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    margin-bottom: 4px;

    &_name {
      font-weight: 600;
      text-transform: capitalize;
    }

    &_type {
      font-weight: 600;
      text-transform: capitalize;
      font-size: 14px;
      color: clr($light, gray-700);
    }
  }

  &__body {
    font-size: 13px;
    border-left: clr($light, gray-300) 2px solid;
    padding-left: 8px;

    &__row {
      gap: 4px;
      display: flex;
      line-height: 1.4;

      &-key {
        text-transform: capitalize;
        font-weight: 600;
      }

      &-value {
        color: clr($light, gray-500);
        white-space: break-spaces;
      }
    }
  }
}
</style>
