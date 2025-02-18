<template>
  <!-- templateの中に一番外側のタグ要素が1つだけあるとき、親コンポーネントから指定された、id要素がそのまま
   1つのタグに対して付与される。 複数タグがある場合は、親コンポーネントの指定は無視される -->
  <div class="base-button-class">
    <p class="red">$attrs : {{ $attrs }}</p>
    <button>baseボタン</button>
  </div>
</template>
<style></style>
