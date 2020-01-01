import React from 'react';
import { storiesOf } from '@storybook/react';
import times from 'lodash/times';

import IdenticalGrid from './IdenticalGrid';
import IGItem from '../IGItem';

storiesOf('<IdenticalGrid />', module).add('收缩型面板', () => (
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
