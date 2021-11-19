<docs>
---
order: 2
title:
  zh-CN: 带图标的步骤条
  en-US: With icon
---

## zh-CN

通过设置 `Steps.Step` 的 `icon` 属性，可以启用自定义图标。

## en-US

You can use your own custom icons by setting the property `icon` for `Steps.Step`.
</docs>
<template>
  <z-steps>
    <z-step status="finish" title="Login">
      <template #icon>
        <user-outlined />
      </template>
    </z-step>
    <z-step status="finish" title="Verification">
      <template #icon>
        <solution-outlined />
      </template>
    </z-step>
    <z-step status="process" title="Pay">
      <template #icon>
        <loading-outlined />
      </template>
    </z-step>
    <z-step status="wait" title="Done">
      <template #icon>
        <smile-outlined />
      </template>
    </z-step>
  </z-steps>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    UserOutlined,
    SolutionOutlined,
    LoadingOutlined,
    SmileOutlined,
  },
});
</script>
