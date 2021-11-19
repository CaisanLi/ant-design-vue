<docs>
---
order: 4
title:
  zh-CN: RadioGroup 垂直
  en-US: Vertical RadioGroup
---

## zh-CN

垂直的 RadioGroup，配合更多输入框选项。

## en-US

Vertical RadioGroup, with more radios.

</docs>
<template>
  <z-radio-group v-model:value="value">
    <z-radio :style="radioStyle" :value="1">Option A</z-radio>
    <z-radio :style="radioStyle" :value="2">Option B</z-radio>
    <z-radio :style="radioStyle" :value="3">Option C</z-radio>
    <z-radio :style="radioStyle" :value="4">
      More...
      <z-input v-if="value === 4" style="width: 100px; margin-left: 10px" />
    </z-radio>
  </z-radio-group>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<number>(1);
    const radioStyle = reactive({
      display: 'flex',
      height: '30px',
      lineHeight: '30px',
    });

    return {
      value,
      radioStyle,
    };
  },
});
</script>
