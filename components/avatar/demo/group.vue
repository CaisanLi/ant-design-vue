<docs>
---
order: 4
title:
  zh-CN: Avatar.Group
  en-US: Avatar.Group
---

## zh-CN

头像组合展现。

## en-US

Avatar group display.
</docs>

<template>
  <z-avatar-group>
    <z-avatar src="https://joeschmoe.io/api/v1/random" />
    <z-avatar style="background-color: #f56a00">K</z-avatar>
    <z-tooltip title="Ant User" placement="top">
      <z-avatar style="background-color: #87d068">
        <template #icon><UserOutlined /></template>
      </z-avatar>
    </z-tooltip>
    <z-avatar style="background-color: #1890ff">
      <template #icon><UserOutlined /></template>
    </z-avatar>
  </z-avatar-group>
  <z-divider />
  <z-avatar-group :max-count="2" :max-style="{ color: '#f56a00', backgroundColor: '#fde3cf' }">
    <z-avatar src="https://joeschmoe.io/api/v1/random" />
    <z-avatar style="background-color: #1890ff">K</z-avatar>
    <z-tooltip title="Ant User" placement="top">
      <z-avatar style="background-color: #87d068">
        <template #icon><UserOutlined /></template>
      </z-avatar>
    </z-tooltip>
    <z-avatar style="background-color: #1890ff">
      <template #icon><UserOutlined /></template>
    </z-avatar>
  </z-avatar-group>
  <z-divider />
  <z-avatar-group
    :max-count="2"
    size="large"
    :max-style="{
      color: '#f56a00',
      backgroundColor: '#fde3cf',
    }"
  >
    <z-avatar src="https://joeschmoe.io/api/v1/random" />
    <z-avatar style="background-color: #1890ff">K</z-avatar>
    <z-tooltip title="Ant User" placement="top">
      <z-avatar style="background-color: #87d068">
        <template #icon><UserOutlined /></template>
      </z-avatar>
    </z-tooltip>
    <z-avatar style="background-color: #1890ff">
      <template #icon><UserOutlined /></template>
    </z-avatar>
  </z-avatar-group>
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
