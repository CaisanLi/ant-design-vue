<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic Usage
---

## zh-CN

默认选中第一项。

## en-US
Default activate first tab.

</docs>

<template>
  <z-tabs v-model:activeKey="activeKey">
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
