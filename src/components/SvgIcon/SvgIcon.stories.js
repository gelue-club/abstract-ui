import React from 'react';
import { storiesOf } from '@storybook/react';

import Circle from '../Circle/Circle';
import XyCenter from '../XyCenter/XyCenter';

import IconPublic from './IconPublic';

storiesOf('<SvgIcon />', module).add('公开', () => (
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
