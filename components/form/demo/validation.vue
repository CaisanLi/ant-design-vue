<docs>
---
order: 6
title:
  zh-CN: 表单验证
  en-US: Validation
---

## zh-CN

Form 组件提供了表单验证的功能，只需要通过 `rules` 属性传入约定的验证规则，并将 `FormItem` 的 `name` 属性设置为需校验的字段名即可。校验规则参见 [async-validator](https://github.com/yiminghe/async-validator)

## en-US

Just add the `rules` attribute for `Form` component, pass validation rules, and set `name` attribute for `FormItem` as a specific key that needs to be validated. See more information at [async-validator](https://github.com/yiminghe/async-validator).
</docs>

<template>
  <z-form
    ref="formRef"
    :model="formState"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <z-form-item ref="name" label="Activity name" name="name">
      <z-input v-model:value="formState.name" />
    </z-form-item>
    <z-form-item label="Activity zone" name="region">
      <z-select v-model:value="formState.region" placeholder="please select your zone">
        <z-select-option value="shanghai">Zone one</z-select-option>
        <z-select-option value="beijing">Zone two</z-select-option>
      </z-select>
    </z-form-item>
    <z-form-item label="Activity time" required name="date1">
      <z-date-picker
        v-model:value="formState.date1"
        show-time
        type="date"
        placeholder="Pick a date"
        style="width: 100%"
      />
    </z-form-item>
    <z-form-item label="Instant delivery" name="delivery">
      <z-switch v-model:checked="formState.delivery" />
    </z-form-item>
    <z-form-item label="Activity type" name="type">
      <z-checkbox-group v-model:value="formState.type">
        <z-checkbox value="1" name="type">Online</z-checkbox>
        <z-checkbox value="2" name="type">Promotion</z-checkbox>
        <z-checkbox value="3" name="type">Offline</z-checkbox>
      </z-checkbox-group>
    </z-form-item>
    <z-form-item label="Resources" name="resource">
      <z-radio-group v-model:value="formState.resource">
        <z-radio value="1">Sponsor</z-radio>
        <z-radio value="2">Venue</z-radio>
      </z-radio-group>
    </z-form-item>
    <z-form-item label="Activity form" name="desc">
      <z-textarea v-model:value="formState.desc" />
    </z-form-item>
    <z-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <z-button type="primary" @click="onSubmit">Create</z-button>
      <z-button style="margin-left: 10px" @click="resetForm">Reset</z-button>
    </z-form-item>
  </z-form>
</template>
<script lang="ts">
import { Dayjs } from 'dayjs';
import { defineComponent, reactive, ref, toRaw } from 'vue';
import type { UnwrapRef } from 'vue';
import type { Rule } from 'ant-design-vue/es/form';

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
    const formRef = ref();
    const formState: UnwrapRef<FormState> = reactive({
      name: '',
      region: undefined,
      date1: undefined,
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    });
    const rules: Record<string, Rule[]> = {
      name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
      ],
      region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
      date1: [{ required: true, message: 'Please pick a date', trigger: 'change', type: 'object' }],
      type: [
        {
          type: 'array',
          required: true,
          message: 'Please select at least one activity type',
          trigger: 'change',
        },
      ],
      resource: [{ required: true, message: 'Please select activity resource', trigger: 'change' }],
      desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
    };
    const onSubmit = () => {
      formRef.value
        .validate()
        .then(() => {
          console.log('values', formState, toRaw(formState));
        })
        .catch(error => {
          console.log('error', error);
        });
    };
    const resetForm = () => {
      formRef.value.resetFields();
    };
    return {
      formRef,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: '',
      formState,
      rules,
      onSubmit,
      resetForm,
    };
  },
});
</script>
