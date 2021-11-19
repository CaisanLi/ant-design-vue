<docs>
---
order: 2
title:
  zh-CN: 自定义 click 事件
  en-US: Customize the click event
---

## zh-CN

点击锚点不记录历史。

## en-US

Clicking on an anchor does not record history.
</docs>

<template>
  <z-anchor :affix="false" @click="handleClick">
    <z-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <z-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <z-anchor-link href="#API" title="API">
      <z-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <z-anchor-link href="#Link-Props" title="Link Props" />
    </z-anchor-link>
  </z-anchor>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const handleClick = (e: Event, link: string) => {
      e.preventDefault();
      console.log(link);
    };
    return {
      handleClick,
    };
  },
});
</script>
