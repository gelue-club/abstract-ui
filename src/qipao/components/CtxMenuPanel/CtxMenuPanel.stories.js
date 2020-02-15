import React from 'react';
import { storiesOf } from '@storybook/react';

import CtxMenu from 'components/CtxMenu';

import CtxMenuPanel from './CtxMenuPanel';

storiesOf('气泡/组件/右键面板', module).add('默认', () => (
  <>
    <CtxMenuPanel className="collection-context-menu">
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
    </CtxMenuPanel>
  </>
));
