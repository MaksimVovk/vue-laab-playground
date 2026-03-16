<template>
  <CtrlLayout :name="title">
    <div class="vue-lab__text-ctrl">
      <div
        :class="[
          'vue-lab__text-ctrl__field',
          {
            'vue-lab__text-ctrl__field--active': isValue,
            'vue-lab__text-ctrl__field--focused': isFocused,
          },
        ]"
      >
        <input
          :value="value"
          class="vue-lab__text-ctrl__input"
          type="text"
          @focusin="handleFocus('in')"
          @focusout="handleFocus('out')"
          @input="handleTextInput"
        />
      </div>
    </div>
  </CtrlLayout>
</template>

<script setup>
import { computed, ref } from 'vue'
import CtrlLayout from '../CtrlLayout.vue'

const emit = defineEmits(['input'])

const props = defineProps({
  value: { type: [String], default: () => '' },
  title: { type: String, default: 'Text Input' },
})

const isFocused = ref(false)

const handleTextInput = (e) => {
  emit('input', e?.target.value)
}

const isValue = computed(() => Boolean(props.value) && props.value !== '')

const handleFocus = (type) => {
  isFocused.value = type === 'in'
}
</script>

<style lang="scss" scoped>
@use '../../../../styles/index.scss' as *;

$transition: 0.3s all ease-in-out;
.vue-lab__text-ctrl {
  font-family: var(--vue-lab-font-family);

  &__field {
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

    &--active {
      background-color: clr($light, white-100);
      transition: $transition;
    }
    &--focused,
    &:hover {
      border-color: clr($light, primary);
      background-color: clr($light, white-100);
      // box-shadow: 0px 0px 8px -1px clr($light, primary);
      transition: $transition;
    }

    &:hover {
      cursor: text;
    }
  }

  &__input {
    border: none;
    outline: none;
    width: 100%;
    background-color: transparent;
    font-size: 14px;
  }
}
</style>
