<docs>
---
order: 6
title:
  zh-CN: 多级菜单
  en-US: Cascading menu
---

## zh-CN

传入的菜单里有多个层级。

## en-US

The menu has multiple levels.

</docs>

<template>
  <z-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      Cascading menu
      <DownOutlined />
    </a>
    <template #overlay>
      <zmenu>
        <z-menu-item>1st menu item</z-menu-item>
        <z-menu-item>2nd menu item</z-menu-item>
        <z-sub-menu key="sub1" title="sub menu">
          <z-menu-item>3rd menu item</z-menu-item>
          <z-menu-item>4th menu item</z-menu-item>
        </z-sub-menu>
        <z-sub-menu key="sub2" title="disabled sub menu" disabled>
          <z-menu-item>5d menu item</z-menu-item>
          <z-menu-item>6th menu item</z-menu-item>
        </z-sub-menu>
      </zmenu>
    </template>
  </z-dropdown>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    DownOutlined,
  },
});
</script>
