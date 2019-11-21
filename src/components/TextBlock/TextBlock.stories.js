import React from 'react';
import { storiesOf } from '@storybook/react';

import TextBlock from './TextBlock';

storiesOf('<TextBlock />', module).add('固定宽度的文本块', () => (
  <TextBlock size="12px" style={{ width: '100px' }}>
    当外在的发展同内在的发展不能持衡时，加速的更多是外在事物单方面的累积，而非内外结合的产物。这边会导致逐物的问题。逐物时根本没法儿产生真正的效率，后果通常是：累死自己、耗尽资源、乌龙、迷惑于表象、失败。
  </TextBlock>
));
