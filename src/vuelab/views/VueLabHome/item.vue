<template>
  <div class="vue-lab-home-page__item">
    <router-link :to="`/${item.name}`">{{ item.name }}</router-link>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
})
</script>
