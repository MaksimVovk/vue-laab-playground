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
      transition: max-height 0.3s ease, opacity 1s ease;
      max-height: 0;
      opacity: 0;

      &--opened {
        max-height: 100000px;
        opacity: 1;
      }
    }
  }
</style>