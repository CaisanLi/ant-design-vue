<docs>
---
order: 1
title:
  zh-CN: 图标按钮
  en-US: Icon
---

## zh-CN

当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。

如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。

## en-US

`Button` components can contain an `Icon`. This is done by setting the `icon` property or placing an `Icon` component within the `Button`.

If you want specific control over the positioning and placement of the `Icon`, then that should be done by placing the `Icon` component within the `Button` rather than using the `icon` property.
</docs>

<template>
  <z-button type="primary" shape="circle">
    <template #icon><SearchOutlined /></template>
  </z-button>
  <z-button type="primary" shape="circle">A</z-button>
  <z-button type="primary">
    <template #icon><SearchOutlined /></template>
    Search
  </z-button>
  <z-button shape="circle">
    <template #icon><SearchOutlined /></template>
  </z-button>
  <z-button>
    <template #icon><SearchOutlined /></template>
    Search
  </z-button>
  <z-button shape="circle">
    <template #icon><SearchOutlined /></template>
  </z-button>
  <z-button>
    <template #icon><SearchOutlined /></template>
    Search
  </z-button>
  <z-button type="dashed" shape="circle">
    <template #icon><SearchOutlined /></template>
  </z-button>
  <z-button type="dashed">
    <template #icon><SearchOutlined /></template>
    Search
  </z-button>
  <z-button href="https://www.google.com">
    <template #icon><SearchOutlined /></template>
  </z-button>
  <br />
  <br />
  <z-tooltip title="search">
    <z-button type="primary" shape="circle" size="large">
      <template #icon><SearchOutlined /></template>
    </z-button>
  </z-tooltip>
  <z-button type="primary" shape="circle" size="large">A</z-button>
  <z-button type="primary" size="large">
    <template #icon><SearchOutlined /></template>
    Search
  </z-button>
  <z-tooltip title="search">
    <z-button shape="circle" size="large">
      <template #icon><SearchOutlined /></template>
    </z-button>
  </z-tooltip>
  <z-button size="large">
    <template #icon><SearchOutlined /></template>
    Search
  </z-button>
  <br />
  <z-tooltip title="search">
    <z-button shape="circle" size="large">
      <template #icon><SearchOutlined /></template>
    </z-button>
  </z-tooltip>
  <z-button size="large">
    <template #icon><SearchOutlined /></template>
    Search
  </z-button>
  <z-tooltip title="search">
    <z-button type="dashed" shape="circle" size="large">
      <template #icon><SearchOutlined /></template>
    </z-button>
  </z-tooltip>
  <z-button type="dashed" size="large">
    <template #icon><SearchOutlined /></template>
    Search
  </z-button>
  <z-button size="large" href="https://www.google.com">
    <template #icon><SearchOutlined /></template>
  </z-button>
</template>
<script>
import { SearchOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    SearchOutlined,
  },
};
</script>
