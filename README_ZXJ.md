### 发版记录

---

- 2023/04/24 v1.0.3
  1. 更新 官方`3.2.19`
- 2022/06/27 v1.1.0
  1. `tabs`组件新增卡片样式和背景色
  2. 大号`button`内边距调整
  3. 幽灵按钮新增失效状态，修改其默认样式
  4. tag 新增可选择删除 tag(`CheckableCloseTag`)
- 2022/06/08 v1.0.9
  1. 更新 官方`3.2.6`
- 2022/04/20 v1.0.8
  1. 调整 modal 边距
- 2022/04/20 v1.0.5
  1. 调整 date-picker 国际化的默认值
- 2022/04/19 v1.0.4
  1. 更新 官方`release 3.0.0-rc.5`
  2. 删除`Logo`组件
- 2021/11/29 v1.0.3
  1. 更新 官方`release 3.0.0-alpha.14`
- 2021/11/29 v1.0.2
  1. 修复 默认语言为中文
  2. 修复 一些前缀未改到的组件
  3. 更新 官方`release 3.0.0-alpha.13`
- 2021/11/24 v1.0.1
  1. 修复 一些前缀未改到的组件
  2. 更新 官方 `release 3.0.0-alpha.12`
- 2021/11/19 v1.0.0
  1. 初始化

### 更新文档

- 修改`input-search`样式，加入前缀搜索图标
- 调整`input-search`在`foucs`、`hover`时的样式改动

### 调整组件

---

1. Button

```
2021-10-14
1.新增`text`属性，去掉type='text'类型
2.修改button默认圆角为`4px`
3.新增`outline`属性
4.新增`dashed`属性，去掉type='dashed'类型
```

2. Input

```
2021-10-14
1. `input-search` 后缀搜索图标改为前缀搜索图标，focus事件触发时前缀图标改为主题色
2. 调整`input-search`前缀搜索图标与输入框文字间距为8px
3. 调整`input`输入框圆角为4px
```

3. Select

```
2021-10-14
1. 修改select下拉选项滑入和选中时的background-color和color
2. 修改select为multiple时左内边距为12px
```

4. Dropdown

```
2021-10-14
1. 修改下拉菜单滑入和选中时的background-color和color
```

5. Table

```
2021-10-15
1. 修改table --- title插槽样式
```

6. Pagination

```
2021-10-15
1. 修改分页器样式
```

7. Logo

```
2021-10-20
1. 新增`logo`组件
2. 新增number,height,width,titleStyle属性
3. 新增title插槽
```

### 发布

已在`package.json`的`publishConfig`配置私有的 NPM 仓库地址，账号和密码请问当时的前端负责人。

> 发布前请注意更新`package.json`的`version`

1. 登录私有仓库账号

```javascript
npm login --registry=http://192.168.5.16:4873/
```

2. 打包并发布

```javascript
npm run pub
```
