<docs>
---
order: 2
title:
  zh-CN: 加载更多
  en-US: Load more
---

## zh-CN

可通过 `loadMore` 属性实现加载更多功能。

## en-US

Load more list with `loadMore` property.

</docs>

<template>
  <z-list
    class="demo-loadmore-list"
    :loading="loading"
    item-layout="horizontal"
    :data-source="dataList"
  >
    <template #loadMore>
      <div :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
        <z-spin v-if="loadingMore" />
        <z-button v-else @click="loadMore">loading more</z-button>
      </div>
    </template>
    <template #renderItem="{ item }">
      <z-list-item>
        <template #actions>
          <a>edit</a>
          <a>more</a>
        </template>
        <z-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        >
          <template #title>
            <a href="https://www.antdv.com/">{{ item.name.last }}</a>
          </template>
          <template #avatar>
            <z-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </template>
        </z-list-item-meta>
        <div>content</div>
      </z-list-item>
    </template>
  </z-list>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useLoadMore } from 'vue-request';

const getFakeData = () => `https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo`;

export default defineComponent({
  setup() {
    const { dataList, loading, loadingMore, loadMore } = useLoadMore(getFakeData, {
      listKey: 'results',
    });

    return {
      loading,
      loadingMore,
      dataList,
      loadMore,
    };
  },
});
</script>
<style scoped>
.demo-loadmore-list {
  min-height: 350px;
}
</style>
