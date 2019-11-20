import React from 'react';
import { storiesOf } from '@storybook/react';

import XyCenter from './XyCenter';
import Circle from '../Circle/Circle';
import Stack from '../Stack/Stack';

storiesOf('<XyCenter />', module).add('圆点处的小圆', () => (
  <Stack size="250px">
    <Circle size="250px" className="bg-test" />

    <XyCenter>
      <Circle size="128px" className="bg-test-2" />
    </XyCenter>
  </Stack>
));
