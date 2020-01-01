import React from 'react';
import { storiesOf } from '@storybook/react';

import InputSingleChar from './InputSingleChar';

storiesOf('<InputSingleChar />', module).add('单字符输入框', () => (
  <InputSingleChar tabIndex={0} />
));
