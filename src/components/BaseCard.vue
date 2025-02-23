<script setup></script>
<template>
  <div class="base-card">
    <slot>
      <p>Default content</p>
    </slot>
  </div>
</template>
<style scoped>
.base-card {
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #fff;
  padding: 1rem;
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
