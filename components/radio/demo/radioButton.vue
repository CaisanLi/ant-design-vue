<docs>
---
order: 2
title:
  zh-CN: 按钮样式
  en-US: radio style
---

## zh-CN

按钮样式的单选组合。

## en-US

The combination of radio button style.

</docs>
<template>
  <div>
    <div>
      <z-radio-group v-model:value="value1">
        <z-radio-button value="a">Hangzhou</z-radio-button>
        <z-radio-button value="b">Shanghai</z-radio-button>
        <z-radio-button value="c">Beijing</z-radio-button>
        <z-radio-button value="d">Chengdu</z-radio-button>
      </z-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <z-radio-group v-model:value="value2">
        <z-radio-button value="a">Hangzhou</z-radio-button>
        <z-radio-button value="b" disabled>Shanghai</z-radio-button>
        <z-radio-button value="c">Beijing</z-radio-button>
        <z-radio-button value="d">Chengdu</z-radio-button>
      </z-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <z-radio-group v-model:value="value3" disabled>
        <z-radio-button value="a">Hangzhou</z-radio-button>
        <z-radio-button value="b">Shanghai</z-radio-button>
        <z-radio-button value="c">Beijing</z-radio-button>
        <z-radio-button value="d">Chengdu</z-radio-button>
      </z-radio-group>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<string>('a');
    const value2 = ref<string>('a');
    const value3 = ref<string>('a');

    return {
      value1,
      value2,
      value3,
    };
  },
});
</script>
