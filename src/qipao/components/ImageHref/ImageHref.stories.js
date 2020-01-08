import React from 'react';
import { storiesOf } from '@storybook/react';

import ImageHref from './ImageHref';

import './ImageHref.stories.css';

storiesOf('组件.<ImageHref />', module).add('图片', () => (
  <ImageHref
    src="https://picsum.photos/200"
    to="https://qipao.app"
    size="200px"
    className="image-href-demo"
  />
));
