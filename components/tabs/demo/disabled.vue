<docs>
---
order: 1
title:
  zh-CN: 禁用
  en-US: Disabled
---

## zh-CN

禁用某一项。

## en-US

Disabled a tab.

</docs>

<template>
  <z-tabs v-model:activeKey="activeKey">
    <z-tab-pane key="1" tab="Tab 1">Tab 1</z-tab-pane>
    <z-tab-pane key="2" tab="Tab 2" disabled>Tab 2</z-tab-pane>
    <z-tab-pane key="3" tab="Tab 3">Tab 3</z-tab-pane>
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
