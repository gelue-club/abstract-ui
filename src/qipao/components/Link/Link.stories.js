import React from 'react';
import { storiesOf } from '@storybook/react';

import Link from './Link';

// 链接盒子
storiesOf('组件.<Link />', module)
  .add('文字内容', () => <Link to="https://qipao.app">关于</Link>)
  .add('块元素内容', () => (
    <Link to="https://qipao.app">
      <div>返回</div>
    </Link>
  ))
  .add('图片内容', () => (
    <Link className="clearfix" to="https://qipao.app">
      <img
        src="https://picsum.photos/200"
        alt="示例"
        style={{ float: 'left', width: '200px', height: '200px' }}
      />
    </Link>
  ));
