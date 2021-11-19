<docs>
---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

The simplest usage.

</docs>

<template>
  <z-affix :offset-top="top">
    <z-button type="primary" @click="top += 10">Affix top</z-button>
  </z-affix>
  <br />
  <z-affix :offset-bottom="bottom">
    <z-button type="primary" @click="bottom += 10">Affix bottom</z-button>
  </z-affix>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const top = ref<number>(10);
    const bottom = ref<number>(10);
    return {
      top,
      bottom,
    };
  },
});
</script>
