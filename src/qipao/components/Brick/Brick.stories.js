import React from 'react';
import { storiesOf } from '@storybook/react';

import Brick from './Brick';
import collections from './collections';

import './Brick.css';

storiesOf('组件/砖块', module)
  .add('完整', () => (
    <Brick
      data={collections[0]}
      className="brick-demo"
      onClick={e => {
        console.log(e);
      }}
      onContextMenu={e => {
        console.log(e);
      }}
    />
  ))
  .add('无标题', () => <Brick data={collections[1]} className="brick-demo" />)
  .add('无封面', () => <Brick data={collections[2]} className="brick-demo" />)
  .add('无描述', () => <Brick data={collections[3]} className="brick-demo" />)
  .add('只有标题', () => <Brick data={collections[4]} className="brick-demo" />)
  .add('只有封面', () => <Brick data={collections[5]} className="brick-demo" />)
  .add('只有描述', () => (
    <Brick data={collections[6]} className="brick-demo" />
  ));
