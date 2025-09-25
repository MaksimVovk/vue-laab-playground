<template>
  <div class="vue-lab__nav">
    <div class="vue-lab__nav-header">
      <div class="vue-lab__nav-header-icon">
        <LabIcon />
      </div>
      <div class="vue-lab__nav-header-title">
        Vue Lab
      </div>
    </div>
    <div class="vue-lab__nav-search">
      <Search :options="options" />
    </div>
    <div class="vue-lab__nav-body">
      <div class="vue-lab__nav-body-title">
        Components
      </div>
      <div class="vue-lab__nav-body-items custom-scroll--simple">
        <NavItem
          v-for="option in options"
          :key="generateKey(option)"
          :item="option"
          :path="path"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import NavItem from './item.vue'
import { generateKey } from '../../../composables';
import Search from './search.vue'
import { LabIcon } from '../../Icons';

const props = defineProps({
  options: {
    type: Array,
    default: () => []
  },
  path: {
    type: String,
    default: '/'
  }
})

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

      &-title {
        font-family: "Ubuntu", sans-serif;
        color: #0f664e;
      }
    }

    &-body {
      height: 100%;
      display: grid;
      grid-template-rows: 30px 1fr;
      overflow: auto;
      &-title {
        padding: 8px 10px;
        font-size: 13px;
        font-weight: 600;
        color: clr($light, text-muted);
      }

      &-items {
        overflow: auto;
        height: 100%;
      }
    }

    &-search {
      padding: 5px 10px;
      margin-bottom: 12px;
    }
  }
</style>
