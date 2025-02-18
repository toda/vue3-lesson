<script setup>
import { ref } from 'vue'
const count = ref(0)
const increment = () => count.value++
</script>

<template>
  <h2>Count Up(子コンポーネント)</h2>
  <p class="red">現在のカウント：{{ count }}</p>
  <button @click="increment">カウントアップ</button>
</template>
<style scoped>
.red {
  color: red;
}
</style>
