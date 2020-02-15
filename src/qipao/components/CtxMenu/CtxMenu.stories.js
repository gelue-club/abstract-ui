import React from 'react';
import { storiesOf } from '@storybook/react';

import ShrinkPanel from 'components/ShrinkPanel';

import CongruentGrid from 'layouts/CongruentGrid';

import CtxMenu from './CtxMenu';

storiesOf('气泡/组件/右键面板按钮', module)
  .add('右键按钮', () => <CtxMenu />)
  .add('使用网格组织的右键按钮', () => (
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
  ));
