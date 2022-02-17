<docs>
---
order: 5
title:
  zh-CN: 大小
  en-US: Size
---

## zh-CN

大号页签用在页头区域，小号用在弹出框等较狭窄的容器内。

## en-US
Large size tabs are usally used in page header, and small size could be used in Modal.

</docs>

<template>
  <div>
    <z-radio-group v-model:value="size" style="margin-bottom: 16px">
      <z-radio-button value="small">Small</z-radio-button>
      <z-radio-button value="default">Default</z-radio-button>
      <z-radio-button value="large">Large</z-radio-button>
    </z-radio-group>
    <z-tabs v-model:activeKey="activeKey" :size="size">
      <z-tab-pane key="1" tab="Tab 1">Content of tab 1</z-tab-pane>
      <z-tab-pane key="2" tab="Tab 2">Content of tab 2</z-tab-pane>
      <z-tab-pane key="3" tab="Tab 3">Content of tab 3</z-tab-pane>
    </z-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { TabsProps } from 'ant-design-vue';

export default defineComponent({
  setup() {
    const size = ref<TabsProps['size']>('small');
    const activeKey = ref('1');
    return {
      size,
      activeKey,
    };
  },
});
</script>
