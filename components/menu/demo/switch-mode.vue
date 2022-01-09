<docs>
---
order: 5
title:
  zh-CN: 切换菜单类型
  en-US: Switch the menu type
---

## zh-CN

展示动态切换模式。

## en-US

Show the dynamic switching mode (between `inline` and `vertical`).

</docs>

<template>
  <div>
    <z-switch :checked="mode === 'vertical'" @change="changeMode" />
    Change Mode
    <span class="ant-divider" style="margin: 0 1em" />
    <z-switch :checked="theme === 'dark'" @change="changeTheme" />
    Change Theme
    <br />
    <br />
    <z-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      style="width: 256px"
      :mode="mode"
      :theme="theme"
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
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
import type { MenuMode, MenuTheme } from 'ant-design-vue';
export default defineComponent({
  components: {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const state = reactive({
      mode: 'inline' as MenuMode,
      theme: 'light' as MenuTheme,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
    });
    const changeMode = (checked: boolean) => {
      state.mode = checked ? 'vertical' : 'inline';
    };
    const changeTheme = (checked: boolean) => {
      state.theme = checked ? 'dark' : 'light';
    };
    return {
      ...toRefs(state),
      changeMode,
      changeTheme,
    };
  },
});
</script>
