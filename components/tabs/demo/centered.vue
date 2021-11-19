<docs>
---
order: 2
title:
  zh-CN: 居中
  en-US: Centered
---

## zh-CN

标签居中展示。

## en-US

Centered tabs.

</docs>

<template>
  <z-tabs v-model:activeKey="activeKey" centered>
    <z-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</z-tab-pane>
    <z-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</z-tab-pane>
    <z-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</z-tab-pane>
  </z-tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      activeKey: ref('1'),
    };
  },
});
</script>
