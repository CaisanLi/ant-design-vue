<docs>
---
order: 6
iframe: 228
title:
  zh-CN: 响应式
  en-US: responsive
---

## zh-CN

在不同大小的屏幕下，应该有不同的表现

## en-US

Under different screen sizes, there should be different performance

</docs>

<template>
  <div class="components-page-header-demo-responsive" style="border: 1px solid rgb(235, 237, 240)">
    <z-page-header title="Title" sub-title="This is a subtitle" @back="() => $router.go(-1)">
      <template #extra>
        <z-button key="3">Operation</z-button>
        <z-button key="2">Operation</z-button>
        <z-button key="1" type="primary">Primary</z-button>
      </template>
      <template #footer>
        <z-tabs>
          <z-tab-pane key="1" tab="Details" />
          <z-tab-pane key="2" tab="Rule" />
        </z-tabs>
      </template>
      <div class="content">
        <div class="main">
          <z-descriptions size="small" :column="2">
            <z-descriptions-item label="Created">Lili Qu</z-descriptions-item>
            <z-descriptions-item label="Association">
              <a>421421</a>
            </z-descriptions-item>
            <z-descriptions-item label="Creation Time">2017-01-10</z-descriptions-item>
            <z-descriptions-item label="Effective Time">2017-10-10</z-descriptions-item>
            <z-descriptions-item label="Remarks">
              Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
            </z-descriptions-item>
          </z-descriptions>
        </div>
        <div class="extra">
          <div
            :style="{
              display: 'flex',
              width: 'max-content',
              justifyContent: 'flex-end',
            }"
          >
            <z-statistic
              title="Status"
              value="Pending"
              :style="{
                marginRight: '32px',
              }"
            />
            <z-statistic title="Price" prefix="$" :value="568.08" />
          </div>
        </div>
      </div>
    </z-page-header>
  </div>
</template>
<style>
.components-page-header-demo-responsive {
  padding-bottom: 20px;
}
.components-page-header-demo-responsive tr:last-child td {
  padding-bottom: 0;
}
#components-page-header-demo-responsive .content {
  display: flex;
}
#components-page-header-demo-responsive .ant-statistic-content {
  font-size: 20px;
  line-height: 28px;
}
@media (max-width: 576px) {
  #components-page-header-demo-responsive .content {
    display: block;
  }

  #components-page-header-demo-responsive .main {
    width: 100%;
    margin-bottom: 12px;
  }

  #components-page-header-demo-responsive .extra {
    width: 100%;
    margin-left: 0;
    text-align: left;
  }
}
</style>
