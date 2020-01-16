import React from 'react';
import { storiesOf } from '@storybook/react';
import times from 'lodash/times';

import IGItem from 'layouts/IGItem';

import IdenticalGrid from './IdenticalGrid';

storiesOf('布局/等距、等比例缩放', module).add('默认', () => (
  <IdenticalGrid gap={16} columnCount={6} width={380}>
    {times(16, index => (
      <IGItem key={`${index}-`} className="inputting">
        <div
          style={{ width: '100%', height: '100%', backgroundColor: 'orange' }}
        />
      </IGItem>
    ))}
  </IdenticalGrid>
));
