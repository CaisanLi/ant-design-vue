<docs>
---
order: 7
title:
  zh-CN: Flex 填充
  en-US: Flex Stretch
---

## zh-CN

Col 提供 `flex` 属性以支持填充。

## en-US

Col provides `flex` prop to support fill rest.

</docs>

<template>
  <z-divider orientation="left">Percentage columns</z-divider>
  <z-row type="flex">
    <z-col :flex="2">2 / 5</z-col>
    <z-col :flex="3">3 / 5</z-col>
  </z-row>
  <z-divider orientation="left">Fill rest</z-divider>
  <z-row type="flex">
    <z-col flex="100px">100px</z-col>
    <z-col flex="auto">auto</z-col>
  </z-row>
  <z-divider orientation="left">Raw flex style</z-divider>
  <z-row type="flex">
    <z-col flex="1 1 200px">1 1 200px</z-col>
    <z-col flex="0 1 300px">0 1 300px</z-col>
  </z-row>
</template>
