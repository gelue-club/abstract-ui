import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonOpenCollection from './ButtonOpenCollection';
import './ButtonOpenCollection.css';

storiesOf('气泡/组件/切换清单的按钮', module)
  .add('默认', () => (
    <>
      <ButtonOpenCollection
        className="default"
        onClick={() => {
          console.log(123);
        }}
        onContextMenu={() => {
          console.log('右键');
        }}
        showNotifer
        showLogo
      >
        上次打开的清单
      </ButtonOpenCollection>
    </>
  ))
  .add('没有更新', () => (
    <>
      <ButtonOpenCollection
        className="default"
        onClick={() => {
          console.log(123);
        }}
        onContextMenu={() => {
          console.log('右键');
        }}
        showLogo
      >
        上次打开的清单
      </ButtonOpenCollection>
    </>
  ))
  .add('没有标志', () => (
    <>
      <ButtonOpenCollection
        className="default"
        onClick={() => {
          console.log(123);
        }}
        onContextMenu={() => {
          console.log('右键');
        }}
      >
        上次打开的清单
      </ButtonOpenCollection>
    </>
  ));
