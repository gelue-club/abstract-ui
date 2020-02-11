import React from 'react';
import { storiesOf } from '@storybook/react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import ShrinkPanel from 'components/ShrinkPanel';
import CtxMenu from 'components/CtxMenu';

import CongruentGrid from 'layouts/CongruentGrid';

import RoundCornerShrinkMask from './RoundCornerShrinkMask';

storiesOf('组件/圆角收缩遮罩', module).add('默认', () => (
  <RoundCornerShrinkMask radius="6px">
    <SimpleBar style={{ maxHeight: 384, width: 240 }}>
      <ShrinkPanel radius="6px" padding="15px" bgColor="#2D2F2F">
        <CongruentGrid
          width="210px"
          rowHeight="112px"
          columnWidth="70px"
          style={{ backgroundColor: '#2D2F2F' }}
        >
          <CtxMenu />
          <CtxMenu />
          <CtxMenu />
          <CtxMenu />
          <CtxMenu />
          <CtxMenu />
          <CtxMenu />
          <CtxMenu />
          <CtxMenu />
          <CtxMenu />
          <CtxMenu />
          <CtxMenu />
          <CtxMenu />
          <CtxMenu />
          <CtxMenu />
          <CtxMenu />
          <CtxMenu />
        </CongruentGrid>
      </ShrinkPanel>
    </SimpleBar>
  </RoundCornerShrinkMask>
));
