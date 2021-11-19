<docs>
---
order: 0
title:
  zh-CN: 顶部导航
  en-US: Top Navigation
---

## zh-CN

水平的顶部导航菜单。

## en-US

Horizontal top navigation menu.

</docs>

<template>
  <z-menu v-model:selectedKeys="current" mode="horizontal">
    <z-menu-item key="mail">
      <template #icon>
        <mail-outlined />
      </template>
      Navigation One
    </z-menu-item>
    <z-menu-item key="app" disabled>
      <template #icon>
        <appstore-outlined />
      </template>
      Navigation Two
    </z-menu-item>
    <z-sub-menu>
      <template #icon>
        <setting-outlined />
      </template>
      <template #title>Navigation Three - Submenu</template>
      <z-menu-item-group title="Item 1">
        <z-menu-item key="setting:1">Option 1</z-menu-item>
        <z-menu-item key="setting:2">Option 2</z-menu-item>
      </z-menu-item-group>
      <z-menu-item-group title="Item 2">
        <z-menu-item key="setting:3">Option 3</z-menu-item>
        <z-menu-item key="setting:4">Option 4</z-menu-item>
      </z-menu-item-group>
    </z-sub-menu>
    <z-menu-item key="alipay">
      <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    </z-menu-item>
  </z-menu>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const current = ref<string[]>(['mail']);
    return {
      current,
    };
  },
});
</script>
