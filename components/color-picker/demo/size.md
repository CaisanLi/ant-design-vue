<cn>
#### 尺寸
选择器有三种尺寸：大、默认（中）、小。
</cn>

<us>
#### Size
There are three size of ColorPicker: large, medium(default), small.
</us>

```vue
<template>
  <div>
    <z-row>
      <z-col span="8">
        <z-colorPicker v-model="color6" size="large" />
      </z-col>
      <z-col span="8">
        <z-colorPicker v-model="color6" />
      </z-col>
      <z-col span="8">
        <z-colorPicker v-model="color6" size="small" />
      </z-col>
    </z-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color6: '#1890ff',
    };
  },
};
</script>
```
