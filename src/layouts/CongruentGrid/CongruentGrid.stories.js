import React from 'react';
import { storiesOf } from '@storybook/react';

import CongruentGrid from './CongruentGrid';
import DiyCell from './DiyCell';

const styleFill = { width: '100%', height: '100%' };
const demoEle = () => <div className="bg-test" style={styleFill} />;

storiesOf('布局.<CongruentGrid />', module)
  .add('平铺', () => (
    <CongruentGrid width="100%" rowHeight="112px" columnWidth="33.333333%">
      {demoEle()}
      {demoEle()}
      {demoEle()}
      {demoEle()}
      {demoEle()}
      {demoEle()}
      {demoEle()}
      {demoEle()}
      {demoEle()}
    </CongruentGrid>
  ))
  .add('固定宽度', () => (
    <CongruentGrid width="210px" rowHeight="112px" columnWidth="70px">
      {demoEle()}
      {demoEle()}
      {demoEle()}
      {demoEle()}
      {demoEle()}
      {demoEle()}
      {demoEle()}
      {demoEle()}
      {demoEle()}
    </CongruentGrid>
  ))
  .add('自定义网格单元', () => (
    <CongruentGrid width="210px" rowHeight="112px" columnWidth="70px">
      {demoEle()}
      {demoEle()}
      {demoEle()}
      {demoEle()}

      <DiyCell style={{ position: 'relative', background: '#000' }} />

      {demoEle()}
      {demoEle()}
      {demoEle()}
      {demoEle()}
    </CongruentGrid>
  ));
