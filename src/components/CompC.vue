<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <h1>compC</h1>
  <button @click="count++">count up</button>
  <p>count: {{ count }}</p>
</template>
