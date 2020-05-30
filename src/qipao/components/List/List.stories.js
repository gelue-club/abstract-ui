import React from 'react';
import { storiesOf } from '@storybook/react';
import cn from 'classnames';

import collections from './collections';

import PaddingBox from 'layouts/PaddingBox';

import ButtonOpenCollection from 'components/ButtonOpenCollection';
import List from 'components/List';

import './List.css';

storiesOf('气泡/组件/列表', module)
  .add('默认', () => (
    <>
      <List
        className="list-demo"
        collections={collections}
        defaultHighlight={2}
        scrollToDefaultHighlight
      >
        {({ index, highlight, getHighlight, rowData: { title } }) => (
          <PaddingBox
            padding="0 18px"
            key={`list-row-${index}`}
            className="list-row"
          >
            <ButtonOpenCollection
              className={cn({
                highlight: index === getHighlight(),
              })}
            >
              {title}
            </ButtonOpenCollection>
          </PaddingBox>
        )}
      </List>
    </>
  ))
  .add('右对齐', () => (
    <>
      <List
        className="align-right list-demo"
        collections={collections}
        defaultHighlight={2}
        scrollToDefaultHighlight
      >
        {({ index, highlight, getHighlight, rowData: { title } }) => (
          <PaddingBox
            padding="0 18px"
            key={`list-row-${index}`}
            className="list-row"
          >
            <ButtonOpenCollection
              className={cn('flex-width', {
                highlight: index === getHighlight(),
              })}
            >
              {title}
            </ButtonOpenCollection>
          </PaddingBox>
        )}
      </List>
    </>
  ));
