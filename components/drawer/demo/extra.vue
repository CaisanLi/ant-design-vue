<docs>
---
order: 2
title:
  zh-CN: 额外操作
  en-US: Extra Actions
---

## zh-CN

在 Ant Design 规范中，操作按钮建议放在抽屉的右上角，可以使用 extra 属性来实现。

## en-US

Extra actions should be placed at corner of drawer in Ant Design, you can using `extra` prop for that.

</docs>

<template>
  <z-radio-group v-model:value="placement" style="margin-right: 8px">
    <z-radio value="top">top</z-radio>
    <z-radio value="right">right</z-radio>
    <z-radio value="bottom">bottom</z-radio>
    <z-radio value="left">left</z-radio>
  </z-radio-group>
  <z-button type="primary" @click="showDrawer">Open</z-button>
  <z-drawer
    :width="500"
    title="Basic Drawer"
    :placement="placement"
    :visible="visible"
    @close="onClose"
  >
    <template #extra>
      <z-button style="margin-right: 8px" @click="onClose">Cancel</z-button>
      <z-button type="primary" @click="onClose">Submit</z-button>
    </template>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </z-drawer>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { DrawerProps } from 'ant-design-vue';
export default defineComponent({
  setup() {
    const placement = ref<DrawerProps['placement']>('left');
    const visible = ref<boolean>(false);

    const showDrawer = () => {
      visible.value = true;
    };

    const onClose = () => {
      visible.value = false;
    };
    return {
      placement,
      visible,
      showDrawer,
      onClose,
    };
  },
});
</script>
