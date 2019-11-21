import React from 'react';
import { storiesOf } from '@storybook/react';

import ShrinkPanel from './ShrinkPanel';

storiesOf('<ShrinkPanel />', module).add('收缩型面板', () => (
  <ShrinkPanel radius="6px" padding="15px" bgColor="#2D2F2F">
    <div style={{ width: '100px', height: '100px' }} />
  </ShrinkPanel>
));
