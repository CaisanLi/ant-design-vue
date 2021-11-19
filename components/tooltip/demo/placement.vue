<docs>
---
order: 1
title:
  zh-CN: 位置
  en-US: Placement
---

## zh-CN

位置有 12 个方向。

## en-US

There are 12 placement options available.

</docs>

<template>
  <div id="components-a-tooltip-demo-placement">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
      <z-tooltip placement="topLeft">
        <template #title>
          <span>prompt text</span>
        </template>
        <z-button>TL</z-button>
      </z-tooltip>
      <z-tooltip placement="top">
        <template #title>
          <span>prompt text</span>
        </template>
        <z-button>Top</z-button>
      </z-tooltip>
      <z-tooltip placement="topRight">
        <template #title>
          <span>prompt text</span>
        </template>
        <z-button>TR</z-button>
      </z-tooltip>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
      <z-tooltip placement="leftTop">
        <template #title>
          <span>prompt text</span>
        </template>
        <z-button>LT</z-button>
      </z-tooltip>
      <z-tooltip placement="left">
        <template #title>
          <span>prompt text</span>
        </template>
        <z-button>Left</z-button>
      </z-tooltip>
      <z-tooltip placement="leftBottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <z-button>LB</z-button>
      </z-tooltip>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
      <z-tooltip placement="rightTop">
        <template #title>
          <span>prompt text</span>
        </template>
        <z-button>RT</z-button>
      </z-tooltip>
      <z-tooltip placement="right">
        <template #title>
          <span>prompt text</span>
        </template>
        <z-button>Right</z-button>
      </z-tooltip>
      <z-tooltip placement="rightBottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <z-button>RB</z-button>
      </z-tooltip>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
      <z-tooltip placement="bottomLeft">
        <template #title>
          <span>prompt text</span>
        </template>
        <z-button>BL</z-button>
      </z-tooltip>
      <z-tooltip placement="bottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <z-button>Bottom</z-button>
      </z-tooltip>
      <z-tooltip placement="bottomRight">
        <template #title>
          <span>prompt text</span>
        </template>
        <z-button>BR</z-button>
      </z-tooltip>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      buttonWidth: 70,
    };
  },
});
</script>
<style scoped>
#components-a-tooltip-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
