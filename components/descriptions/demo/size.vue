<docs>
---
order: 2
title:
  zh-CN: 自定义尺寸
  en-US: Custom Size
---

## zh-CN

自定义尺寸，适应在各种容器中展示。

## en-US

Custom sizes to fit in a variety of containers.

</docs>

<template>
  <div>
    <z-radio-group v-model:value="size" @change="onChange">
      <z-radio value="default">default</z-radio>
      <z-radio value="middle">middle</z-radio>
      <z-radio value="small">small</z-radio>
    </z-radio-group>
    <br />
    <br />
    <z-descriptions bordered title="Custom Size" :size="size">
      <template #extra>
        <z-button type="primary">Edit</z-button>
      </template>
      <z-descriptions-item label="Product">Cloud Database</z-descriptions-item>
      <z-descriptions-item label="Billing">Prepaid</z-descriptions-item>
      <z-descriptions-item label="Time">18:00:00</z-descriptions-item>
      <z-descriptions-item label="Amount">$80.00</z-descriptions-item>
      <z-descriptions-item label="Discount">$20.00</z-descriptions-item>
      <z-descriptions-item label="Official">$60.00</z-descriptions-item>
      <z-descriptions-item label="Config Info">
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </z-descriptions-item>
    </z-descriptions>
    <br />
    <br />
    <z-descriptions title="Custom Size" :size="size">
      <template #extra>
        <z-button type="primary">Edit</z-button>
      </template>
      <z-descriptions-item label="Product">Cloud Database</z-descriptions-item>
      <z-descriptions-item label="Billing">Prepaid</z-descriptions-item>
      <z-descriptions-item label="Time">18:00:00</z-descriptions-item>
      <z-descriptions-item label="Amount">$80.00</z-descriptions-item>
      <z-descriptions-item label="Discount">$20.00</z-descriptions-item>
      <z-descriptions-item label="Official">$60.00</z-descriptions-item>
    </z-descriptions>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
// TODO
import type { RadioChangeEvent } from 'ant-design-vue/es/radio/interface';

export default defineComponent({
  setup() {
    const size = ref('default');
    const onChange = (e: RadioChangeEvent) => {
      console.log('size checked', e.target.value);
      size.value = e.target.value;
    };

    return {
      size,
      onChange,
    };
  },
});
</script>
