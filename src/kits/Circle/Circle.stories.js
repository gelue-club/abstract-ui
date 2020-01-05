import React from 'react';
import { storiesOf } from '@storybook/react';

import Circle from './Circle';

storiesOf('组件.<Circle />', module).add('不同尺寸的圆', () => (
  <>
    <Circle size="50px" style={{ background: '#eaeaea' }} />
    <Circle size="150px" style={{ background: '#333' }} />
    <Circle size="350px" style={{ background: '#000' }} />
  </>
));
