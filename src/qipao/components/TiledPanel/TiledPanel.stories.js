import React from 'react';
import { storiesOf } from '@storybook/react';

import TiledPanel from './TiledPanel';

storiesOf('组件/平铺面板', module).add('默认', () => (
  <TiledPanel
    className="bg-test-fill-radial-gradient"
    style={{
      position: 'fixed',
    }}
  />
));
