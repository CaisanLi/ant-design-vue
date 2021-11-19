<docs>
---
order: 3
title:
  zh-CN: 自定义锚点高亮
  en-US: Customize the anchor highlight
---

## zh-CN

自定义锚点高亮。

## en-US

Customize the anchor highlight.
</docs>

<template>
  <z-anchor :affix="false" :get-current-anchor="getCurrentAnchor">
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
    const getCurrentAnchor = () => {
      return '#components-anchor-demo-static';
    };
    return {
      getCurrentAnchor,
    };
  },
});
</script>
