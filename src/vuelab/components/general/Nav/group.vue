<template>
  <div class="vue-lab__nav-group">
    <div
      v-if="option?.name || isGroup"
      class="vue-lab__nav-group-name"
      @click="toggleOpened"
    >
      {{ isGroup ? option.name || 'Other components' : '' }}
      <ArrowIcon
        :class="arrowClasses"
      />
    </div>
    <div
      :class="listClasses"
    >
      <NavItem
        v-for="option in option.items"
        :key="generateKey(option)"
        :item="option"
        :path="path"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import NavItem from './item.vue'
import { generateKey } from '../../../composables';
import { defineProps } from 'vue'
import { ArrowIcon } from '../../Icons';

const props = defineProps({
  option: {
    type: Object,
    default: () => ({})
  },
  path: {
    type: String,
    default: '/'
  },
  isGroup: {
    type: Boolean,
    default: false
  }
})

const isOpened = ref(true)

const toggleOpened = () => {
  isOpened.value = !isOpened.value
}

const arrowClasses = computed(() => ({
  'vue-lab__nav-group-arrow': true,
  'vue-lab__nav-group-arrow--closed': !isOpened.value,
}))

const listClasses = computed(() => ({
  'vue-lab__nav-group-items': true,
  'vue-lab__nav-group-items--opened': isOpened.value,
}))

const maxHeight = computed(() => {
  const count = props?.option?.items?.length
  return count ? count * 35 + 100 + 'px' : '1000px'
})

const maxHeightDuration = computed(() => {
  const count = props?.option?.items?.length
  if (!count || count < 30) return '.3s'
  if (count < 50) return '.5s'
  if (count < 80) return '.8s'
  if (count < 100) return '1s'

  return count / 150 + 's'
})

</script>

<style scoped lang="scss">
@use '../../../../styles/index.scss' as *;
  .vue-lab__nav-group {
    padding: 0 10px;

    &-name {
      display: flex;
      align-items: center;
      justify-content: space-between;

      font-size: 13px;
      font-weight: 600;
      color: clr($light, text-muted);

      margin-bottom: 10px;
      cursor: pointer;
    }

    &-arrow {
      transition: .3s;
      &--closed {
        transform: rotate(180deg);
      }
    }

    &-items {
      overflow: hidden;
      transition: max-height v-bind(maxHeightDuration) ease;
      max-height: 0;

      &--opened {
        max-height: v-bind(maxHeight);
      }
    }
  }
</style>