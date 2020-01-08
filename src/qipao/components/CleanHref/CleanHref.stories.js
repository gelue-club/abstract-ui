import React from 'react';
import { storiesOf } from '@storybook/react';

import CleanHref from './CleanHref';
import Image from 'kits/Image';

// 无下划线的链接盒子
storiesOf('组件.<CleanHref />', module)
  .add('文字内容', () => <CleanHref to="https://qipao.app">关于</CleanHref>)
  .add('块元素内容', () => (
    <CleanHref to="https://qipao.app">
      <div>返回</div>
    </CleanHref>
  ))
  .add('图片内容', () => (
    <CleanHref className="clearfix" to="https://qipao.app">
      <Image
        size="200px"
        src="https://picsum.photos/200"
        alt="示例"
        style={{ float: 'left' }}
      />
    </CleanHref>
  ));
