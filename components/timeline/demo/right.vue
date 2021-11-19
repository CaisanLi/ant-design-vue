<docs>
---
order: 5
title:
  zh-CN: 右侧时间轴点
  en-US: Right alternate
---

## zh-CN

时间轴点可以在内容的右边。

## en-US

Right alternate timeline.

</docs>

<template>
  <z-timeline mode="right">
    <z-timeline-item>Create a services site 2015-09-01</z-timeline-item>
    <z-timeline-item>Solve initial network problems 2015-09-01</z-timeline-item>
    <z-timeline-item>
      <template #dot><clock-circle-outlined style="font-size: 16px" /></template>
      Technical testing 2015-09-01
    </z-timeline-item>
    <z-timeline-item>Network problems being solved 2015-09-01</z-timeline-item>
  </z-timeline>
</template>
<script lang="ts">
import { ClockCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    ClockCircleOutlined,
  },
});
</script>
