<docs>
---
order: 4
title:
  zh-CN: 自定义右侧插槽样式
  en-US: Customize the right slot style
---

## zh-CN

使用titleStyle属性，可自定义右侧title插槽样式

## en-US

You can customize the right title slot style using the titleStyle property.
</docs>

<template>
  <div class="content">
    <a-logo :number="2" :title-style="customStyle">
      <template #title>众信佳</template>
    </a-logo>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  setup() {
    const customStyle = reactive({
      color: '#0067FF',
    });
    return { customStyle };
  },
});
</script>

<style>
.content {
  display: flex;
  flex-flow: row wrap;
}
.content .ant-logo:not(:first-child) {
  margin-left: 10px;
}
</style>
