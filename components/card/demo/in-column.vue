<docs>
---
order: 4
title:
  zh-CN: 栅格卡片
  en-US: Card in column
---

## zh-CN

在系统概览页面常常和栅格进行配合。

## en-US

Cards usually cooperate with grid column layout in overview page.

</docs>

<template>
  <div style="background-color: #ececec; padding: 20px">
    <z-row :gutter="16">
      <z-col :span="8">
        <z-card title="Card title" :bordered="false">
          <p>card content</p>
        </z-card>
      </z-col>
      <z-col :span="8">
        <z-card title="Card title" :bordered="false">
          <p>card content</p>
        </z-card>
      </z-col>
      <z-col :span="8">
        <z-card title="Card title" :bordered="false">
          <p>card content</p>
        </z-card>
      </z-col>
    </z-row>
  </div>
</template>
