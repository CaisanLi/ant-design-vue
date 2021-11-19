<docs>
---
order: 3
title:
  zh-CN: 不可用状态
  en-US: Disabled
---

## zh-CN

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

## en-US

To mark a button as disabled, add the `disabled` property to the `Button`.
</docs>

<template>
  <z-button type="primary">Primary</z-button>
  <z-button type="primary" disabled>Primary(disabled)</z-button>
  <br />
  <z-button>Default</z-button>
  <z-button disabled>Default(disabled)</z-button>
  <br />
  <z-button type="dashed">Dashed</z-button>
  <z-button type="dashed" disabled>Dashed(disabled)</z-button>
  <br />
  <z-button type="text">Text</z-button>
  <z-button type="text" disabled>Text(disabled)</z-button>
  <br />
  <z-button type="link">Link</z-button>
  <z-button type="link" disabled>Link(disabled)</z-button>
  <br />
  <z-button danger>Danger Default</z-button>
  <z-button danger disabled>Danger Default(disabled)</z-button>
  <br />
  <z-button type="text" danger>Danger Text</z-button>
  <z-button type="text" danger disabled>Danger Text(disabled)</z-button>
  <br />
  <z-button type="link" danger>Danger Link</z-button>
  <z-button type="link" danger disabled>Danger Link(disabled)</z-button>
  <br />

  <div :style="{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }">
    <z-button ghost>Ghost</z-button>
    <z-button ghost disabled>Ghost(disabled)</z-button>
  </div>
</template>
