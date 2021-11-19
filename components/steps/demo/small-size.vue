<docs>
---
order: 1
title:
  zh-CN: 迷你版
  en-US: Mini version
---

## zh-CN

迷你版的步骤条，通过设置 `<Steps size="small">` 启用.

## en-US

By setting like this: `<Steps size="small">`, you can get a mini version.
</docs>
<template>
  <z-steps :current="1" size="small">
    <z-step title="Finished" />
    <z-step title="In Progress" />
    <z-step title="Waiting" />
  </z-steps>
</template>
