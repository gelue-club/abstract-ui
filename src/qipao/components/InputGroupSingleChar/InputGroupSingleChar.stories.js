import React from 'react';
import { storiesOf } from '@storybook/react';

import InputGroupSingleChar from './InputGroupSingleChar';

storiesOf('组件/单字符输入组', module).add('默认', () => (
  <InputGroupSingleChar
    charCount={10}
    width={520}
    gap={8}
    then={({ value, actions: { reset } }) => {
      console.log(value);

      setTimeout(() => {
        reset();
      }, 3000);
    }}
  />
));
