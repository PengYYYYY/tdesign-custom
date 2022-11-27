---
title: Tdesign Custom
description: 基于 TDesign 的桌面端组件库，适合在 vue 2 技术栈项目中使用。
spline: explain
---
### 安装

#### 使用 npm 安装

推荐使用 npm 方式进行开发

```shell
npm i tdesign-custom
```

### 使用

#### 基础使用

```js
import Vue from 'vue';
import TdesignCustom from 'tdesign-custom';

Vue.use(TdesignCustom);
```

### scripts

- `init`: 子仓库依赖初始化
- `dev:site`: 示例文档站点开发环境
- `build:site`: 示例站点打包
- `build:pkg`: `npm` 包构建
- `build:tsc`: `types` 文件构建
- `test:update`: 单元测试更新

### 如何开发业务组件

> 组件目录如下

```text
custom
├── __tests__ // 单元测试目录
│   └── index.test.jsx
├── _example // 示例文档目录
│   └── base.vue
├── api_en.md // 英文API文档
├── custom.en-US.md // 英文示例文档
├── custom.md // 示例文档
├── custom.tsx // 组件
├── index.ts // 组件入口
├── type.ts // ts 类型文件
├── props.ts // props 文件
└── style  // 样式目录
    ├── _index.less // 样式文件
    ├── css.js // 样式中介文件
    └── index.js // 样式中介文件
```

> 开发规范

- 业务组件前缀统一为 `TCus`

### 单元测试

遵循[TD单元测试规范](https://github.com/Tencent/tdesign-vue-next/wiki/TDesign-%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E8%A7%84%E8%8C%83)