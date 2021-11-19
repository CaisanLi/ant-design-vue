<docs>
---
order: 7
title:
  zh-CN: useForm 基本表单
  en-US: useForm Basic Usage
---

## zh-CN

通过 [`Form.useForm`](#useForm) 更加灵活的使用表单组件。

## en-US

use [`Form.useForm`](#useForm) provides form validation logic and status.
</docs>

<template>
  <z-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <z-form-item label="Activity name" v-bind="validateInfos.name">
      <z-input v-model:value="modelRef.name" />
    </z-form-item>
    <z-form-item label="Activity zone" v-bind="validateInfos.region">
      <z-select v-model:value="modelRef.region" placeholder="please select your zone">
        <z-select-option value="shanghai">Zone one</z-select-option>
        <z-select-option value="beijing">Zone two</z-select-option>
      </z-select>
    </z-form-item>
    <z-form-item label="Activity type" v-bind="validateInfos.type">
      <z-checkbox-group v-model:value="modelRef.type">
        <z-checkbox value="1" name="type">Online</z-checkbox>
        <z-checkbox value="2" name="type">Promotion</z-checkbox>
        <z-checkbox value="3" name="type">Offline</z-checkbox>
      </z-checkbox-group>
    </z-form-item>
    <z-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <z-button type="primary" @click.prevent="onSubmit">Create</z-button>
      <z-button style="margin-left: 10px" @click="resetFields">Reset</z-button>
    </z-form-item>
  </z-form>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue';
import { Form } from 'ant-design-vue';

const useForm = Form.useForm;
export default defineComponent({
  setup() {
    const modelRef = reactive({
      name: '',
      region: undefined,
      type: [],
    });
    const rulesRef = reactive({
      name: [
        {
          required: true,
          message: 'Please input name',
        },
      ],
      region: [
        {
          required: true,
          message: 'Please select region',
        },
      ],
      type: [
        {
          required: true,
          message: 'Please select type',
          type: 'array',
        },
      ],
    });
    const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef, {
      onValidate: (...args) => console.log(...args),
    });
    const onSubmit = () => {
      validate()
        .then(() => {
          console.log(toRaw(modelRef));
        })
        .catch(err => {
          console.log('error', err);
        });
    };
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      validateInfos,
      resetFields,
      modelRef,
      onSubmit,
    };
  },
});
</script>
