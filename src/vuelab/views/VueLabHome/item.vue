<template>
  <div class="home-page__item">
    <router-link :to="`/${item.name}`">{{ item.name }}</router-link>
  </div>
</template>

<script setup>
 const props = defineProps({
   item: {
     type: Object,
     default: () => ({})
   }
 })


</script>