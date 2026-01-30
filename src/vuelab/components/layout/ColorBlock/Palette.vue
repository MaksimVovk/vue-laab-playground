<template>
  <div class="vue-lab__palette">
    <div class="vue-lab__palette-title">
      {{ title }}
    </div>
    <div class="vue-lab__palette-colors">
      <div
        v-for="(color, ci) of sortedList"
        :style="`--i:${ci}`"
        :key="`color-item-${title}-${color}-${color.index}-${ci}`"
        class="vue-lab__palette-color-item"
      >
        <div
          :style="{backgroundColor: color.value}"
          class="vue-lab__palette-color-item__bg"
          @click="copyToClipboard(color.value)"
        ></div>
        <div class="vue-lab__palette-color-item__title">
          {{ `${color.name}${color.isBase ? ` (Base)` : ''}` }}
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    title: { type: String, default: () => 'Palette' },
    colors: { type: Array, default: () => [] }
  })

  const sortedList = props.colors.sort((a, b) => a.index < b.index)

  const columns = computed(() => sortedList.map(it => it.isBase ? '2fr' : '1fr' ).join(' '))

  const copyToClipboard = async (val) => {
    try {
      await navigator.clipboard.writeText(val)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../../../styles/index.scss' as *;
  .vue-lab__palette {
    display: grid;
    grid-template-columns: 100px 1fr;
    &-title {
      text-transform: capitalize;
      font-weight: 600;
      font-size: 14px;
      align-items: center;
      display: flex;
      width: 100%;
      height: 50px;
    }

    &-colors {
      display: grid;
      grid-template-columns: v-bind(columns);
      gap: 5px;

      &:hover {
        .vue-lab__palette-color-item__bg {
          filter: brightness(0.6);
        }
      }
    }

    &-color {
      &-item {
        display: grid;
        grid-template-rows: 1fr 20px;
        cursor: pointer;

        &__bg {
          height: 50px;
          border-radius: 12px;
          transition:
            transform .25s ease,
            filter .25s ease,
            opacity .25s ease;

          &:hover {
            filter: brightness(1)!important;
            transform: scale(1.1);
            z-index: 1;
          }

          &:active {
            transform: scale(1);
          }
        }

        &__title {
          color: clr($light, text-muted);
          font-size: 12px;
          line-height: 1.4;
        }
      }
    }
  }
</style>