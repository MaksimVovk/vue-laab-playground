<template>
  <div class="vue-lab-home-page__group">
    <div v-if="option?.name || isGroup" class="vue-lab-home-page__group-name">
      {{ isGroup ? option.name || 'Other components' : '' }}
    </div>
    <div v-if="option?.description" class="vue-lab-home-page__group-description">
      {{ option.description || '' }}
    </div>
    <div class="vue-lab-home-page__group-body">
      <div
        v-for="item in option.items"
        :key="generateKey(item)"
        class="vue-lab-home-page__group-body-item"
      >
        <router-link :to="`/${item.name}`" class="vue-lab-home-page__group-body-link">
          {{ item.name }}
        </router-link>
      </div>
    </div>
    <Divider v-if="!isLast"/>
  </div>
</template>

<script setup>
import { generateKey } from '../../composables';
import { Divider } from '../../components/layout';

  const props = defineProps({
    option: { type: Object, default: () => ({}) },
    isGroup: { type: Boolean, default: false },
    isLast: { type: Boolean, default: false },
  })

</script>

<style lang="scss" scoped>
@use '../../../styles/index.scss' as *;
  .vue-lab-home-page__group {
    &-name {
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 20px;
    }

    &-description {
      color: clr($light, text-muted);
      font-size: 13px;
      border-left: clr($light, gray-300) 4px solid;
      padding-left: 16px;
      line-height: 1.4;
      margin-bottom: 20px;
    }

    &-body {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 8px;

      &-link {
        text-decoration: none;
        color: clr($light, black-800);
        transition: .3s;


        &:hover {
          color: clr($light, primary-light);
          transition: .3s;
        }
      }
    }
  }
</style>