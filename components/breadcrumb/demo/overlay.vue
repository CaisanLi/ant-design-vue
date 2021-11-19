<docs>
---
order: 5
title:
  zh-CN: 带下拉菜单的面包屑
  en-US: Bread crumbs with drop down menu
---

## zh-CN

面包屑支持下拉菜单。

## en-US

Breadcrumbs support drop down menu.

</docs>

<template>
  <z-breadcrumb>
    <z-breadcrumb-item>Ant Design Vue</z-breadcrumb-item>
    <z-breadcrumb-item><a href="">Component</a></z-breadcrumb-item>
    <z-breadcrumb-item>
      <a href="">General</a>
      <template #overlay>
        <z-menu>
          <z-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">General</a>
          </z-menu-item>
          <z-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">Layout</a>
          </z-menu-item>
          <z-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Navigation</a>
          </z-menu-item>
        </z-menu>
      </template>
    </z-breadcrumb-item>
    <z-breadcrumb-item>Button</z-breadcrumb-item>
  </z-breadcrumb>
</template>
