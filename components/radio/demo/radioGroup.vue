<docs>
---
order: 7
title:
  zh-CN: 单选组合
  en-US: Radio Group
---

## zh-CN

一组互斥的 Radio 配合使用。

## en-US

A group of radio components.

</docs>
<template>
  <div>
    <z-radio-group v-model:value="value">
      <z-radio :value="1">A</z-radio>
      <z-radio :value="2">B</z-radio>
      <z-radio :value="3">C</z-radio>
      <z-radio :value="4">D</z-radio>
    </z-radio-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<number>(1);
    return {
      value,
    };
  },
});
</script>
