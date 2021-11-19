<docs>
---
order: 8
title:
  zh-CN: 反向
  en-US: Reverse
---

## zh-CN

设置 `reverse` 可以将滑动条置反。

## en-US

Using `reverse` to render slider reversely.
</docs>

<template>
  <div>
    <z-slider v-model:value="value1" :reverse="reverse" />
    <z-slider v-model:value="value2" range :reverse="reverse" />
    Reversed:
    <z-switch v-model:checked="reverse" size="small" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref<number>(30);
    const value2 = ref<number[]>([20, 50]);
    const reverse = ref<boolean>(true);

    return {
      value1,
      value2,
      reverse,
    };
  },
});
</script>
