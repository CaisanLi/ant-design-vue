<docs>
---
order: 7
title:
  zh-CN: 预设状态的标签
  en-US: Status Tag
---

## zh-CN

预设五种状态颜色，可以通过设置 `color` 为 `success`、 `processing`、`error`、`default`、`warning` 来代表不同的状态。

## en-US

We preset five different colors, you can set color property such as `success`,`processing`,`error`,`default` and `warning` to indicate specific status.

</docs>

<template>
  <z-divider orientation="left">Without icon</z-divider>
  <div>
    <z-tag color="success">success</z-tag>
    <z-tag color="processing">processing</z-tag>
    <z-tag color="error">error</z-tag>
    <z-tag color="warning">warning</z-tag>
    <z-tag color="default">default</z-tag>
  </div>
  <z-divider orientation="left">With icon</z-divider>
  <div>
    <z-tag color="success">
      <template #icon>
        <check-circle-outlined />
      </template>
      success
    </z-tag>
    <z-tag color="processing">
      <template #icon>
        <sync-outlined :spin="true" />
      </template>
      processing
    </z-tag>
    <z-tag color="error">
      <template #icon>
        <close-circle-outlined />
      </template>
      error
    </z-tag>
    <z-tag color="warning">
      <template #icon>
        <exclamation-circle-outlined />
      </template>
      warning
    </z-tag>
    <z-tag color="default">
      <template #icon>
        <clock-circle-outlined />
      </template>
      waiting
    </z-tag>
    <z-tag color="default">
      <template #icon>
        <minus-circle-outlined />
      </template>
      stop
    </z-tag>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    CheckCircleOutlined,
    SyncOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    ClockCircleOutlined,
    MinusCircleOutlined,
  },
});
</script>
