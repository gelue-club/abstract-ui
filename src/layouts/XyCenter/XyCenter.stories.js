import React from 'react';
import { storiesOf } from '@storybook/react';

import XyCenter from 'layouts/XyCenter';
import Stack from 'layouts/Stack';

import Circle from 'kits/Circle';

storiesOf('布局.<XyCenter />', module).add('圆点处的小圆', () => (
  <Stack size="250px">
    <Circle size="250px" className="bg-test" />

    <XyCenter>
      <Circle size="128px" className="bg-test-2" />
    </XyCenter>
  </Stack>
));
