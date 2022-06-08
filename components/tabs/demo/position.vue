<docs>
---
order: 6
title:
  zh-CN: 位置
  en-US: Position
---

## zh-CN

有四个位置，`tabPosition="left|right|top|bottom"`。在移动端下，`bottom|right` 会自动切换成 `top`。

## en-US

Tab's position: left, right, top or bottom.  Will auto switch to `top` in mobile.

</docs>

<template>
  <z-radio-group v-model:value="tabPosition" style="margin: 8px">
    <z-radio-button value="top">top</z-radio-button>
    <z-radio-button value="bottom">bottom</z-radio-button>
    <z-radio-button value="left">left</z-radio-button>
    <z-radio-button value="right">right</z-radio-button>
  </z-radio-group>
  <z-tabs v-model:activeKey="activeKey" :tab-position="tabPosition" animated>
    <z-tab-pane key="1" tab="Tab 1">Content of Tab 1</z-tab-pane>
    <z-tab-pane key="2" tab="Tab 2">Content of Tab 2</z-tab-pane>
    <z-tab-pane key="3" tab="Tab 3">Content of Tab 3</z-tab-pane>
  </z-tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { TabsProps } from '..';

export default defineComponent({
  setup() {
    const tabPosition = ref<TabsProps['tabPosition']>('top');
    const activeKey = ref('1');

    return {
      tabPosition,
      activeKey,
    };
  },
});
</script>
