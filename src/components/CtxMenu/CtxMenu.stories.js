import React from 'react';
import { storiesOf } from '@storybook/react';

import CtxMenu from './CtxMenu';

// 链接盒子
storiesOf('<CtxMenu />', module).add('右键按钮', () => (
  <CtxMenu to="https://qipao.app" />
));
