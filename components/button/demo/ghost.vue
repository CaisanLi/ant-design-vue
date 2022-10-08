<docs>
---
order: 8
title:
  zh-CN: 幽灵按钮
  en-US: Ghost Button
---

## zh-CN

幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。

## en-US

`ghost` property will make button's background transparent, it is commonly used in colored background.

</docs>

<template>
  <div :style="{ background: '#333333', padding: '26px 16px 16px' }">
    <z-button type="primary" ghost >Primary</z-button>
    <z-button ghost disabled>Default</z-button>
    <z-button dashed ghost disabled>Dashed</z-button>
    <z-button danger ghost >Danger</z-button>
  </div>
</template>
