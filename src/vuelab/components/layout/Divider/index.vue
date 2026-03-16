<template>
  <div class="vue-lab__divider">
    <div v-for="d in dotsArray" :key="generateKey(d)" class="vue-lab__divider-dot" />
  </div>
</template>

<script setup>
import { generateKey } from '../../../composables'

const props = defineProps({
  num: {
    type: Number,
    default: 3,
  },
})

const dotsArray = Array.from({ length: props.num })
</script>

<style lang="scss" scoped>
@use '../../../../styles/index.scss' as *;

.vue-lab__divider {
  height: 4px;
  display: flex;
  padding: 20px 0;
  align-items: center;
  justify-content: center;
  &-dot {
    width: 4px;
    height: 4px;
    background-color: clr($light, gray-300);
    border-radius: 50%;
    display: inline-block;

    & + & {
      margin-left: 6px;
    }
  }
}
</style>
