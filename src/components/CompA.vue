<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <h1>compA</h1>
  <button @click="count++">count up</button>
  <p>count: {{ count }}</p>
</template>
