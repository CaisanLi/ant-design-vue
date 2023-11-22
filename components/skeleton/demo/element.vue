<docs>
---
order: 2.1
title:
  zh-CN: 按钮/头像/输入框/图像
  en-US: Button/Avatar/Input/Image
---

## zh-CN

骨架按钮、头像、输入框和图像。

## en-US

Skeleton Button, Avatar, Input and Image.

</docs>

<template>
  <z-space>
    <z-skeleton-button :active="active" :size="size" :shape="buttonShape" :block="block" />
    <z-skeleton-avatar :active="active" :size="size" :shape="avatarShape" />
    <z-skeleton-input style="width: 200px" :active="active" :size="size" />
  </z-space>
  <br />
  <br />
  <z-skeleton-button :active="active" :size="size" :shape="buttonShape" :block="block" />
  <br />
  <br />
  <z-skeleton-image />
  <z-divider />
  <z-form layout="inline" style="margin: 16px 0">
    <z-form-item label="Active">
      <z-switch v-model:checked="active" />
    </z-form-item>
    <z-form-item label="Button Block">
      <z-switch v-model:checked="block" />
    </z-form-item>
    <z-form-item label="Size">
      <z-radio-group v-model:value="size">
        <z-radio-button value="default">Default</z-radio-button>
        <z-radio-button value="large">Large</z-radio-button>
        <z-radio-button value="small">Small</z-radio-button>
      </z-radio-group>
    </z-form-item>
    <z-form-item label="Button Shape">
      <z-radio-group v-model:value="buttonShape">
        <z-radio-button value="default">Default</z-radio-button>
        <z-radio-button value="round">Round</z-radio-button>
        <z-radio-button value="circle">Circle</z-radio-button>
      </z-radio-group>
    </z-form-item>
    <z-form-item label="Avatar Shape">
      <z-radio-group v-model:value="avatarShape">
        <z-radio-button value="square">Square</z-radio-button>
        <z-radio-button value="circle">Circle</z-radio-button>
      </z-radio-group>
    </z-form-item>
  </z-form>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { SkeletonButtonProps, SkeletonAvatarProps } from 'ant-design-vue';
export default defineComponent({
  setup() {
    return {
      active: ref(false),
      block: ref(false),
      size: ref<SkeletonButtonProps['size']>('default'),
      buttonShape: ref<SkeletonButtonProps['shape']>('default'),
      avatarShape: ref<SkeletonAvatarProps['shape']>('circle'),
    };
  },
});
</script>
