<docs>
---
order: 1
title:
  zh-CN: 国际化
  en-US: Locale
---

## zh-CN

此处列出 Ant Design Vue 中需要国际化支持的组件，你可以在演示里切换语言。

## en-US

Components which need localization support are listed here, you can toggle the language in the demo.
</docs>

<template>
  <div class="change-locale">
    <span style="margin-right: 16px">Change locale of components:</span>
    <z-radio-group v-model:value="locale">
      <z-radio-button key="en" :value="enUS.locale">English</z-radio-button>
      <z-radio-button key="cn" :value="zhCN.locale">中文</z-radio-button>
    </z-radio-group>
  </div>
  <z-config-provider :locale="locale === 'en' ? enUS : zhCN">
    <div class="locale-components">
      <div class="example">
        <z-pagination :total="50" show-size-changer />
      </div>
      <div class="example">
        <z-select show-search style="width: 200px">
          <z-select-option value="jack">jack</z-select-option>
          <z-select-option value="lucy">lucy</z-select-option>
        </z-select>
        <z-date-picker />
        <z-time-picker />
        <z-range-picker style="width: 200px" />
      </div>
      <div class="example">
        <z-button type="primary" @click="visible = true">Show Modal</z-button>
        <z-button @click="info">Show info</z-button>
        <z-button @click="confirm">Show confirm</z-button>
        <z-popconfirm title="Question?">
          <a href="#">Click to confirm</a>
        </z-popconfirm>
      </div>
      <div class="example">
        <z-transfer :data-source="[]" show-search :target-keys="[]" :render="item => item.title" />
      </div>
      <div class="site-config-provider-calendar-wrapper">
        <z-calendar :fullscreen="false" />
      </div>
      <div class="example">
        <z-table :data-source="[]" :columns="columns" />
      </div>
      <z-modal v-model:visible="visible" title="Locale Modal">
        <p>Locale Modal</p>
      </z-modal>
    </div>
  </z-config-provider>
</template>
<script>
import { Modal } from 'ant-design-vue';
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { defineComponent, ref, watch } from 'vue';

dayjs.locale('en');

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1',
      },
    ],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];
export default defineComponent({
  setup() {
    const visible = ref(false);
    const locale = ref(enUS.locale);
    watch(locale, val => {
      dayjs.locale(val);
    });
    const info = () => {
      Modal.info({
        title: 'some info',
        content: 'some info',
      });
    };
    const confirm = () => {
      Modal.confirm({
        title: 'some info',
        content: 'some info',
      });
    };
    return {
      columns,
      visible,
      locale,
      dayjs,
      enUS,
      zhCN,
      info,
      confirm,
    };
  },
});
</script>
<style scoped>
.site-config-provider-calendar-wrapper {
  width: 319px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
}
.locale-components {
  border-top: 1px solid #d9d9d9;
  padding-top: 16px;
}

.example {
  margin: 16px 0;
}

.example > * {
  margin-right: 8px;
}

.change-locale {
  margin-bottom: 16px;
}
[data-theme='dark'] .locale-components {
  border-top: 1px solid #303030;
}
[data-theme='dark'] .site-config-provider-calendar-wrapper {
  border: 1px solid #303030;
}
</style>
