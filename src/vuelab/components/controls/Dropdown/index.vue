
<template>
  <CtrlLayout
    :name="title"
    class="vue-lab__dropdown"
  >
    <div
      ref="dropdownActivator"
      :class="['vue-lab__dropdown-field', {
        'vue-lab__dropdown-field_active': props.value,
        'vue-lab__dropdown-field_focused': isOpened,
      }]"
      @click="toggleOpened"
    >
      {{ selectedValue }}
    </div>
    <Popover
      v-if="isOpened"
      v-click-outside="close"
      :reference="dropdownActivator"
      position="top:bottom"
      margin="4"
      alignment="left"
    >
      <div class="vue-lab__dropdown-modal">
        <Search
          size="sm"
          focus
          @input="handleSearch"
        />
        <EmptyScreen
          v-if="!filteredOptions.length"
          :size="'sm'"
        >No options found</EmptyScreen>
        <ul
          v-else
          class="vue-lab__dropdown-list custom-scroll"
        >
          <li
            v-for="option in filteredOptions"
            :key="option.id"
            :class="['vue-lab__dropdown-list-item', {
              'vue-lab__dropdown-list-item_active': option.id === props.value
            }]"
            @click="handleItem(option.id)"
          >
            <p :title="option.name" class="vue-lab__dropdown-list-item-text">{{ option.name }}</p>
          </li>
        </ul>
      </div>
    </Popover>
  </CtrlLayout>
</template>

<script setup>
  import { computed, ref } from 'vue'
  import CtrlLayout from '../CtrlLayout.vue'
  import { Popover, Search, EmptyScreen } from '../../general'

	// Props
	const props = defineProps({
    value: {
      type: [String, Number],
      default: null
    },
    title: {
      type: String,
      default: 'Dropdown'
    },
    options: {
      type: Array,
      default: () => []
    }
	})

	// Emits
	const emit = defineEmits(['input'])

	// Variables
  const dropdownActivator = ref(null)
  const isOpened = ref(false)

  const searchValue = ref('')

	// Computed

  const selectedValue = computed(() => {
    return props.options.find(o => o.id === props.value)?.name || null
  })

  const filteredOptions = computed(() => {
    if (!searchValue.value) {
      return props.options
    }
    return props.options.filter(o => o?.name?.toLowerCase().includes(searchValue?.value?.toLowerCase()))
  })

	// Methods
  const toggleOpened = () => {
    isOpened.value = !isOpened.value
  }

  const close = () => {
    isOpened.value = false
  }

  const handleItem = id => {
    emit('input', id)
    close()
  }

  const handleSearch = event => {
    searchValue.value = event
  }


</script>

<style lang="scss" scoped>
@use '../../../../styles/index.scss' as *;
  .vue-lab__dropdown {
    $transition: .3s all ease-in-out;
    font-family: var(--vue-lab-font-family);

    &-field {
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;

      border: clr($light, gray-300) 1px solid;
      font-size: 14px;
      min-width: 100%;
      padding: 4px 10px;
      box-sizing: border-box;
      border-radius: 6px;
      transition: $transition;
      background-color: clr($light, gray-100);

      &_active {
        background-color: clr($light, white-100);
        transition: $transition;
      }
      &_focused,
      &:hover {
        border-color: clr($light, primary);
        background-color: clr($light, white-100);
        transition: $transition;
      }

      &:hover {
        cursor: text;
      }
    }

    &-modal {
      background-color: clr($light, white-100);
      display: flex;
      flex-direction: column;
      width: 200px;
      padding: 5px 0;
      border-radius: 6px;
      border: clr($light, gray-300) 1px solid;
      margin-top: 4px;

      max-height: 300px;
      display: flex;
      flex-direction: column;
    }

    &-list {
      height: auto; 
      max-height: 250px;
      overflow-y: auto;

      &-item {
        height: 32px;
        min-height: 32px;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        transition: .3s;
        cursor: pointer;
        font-size: 13px;
        font-weight: 400;
        line-height: 22px;
        text-overflow: ellipsis;
        position: relative;
        overflow: hidden;
        white-space: nowrap;

        &:hover:not(.vue-lab__nav-item--active) {
          background-color: adjust(clr($light, bg-tertiary), -1%);
          transition: all .3s ease-in-out;
        }

        &:hover {
          transition: all .3s ease-in-out;
        }

        &-text {
          text-overflow: ellipsis;
          position: relative;
          overflow: hidden;
        }

        &_active {
          background-color: adjust(clr($light, bg-tertiary), -5%);
        }
      }
    }
  }
</style>
