<docs>
---
order: 2
title:
  zh-CN: 方向
  en-US: Direction
---

## zh-CN

这里列出了支持 `rtl` 方向的组件，您可以在演示中切换方向。

## en-US

Components which support rtl direction are listed here, you can toggle the direction in the demo.

</docs>

<template>
  <span style="margin-right: 16px">Change direction of components:</span>
  <z-radio-group v-model:value="state.direction">
    <z-radio-button value="ltr">LTR</z-radio-button>
    <z-radio-button value="rtl">RTL</z-radio-button>
  </z-radio-group>
  <z-divider />
  <z-config-provider :direction="state.direction">
    <div class="direction-components">
      <z-row>
        <z-col :span="24">
          <z-divider orientation="left">Cascader example</z-divider>
          <z-cascader
            :options="cascaderOptions"
            placeholder="یک مورد انتخاب کنید"
            :placement="state.popupPlacement"
            @change="onCascaderChange"
          >
            <template #suffixIcon><SearchIcon /></template>
          </z-cascader>
          &nbsp;&nbsp;&nbsp;&nbsp; With search:
          <z-cascader
            :options="cascaderOptions"
            placeholder="Select an item"
            :placement="state.popupPlacement"
            :show-search="{ filter: cascaderFilter }"
            @change="onCascaderChange"
          >
            <template #suffixIcon><SmileOutlined /></template>
          </z-cascader>
        </z-col>
      </z-row>
      <br />
      <z-row>
        <z-col :span="12">
          <z-divider orientation="left">Switch example</z-divider>
          &nbsp;&nbsp;
          <z-switch default-checked />
          &nbsp;&nbsp;
          <z-switch loading default-checked />
          &nbsp;&nbsp;
          <z-switch size="small" loading />
        </z-col>
        <z-col :span="12">
          <z-divider orientation="left">Radio Group example</z-divider>

          <z-radio-group default-value="c" button-style="solid">
            <z-radio-button value="a">تهران</z-radio-button>
            <z-radio-button value="b" disabled>اصفهان</z-radio-button>
            <z-radio-button value="c">فارس</z-radio-button>
            <z-radio-button value="d">خوزستان</z-radio-button>
          </z-radio-group>
        </z-col>
      </z-row>
      <br />
      <z-row>
        <z-col :span="12">
          <z-divider orientation="left">Button example</z-divider>
          <div class="button-demo">
            <z-button type="primary">
              <template #icon><DownloadOutlined /></template>
            </z-button>
            <z-button type="primary" shape="circle">
              <template #icon><DownloadOutlined /></template>
            </z-button>
            <z-button type="primary" shape="round">
              <template #icon><DownloadOutlined /></template>
            </z-button>
            <z-button type="primary" shape="round">
              <template #icon><DownloadOutlined /></template>
              Download
            </z-button>
            <z-button type="primary">
              <template #icon><DownloadOutlined /></template>
              Download
            </z-button>
            <br />
            <z-button-group>
              <z-button type="primary">
                <LeftOutlined />
                Backward
              </z-button>
              <z-button type="primary">
                Forward
                <RightOutlined />
              </z-button>
            </z-button-group>
            <z-button type="primary" loading>Loading</z-button>
            <z-button type="primary" size="small" loading>Loading</z-button>
          </div>
        </z-col>
        <z-col :span="12">
          <z-divider orientation="left">Tree example</z-divider>
          <z-tree
            v-model:expandedKeys="expandedKeys"
            v-model:selectedKeys="selectedKeys"
            v-model:checkedKeys="checkedKeys"
            show-line
            checkable
            :tree-data="treeData"
          >
            <template #title="{ title, key }">
              <span v-if="key === '0-0-1-0'" style="color: #1890ff">{{ title }}</span>
              <template v-else>{{ title }}</template>
            </template>
          </z-tree>
        </z-col>
      </z-row>
      <br />
      <z-row>
        <z-col :span="24">
          <z-divider orientation="left">Input (Input Group) example</z-divider>
          <z-input-group size="large">
            <z-row :gutter="8">
              <z-col :span="5">
                <z-input default-value="0571" />
              </z-col>
              <z-col :span="8">
                <z-input default-value="26888888" />
              </z-col>
            </z-row>
          </z-input-group>
          <br />
          <z-input-group compact>
            <z-input style="width: 20%" default-value="0571" />
            <z-input style="width: 30%" default-value="26888888" />
          </z-input-group>
          <br />
          <z-input-group compact>
            <z-select default-value="Option1">
              <z-select-option value="Option1">Option1</z-select-option>
              <z-select-option value="Option2">Option2</z-select-option>
            </z-select>
            <z-input style="width: 50%" default-value="input content" />
            <z-inputNumber />
          </z-input-group>
          <br />
          <z-input-search placeholder="input search text" enter-button="Search" size="large" />
          <br />
          <br />
          <div style="margin-bottom: 16px">
            <z-input default-value="mysite">
              <template #selectBefore>
                <z-select default-value="Http://" style="width: 90px">
                  <z-select-option value="Http://">Http://</z-select-option>
                  <z-select-option value="Https://">Https://</z-select-option>
                </z-select>
              </template>
              <template #selectAfter>
                <z-select default-value=".com" style="width: 80px">
                  <z-select-option value=".com">.com</z-select-option>
                  <z-select-option value=".jp">.jp</z-select-option>
                  <z-select-option value=".cn">.cn</z-select-option>
                  <z-select-option value=".org">.org</z-select-option>
                </z-select>
              </template>
            </z-input>
          </div>
          <br />
          <z-row>
            <z-col :span="12">
              <z-divider orientation="left">Select example</z-divider>
              <z-select mode="multiple" default-value="مورچه" style="width: 120px">
                <z-select-option value="jack">Jack</z-select-option>
                <z-select-option value="مورچه">مورچه</z-select-option>
                <z-select-option value="disabled" disabled>Disabled</z-select-option>
                <z-select-option value="Yiminghe">yiminghe</z-select-option>
              </z-select>
              <z-select default-value="مورچه" style="width: 120px" disabled>
                <z-select-option value="مورچه">مورچه</z-select-option>
              </z-select>
              <z-select default-value="مورچه" style="width: 120px" loading>
                <z-select-option value="مورچه">مورچه</z-select-option>
              </z-select>
              <z-select
                show-search
                style="width: 200px"
                placeholder="Select a person"
                option-filter-prop="children"
                :filter-option="
                  (input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                "
              >
                <z-select-option value="jack">Jack</z-select-option>
                <z-select-option value="سعید">سعید</z-select-option>
                <z-select-option value="tom">Tom</z-select-option>
              </z-select>
            </z-col>
            <z-col :span="12">
              <z-divider orientation="left">TreeSelect example</z-divider>
              <div>
                <z-tree-select
                  show-search
                  style="width: 100%"
                  :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                  placeholder="Please select"
                  allow-clear
                  tree-default-expand-all
                  :tree-data="treeSelectData"
                ></z-tree-select>
              </div>
            </z-col>
          </z-row>
          <br />
          <z-row>
            <z-col :span="24">
              <z-divider orientation="left">Modal example</z-divider>
              <div>
                <z-button type="primary" @click="showModal">Open Modal</z-button>
                <z-modal v-model:visible="state.modalVisible" title="پنچره ساده">
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                </z-modal>
              </div>
            </z-col>
          </z-row>
          <br />
          <z-row>
            <z-col :span="24">
              <z-divider orientation="left">Steps example</z-divider>
              <div>
                <z-steps progress-dot :current="state.currentStep">
                  <z-step title="Finished" description="This is a description." />
                  <z-step title="In Progress" description="This is a description." />
                  <z-step title="Waiting" description="This is a description." />
                </z-steps>
                <br />
                <z-steps :current="state.currentStep" @change="onStepsChange">
                  <z-step title="Step 1" description="This is a description." />
                  <z-step title="Step 2" description="This is a description." />
                  <z-step title="Step 3" description="This is a description." />
                </z-steps>
              </div>
            </z-col>
          </z-row>
          <br />
          <z-row>
            <z-col :span="12">
              <z-divider orientation="left">Rate example</z-divider>
              <div>
                <z-rate v-model:value="rateValue" />
                <br />
                <strong>* Note:</strong>
                Half star not implemented in RTL direction.
              </div>
            </z-col>
            <z-col :span="12">
              <z-divider orientation="left">Badge example</z-divider>
              <div>
                <div>
                  <z-badge :count="state.badgeCount">
                    <a href="#" class="head-example" />
                  </z-badge>
                  <z-button-group>
                    <z-button @click="declineBadge">
                      <MinusOutlined />
                    </z-button>
                    <z-button @click="increaseBadge">
                      <PlusOutlined />
                    </z-button>
                  </z-button-group>
                </div>
                <div style="margin-top: 10px">
                  <z-badge :dot="state.showBadge">
                    <a href="#" class="head-example" />
                  </z-badge>
                  <z-switch :checked="state.showBadge" @change="onChangeBadge" />
                </div>
              </div>
            </z-col>
          </z-row>
        </z-col>
      </z-row>

      <br />
      <br />
      <z-row>
        <z-col :span="24">
          <z-divider orientation="left">Pagination example</z-divider>
          <z-pagination show-size-changer :default-current="3" :total="500" />
        </z-col>
      </z-row>
      <br />
      <z-row>
        <z-col :span="24">
          <z-divider orientation="left">Grid System example</z-divider>
          <div class="grid-demo">
            <div class="code-box-demo">
              <p>
                <strong>* Note:</strong>
                Every calculation in RTL grid system is from right side (offset, push, etc.)
              </p>
              <z-row>
                <z-col :span="8">col-8</z-col>
                <z-col :span="8" :offset="8">col-8</z-col>
              </z-row>
              <z-row>
                <z-col :span="6" :offset="6">col-6 col-offset-6</z-col>
                <z-col :span="6" :offset="6">col-6 col-offset-6</z-col>
              </z-row>
              <z-row>
                <z-col :span="12" :offset="6">col-12 col-offset-6</z-col>
              </z-row>
              <z-row>
                <z-col :span="18" :push="6">col-18 col-push-6</z-col>
                <z-col :span="6" :pull="18">col-6 col-pull-18</z-col>
              </z-row>
            </div>
          </div>
        </z-col>
      </z-row>
    </div>
  </z-config-provider>
</template>
<script lang="ts">
import { defineComponent, reactive, watch, ref } from 'vue';

import {
  SearchOutlined as SearchIcon,
  SmileOutlined,
  DownloadOutlined,
  LeftOutlined,
  RightOutlined,
  MinusOutlined,
  PlusOutlined,
} from '@ant-design/icons-vue';
import type { TreeProps, TreeSelectProps, CascaderProps } from 'ant-design-vue';

export default defineComponent({
  components: {
    SmileOutlined,
    DownloadOutlined,
    LeftOutlined,
    RightOutlined,
    MinusOutlined,
    PlusOutlined,
    SearchIcon,
  },
  setup() {
    const state = reactive({
      currentStep: 0,
      modalVisible: false,

      badgeCount: 5,
      showBadge: true,
      direction: 'ltr' as 'ltr' | 'rtl',
      popupPlacement: 'bottomLeft' as CascaderProps['placement'],
    });
    const expandedKeys = ref<string[]>(['0-0-0', '0-0-1']);
    const selectedKeys = ref<string[]>(['0-0-0', '0-0-1']);
    const checkedKeys = ref<string[]>(['0-0-0', '0-0-1']);

    const treeData: TreeProps['treeData'] = [
      {
        title: 'parent 1',
        key: '0-0',
        children: [
          {
            title: 'parent 1-0',
            key: '0-0-0',
            disabled: true,
            children: [
              { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
              { title: 'leaf', key: '0-0-0-1' },
            ],
          },
          {
            title: 'parent 1-1',
            key: '0-0-1',
            children: [{ key: '0-0-1-0', title: 'sss' }],
          },
        ],
      },
    ];

    const treeSelectData = ref<TreeSelectProps['treeData']>([
      {
        title: 'parent 1',
        value: 'parent 1',
        children: [
          {
            title: 'parent 1-0',
            value: 'parent 1-0',
            children: [
              {
                title: 'my leaf',
                value: 'leaf1',
              },
              {
                title: 'your leaf',
                value: 'leaf2',
              },
            ],
          },
          {
            title: 'parent 1-1',
            value: 'parent 1-1',
          },
        ],
      },
    ]);
    watch(
      () => state.direction,
      directionValue => {
        if (directionValue === 'rtl') {
          state.popupPlacement = 'bottomRight';
        } else {
          state.popupPlacement = 'bottomLeft';
        }
      },
    );
    const cascaderOptions = [
      {
        value: 'tehran',
        label: 'تهران',
        children: [
          {
            value: 'tehran-c',
            label: 'تهران',
            children: [
              {
                value: 'saadat-abad',
                label: 'سعادت آیاد',
              },
            ],
          },
        ],
      },
      {
        value: 'ardabil',
        label: 'اردبیل',
        children: [
          {
            value: 'ardabil-c',
            label: 'اردبیل',
            children: [
              {
                value: 'primadar',
                label: 'پیرمادر',
              },
            ],
          },
        ],
      },
      {
        value: 'gilan',
        label: 'گیلان',
        children: [
          {
            value: 'rasht',
            label: 'رشت',
            children: [
              {
                value: 'district-3',
                label: 'منطقه ۳',
              },
            ],
          },
        ],
      },
    ];

    // ==== Cascader ====
    const cascaderFilter = (inputValue, path) =>
      path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

    const onCascaderChange = value => {
      console.log(value);
    };
    // ==== End Cascader ====

    // ==== Modal ====
    const showModal = () => {
      state.modalVisible = true;
    };

    // ==== End Modal ====

    const onStepsChange = currentStep => {
      console.log('onChange:', currentStep);
      state.currentStep = currentStep;
    };

    // ==== Badge ====

    const increaseBadge = () => {
      const badgeCount = state.badgeCount + 1;
      state.badgeCount = badgeCount;
    };

    const declineBadge = () => {
      let badgeCount = state.badgeCount - 1;
      if (badgeCount < 0) {
        badgeCount = 0;
      }
      state.badgeCount = badgeCount;
    };

    const onChangeBadge = showBadge => {
      state.showBadge = showBadge;
    };
    return {
      state,
      cascaderOptions,
      cascaderFilter,
      onCascaderChange,
      showModal,
      onStepsChange,
      increaseBadge,
      declineBadge,
      onChangeBadge,
      expandedKeys,
      selectedKeys,
      checkedKeys,
      treeData,
      treeSelectData,
      rateValue: ref(2),
    };
  },
});
</script>
<style lang="less">
.direction-components {
  .button-demo .ant-btn,
  .button-demo .ant-btn-group {
    margin-right: 8px;
    margin-bottom: 12px;
  }
  .button-demo .ant-btn-group > .ant-btn,
  .button-demo .ant-btn-group > span > .ant-btn {
    margin-right: 0;
    margin-left: 0;
  }

  .head-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    vertical-align: middle;
    background: #eee;
    border-radius: 4px;
  }

  .ant-badge:not(.ant-badge-not-z-wrapper) {
    margin-right: 20px;
  }
  .ant-badge-rtl:not(.ant-badge-not-z-wrapper) {
    margin-right: 0;
    margin-left: 20px;
  }
}

[data-theme='dark'] .head-example {
  background: rgba(255, 255, 255, 0.12);
}
</style>
