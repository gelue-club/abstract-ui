import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Alert from './Alert';

storiesOf('组件/警示', module)
  .addDecorator(withKnobs)
  .add('提示信息', () => (
    <Alert padding={text('内边距', '16px 16px')}>
      {text('消息', '验证码不存在')}
    </Alert>
  ));
