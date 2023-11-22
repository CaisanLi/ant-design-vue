<docs>
---
order: 5
version: 3.0
title:
  zh-CN: 全局样式
  en-US: Global Theme
---

## zh-CN

通过 css variable 修改全局主题色（你可以切换到组件页面查看更详细的样式展示）。自动生成的变量可能会根据设计调整，请勿直接依赖。详细配置请[点击查看](/docs/vue/customize-theme-variable)。

## en-US

Modify global theme color by css variable. Css variable depends on the design, it may adjust so please do not directly use it. You can go to other components page for more detail style. [Check this](/docs/vue/customize-theme-variable) to view detail.

</docs>

<template>
  <z-row :gutter="16" :wrap="false">
    <z-col flex="none">
      <z-space direction="vertical" align="center">
        <!-- Primary Color -->
        <input
          type="color"
          :value="colorState.primaryColor"
          @input="e => onColorChange('primaryColor', e)"
        />

        <span style="color: var(--ant-primary-color)">var(`--ant-primary-color`)</span>

        <!-- Error Color -->
        <input
          type="color"
          :value="colorState.errorColor"
          @input="e => onColorChange('errorColor', e)"
        />

        <span style="color: var(--ant-error-color)">var(`--ant-error-color`)</span>

        <!-- Warning Color -->
        <input
          type="color"
          :value="colorState.warningColor"
          @input="e => onColorChange('warningColor', e)"
        />

        <span style="color: var(--ant-warning-color)">var(`--ant-warning-color`)</span>

        <!-- Success Color -->
        <input
          type="color"
          :value="colorState.successColor"
          @input="e => onColorChange('successColor', e)"
        />

        <span style="color: var(--ant-success-color)">var(`--ant-success-color`)</span>

        <!-- Info Color -->
        <input
          type="color"
          :value="colorState.infoColor"
          @input="e => onColorChange('infoColor', e)"
        />
        <span style="color: var(--ant-info-color)">var(`--ant-info-color`)</span>
      </z-space>
    </z-col>

    <z-col flex="auto">
      <z-space direction="vertical" style="width: 100%" :size="0">
        <template #split><z-divider /></template>
        <!-- Primary Button -->
        <SplitSpace>
          <z-button type="primary">Primary</z-button>
          <z-button>Default</z-button>
          <z-button type="dashed">Dashed</z-button>
          <z-button type="text">Text</z-button>
          <z-button type="link">Link</z-button>
        </SplitSpace>

        <!-- Danger Button -->
        <SplitSpace>
          <z-button danger type="primary">Primary</z-button>
          <z-button danger>Default</z-button>
          <z-button danger type="dashed">Dashed</z-button>
          <z-button danger type="text">Text</z-button>
          <z-button danger type="link">Link</z-button>
        </SplitSpace>

        <!-- Ghost Button -->
        <SplitSpace style="background: rgb(190, 200, 200)">
          <z-button type="primary" ghost>Primary</z-button>
          <z-button ghost>Default</z-button>
          <z-button type="dashed" ghost>Dashed</z-button>
          <z-button type="primary" ghost danger>Primary</z-button>
          <z-button ghost danger>Default</z-button>
          <z-button type="dashed" ghost danger>Dashed</z-button>
        </SplitSpace>

        <!-- Typography -->
        <SplitSpace>
          <z-typography-text type="success">Text (success)</z-typography-text>
          <z-typography-text type="warning">Text(warning)</z-typography-text>
          <z-typography-text type="danger">Text(danger)</z-typography-text>
          <z-typography-link href="https://ant.design" target="_blank">Link</z-typography-link>
          <z-typography-text copyable>Text</z-typography-text>

          <!-- Dropdown -->
          <z-dropdown>
            <template #overlay>
              <z-menu>
                <z-menu-item>1st menu item</z-menu-item>
                <z-menu-item danger>a danger item</z-menu-item>
              </z-menu>
            </template>
            <a class="ant-dropdown-link" @click.prevent>
              Hover me
              <DownOutlined />
            </a>
          </z-dropdown>

          <!-- Spin -->
          <z-spin />
        </SplitSpace>

        <!-- Menu - horizontal -->
        <z-row :gutter="16">
          <z-col :span="12">
            <z-menu v-model:selectedKeys="selectedKeys" mode="horizontal">
              <z-menu-item key="mail">
                Mail
                <template #icon>
                  <MailOutlined />
                </template>
              </z-menu-item>
              <z-sub-menu key="SubMenu" title="Submenu">
                <template #icon><SettingOutlined /></template>
                <z-menu-item-group title="Item 1">
                  <z-menu-item key="setting:1">Option 1</z-menu-item>
                  <z-menu-item key="setting:2">Option 2</z-menu-item>
                </z-menu-item-group>
              </z-sub-menu>
            </z-menu>
          </z-col>
          <z-col :span="12">
            <z-menu v-model:selectedKeys="selectedKeys" mode="horizontal" theme="dark">
              <z-menu-item key="mail">
                <template #icon><SettingOutlined /></template>
                Mail
              </z-menu-item>
              <z-sub-menu key="SubMenu" title="Submenu">
                <template #icon><SettingOutlined /></template>
                <z-menu-item-group title="Item 1">
                  <z-menu-item key="setting:1">Option 1</z-menu-item>
                  <z-menu-item key="setting:2">Option 2</z-menu-item>
                </z-menu-item-group>
              </z-sub-menu>
            </z-menu>
          </z-col>
        </z-row>

        <!-- Menu - vertical -->
        <z-row :gutter="16">
          <z-col :span="12">
            <z-menu v-model:selectedKeys="selectedKeys" mode="inline">
              <z-menu-item key="mail">
                <template #icon><MailOutlined /></template>
                Mail
              </z-menu-item>
              <z-sub-menu key="SubMenu" title="Submenu">
                <template #icon><SettingOutlined /></template>
                <z-menu-item-group title="Item 1">
                  <z-menu-item key="setting:1">Option 1</z-menu-item>
                  <z-menu-item key="setting:2">Option 2</z-menu-item>
                </z-menu-item-group>
              </z-sub-menu>
            </z-menu>
          </z-col>
          <z-col :span="12">
            <z-menu v-model:selectedKeys="selectedKeys" mode="vertical" theme="dark">
              <z-menu-item key="mail">
                <template #icon><MailOutlined /></template>
                Mail
              </z-menu-item>
              <z-sub-menu key="SubMenu" title="Submenu">
                <template #icon><SettingOutlined /></template>
                <z-menu-item-group title="Item 1">
                  <z-menu-item key="setting:1">Option 1</z-menu-item>
                  <z-menu-item key="setting:2">Option 2</z-menu-item>
                </z-menu-item-group>
              </z-sub-menu>
            </z-menu>
          </z-col>
        </z-row>

        <!-- Pagination -->
        <z-pagination show-quick-jumper :default-current="2" :total="500" />

        <!-- Steps -->
        <z-steps :current="1" :percent="60">
          <z-step title="Finished" description="This is a description." />
          <z-step
            title="In Progress"
            sub-title="Left 00:00:08"
            description="This is a description."
          />
          <z-step title="Waiting" description="This is a description." />
        </z-steps>

        <!-- Steps - dot -->
        <z-steps :current="2" status="error" progress-dot>
          <z-step title="Finished" description="You can hover on the dot." />
          <z-step title="In Progress" description="You can hover on the dot." />
          <z-step title="Error" description="You can hover on the dot." />
          <z-step title="Waiting" description="You can hover on the dot." />
        </z-steps>

        <!-- Form - Input -->
        <z-form>
          <SplitSpace>
            <z-form-item>
              <z-input v-bind="inputProps" />
            </z-form-item>
            <z-form-item has-feedback validate-status="success">
              <z-input v-bind="inputProps" />
            </z-form-item>
            <z-form-item has-feedback validate-status="warning">
              <z-input v-bind="inputProps" />
            </z-form-item>
            <z-form-item has-feedback validate-status="error">
              <z-input v-bind="inputProps" />
            </z-form-item>
            <z-form-item has-feedback validate-status="validating">
              <z-input v-bind="inputProps" />
            </z-form-item>
          </SplitSpace>
        </z-form>

        <!-- Form - Select -->
        <z-form>
          <SplitSpace>
            <z-form-item>
              <z-select v-bind="selectProps" />
            </z-form-item>
            <z-form-item has-feedback validate-status="success">
              <z-select v-bind="selectProps" />
            </z-form-item>
            <z-form-item has-feedback validate-status="warning">
              <z-select v-bind="selectProps" />
            </z-form-item>
            <z-form-item has-feedback validate-status="error">
              <z-select v-bind="selectProps" />
            </z-form-item>
            <z-form-item has-feedback validate-status="validating">
              <z-select v-bind="selectProps" />
            </z-form-item>
          </SplitSpace>
        </z-form>

        <!-- Form - TreeSelect -->
        <z-form>
          <SplitSpace>
            <z-form-item>
              <z-tree-select v-bind="treeSelectProps" />
            </z-form-item>
            <z-form-item has-feedback validate-status="success">
              <z-tree-select v-bind="treeSelectProps" />
            </z-form-item>
            <z-form-item has-feedback validate-status="warning">
              <z-tree-select v-bind="treeSelectProps" />
            </z-form-item>
            <z-form-item has-feedback validate-status="error">
              <z-tree-select v-bind="treeSelectProps" />
            </z-form-item>
            <z-form-item has-feedback validate-status="validating">
              <z-tree-select v-bind="treeSelectProps" />
            </z-form-item>
          </SplitSpace>
        </z-form>

        <!-- Form - InputNumber -->
        <z-form>
          <SplitSpace>
            <z-form-item>
              <z-input-number />
            </z-form-item>
            <z-form-item has-feedback validate-status="success">
              <z-input-number />
            </z-form-item>
            <z-form-item has-feedback validate-status="warning">
              <z-input-number />
            </z-form-item>
            <z-form-item has-feedback validate-status="error">
              <z-input-number />
            </z-form-item>
            <z-form-item has-feedback validate-status="validating">
              <z-input-number />
            </z-form-item>
          </SplitSpace>
        </z-form>

        <!-- Form - DatePicker -->
        <z-form>
          <SplitSpace>
            <z-form-item>
              <z-date-picker />
            </z-form-item>
            <z-form-item has-feedback validate-status="success">
              <z-date-picker />
            </z-form-item>
            <z-form-item has-feedback validate-status="warning">
              <z-date-picker />
            </z-form-item>
            <z-form-item has-feedback validate-status="error">
              <z-date-picker />
            </z-form-item>
            <z-form-item has-feedback validate-status="validating">
              <z-date-picker />
            </z-form-item>
          </SplitSpace>
        </z-form>

        <SplitSpace>
          <z-checkbox>Checkbox</z-checkbox>

          <z-radio-group default-value="bamboo">
            <z-radio value="bamboo">Bamboo</z-radio>
            <z-radio value="light">Light</z-radio>
            <z-radio value="little">Little</z-radio>
          </z-radio-group>

          <z-mentions placeholder="Mention by @">
            <z-mentions-option value="afc163">afc163</z-mentions-option>
            <z-mentions-option value="zombieJ">zombieJ</z-mentions-option>
            <z-mentions-option value="yesmeck">yesmeck</z-mentions-option>
          </z-mentions>

          <z-slider :default-value="30" style="width: 100px" />

          <z-switch default-checked />
        </SplitSpace>

        <SplitSpace>
          <z-range-picker />
          <z-time-range-picker />
        </SplitSpace>

        <z-row :gutter="16">
          <z-col :span="8">
            <!-- Card -->
            <z-card style="width: 100%" :tab-list="carTabListNoTitle">
              <template #tabBarExtraContent>
                <a href="#">More</a>
              </template>
            </z-card>
          </z-col>
          <z-col :span="8">
            <!-- Table -->
            <z-table
              size="small"
              bordered
              :row-selection="{}"
              :columns="[
                {
                  title: 'Key',
                  dataIndex: 'key',
                  filters: [
                    {
                      text: 'Little',
                      value: 'little',
                    },
                  ],
                  sorter: (a, b) => a.key.length - b.key.length,
                },
              ]"
              :data-source="[
                {
                  key: 'Bamboo',
                },
                {
                  key: 'Light',
                },
                {
                  key: 'Little',
                },
              ]"
            />
          </z-col>
          <z-col :span="8">
            <!-- Table -->
            <z-tabs default-active-key="1">
              <z-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</z-tab-pane>
              <z-tab-pane key="2" tab="Tab 2">Content of Tab Pane 2</z-tab-pane>
              <z-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</z-tab-pane>
            </z-tabs>
          </z-col>
        </z-row>

        <SplitSpace>
          <z-tag color="success">success</z-tag>
          <z-tag color="processing">processing</z-tag>
          <z-tag color="error">error</z-tag>
          <z-tag color="warning">warning</z-tag>
          <z-tag color="default">default</z-tag>
          <z-checkable-tag checked>CheckableTag</z-checkable-tag>
        </SplitSpace>

        <z-row :gutter="16">
          <z-col :span="16">
            <z-timeline mode="alternate">
              <z-timeline-item>Create a services site 2015-09-01</z-timeline-item>
              <z-timeline-item color="gray">
                Solve initial network problems 2015-09-01
              </z-timeline-item>
              <z-timeline-item>
                <template #dot>
                  <ClockCircleOutlined style="font-size: 16px" />
                </template>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </z-timeline-item>
            </z-timeline>
          </z-col>

          <z-col :span="8">
            <z-tree :tree-data="treeData" :height="200" default-expand-all checkable />
          </z-col>
        </z-row>

        <!-- Alert -->
        <z-row :gutter="16">
          <z-col :span="6">
            <z-alert show-icon message="Success Text" type="success" />
          </z-col>
          <z-col :span="6">
            <z-alert show-icon message="Info Text" type="info" />
          </z-col>
          <z-col :span="6">
            <z-alert show-icon message="Warning Text" type="warning" />
          </z-col>
          <z-col :span="6">
            <z-alert show-icon message="Error Text" type="error" />
          </z-col>
        </z-row>

        <!-- Progress -->
        <z-row :gutter="16">
          <z-col flex="auto">
            <z-progress :percent="30" />
            <z-progress :percent="70" status="exception" />
            <z-progress :percent="100" />
          </z-col>
          <z-col flex="none">
            <z-progress type="circle" :percent="75" />
            <z-progress type="circle" :percent="70" status="exception" />
            <z-progress type="circle" :percent="100" />
          </z-col>
        </z-row>

        <z-transfer :data-source="transferData" :target-keys="['18']" :selected-keys="['3']">
          <template #render="item">{{ item.title }}</template>
        </z-transfer>
      </z-space>
    </z-col>
  </z-row>
