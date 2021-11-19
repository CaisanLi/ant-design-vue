<docs>
---
order: 2
title:
  zh-CN: 图标
  en-US: Icon
---

## zh-CN

有图标的标签。

## en-US

The Tab with Icon.

</docs>

<template>
  <z-tabs v-model:activeKey="activeKey">
    <z-tab-pane key="1">
      <template #tab>
        <span>
          <apple-outlined />
          Tab 1
        </span>
      </template>
      Tab 1
    </z-tab-pane>
    <z-tab-pane key="2">
      <template #tab>
        <span>
          <android-outlined />
          Tab 2
        </span>
      </template>
      Tab 2
    </z-tab-pane>
  </z-tabs>
</template>
<script lang="ts">
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    AppleOutlined,
    AndroidOutlined,
  },
  setup() {
    return {
      activeKey: ref('1'),
    };
  },
});
</script>
