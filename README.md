# Abstract UI

实现 2 大类组件：布局组件、元素组件。

## 组件设计原则

- 禁止元素（是什么）的实现包含布局（怎么摆放）的声明
- ECMA 规范下的原生 API 优先
- 单一职责
- 最少功能
- 组合优先
- 主题化

## 参与开发

#### 熟悉工作方式

[`abstract-ui`][abstract-ui] 的工作方式主要涉及 [CDD](https://blog.hichroma.com/component-driven-development-ce1109d56c8e)、[TDD](https://zh.wikipedia.org/zh-cn/%E6%B5%8B%E8%AF%95%E9%A9%B1%E5%8A%A8%E5%BC%80%E5%8F%91)、[Gitflow](https://github.com/nvie/gitflow)。

[abstract-ui]: https://github.com/gelue-club/abstract-ui

#### 安装依赖

[`abstract-ui`][abstract-ui] 使用 [`YARN`][YARN] 包管理器，执行 `yarn install` 安装依赖。

[abstract-ui]: https://github.com/gelue-club/abstract-ui
[YARN]: https://yarnpkg.com/zh-Hans/docs

#### 开发模式

```shell
yarn start
```

#### 构建

```shell
yarn build
```

#### 预览

> 预览前必需先构建。

```shell
yarn serve
```

#### 重置工程

```shell
yarn remount
```

> 包括：删除缓存、构建、报告、`node_modules`、重新安装包等。