<docs>
---
order: 0
title:
  zh-CN: 进度条
  en-US: Progress bar
---

## zh-CN

标准的进度条。

## en-US

A standard progress bar.

</docs>

<template>
  <z-progress :percent="30" />
  <z-progress :percent="50" status="active" />
  <z-progress :percent="70" status="exception" />
  <z-progress :percent="100" />
  <z-progress :percent="50" :show-info="false" />
</template>
