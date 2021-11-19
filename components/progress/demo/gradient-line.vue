<docs>
---
order: 10
title:
  zh-CN: 自定义进度条渐变色
  en-US: Custom line gradient
---

## zh-CN

`linear-gradient` 的封装。推荐只传两种颜色。

## en-US

A package of `linear-gradient`. It is recommended to only pass two colors.

</docs>

<template>
  <div>
    <z-progress
      :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"
      :percent="99.9"
    />
    <z-progress
      :stroke-color="{
        from: '#108ee9',
        to: '#87d068',
      }"
      :percent="99.9"
      status="active"
    />
    <z-progress
      type="circle"
      :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"
      :percent="90"
    />
    <z-progress
      type="circle"
      :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"
      :percent="100"
    />
  </div>
</template>
