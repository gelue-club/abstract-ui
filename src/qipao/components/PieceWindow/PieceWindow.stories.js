import React from 'react';
import { storiesOf } from '@storybook/react';

import PieceWindow from './PieceWindow';

storiesOf('气泡/组件/小零件窗体', module).add('宽高固定的小零件窗口', () => (
  <PieceWindow
    w="280px"
    h="280px"
    name="小零件"
    onClose={() => {
      console.log('close');
    }}
  />
));
