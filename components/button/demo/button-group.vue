<docs>
---
order: 99
title:
  zh-CN: 废弃的 Block 组
  en-US: Deprecated Button Group
debug: true
---

## zh-CN

Debug usage

## en-US

Debug usage
</docs>

<template>
  <div id="components-button-demo-button-group">
    <h4>Basic</h4>
    <z-button-group>
      <z-button>Cancel</z-button>
      <z-button type="primary">OK</z-button>
    </z-button-group>
    <z-button-group>
      <z-button disabled>L</z-button>
      <z-button disabled>M</z-button>
      <z-button disabled>R</z-button>
    </z-button-group>
    <z-button-group>
      <z-button type="primary">L</z-button>
      <z-button>M</z-button>
      <z-button>M</z-button>
      <z-button type="dashed">R</z-button>
    </z-button-group>

    <h4>With Icon</h4>
    <z-button-group>
      <z-button type="primary">
        <LeftOutlined />
        Go back
      </z-button>
      <z-button type="primary">
        Go forward
        <RightOutlined />
      </z-button>
    </z-button-group>
    <z-button-group>
      <z-button type="primary">
        <template #icon><CloudOutlined /></template>
      </z-button>
      <z-button type="primary">
        <template #icon><CloudDownloadOutlined /></template>
      </z-button>
    </z-button-group>
  </div>
</template>
<script lang="ts">
import {
  LeftOutlined,
  RightOutlined,
  CloudDownloadOutlined,
  CloudOutlined,
} from '@ant-design/icons-vue';
export default {
  components: {
    LeftOutlined,
    RightOutlined,
    CloudDownloadOutlined,
    CloudOutlined,
  },
};
</script>
<style>
#components-button-demo-button-group > h4 {
  margin: 16px 0;
  font-size: 14px;
  line-height: 1;
  font-weight: normal;
}
#components-button-demo-button-group > h4:first-child {
  margin-top: 0;
}
#components-button-demo-button-group .ant-btn-group {
  margin-right: 8px;
}
</style>
```
