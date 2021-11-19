<docs>
---
order: 4
title:
  zh-CN: 竖直方向的步骤条
  en-US: Vertical
---

## zh-CN

简单的竖直方向的步骤条。

## en-US

A simple step bar in the vertical direction.
</docs>

<template>
  <z-steps direction="vertical" :current="1">
    <z-step title="Finished" description="This is a description." />
    <z-step title="In Progress" description="This is a description." />
    <z-step title="Waiting" description="This is a description." />
  </z-steps>
</template>
