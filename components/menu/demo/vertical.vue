<docs>
---
order: 3
title:
  zh-CN: 垂直菜单
  en-US: Vertical menu
---

## zh-CN

子菜单是弹出的形式。

## en-US

Submenus open as pop-ups.

</docs>

<template>
  <z-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 256px"
    mode="vertical"
    @click="handleClick"
  >
    <z-menu-item key="1">
      <template #icon>
        <MailOutlined />
      </template>
      Navigation One
    </z-menu-item>
    <z-menu-item key="2">
      <template #icon>
        <CalendarOutlined />
      </template>
      Navigation Two
    </z-menu-item>
    <z-sub-menu key="sub1">
      <template #icon>
        <AppstoreOutlined />
      </template>
      <template #title>Navigation Three</template>
      <z-menu-item key="3">Option 3</z-menu-item>
      <z-menu-item key="4">Option 4</z-menu-item>
      <z-sub-menu key="sub1-2" title="Submenu">
        <z-menu-item key="5">Option 5</z-menu-item>
        <z-menu-item key="6">Option 6</z-menu-item>
      </z-sub-menu>
    </z-sub-menu>
    <z-sub-menu key="sub2">
      <template #icon>
        <SettingOutlined />
      </template>
      <template #title>Navigation Four</template>
      <z-menu-item key="7">Option 7</z-menu-item>
      <z-menu-item key="8">Option 8</z-menu-item>
      <z-menu-item key="9">Option 9</z-menu-item>
      <z-menu-item key="10">Option 10</z-menu-item>
    </z-sub-menu>
  </z-menu>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';

interface MenuInfo {
  key: string;
  keyPath: string[];
  item: any;
  domEvent: MouseEvent;
}
export default defineComponent({
  components: {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const state = reactive({
      selectedKeys: [],
      openKeys: [],
    });
    const handleClick = (e: MenuInfo) => {
      console.log('click ', e);
    };
    return {
      ...toRefs(state),
      handleClick,
    };
  },
});
</script>
