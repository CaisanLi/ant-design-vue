<docs>
---
order: 0
title:
  zh-CN: 基础使用
  en-US: Based on using
---

## zh-CN

默认number为1，不同number对应不同logo。

## en-US

The default number is 1,different numbers correspond to different logos.
</docs>

<template>
  <div class="content">
    <z-logo />
    <z-logo :number="2" />
    <z-logo :number="3" />
    <z-logo :number="4" />
    <z-logo :number="5" />
    <z-logo :number="6" />
    <z-logo :number="7" />
    <z-logo :number="8" />
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
