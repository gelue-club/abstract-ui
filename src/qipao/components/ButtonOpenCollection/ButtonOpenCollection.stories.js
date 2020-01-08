import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonOpenCollection from './ButtonOpenCollection';
import './ButtonOpenCollection.css';

storiesOf('组件.<ButtonOpenCollection />', module).add('不同尺寸的圆', () => (
  <>
    <ButtonOpenCollection
      onClick={() => {
        console.log(123);
      }}
      onContextMenu={() => {
        console.log('右键');
      }}
    >
      上次打开的清单
    </ButtonOpenCollection>
  </>
));
