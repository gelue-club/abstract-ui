import React from 'react';
import { storiesOf } from '@storybook/react';

import Stack from 'layouts/Stack';
import Circle from 'kits/Circle';

storiesOf('布局.<Stack />', module).add('两层圆', () => (
  <>
    <Circle size="250px" className="left bg-test" />
    <Circle size="250px" className="left bg-test-2" />

    <Stack size="250px" className="left">
      <Circle size="250px" className="bg-test" />
      <Circle size="250px" className="bg-test-2" />
    </Stack>
  </>
));
