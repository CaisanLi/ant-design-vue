<docs>
---
order: 2
title:
  zh-CN: 配合 Form 使用
  en-US: With Form
---

## zh-CN

配合 Form 使用。

## en-US

to work with `Form`.
</docs>

<template>
  <z-form layout="horizontal">
    <z-form-item
      label="Top coders"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 18 }"
      name="coders"
      v-bind="validateInfos.coders"
    >
      <z-mentions v-model:value="modelRef.coders" rows="1">
        <z-mentions-option value="afc163">afc163</z-mentions-option>
        <z-mentions-option value="zombieJ">zombieJ</z-mentions-option>
        <z-mentions-option value="yesmeck">yesmeck</z-mentions-option>
      </z-mentions>
    </z-form-item>
    <z-form-item
      label="Bio"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 18 }"
      name="bio"
      v-bind="validateInfos.bio"
    >
      <z-mentions
        v-model:value="modelRef.bio"
        rows="3"
        placeholder="You can use @ to ref user here"
      >
        <z-mentions-option value="afc163">afc163</z-mentions-option>
        <z-mentions-option value="zombieJ">zombieJ</z-mentions-option>
        <z-mentions-option value="yesmeck">yesmeck</z-mentions-option>
      </z-mentions>
    </z-form-item>
    <z-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <z-button type="primary" @click="handleSubmit">Submit</z-button>
      <z-button style="margin-left: 8px" @click="resetFields">Reset</z-button>
    </z-form-item>
  </z-form>
</template>
<script>
import { Mentions, Form } from 'ant-design-vue';
import { defineComponent, reactive } from 'vue';

const useForm = Form.useForm;
const { getMentions } = Mentions;
export default defineComponent({
  setup() {
    const checkMention = async (rule, value) => {
      const mentions = getMentions(value);
      if (mentions.length < 2) {
        return Promise.reject('More than one must be selected!');
      } else {
        return Promise.resolve();
      }
    };
    const modelRef = reactive({
      bio: '',
      coders: '',
    });
    const rulesRef = reactive({
      bio: [{ required: true, message: 'Must input bio' }],
      coders: [{ required: true, validator: checkMention }],
    });
    const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef);
    const handleSubmit = e => {
      e.preventDefault();
      validate()
        .then(() => {
          console.log('Submit!!!', modelRef);
        })
        .catch(errors => {
          console.log('Errors in the form!!!', errors);
        });
    };
    return {
      modelRef,
      resetFields,
      validateInfos,
      handleSubmit,
    };
  },
});
</script>
