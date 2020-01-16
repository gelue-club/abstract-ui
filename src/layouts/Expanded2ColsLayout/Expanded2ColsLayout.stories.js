import './Expanded2ColsLayout.css';

import React from 'react';
import { storiesOf } from '@storybook/react';

import Expanded2ColsLayout from './Expanded2ColsLayout';

storiesOf('布局/X轴平铺两列布局', module).add(
  '默认',
  () => (
    <Expanded2ColsLayout
      split={0.68}
      className="expanded-two-cols-layout-stories"
    >
      <p className="bg-aquamarine" />
      <p className="bg-aqua" />
    </Expanded2ColsLayout>
  ),
);
