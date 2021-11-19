<docs>
---
order: 5
title:
  zh-CN: 竖直方向的小型步骤条
  en-US: Vertical mini version
---

## zh-CN

简单的竖直方向的小型步骤条。

## en-US

A simple mini version step bar in the vertical direction.
</docs>
<template>
  <z-steps direction="vertical" size="small" :current="1">
    <z-step title="Finished" description="This is a description." />
    <z-step title="In Progress" description="This is a description." />
    <z-step title="Waiting" description="This is a description." />
  </z-steps>
</template>
