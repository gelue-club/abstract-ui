import React from 'react';
import { storiesOf } from '@storybook/react';

import Circle from 'kits/Circle';
import XyCenter from 'layouts/XyCenter';

import IconPublic from './IconPublic';

storiesOf('组件.<SvgIcon />', module).add('公开', () => (
  <Box>
    <IconPublic />
  </Box>
));

function Box({ children }) {
  return (
    <Circle size="50px" style={{ position: 'relative', background: '#363636' }}>
      <XyCenter>{children}</XyCenter>
    </Circle>
  );
}
