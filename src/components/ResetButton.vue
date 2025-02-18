<script setup>
const { title } = defineProps({
  title: {
    type: String,
    required: false,
    default: 'reset',
  },
})
const emit = defineEmits(['reset'])
console.log(emit)
</script>
<template>
  <button @click="$emit('reset', 100)">{{ title }}</button>
</template>
