# `<Expanded2ColsLayout />`

平铺两列布局。

> 注：该两列布局会撑满它的父容器。

## 目录

- [属性](#属性)

- [示例](#示例)

## 属性

| 属性          | 必须 | 描述       | 类型     |
| ------------- | ---- | ---------- | -------- |
| children      |      | 左、右列内容  | object   |
| className     |      | className  | String   |
| split         |      | 分割点      | Number   |

## 示例

```javascript
import React from 'react';
import Expanded2ColsLayout from './Expanded2ColsLayout';

funciton Demo() {
  return (
    <Expanded2ColsLayout split={0.65}>
      <div className="content left" />
      <div className="content right" />
    </Expanded2ColsLayout>
  );
}

export default Demo;
```