</template>
<script lang="ts">
import { defineComponent, h, reactive, ref } from 'vue';
import { ConfigProvider, Space, Divider } from 'ant-design-vue';
import type { TreeSelectProps } from 'ant-design-vue';
import {
  DownOutlined,
  MailOutlined,
  SettingOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    DownOutlined,
    MailOutlined,
    SettingOutlined,
    ClockCircleOutlined,
    SplitSpace: (props, { slots }) =>
      h(Space, { size: 4, ...props }, { ...slots, split: () => h(Divider, { type: 'vertical' }) }),
  },
  setup() {
    const inputProps = {
      style: { width: '128px' },
    };

    const selectProps = {
      ...inputProps,
      options: [
        { value: 'light', label: 'Light' },
        { value: 'bamboo', label: 'Bamboo' },
        { value: 'little', label: 'Little' },
      ],
    };

    const treeData = [
      {
        value: 'little',
        key: 'little',
        label: 'Little',
        title: 'Little',
        children: [
          { value: 'light', key: 'light', label: 'Light', title: 'Light' },
          { value: 'bamboo', key: 'bamboo', label: 'Bamboo', title: 'Bamboo' },
        ],
      },
    ];

    const treeSelectProps: TreeSelectProps = {
      ...inputProps,
      treeCheckable: true,
      maxTagCount: 'responsive',
      treeData,
    };

    const carTabListNoTitle = [
      {
        key: 'article',
        tab: 'article',
      },
      {
        key: 'app',
        tab: 'app',
      },
      {
        key: 'project',
        tab: 'project',
      },
    ];

    const transferData = [];

    for (let i = 0; i < 20; i++) {
      transferData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
      });
    }

    const colorState = reactive({
      primaryColor: '#1890ff',
      errorColor: '#ff4d4f',
      warningColor: '#faad14',
      successColor: '#52c41a',
      infoColor: '#1890ff',
    });

    const onColorChange = (type: string, e: any) => {
      Object.assign(colorState, { [type]: e.target.value });
      ConfigProvider.config({
        theme: colorState,
      });
    };
    return {
      selectProps,
      carTabListNoTitle,
      onColorChange,
      treeData,
      treeSelectProps,
      transferData,
      colorState,
      inputProps,
      selectedKeys: ref(['mail']),
    };
  },
});
</script>
