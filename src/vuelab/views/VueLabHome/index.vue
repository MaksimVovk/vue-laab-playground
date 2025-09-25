<template>
  <div>
    <h1>📚 Vue Lab</h1>
    <ul>
      <li v-for="(component, name) in components" :key="name">
        <router-link :to="`/${name}`">{{ name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  components: Object
})
</script>
