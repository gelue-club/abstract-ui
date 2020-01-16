import React from 'react';
import { storiesOf } from '@storybook/react';

import ShrinkPanel from './ShrinkPanel';

storiesOf('组件/收缩面板', module).add('默认', () => (
  <ShrinkPanel radius="6px" padding="15px" bgColor="#2D2F2F">
    <div
      style={{ width: '100px', height: '100px', backgroundColor: 'orange' }}
    />
  </ShrinkPanel>
));
