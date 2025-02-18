<script setup>
// 配列で受け取る場合
// const props = defineProps(['count'])

// 分割代入で受け取る場合
// const { count, name } = defineProps(['count', 'name'])

//オブジェクトで受け取る場合(バリデーションあり)
const { totalCount, name } = defineProps({
  totalCount: {
    type: Number,
    required: false,
    default: () => {
      return 100
    },
  },
  name: {
    type: [String, Number, Boolean, Array, Object, Function, Symbol, Date],
    required: false,
    default: 'guest',
    validator: (value) => {
      return value.length > 0
    },
  },
})
// console.log(props.count)
</script>

<template>
  <p>show : {{ totalCount }}</p>
  <p>hello : {{ name }}</p>
</template>
