<docs>
---
order: 4.2
title:
  zh-CN: 复杂的动态增减表单项
  en-US: Complex Dynamic Form Item
---

## zh-CN

这个例子演示了一个表单中包含多个表单控件的情况。

## en-US

This example demonstrates the case that a form contains multiple form controls.

</docs>
<template>
  <z-form
    ref="formRef"
    name="dynamic_form_nest_item"
    :model="dynamicValidateForm"
    @finish="onFinish"
  >
    <z-form-item name="area" label="Area" :rules="[{ required: true, message: 'Missing area' }]">
      <z-select v-model:value="dynamicValidateForm.area" :options="areas" />
    </z-form-item>
    <z-space
      v-for="(sight, index) in dynamicValidateForm.sights"
      :key="sight.id"
      style="display: flex; margin-bottom: 8px"
      align="baseline"
    >
      <z-form-item
        :name="['sights', index, 'value']"
        label="Sight"
        :rules="{
          required: true,
          message: 'Missing sight',
        }"
      >
        <z-select
          v-model:value="sight.value"
          :disabled="!dynamicValidateForm.area"
          :options="(sights[dynamicValidateForm.area] || []).map(a => ({ value: a }))"
          style="width: 130px"
        ></z-select>
      </z-form-item>
      <z-form-item
        label="Price"
        :name="['sights', index, 'price']"
        :rules="{
          required: true,
          message: 'Missing price',
        }"
      >
        <z-input v-model:value="sight.price" />
      </z-form-item>
      <MinusCircleOutlined @click="removeSight(sight)" />
    </z-space>
    <z-form-item>
      <z-button type="dashed" block @click="addSight">
        <PlusOutlined />
        Add sights
      </z-button>
    </z-form-item>
    <z-form-item>
      <z-button type="primary" html-type="submit">Submit</z-button>
    </z-form-item>
  </z-form>
</template>

<script lang="ts">
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, ref, watch } from 'vue';
import type { FormInstance } from 'ant-design-vue';

interface Sights {
  value: string;
  price: string;
  id: number;
}
export default defineComponent({
  components: {
    MinusCircleOutlined,
    PlusOutlined,
  },
  setup() {
    const areas = [
      { label: 'Beijing', value: 'Beijing' },
      { label: 'Shanghai', value: 'Shanghai' },
    ];

    const sights = {
      Beijing: ['Tiananmen', 'Great Wall'],
      Shanghai: ['Oriental Pearl', 'The Bund'],
    };

    const formRef = ref<FormInstance>();
    const dynamicValidateForm = reactive<{ sights: Sights[]; area: string }>({
      sights: [],
      area: undefined,
    });
    watch(
      () => dynamicValidateForm.area,
      () => {
        dynamicValidateForm.sights = [];
      },
    );
    const removeSight = (item: Sights) => {
      let index = dynamicValidateForm.sights.indexOf(item);
      if (index !== -1) {
        dynamicValidateForm.sights.splice(index, 1);
      }
    };
    const addSight = () => {
      dynamicValidateForm.sights.push({
        value: undefined,
        price: undefined,
        id: Date.now(),
      });
    };
    const onFinish = values => {
      console.log('Received values of form:', values);
      console.log('dynamicValidateForm:', dynamicValidateForm);
    };
    return {
      formRef,
      dynamicValidateForm,
      onFinish,
      removeSight,
      addSight,
      areas,
      sights,
    };
  },
});
</script>
