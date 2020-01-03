import React from 'react';
import { storiesOf } from '@storybook/react';

import Alert from './Alert';

storiesOf('组件.<Alert />', module).add('提示信息', () => (
  <Alert>验证码不存在</Alert>
));
