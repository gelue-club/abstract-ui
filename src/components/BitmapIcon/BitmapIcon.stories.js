import React from 'react';
import { storiesOf } from '@storybook/react';

import Circle from 'components/Circle';
import XyCenter from 'layouts/XyCenter';

import BitmapIcon from './BitmapIcon';

import icon from './icon.png';
import icon2x from './icon@2x.png';

storiesOf('组件.<BitmapIcon />', module).add('位图图标', () => (
  <Box>
    <BitmapIcon size="28px 22px" src={icon} xsrc={icon2x} />
  </Box>
));

function Box({ children }) {
  return (
    <Circle size="50px" style={{ position: 'relative', background: '#363636' }}>
      <XyCenter>{children}</XyCenter>
    </Circle>
  );
}
