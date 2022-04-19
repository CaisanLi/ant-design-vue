<docs>
---
order: 1
title:
  zh-CN: 类型
  en-US: Type
---

## zh-CN

支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

## en-US

Image, Icon and letter are supported, and the latter two kinds avatar can have custom colors and background colors.
</docs>

<template>
  <z-avatar>
    <template #icon>
      <UserOutlined />
    </template>
  </z-avatar>
  <z-avatar>U</z-avatar>
  <z-avatar>USER</z-avatar>
  <z-avatar src="https://joeschmoe.io/api/v1/random" />
  <z-avatar style="color: #f56a00; background-color: #fde3cf">U</z-avatar>
  <z-avatar style="background-color: #87d068">
    <template #icon>
      <UserOutlined />
    </template>
  </z-avatar>
</template>

<script lang="ts">
import { UserOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
  },
});
</script>
