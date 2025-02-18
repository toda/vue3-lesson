<script setup>
import { ref } from 'vue'
const name = ref('<span style="font-size: 32px">guest</span></h1>')
const ok = ref(true)
const ok2 = ref(false)
const okShow = ref(true)
const array = ref([1, 2, 3, 4, 5])
const fruits = ref([
  { id: 1, name: 'apple' },
  { id: 2, name: 'apple' },
  { id: 3, name: 'banana' },
  { id: 4, name: 'cherry' },
])
const object = ref({
  name: 'tody',
  age: '20',
  gender: 'man',
})
</script>

<template>
  <p>hello, <span :class="{ red: true }" v-html="name"></span>さん。</p>

  ■v-if<br />
  <button @click="ok = !ok">toggle</button>
  <p v-if="ok">OK</p>
  <p v-else-if="ok2">OK2</p>
  <p v-else>NG</p>

  ■falseの場合のv-if、v-showの違い
  <p v-if="false">v-if-false</p>
  <p v-show="false">v-show-false</p>

  ■v-if複数 (templateタグの利用)<br />
  <template v-if="ok">
    <p>OK</p>
    <p>OK2</p>
  </template>

  ■v-show<br />
  <button @click="okShow = !okShow">toggle</button>
  <p v-show="okShow">OK</p>

  ■v-for(配列)<br />
  <button @click="fruits.shift()">shift</button>
  <li v-for="({ id, name }, index) in fruits" :key="id">
    <input type="text" />{{ name }}({{ index }})
  </li>
  <br />
  <button @click="array.shift()">shift</button>
  <button @click="array.push(6)">push</button>
  <li v-for="item in array" :key="item"><input type="text" />{{ item }}</li>
  <br />
  ■templateタグを使用することで、buildした後のhtmlコードに、不要なhtmlタグを含ませないようにできる<br />
  分割代入を利用することで、オブジェクトのプロパティを直接利用できる<br />
  <template v-for="({ id, name }, index) in fruits" :key="id">
    <p>{{ name }}({{ index }})<input type="text" /></p>
  </template>

  ■v-for (オブジェクト)<br />
  <template v-for="(value, key, index) in object" :key="value">
    <p>{{ key }}: {{ value }} : {{ index }}</p>
  </template>

  ■v-for(数字)<br />
  <template v-for="i in 10" :key="i"> {{ i }}<br /> </template>

  <p v-if="false">OK</p>
  <p v-else-if="true">Maybe OK</p>
  <p v-else>Not OK</p>
</template>

<style>
.red {
  color: red;
}
</style>
