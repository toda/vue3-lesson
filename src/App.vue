<script setup>
import { ref, reactive, computed, watch, watchEffect } from 'vue'
const name = '<h1>guest<br/></h1>'
const counta = 1
const countb = 2
const count = ref(0)
const count2 = ref({
  data: 0,
  data2: 10,
})
const count3 = {
  data: ref(0),
  data2: ref(10),
}
const increment = () => {
  count.value++
  count2.value.data++
  count2.value.data2++
  count3.data.value++
  count3.data2.value++
  name2.age++
}
const name2 = reactive({
  name: 'guest2',
  age: 25,
})
const id = 'vue-id'
const href = 'https://v3.vuejs.org/guide/introduction.html'
const reset = (e) => {
  count.value = 0
  count2.value.data = 0
  count2.value.data2 = 0
  count3.data.value = 0
  count3.data2.value = 0
  console.log(e)
}
const string = ref('default')
const reset2 = (e) => {
  alert('reset2')
  count.value = 0
  string.value = ''
}
const countUp = (event, param) => {
  count.value++
  console.log(event)
  console.log(param)
}

const eventName = 'keyup'

const score = ref(30)
const evaluate = computed((value) => {
  // alert(`pre value: ${value}`)
  // count.value += 0
  return score.value >= 70 ? 'good' : 'bad'
})

// watch(count, (newValue, oldValue) => {
//   console.log('watch')
//   console.log(newValue)
//   console.log(oldValue)
// });

// watchEffect(() => {
//   console.log('watchEffect')
//   console.log(count.value)
// })

const isRed = ref(true)
const isBgBlue = ref(true)
const className = ref('red bg-blue')
const toggleClass = () => {
  isRed.value = !isRed.value
  isBgBlue.value = !isBgBlue.value
}
</script>

<template>
  <p class="red">hello, <span v-html="name"></span>.</p>
  <p class="red">age, {{ name2.age }}.</p>
  <p>total: {{ counta + countb }}</p>
  <p>count: {{ count }}</p>
  <p>count: {{ count3.data }}</p>
  <p>count: {{ count3.data2 }}</p>
  <button @click="increment">increment</button>
  <button :disabled="false">button</button>
  <button v-on:click="reset">reset</button>
  <button v-on:click="countUp($event, 5)">countUp</button>
  <br /><br />
  <div @click="count++">
    <button @click.stop="">click</button>
  </div>
  <a @click.prevent="" href="https://v3.vuejs.org/guide/introduction.html">prevent</a>
  <br />
  <a :href target="_blank">Vue 3 Docs</a>
  <br />
  <a v-bind="{ id: id, href: href }" target="_blank">Vue 3 Docs2</a>
  <br /><br />
  <p>event キー修飾子</p>
  <input type="text" @keyup="count++" :value="string" />

  <p>v-model & 動的修飾子</p>
  <input type="text" @keyup="count++" v-model="string" />
  <input type="text" placeholder="enterでリセットリセット" @[eventName].enter.space="reset2" />
  string : {{ string }}

  <p>computed</p>
  <p>score: {{ score }}点 [{{ score >= 70 ? 'good' : 'bad' }}]</p>
  <p>score: {{ score }}点 [{{ evaluate }}]</p>
  ※computed利用
  <button @click="score += 10">+10</button>

  <div :class="{ red: isRed, 'bg-blue': isBgBlue }">v-bind class</div>
  <div class="border" :class="[className]">v-bind class</div>
  <button @click="toggleClass()">toggle</button>
  <br /><br />

  <div :style="{ color: 'red', backgroundColor: 'blue', border: '3px solid pink' }">style</div>
</template>

<style>
.red {
  color: red;
}
.bg-blue {
  background-color: blue;
}
.border {
  border: 3px solid pink;
}
#vue-id {
  color: blue;
}
</style>
