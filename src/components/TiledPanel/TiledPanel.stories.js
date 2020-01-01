import React from 'react';
import { storiesOf } from '@storybook/react';

import TiledPanel from './TiledPanel';

storiesOf('<TiledPanel />', module).add('平铺面板', () => (
  <TiledPanel
    className="bg-test-fill-radial-gradient"
    style={{
      position: 'fixed',
    }}
  />
));
