<docs>
---
order: 1
title:
  zh-CN: 自定义logo宽度
  en-US: Customize logo width
---

## zh-CN

使用width属性，可自定义logo宽度；使用height属性，可自定义logo高度

## en-US

Use the width attribute to customize the logo width.  You can customize the logo height by using the height attribute.
</docs>

<template>
  <div class="content">
    <z-logo :number="2" :width="200" />
    <z-logo :number="2" :height="200" />
  </div>
</template>

<style>
.content {
  display: flex;
  flex-flow: row wrap;
}
.content .ant-logo:not(:first-child) {
  margin-left: 10px;
}
</style>
