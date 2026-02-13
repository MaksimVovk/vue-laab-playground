<template>
  <CtrlLayout :name="title">
    <div class="vue-lab__tags">
      <Tag
        v-for="o in options"
        :key="generateKey(o)"
        :value="o"
        :isActive="o == value"
        :title="o"
        class="vue-lab__tags__item"
        @input="setValue"
      ></Tag>
    </div>
  </CtrlLayout>
</template>

<script setup>
  import CtrlLayout from '../CtrlLayout.vue';
  import { Tag } from '../../general';
  import { generateKey } from '../../../composables';

  const props = defineProps({
    options: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: 'Tags'
    },
    value: {
      type: String,
      default: () => null
    }
  })

  const emit = defineEmits(['input'])

  const setValue = val => {
    emit('input', val)
  }
</script>

<style lang="scss">
  @use '../../../../styles/index.scss' as *;
  .vue-lab__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    align-items: flex-start;
  }
</style>