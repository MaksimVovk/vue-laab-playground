<template>
  <div class="vue-lab-home-page">
    <div class="vue-lab-home-page__header">
      <div class="vue-lab-home-page__title">
        <div class="vue-lab-home-page__title-icon">
          <LabIcon />
        </div>
        <div class="vue-lab-home-page__title-text">Vue Lab</div>
      </div>
      <div class="vue-lab-home-page__description">{{ pageDiscription }}</div>
    </div>

    <div class="vue-lab-home-page__search">
      <Search @input="handleTextInput" />
    </div>
    <div class="vue-lab-home-page__menu custom-scroll--simple">
      <EmptyScreen v-if="isEmptySearch" size="lg">
        Components not found.
        <br />
        Try to change the search query.
      </EmptyScreen>
      <template v-else v-for="(group, index) in menuItems">
        <Group
          v-if="group.items?.length"
          :key="generateKey(group)"
          :option="group"
          :is-group="isGroup"
          :is-last="index == menuItems.length - 1"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import Group from './group.vue'
import { generateKey } from '../../composables'
import { LabIcon } from '../../components/Icons'
import { Search, EmptyScreen } from '../../components/general'

const props = defineProps({
  components: { type: Object, default: () => ({}) },
  description: { type: String, default: null },
  title: { type: String, default: null },
  menu: { type: Array, default: () => [] },
  menuGroupsDescription: { type: Object, default: () => null },
})

const searchQuery = ref('')
const handleTextInput = (event) => {
  searchQuery.value = event
}
// const pageTitle = computed(() => {
//   return props.title || 'Vue lab'
// })

const pageDiscription = computed(() => {
  return (
    props.description ||
    'A reusable UI component library intended to standardize styling, improve development speed, and maintain consistency across projects.'
  )
})

const isEmptySearch = computed(() => {
  return !menuItems.value.some((group) => group.items.length)
})

const menuItems = computed(() => {
  const groups = props.menu.map((item) => item.group)
  const uniqueGroups = [...new Set(groups)].filter((g) => g && g.length)
  const searchFunction = (item) => {
    if (!searchQuery.value || !searchQuery.value.length) {
      return true
    }
    return item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  }

  const groupedItems = uniqueGroups.map((group) => {
    const groupDescription = props.menuGroupsDescription ? props.menuGroupsDescription[group] : null

    return {
      name: group,
      description: groupDescription,
      items: props.menu.filter((opt) => opt.group === group).filter(searchFunction),
    }
  })

  const ungroupedItems = {
    name: null,
    description: props.menuGroupsDescription['Other'],
    items: props.menu.filter((opt) => !opt.group || !opt.group.length).filter(searchFunction),
  }

  return [...groupedItems, ungroupedItems]
})

const isGroup = computed(() => {
  return props.menu.some((opt) => opt.group && opt.group.length)
})
</script>

<style lang="scss" scoped>
@use '../../../styles/index.scss' as *;
.vue-lab-home-page {
  padding: 20px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  background-color: clr($light, bg-secondary);
  display: flex;
  flex-direction: column;
  gap: 40px;
  // grid-auto-rows: min-content;

  &__menu {
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 100%;
    overflow: auto;
    font-family: var(--vue-lab-font-family);
  }

  &__title {
    // font-size: 24px;
    // font-weight: 600;
    // margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 26px;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 40px;
    cursor: pointer;
    font-family: var(--vue-lab-font-family);

    &-text {
      font-family: 'Ubuntu', sans-serif;
      color: #0f664e;
      font-size: 32px;
    }

    &-icon {
      height: 64px;
      display: flex;
      align-items: center;

      svg {
        scale: 1.5;
      }
    }
  }

  &__description {
    color: clr($light, text-muted);
    font-size: 16px;
    border-left: clr($light, gray-300) 4px solid;
    padding-left: 16px;
    line-height: 1.4;
    font-family: var(--vue-lab-font-family);
  }
}
</style>
