# `<CongruentGrid />`

全等网格。

> 每一个单元高、宽相同。

## 目录

## `<CongruentGrid />` 属性

| 属性        | 必须 | 描述         | 类型   |
| ----------- | ---- | ------------ | ------ |
| children    | ✓    | 网格单元内容 | Array  |
| rowHeight   | ✓    | 网格单元高度 | String |
| columnWidth | ✓    | 网格单元宽度 | String |
| width       | ✓    | 网格整体宽度 | String |
| id          |      | id           | String |
| style       |      | 样式         | object |
| className   |      | className    | String |

## `<DiyCell />` 属性

| 属性      | 必须 | 描述         | 类型   |
| --------- | ---- | ------------ | ------ |
| children  |      | 网格单元内容 | Array  |
| id        |      | id           | String |
| style     |      | 样式         | object |
| className |      | className    | String |

> 一般情况下用不着 `<DiyCell />`，因为有默认的单元实现方式，除非需要自定义网格单元属性， `float`、`width`、`height` 3 个属性无法自定义。

## 示例

```javascript
import CongruentGrid from './CongruentGrid';
import DiyCell from './DiyCell';

export default function Demo() {
  const styleFill = { width: '100%', height: '100%' };
  const demoEle = () => <div className="bg-test" style={styleFill} />;

  return (
    <CongruentGrid width="100%" rowHeight="112px" columnWidth="33.333333%">
      {demoEle()}
      {demoEle()}
      {demoEle()}
      {demoEle()}

      <DiyCell style={{ position: 'relative', background: '#000' }} />

      {demoEle()}
      {demoEle()}
      {demoEle()}
      {demoEle()}
    </CongruentGrid>
  );
}
```
