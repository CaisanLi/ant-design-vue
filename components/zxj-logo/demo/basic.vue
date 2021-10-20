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
    <a-logo />
    <a-logo :number="2" />
    <a-logo :number="3" />
    <a-logo :number="4" />
    <a-logo :number="5" />
    <a-logo :number="6" />
    <a-logo :number="7" />
    <a-logo :number="8" />
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
