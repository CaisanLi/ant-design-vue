<docs>
---
order: 5
title:
  zh-CN: 监听锚点链接改变
  en-US: Listening for anchor link change
---

## zh-CN

监听锚点链接改变。

## en-US

Listening for anchor link change.
</docs>

<template>
  <z-anchor :affix="false" @change="onChange">
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
    const onChange = (link: string) => {
      console.log('Anchor:OnChange', link);
    };
    return {
      onChange,
    };
  },
});
</script>
