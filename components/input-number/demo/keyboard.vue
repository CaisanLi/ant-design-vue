<docs>
---
order: 5
title:
  zh-CN: 键盘行为
  en-US: Keyboard
---

## zh-CN

使用 `keyboard` 属性可以控制键盘行为。

## en-US

Control keyboard behavior by `keyboard`.
</docs>

<template>
  <z-space>
    <z-input-number v-model:value="value" :keyboard="keyboard" :min="1" :max="10" />
    <z-checkbox v-model:checked="keyboard">Toggle keyboard</z-checkbox>
  </z-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<number>(3);

    return {
      value,
      keyboard: ref(true),
    };
  },
});
</script>
