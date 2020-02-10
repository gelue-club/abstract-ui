import React from 'react';
import { storiesOf } from '@storybook/react';

import ElasticHeightPanel from './ElasticHeightPanel';

import Circle from 'kits/Circle';
import './Demo.css';

storiesOf('组件/弹性高度面板', module).add('默认', () => (
  <>
    <ElasticHeightPanel
      size="244px 500px"
      className="scroll-panel-corner-radius-6 left st-mgn"
    >
      <Circle size="100px" style={{ background: '#000' }} />
      <Circle size="100px" style={{ background: '#000' }} />
      <Circle size="100px" style={{ background: '#000' }} />
      <Circle size="100px" style={{ background: '#000' }} />
      <Circle size="100px" style={{ background: '#000' }} />
      <Circle size="100px" style={{ background: '#000' }} />
      <Circle size="100px" style={{ background: '#000' }} />
      <Circle size="100px" style={{ background: '#000' }} />
      <Circle size="100px" style={{ background: '#000' }} />
      <Circle size="100px" style={{ background: '#000' }} />
    </ElasticHeightPanel>
  </>
));
