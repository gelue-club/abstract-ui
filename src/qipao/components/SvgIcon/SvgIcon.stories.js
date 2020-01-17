import React from 'react';
import { storiesOf } from '@storybook/react';

import Circle from 'kits/Circle';
import XyCenter from 'layouts/XyCenter';

import IconPublic from './IconPublic';
import IconClose from './IconClose';

storiesOf('组件/矢量图标', module)
  .add('公开', () => (
    <Box>
      <IconPublic />
    </Box>
  ))
  .add('关闭', () => (
    <Box>
      <IconClose size="12px" />
    </Box>
  ));

function Box({ children }) {
  return (
    <Circle size="50px" style={{ position: 'relative', background: '#999' }}>
      <XyCenter>{children}</XyCenter>
    </Circle>
  );
}
