<docs>
---
order: 1
title:
  zh-CN: 内嵌菜单
  en-US: Inline menu
---

## zh-CN

垂直菜单，子菜单内嵌在菜单区域。

## en-US

Vertical menu with inline submenus.

</docs>
<template>
  <z-menu
    id="dddddd"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 256px"
    mode="inline"
    @click="handleClick"
  >
    <z-sub-menu key="sub1" @titleClick="titleClick">
      <template #icon>
        <MailOutlined />
      </template>
      <template #title>Navigation One</template>
      <z-menu-item-group key="g1">
        <template #icon>
          <QqOutlined />
        </template>
        <template #title>Item 1</template>
        <z-menu-item key="1">Option 1</z-menu-item>
        <z-menu-item key="2">Option 2</z-menu-item>
      </z-menu-item-group>
      <z-menu-item-group key="g2" title="Item 2">
        <z-menu-item key="3">Option 3</z-menu-item>
        <z-menu-item key="4">Option 4</z-menu-item>
      </z-menu-item-group>
    </z-sub-menu>
    <z-sub-menu key="sub2" @titleClick="titleClick">
      <template #icon>
        <AppstoreOutlined />
      </template>
      <template #title>Navigation Two</template>
      <z-menu-item key="5">Option 5</z-menu-item>
      <z-menu-item key="6">Option 6</z-menu-item>
      <z-sub-menu key="sub3" title="Submenu">
        <z-menu-item key="7">Option 7</z-menu-item>
        <z-menu-item key="8">Option 8</z-menu-item>
      </z-sub-menu>
    </z-sub-menu>
    <z-sub-menu key="sub4">
      <template #icon>
        <SettingOutlined />
      </template>
      <template #title>Navigation Three</template>
      <z-menu-item key="9">Option 9</z-menu-item>
      <z-menu-item key="10">Option 10</z-menu-item>
      <z-menu-item key="11">Option 11</z-menu-item>
      <z-menu-item key="12">Option 12</z-menu-item>
    </z-sub-menu>
  </z-menu>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { MailOutlined, QqOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';
export default defineComponent({
  components: {
    MailOutlined,
    QqOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const selectedKeys = ref<string[]>(['1']);
    const openKeys = ref<string[]>(['sub1']);
    const handleClick: MenuProps['onClick'] = e => {
      console.log('click', e);
    };
    const titleClick = (e: Event) => {
      console.log('titleClick', e);
    };
    watch(openKeys, val => {
      console.log('openKeys', val);
    });
    return {
      selectedKeys,
      openKeys,

      handleClick,
      titleClick,
    };
  },
});
</script>
