import React from 'react';
import { storiesOf } from '@storybook/react';
import cn from 'classnames';

import collections from './collections';

import PaddingBox from 'layouts/PaddingBox';

import ButtonOpenCollection from 'components/ButtonOpenCollection';
import List from 'components/List';

import './List.css';

storiesOf('组件.<List />', module).add('列表', () => (
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
));
