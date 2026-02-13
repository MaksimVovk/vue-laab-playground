<template>
  <CtrlLayout :name="title">
    <div
      class="vue-lab__boolean"
      @click="emit('input', !value)"
    >
      <div :class="classList"/>
    </div>
  </CtrlLayout>
</template>

<script setup>
  import { computed } from 'vue';
  import CtrlLayout from '../CtrlLayout.vue';

  const props = defineProps({
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Boolean state'
    }
  })

  const emit = defineEmits(['input'])

  const classList = computed(() => ['vue-lab__boolean-tumbler', {
    'vue-lab__boolean-tumbler--right': Boolean(props.value),
    'vue-lab__boolean-tumbler--left': Boolean(!props.value),
  }])
</script>


<style lang="scss">
@use '../../../../styles/index.scss' as *;

.vue-lab__boolean {
  height: 20px;
  width: 36px;
  border: 1px solid clr($light, gray-200);
  border-radius: 20px;
  display: flex;
  align-items: center;
  background-color: clr($light, white-100);
  cursor: pointer;
  position: relative;
  font-family: var(--vue-lab-font-family);

  &-tumbler {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background-color: clr($light, gray-500);
    position: absolute;
    top: 2px;
    left: 2px;
    transition: .3s;

    &--right {
      left: 18px;
      background-color: clr($light, success);
      animation: moveLeft .3s ease-in-out;
    }
  }
}

</style>