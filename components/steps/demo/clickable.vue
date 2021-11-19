<docs>
---
order: 9
title:
  zh-CN: 可点击
  en-US: Clickable
---

## zh-CN

设置 `v-model` 后，Steps 变为可点击状态。

## en-US

Setting `v-model` makes Steps clickable.
</docs>

<template>
  <div>
    <z-steps v-model:current="current">
      <z-step title="Step 1" description="This is a description." />
      <z-step title="Step 2" description="This is a description." />
      <z-step title="Step 3" description="This is a description." />
    </z-steps>
    <z-divider />
    <z-steps v-model:current="current" direction="vertical">
      <z-step title="Step 1" description="This is a description." />
      <z-step title="Step 2" description="This is a description." />
      <z-step title="Step 3" description="This is a description." />
    </z-steps>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const current = ref<number>(0);

    return {
      current,
    };
  },
});
</script>
