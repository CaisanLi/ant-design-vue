<docs>
---
order: 4
title:
  zh-CN: 触发事件
  en-US: Click event
---

## zh-CN

点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。

## en-US

An event will be triggered when you click menu items, in which you can make different operations according to item's key.

</docs>

<template>
  <z-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      Hover me, Click menu item
      <DownOutlined />
    </a>
    <template #overlay>
      <z-menu @click="onClick">
        <z-menu-item key="1">1st menu item</z-menu-item>
        <z-menu-item key="2">2nd menu item</z-menu-item>
        <z-menu-item key="3">3rd menu item</z-menu-item>
      </z-menu>
    </template>
  </z-dropdown>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';

export default defineComponent({
  components: {
    DownOutlined,
  },
  setup() {
    const onClick: MenuProps['onClick'] = ({ key }) => {
      console.log(`Click on item ${key}`);
    };
    return {
      onClick,
    };
  },
});
</script>
