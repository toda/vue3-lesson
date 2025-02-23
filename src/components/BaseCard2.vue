<script setup>
import { ref } from 'vue'
const page = ref(1)
</script>
<template>
  <slot name="countup" :page-count="page"> </slot>
  <button @click="page++">Next page</button>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<style scoped>
div {
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #fff;
  padding: 1rem;
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
