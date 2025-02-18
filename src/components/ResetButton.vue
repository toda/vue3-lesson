<script setup>
const { title } = defineProps({
  title: {
    type: String,
    required: false,
    default: 'reset',
  },
})
</script>
<template>
  <button @click="$emit('reset', 100)">{{ title }}</button>
</template>
