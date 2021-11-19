<docs>
---
order: 7
iframe: 360
title:
  zh-CN: 固定侧边栏
  en-US: Fixed Sider
---

## zh-CN

当内容较长时，使用固定侧边栏可以提供更好的体验。

## en-US

When dealing with long content, a fixed sider can provide a better user experience.

</docs>
<template>
  <z-layout>
    <z-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
      <div class="logo" />
      <z-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <z-menu-item key="1">
          <user-outlined />
          <span class="nav-text">nav 1</span>
        </z-menu-item>
        <z-menu-item key="2">
          <video-camera-outlined />
          <span class="nav-text">nav 2</span>
        </z-menu-item>
        <z-menu-item key="3">
          <upload-outlined />
          <span class="nav-text">nav 3</span>
        </z-menu-item>
        <z-menu-item key="4">
          <bar-chart-outlined />
          <span class="nav-text">nav 4</span>
        </z-menu-item>
        <z-menu-item key="5">
          <cloud-outlined />
          <span class="nav-text">nav 5</span>
        </z-menu-item>
        <z-menu-item key="6">
          <appstore-outlined />
          <span class="nav-text">nav 6</span>
        </z-menu-item>
        <z-menu-item key="7">
          <team-outlined />
          <span class="nav-text">nav 7</span>
        </z-menu-item>
        <z-menu-item key="8">
          <shop-outlined />
          <span class="nav-text">nav 8</span>
        </z-menu-item>
      </z-menu>
    </z-layout-sider>
    <z-layout :style="{ marginLeft: '200px' }">
      <z-layout-header :style="{ background: '#fff', padding: 0 }" />
      <z-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
          ...
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          content
        </div>
      </z-layout-content>
      <z-layout-footer :style="{ textAlign: 'center' }">
        Ant Design ©2018 Created by Ant UED
      </z-layout-footer>
    </z-layout>
  </z-layout>
</template>
<script lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
  },
  setup() {
    return {
      selectedKeys: ref<string[]>(['4']),
    };
  },
});
</script>

<style>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
