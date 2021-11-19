<docs>
---
order: 3
title:
  zh-CN: 自动调整位置
  en-US: Adjust placement automatically
---

## zh-CN

气泡框不可见时自动调整位置。

## en-US

Adjust popup placement automatically when popup is invisible.

</docs>

<template>
  <div :style="wrapStyles">
    <z-tooltip placement="left" title="Prompt Text" :get-popup-container="getPopupContainer">
      <z-button>Adjust automatically / 自动调整</z-button>
    </z-tooltip>
    <br />
    <z-tooltip
      placement="left"
      title="Prompt Text"
      :get-popup-container="getPopupContainer"
      :auto-adjust-overflow="false"
    >
      <z-button style="margin-top: 10px">Ingore / 不处理</z-button>
    </z-tooltip>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
const wrapStyles: Record<string, string> = {
  overflow: 'hidden',
  position: 'relative',
  padding: '24px',
  border: '1px solid #e9e9e9',
};
export default defineComponent({
  setup() {
    const getPopupContainer = (trigger: HTMLElement) => {
      return trigger.parentElement;
    };

    return {
      wrapStyles,
      getPopupContainer,
    };
  },
});
</script>
