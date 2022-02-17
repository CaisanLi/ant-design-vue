<docs>
---
order: 5
title:
  zh-CN: 标签
  en-US: Label
---

## zh-CN

使用 `label` 标签单独展示时间。

## en-US

Use `label` show time alone.

</docs>

<template>
  <z-radio-group v-model:value="mode" style="margin-bottom: 20px">
    <z-radio value="left">Left</z-radio>
    <z-radio value="right">Right</z-radio>
    <z-radio value="alternate">Alternate</z-radio>
  </z-radio-group>
  <z-timeline :mode="mode">
    <z-timeline-item label="2015-09-01">Create a services</z-timeline-item>
    <z-timeline-item label="2015-09-01 09:12:11">Solve initial network problems</z-timeline-item>
    <z-timeline-item>Technical testing</z-timeline-item>
    <z-timeline-item>
      <template #label><strong style="color: red">2015-09-01 09:12:11</strong></template>
      Network problems being solved
    </z-timeline-item>
  </z-timeline>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { TimelineProps } from 'ant-design-vue';
export default defineComponent({
  setup() {
    return {
      mode: ref<TimelineProps['mode']>('left'),
    };
  },
});
</script>
