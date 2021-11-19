<docs>
---
order: 1
title:
  zh-CN: 弹出位置
  en-US: Placement
---

## zh-CN

支持 6 个弹出位置。

## en-US

Support 6 placements.

</docs>

<template>
  <div id="components-dropdown-demo-placement">
    <template v-for="(placement, index) in placements" :key="placement">
      <z-dropdown :placement="placement">
        <z-button>{{ placement }}</z-button>
        <template #overlay>
          <z-menu>
            <z-menu-item>
              <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
              </a>
            </z-menu-item>
            <z-menu-item>
              <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
              </a>
            </z-menu-item>
            <z-menu-item>
              <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
              </a>
            </z-menu-item>
          </z-menu>
        </template>
      </z-dropdown>
      <br v-if="index === 2" />
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      placements: ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'],
    };
  },
});
</script>
<style>
#components-dropdown-demo-placement .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
