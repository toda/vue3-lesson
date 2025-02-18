<script setup>
import { ref } from 'vue'
import CountUp from '@/components/CountUp.vue'
import BaseButton from '@/components/BaseButton.vue'
import ShowCount from '@/components/ShowCount.vue'

const count = ref(0)
</script>

<template>
  <BaseIcon />
  ■コンポーネント<br />
  <h1>親コンポーネント</h1>
  <CountUp />
  <CountUp>デフォルト</CountUp>
  <BaseButton id="base-button" class="border" />
  <br /><br />
  <ShowCount :total-count="count" name="guest" />
  <button @click="count++">カウントアップ</button>
</template>

<style scoped></style>
