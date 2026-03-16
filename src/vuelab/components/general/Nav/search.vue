<template>
  <div class="vue-lab__search">
    <div
      ref="activator"
      v-click-outside="close"
      class="vue-lab__search-field"
      @click="toogleOpened"
    >
      <input
        :value="searchTerm"
        type="text"
        class="vue-lab__search-input"
        placeholder="Search..."
        @input="handleSearch($event.target.value)"
      />
    </div>
    <Popover
      v-if="isShowList && isOpened"
      :reference="activator"
      position="top:bottom"
      alignment="left"
    >
      <div v-if="isShowList && isOpened" class="vue-lab__search-list">
        <div v-if="isSearchEmpty" class="vue-lab__search-list--empty">No results found</div>
        <template v-else>
          <div v-for="option in filteredOptions" :key="option.name" @click="toogleOpened">
            <router-link
              v-if="option"
              :to="option.path"
              :title="option.name"
              class="vue-lab__search-list-item"
            >
              <component v-if="option.icon" :is="option.icon" />
              <DefaultMenuIcon v-else class="vue-lab__search-list-item-icon" />
              {{ option.name }}
            </router-link>
          </div>
        </template>
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { DefaultMenuIcon } from '../../Icons'
import { Popover } from '..'

const searchTerm = ref('')
const isOpened = ref(false)

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
})

const activator = ref(null)

const filteredOptions = computed(() => {
  if (!searchTerm.value) {
    return props.options
  }
  return props.options.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.value.toLowerCase()),
  )
})

const isShowList = computed(() => searchTerm.value.length >= 3)
const isSearchEmpty = computed(() => filteredOptions.value.length === 0)

const handleSearch = (value) => {
  searchTerm.value = value
}

const toogleOpened = () => {
  searchTerm.value = ''
  isOpened.value = !isOpened.value
}

const close = () => {
  isOpened.value = false
  searchTerm.value = ''
}
</script>

<style lang="scss" scoped>
@use '../../../../styles/index.scss' as *;
.vue-lab__search {
  position: relative;
  box-sizing: border-box;
  &-input {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 14px;
    min-width: 100%;
    border: 1px solid clr($light, gray-300);
    background-color: clr($light, gray-100);
    padding: 4px 10px;
    box-sizing: border-box;
    border-radius: 6px;
    &:focus {
      border-color: none;
      outline: none;
      background-color: clr($light, bg-secondary);
    }
  }

  &-list {
    margin-top: 4px;
    background-color: #fff;
    padding: 5px 0;
    min-width: 150px;
    border-radius: 4px;
    border: clr($light, gray-300) 1px solid;
    display: grid;
    gap: 2px;
    z-index: 2;

    &--empty {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
    }

    &-item {
      padding: 5px 10px;
      box-sizing: border-box;
      font-size: 13px;
      height: 25px;
      display: flex;
      align-items: center;
      cursor: pointer;
      text-decoration: none;
      gap: 5px;

      // &-icon {
      //   transform: scale(0.7);
      // }

      &:hover:not(.vue-lab__search-list-item--active) {
        background-color: adjust(clr($light, bg-tertiary), -5%);
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        transition: all 0.3s ease-in-out;
      }

      &--active {
        background-color: adjust(clr($light, bg-tertiary), -5%);
      }
    }
  }
}
</style>
