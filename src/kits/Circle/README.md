# `<Circle />`

圆。

## 属性

| 属性      | 必须 | 描述      | 类型                   |
| --------- | ---- | --------- | ---------------------- |
| size      | ✓    | 直径      | String                 |
| children  |      | 子元素    | `String|Object|Number` |
| style     |      | 样式      | Object                 |
| className |      | className | String                 |

## 示例

```javascript
import Circle from './Circle';

export default function Demo() {
  return <Circle size="50px" style={{ background: '#000' }} />;
}
```
