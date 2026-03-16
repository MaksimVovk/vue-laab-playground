<template>
  <div class="vue-lab__events">
    <div class="vue-lab__events__title vue-lab__block-title">Events</div>
    <div class="vue-lab__events__body">
      <div class="vue-lab__events__body-header">
        <div class="vue-lab__events__body-row">
          <div class="vue-lab__events__body-column vue-lab__events__body-column--th">Name</div>
          <div
            class="vue-lab__events__body-column vue-lab__events__body-column--th vue-lab__events__body-column--th-regular"
          >
            Description
          </div>
        </div>
      </div>
      <div class="vue-lab__events__body-content">
        <div v-for="item in data" :key="generateKey(item.name)" class="vue-lab__events__body-row">
          <div class="vue-lab__events__body-column vue-lab__events__body-column--td bold">
            @{{ item.name }}
          </div>
          <div
            class="vue-lab__events__body-column vue-lab__events__body-column--td vue-lab__events__body-column--td-regular"
          >
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { generateKey } from '../../../composables'

defineProps({
  data: {
    type: Array,
    default: () => [],
  },
})
</script>

<style lang="scss" scoped>
@use '../../../../styles/index.scss' as *;
.vue-lab__events {
  font-family: var(--vue-lab-font-family);
  &__body {
    &-row {
      display: grid;
      grid-template-columns: minmax(100px, 150px) 1fr;
    }

    &-column {
      &--th {
        font-weight: 600;
        font-size: 13px;
        height: 24px;
        display: flex;
        align-items: center;
        border-bottom: clr($light, gray-300) 1px solid;
        padding: 5px 0;

        &-regular {
          padding: 5px 10px;
          border-left: clr($light, gray-300) 1px solid;
        }
      }

      &--td {
        font-size: 14px;
        color: clr($light, gray-500);
        padding: 5px 0;
        border-bottom: clr($light, gray-300) 1px solid;
        align-items: center;
        display: flex;
        line-height: 1.4;

        &-regular {
          padding: 5px 10px;
          border-left: clr($light, gray-300) 1px solid;
        }
      }
    }

    .bold {
      font-weight: 600;
      color: clr($light, black-800);
    }
  }
}
</style>
