<script setup>
import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'
const count = ref(0)
onMounted(() => {
  console.log('CompB mounted')
})
onUnmounted(() => {
  console.log('CompB unmounted')
})
onActivated(() => {
  console.log('CompB activated')
})
onDeactivated(() => {
  console.log('CompB deactivated')
})
</script>

<template>
  <h1>compB</h1>
  <button @click="count++">count up</button>
  <p>count: {{ count }}</p>
</template>
