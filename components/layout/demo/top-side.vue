<docs>
---
order: 3
title:
  zh-CN: 顶部-侧边布局
  en-US: Header-Sider
---

## zh-CN

拥有顶部导航及侧边栏的页面，多用于展示类网站。

## en-US

Both the top navigation and the sidebar, commonly used in documentation site.

</docs>
<template>
  <z-layout>
    <z-layout-header class="header">
      <div class="logo" />
      <z-menu
        v-model:selectedKeys="selectedKeys1"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <z-menu-item key="1">nav 1</z-menu-item>
        <z-menu-item key="2">nav 2</z-menu-item>
        <z-menu-item key="3">nav 3</z-menu-item>
      </z-menu>
    </z-layout-header>
    <z-layout-content style="padding: 0 50px">
      <z-breadcrumb style="margin: 16px 0">
        <z-breadcrumb-item>Home</z-breadcrumb-item>
        <z-breadcrumb-item>List</z-breadcrumb-item>
        <z-breadcrumb-item>App</z-breadcrumb-item>
      </z-breadcrumb>
      <z-layout style="padding: 24px 0; background: #fff">
        <z-layout-sider width="200" style="background: #fff">
          <z-menu
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            mode="inline"
            style="height: 100%"
          >
            <z-sub-menu key="sub1">
              <template #title>
                <span>
                  <user-outlined />
                  subnav 1
                </span>
              </template>
              <z-menu-item key="1">option1</z-menu-item>
              <z-menu-item key="2">option2</z-menu-item>
              <z-menu-item key="3">option3</z-menu-item>
              <z-menu-item key="4">option4</z-menu-item>
            </z-sub-menu>
            <z-sub-menu key="sub2">
              <template #title>
                <span>
                  <laptop-outlined />
                  subnav 2
                </span>
              </template>
              <z-menu-item key="5">option5</z-menu-item>
              <z-menu-item key="6">option6</z-menu-item>
              <z-menu-item key="7">option7</z-menu-item>
              <z-menu-item key="8">option8</z-menu-item>
            </z-sub-menu>
            <z-sub-menu key="sub3">
              <template #title>
                <span>
                  <notification-outlined />
                  subnav 3
                </span>
              </template>
              <z-menu-item key="9">option9</z-menu-item>
              <z-menu-item key="10">option10</z-menu-item>
              <z-menu-item key="11">option11</z-menu-item>
              <z-menu-item key="12">option12</z-menu-item>
            </z-sub-menu>
          </z-menu>
        </z-layout-sider>
        <z-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          Content
        </z-layout-content>
      </z-layout>
    </z-layout-content>
    <z-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </z-layout-footer>
  </z-layout>
</template>

<script lang="ts">
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },
  setup() {
    return {
      selectedKeys1: ref<string[]>(['2']),
      selectedKeys2: ref<string[]>(['1']),
      openKeys: ref<string[]>(['sub1']),
    };
  },
});
</script>

<style>
#components-layout-demo-top-side .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
