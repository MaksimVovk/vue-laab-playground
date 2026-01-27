<template>
  <router-link
    v-if="item"
    :to="item.path"
    :title="item.name"
    :class="['vue-lab__nav-item', {
      'vue-lab__nav-item--active': isActive
    }]"
  >
    <div class="vue-lab__nav-item-icon">
      <component
        v-if="item.icon"
        :is="item.icon"
      />
      <DefaultMenuIcon
        v-else
        class="vue-lab__nav-item-icon-menu"
      />
    </div>
    <div class="vue-lab__nav-item-label">{{ item.name }}</div>
  </router-link>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { DefaultMenuIcon } from '../../Icons';

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  path: {
    type: String,
    default: '/'
  }
})

const isActive = computed(() => props.path?.toLowerCase() === props.item.path?.toLowerCase());
</script>


<style lang="scss" scoped>
  @use '../../../../styles/index.scss' as *;
  .vue-lab__nav-item,
  .vue-lab__nav-item * {
    cursor: pointer !important;
    a {
      cursor: pointer;
    }
  }
  .vue-lab__nav-item {
    display: grid;
    grid-template-columns: 16px 1fr;
    padding: 10px;
    align-items: center;
    gap: 5px;
    font-size: 15px;
    box-sizing: border-box;
    user-select: none;
    transition: all .3s ease-in-out;
    text-decoration: none;
    z-index: 1;

    &-icon {
      display: flex;
      align-items: center;

      &-menu {
        width: 14px;
        height: 14px;
      }
    }

    &-label {
      display: flex;
      align-items: center;
    }

    &:hover:not(.vue-lab__nav-item--active) {
      background-color: adjust(clr($light, bg-tertiary), -1%);
      transition: all .3s ease-in-out;
    }

    &:hover {
      transition: all .3s ease-in-out;
    }

    &--active {
      background-color: adjust(clr($light, bg-tertiary), -5%);
    }
  }
</style>