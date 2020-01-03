# `<IdenticalGrid />`

> 等距、等比例缩放网格。包括 `<IdenticalGrid />`、`<IGItem />` 两个组件。

## 目录

- [`<IdenticalGrid />` 属性](#identicalgrid--属性)
- [示例](#示例)

## `<IdenticalGrid />` 属性

| 属性            | 必须 | 描述         | 类型           |
| --------------- | ---- | ------------ | -------------- |
| style           |      | 内嵌样式     | object         |
| className       |      | 样式类       | String         |
| children        |      | 子元素       | Array / Object |
| **width**       | ✓    | 网格区域宽度 | Number         |
| **columnCount** | ✓    | 列数         | Number         |
| **gap**         | ✓    | 网格间隙     | Number         |

## 示例

```javascript
import React, { Component, Fragment } from 'react';
import { map } from 'lodash';
import { SizeMe } from 'react-sizeme';

import Main from 'layouts/Main';
import View from 'layouts/View';

import { IdenticalGrid, IGItem } from 'layouts/IdenticalGrid';

const DATA = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];

class ViewComponents extends Component {
  render() {
    return (
      <SizeMe noPlaceholder={false}>
        {({ size }) => (
          <View topPadding={168 / 3}>
            <Main
              style={{
                background: '#FAFCFF',
              }}
            >
              <IdenticalGrid gap={13.5} columnCount={6} width={size.width}>
                {map(DATA, (itm, idx) => (
                  <IGItem
                    key={`_${idx}`}
                    className="thumbnail"
                    style={{ border: '1px solid #000' }}
                  >
                    <p>{idx + 1}</p>
                  </IGItem>
                ))}
              </IdenticalGrid>
            </Main>
          </View>
        )}
      </SizeMe>
    );
  }
}

export default ViewComponents;
```
