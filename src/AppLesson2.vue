<script setup>
import { ref } from 'vue'
import ResetButton from '@/components/ResetButton.vue'
const count = ref(0)
const emitFunc = (value) => {
  count.value += value * 2
}
</script>
<template>
  <p>count is: {{ count }}</p>
  <button @click="count++">+1</button>
  <ResetButton title="+100" @reset="count += $event" />
  <ResetButton title="+200" @reset="emitFunc" />
  <ResetButton @reset="count = 0" />
</template>
<style scoped></style>
