<template>
  <div class="vue-lab__nav">
    <div class="vue-lab__nav-header" @click="goToHome">
      <div class="vue-lab__nav-header-icon">
        <LabIcon />
      </div>
      <div class="vue-lab__nav-header-title">
        {{ name }}
      </div>
    </div>
    <div class="vue-lab__nav-search">
      <Search :options="options" />
    </div>
    <div class="vue-lab__nav-body">
      <!-- <div class="vue-lab__nav-body-title">
        Components
      </div> -->
      <div class="vue-lab__nav-body-items custom-scroll--simple">
        <NavGroup
          v-for="group in menuItems"
          :key="generateKey(group)"
          :option="group"
          :path="path"
          :is-group="isGroup"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { generateKey } from '../../../composables'
import Search from './search.vue'
import { LabIcon } from '../../Icons'
import NavGroup from './group.vue'

const props = defineProps({
  name: { type: String, default: 'Vue Lab' },
  options: {
    type: Array,
    default: () => [],
  },
  path: {
    type: String,
    default: '/',
  },
})

const emit = defineEmits(['navigate'])

const menuItems = computed(() => {
  const groups = props.options.map((item) => item.group)
  const uniqueGroups = [...new Set(groups)].filter((g) => g && g.length)

  const groupedItems = uniqueGroups.map((group) => ({
    name: group,
    items: props.options.filter((opt) => opt.group === group),
  }))

  const ungroupedOptions = props.options.filter((opt) => !opt.group || !opt.group.length)

  const ungroupedItems = {
    name: null,
    items: ungroupedOptions,
  }

  let result = [...groupedItems]
  if (ungroupedItems.items.length) {
    result.push(ungroupedItems)
  }

  return result
})

const isGroup = computed(() => {
  return props.options.some((opt) => opt.group && opt.group.length)
})

const goToHome = () => {
  emit('navigate', '/')
}
</script>

<style lang="scss" scoped>
@use '../../../../styles/index.scss' as *;
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');

.vue-lab__nav {
  background-color: clr($light, bg-secondary);
  height: 100%;
  border-right: 1px solid clr($light, gray-300);
  user-select: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-family: var(--vue-lab-font-family);
  color: clr($light, black-800);

  &-header {
    display: grid;
    grid-template-columns: 32px 1fr;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 26px;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
    cursor: pointer;
    color: clr($light, black-800);

    &-title {
      font-family: 'Ubuntu', sans-serif;
      color: #0f664e;
    }
  }

  &-body {
    height: 100%;
    display: grid;
    grid-template-rows: 1fr;
    overflow: auto;
    padding-bottom: 10px;

    &-title {
      padding: 8px 10px;
      font-size: 15px;
      font-weight: 600;
      color: clr($light, text-muted);
      padding-bottom: 20px;
    }

    &-items {
      overflow: auto;
      height: 100%;
      display: grid;
      align-items: start;
      grid-auto-rows: min-content;
      gap: 10px;
    }
  }

  &-search {
    padding: 5px 10px;
    margin-bottom: 12px;
  }
}
</style>
