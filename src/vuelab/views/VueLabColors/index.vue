<template>
  <Page
    :is-controls="false"
    class="vue-lab-colors"
  >
  <div class="vue-lab-colors__component">
      <div class="vue-lab-colors__component__header">
        <div class="vue-lab-colors__component__header-title">{{ name }}</div>
      </div>
      <div class="vue-lab-colors__component__content custom-scroll--simple">
        <Description
          v-if="description"
          :description="description"
        />
        <Divider />
        <template
          v-for="(color, index) of colorGroup"
          :key="`color-block-${color.title}-${index}`"
        >
          <ColorBlock
            :title="color.title"
            :options="color.options"
          />
          <Divider v-if="index != colorGroup.length - 1"/>
        </template>
      </div>
    </div>
  </Page>
</template>

<script setup>
  import { Page } from '../../components/layout/index.js'
  import { Description } from '../../components/general/index.js'
  import { Divider, ColorBlock } from '../../components/layout/index.js';
  import { computed } from 'vue';

  const props = defineProps({
    options: { type: Array, default: () => [] },
    description: { type: String, default: null },
    name: { type: String, default: 'Colors' },
  })

  const colorGroup = computed(() => {
    const keys = [...new Set(props.options.map(it => it.group))]
    const list = props.options.map(((it, i) => ({ ...it, index: it.index || i })))
    return keys.map(it => ({
      title: it,
      options: list.filter(f => f.group == it)
    }))
  })

</script>

<style lang="scss" scoped>
  @use '../../../styles/index.scss' as *;
  .vue-lab {
    user-select: none;
    &-colors {
      height: 100%;
      width: 100%;
      font-family: var(--font-family);

      &__component {
        height: 100%;
        background-color: clr($light, bg-secondary);
        padding: 16px 8px 24px 8px;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        flex-direction: column;

        &__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 32px;
          margin-bottom: 8px;
          padding: 0 16px;
          box-sizing: border-box;

          &-title {
            font-size: 18px;
            font-weight: 600;
          }
        }

        &__content {
          height: 100%;
          overflow: auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        &__body {
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          box-sizing: border-box;
          background-color: clr($light, bg-tertiary);
          border-radius: 12px;
          border: 1px solid clr($light, border-primary);
        }
      }
    }
  }
</style>