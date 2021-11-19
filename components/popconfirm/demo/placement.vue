<docs>
---
order: 3
title:
  zh-CN: 位置
  en-US: Placement
---

## zh-CN

位置有十二个方向。如需箭头指向目标元素中心，可以设置 `arrowPointAtCenter`。

## en-US

There are 12 `placement` options available. Use `arrowPointAtCenter` if you want arrow point at the center of target.

</docs>

<template>
  <div id="components-a-popconfirm-demo-placement">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
      <z-popconfirm placement="topLeft" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <z-button>TL</z-button>
      </z-popconfirm>
      <z-popconfirm placement="top" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <z-button>Top</z-button>
      </z-popconfirm>
      <z-popconfirm placement="topRight" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <z-button>TR</z-button>
      </z-popconfirm>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
      <z-popconfirm placement="leftTop" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <z-button>LT</z-button>
      </z-popconfirm>
      <z-popconfirm placement="left" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <z-button>Left</z-button>
      </z-popconfirm>
      <z-popconfirm placement="leftBottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <z-button>LB</z-button>
      </z-popconfirm>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
      <z-popconfirm placement="rightTop" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <z-button>RT</z-button>
      </z-popconfirm>
      <z-popconfirm placement="right" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <z-button>Right</z-button>
      </z-popconfirm>
      <z-popconfirm placement="rightBottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <z-button>RB</z-button>
      </z-popconfirm>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
      <z-popconfirm placement="bottomLeft" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <z-button>BL</z-button>
      </z-popconfirm>
      <z-popconfirm placement="bottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <z-button>Bottom</z-button>
      </z-popconfirm>
      <z-popconfirm placement="bottomRight" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <z-button>BR</z-button>
      </z-popconfirm>
    </div>
  </div>
</template>
<script>
import { message } from 'ant-design-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const buttonWidth = 70;

    const text = 'Are you sure to delete this task?';

    const confirm = () => {
      message.info('Clicked on Yes.');
    };
    return {
      buttonWidth,
      text,
      confirm,
    };
  },
});
</script>
<style scoped>
#components-a-popconfirm-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
