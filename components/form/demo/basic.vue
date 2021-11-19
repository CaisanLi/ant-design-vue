<docs>
---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

## zh-CN

基本的表单数据域控制展示，包含布局、初始化、验证、提交。

## en-US

Basic Form data control. Includes layout, initial values, validation and submit.
</docs>
<template>
  <z-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <z-form-item label="Activity name">
      <z-input v-model:value="formState.name" />
    </z-form-item>
    <z-form-item label="Activity zone">
      <z-select v-model:value="formState.region" placeholder="please select your zone">
        <z-select-option value="shanghai">Zone one</z-select-option>
        <z-select-option value="beijing">Zone two</z-select-option>
      </z-select>
    </z-form-item>
    <z-form-item label="Activity time">
      <z-date-picker
        v-model:value="formState.date1"
        show-time
        type="date"
        placeholder="Pick a date"
        style="width: 100%"
      />
    </z-form-item>
    <z-form-item label="Instant delivery">
      <z-switch v-model:checked="formState.delivery" />
    </z-form-item>
    <z-form-item label="Activity type">
      <z-checkbox-group v-model:value="formState.type">
        <z-checkbox value="1" name="type">Online</z-checkbox>
        <z-checkbox value="2" name="type">Promotion</z-checkbox>
        <z-checkbox value="3" name="type">Offline</z-checkbox>
      </z-checkbox-group>
    </z-form-item>
    <z-form-item label="Resources">
      <z-radio-group v-model:value="formState.resource">
        <z-radio value="1">Sponsor</z-radio>
        <z-radio value="2">Venue</z-radio>
      </z-radio-group>
    </z-form-item>
    <z-form-item label="Activity form">
      <z-input v-model:value="formState.desc" type="textarea" />
    </z-form-item>
    <z-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <z-button type="primary" @click="onSubmit">Create</z-button>
      <z-button style="margin-left: 10px">Cancel</z-button>
    </z-form-item>
  </z-form>
</template>
<script lang="ts">
import { Dayjs } from 'dayjs';
import { defineComponent, reactive, toRaw } from 'vue';
import type { UnwrapRef } from 'vue';

interface FormState {
  name: string;
  region: string | undefined;
  date1: Dayjs | undefined;
  delivery: boolean;
  type: string[];
  resource: string;
  desc: string;
}
export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      name: '',
      region: undefined,
      date1: undefined,
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    });
    const onSubmit = () => {
      console.log('submit!', toRaw(formState));
    };
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      formState,
      onSubmit,
    };
  },
});
</script>
