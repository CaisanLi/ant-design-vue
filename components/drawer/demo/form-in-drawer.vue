<docs>
---
order: 4
title:
  zh-CN: 抽屉表单
  en-US: Submit form in drawer
---

## zh-CN

在抽屉中使用表单。

## en-US

Use form in drawer with submit button.

</docs>

<template>
  <z-button type="primary" @click="showDrawer">
    <template #icon><PlusOutlined /></template>
    New account
  </z-button>
  <z-drawer
    title="Create a new account"
    :width="720"
    :visible="visible"
    :body-style="{ paddingBottom: '80px' }"
    :footer-style="{ textAlign: 'right' }"
    @close="onClose"
  >
    <z-form :model="form" :rules="rules" layout="vertical">
      <z-row :gutter="16">
        <z-col :span="12">
          <z-form-item label="Name" name="name">
            <z-input v-model:value="form.name" placeholder="Please enter user name" />
          </z-form-item>
        </z-col>
        <z-col :span="12">
          <z-form-item label="Url" name="url">
            <z-input
              v-model:value="form.url"
              style="width: 100%"
              addon-before="http://"
              addon-after=".com"
              placeholder="please enter url"
            />
          </z-form-item>
        </z-col>
      </z-row>
      <z-row :gutter="16">
        <z-col :span="12">
          <z-form-item label="Owner" name="owner">
            <z-select v-model:value="form.owner" placeholder="Please z-s an owner">
              <z-select-option value="xiao">Xiaoxiao Fu</z-select-option>
              <z-select-option value="mao">Maomao Zhou</z-select-option>
            </z-select>
          </z-form-item>
        </z-col>
        <z-col :span="12">
          <z-form-item label="Type" name="type">
            <z-select v-model:value="form.type" placeholder="Please choose the type">
              <z-select-option value="private">Private</z-select-option>
              <z-select-option value="public">Public</z-select-option>
            </z-select>
          </z-form-item>
        </z-col>
      </z-row>
      <z-row :gutter="16">
        <z-col :span="12">
          <z-form-item label="Approver" name="approver">
            <z-select v-model:value="form.approver" placeholder="Please choose the approver">
              <z-select-option value="jack">Jack Ma</z-select-option>
              <z-select-option value="tom">Tom Liu</z-select-option>
            </z-select>
          </z-form-item>
        </z-col>
        <z-col :span="12">
          <z-form-item label="DateTime" name="dateTime">
            <z-date-picker
              v-model:value="form.dateTime"
              style="width: 100%"
              :get-popup-container="trigger => trigger.parentElement"
            />
          </z-form-item>
        </z-col>
      </z-row>
      <z-row :gutter="16">
        <z-col :span="24">
          <z-form-item label="Description" name="description">
            <z-textarea
              v-model:value="form.description"
              :rows="4"
              placeholder="please enter url description"
            />
          </z-form-item>
        </z-col>
      </z-row>
    </z-form>
    <template #extra>
      <z-space>
        <z-button @click="onClose">Cancel</z-button>
        <z-button type="primary" @click="onClose">Submit</z-button>
      </z-space>
    </template>
  </z-drawer>
</template>
<script lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
  components: {
    PlusOutlined,
  },
  setup() {
    const form = reactive({
      name: '',
      url: '',
      owner: '',
      type: '',
      approver: '',
      dateTime: null,
      description: '',
    });

    const rules = {
      name: [{ required: true, message: 'Please enter user name' }],
      url: [{ required: true, message: 'please enter url' }],
      owner: [{ required: true, message: 'Please select an owner' }],
      type: [{ required: true, message: 'Please choose the type' }],
      approver: [{ required: true, message: 'Please choose the approver' }],
      dateTime: [{ required: true, message: 'Please choose the dateTime', type: 'object' }],
      description: [{ required: true, message: 'Please enter url description' }],
    };

    const visible = ref<boolean>(false);

    const showDrawer = () => {
      visible.value = true;
    };

    const onClose = () => {
      visible.value = false;
    };
    return {
      form,
      rules,
      visible,
      showDrawer,
      onClose,
    };
  },
});
</script>
