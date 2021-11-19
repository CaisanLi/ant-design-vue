<docs>
---
order: 7
title:
  zh-CN: 点状步骤条
  en-US: Dot Style
---

## zh-CN

包含步骤点的进度条。

## en-US

Steps with progress dot style.
</docs>

<template>
  <div>
    <z-steps progress-dot :current="1">
      <z-step title="Finished" description="This is a description." />
      <z-step title="In Progress" description="This is a description." />
      <z-step title="Waiting" description="This is a description." />
    </z-steps>
    <z-divider />
    <z-steps progress-dot :current="1" direction="vertical">
      <z-step title="Finished" description="This is a description. This is a description." />
      <z-step title="Finished" description="This is a description. This is a description." />
      <z-step title="In Progress" description="This is a description. This is a description." />
      <z-step title="Waiting" description="This is a description." />
      <z-step title="Waiting" description="This is a description." />
    </z-steps>
  </div>
</template>
