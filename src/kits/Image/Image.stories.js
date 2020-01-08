import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from './Image';

storiesOf('组件.<Image />', module).add('图片', () => (
  <>
    <Image src="https://picsum.photos/200" size="200px" />
  </>
));
