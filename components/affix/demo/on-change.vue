<docs>
---
order: 1
title:
  zh-CN: 固定状态改变的回调
  en-US: Callback
---

## zh-CN

可以获得是否固定的状态。

## en-US

Callback with affixed state.

</docs>

<template>
  <z-affix :offset-top="120" @change="change">
    <z-button>120px to affix top</z-button>
  </z-affix>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const change = (affixed: boolean) => {
      console.log(affixed);
    };

    return {
      change,
    };
  },
});
</script>
