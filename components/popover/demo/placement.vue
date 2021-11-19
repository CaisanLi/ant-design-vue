<docs>
---
order: 2
title:
  zh-CN: 位置
  en-US: Placement
---

## zh-CN

位置有十二个方向。

## en-US

There are 12 `placement` options available.

</docs>
<template>
  <div id="components-popover-demo-placement">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
      <z-popover placement="topLeft">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <z-button>TL</z-button>
      </z-popover>
      <z-popover placement="top">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <z-button>Top</z-button>
      </z-popover>
      <z-popover placement="topRight">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <z-button>TR</z-button>
      </z-popover>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
      <z-popover placement="leftTop">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <z-button>LT</z-button>
      </z-popover>
      <z-popover placement="left">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <z-button>Left</z-button>
      </z-popover>
      <z-popover placement="leftBottom">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <z-button>LB</z-button>
      </z-popover>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
      <z-popover placement="rightTop">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <z-button>RT</z-button>
      </z-popover>
      <z-popover placement="right">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <z-button>Right</z-button>
      </z-popover>
      <z-popover placement="rightBottom">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <z-button>RB</z-button>
      </z-popover>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
      <z-popover placement="bottomLeft">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <z-button>BL</z-button>
      </z-popover>
      <z-popover placement="bottom">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <z-button>Bottom</z-button>
      </z-popover>
      <z-popover placement="bottomRight">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <z-button>BR</z-button>
      </z-popover>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      buttonWidth: ref<number>(70),
    };
  },
});
</script>
<style>
#components-popover-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
