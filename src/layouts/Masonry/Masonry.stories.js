import React from 'react';
import { storiesOf } from '@storybook/react';

import Measure from 'layouts/Measure';
import CellMeasurerCache from 'layouts/Masonry/CellMeasurerCache';

import Brick from 'components/Brick';

import collections from 'components/Brick/collections';

import Masonry from './Masonry';

const MeasurerCache = new CellMeasurerCache({
  defaultWidth: 228,
  fixedWidth: true,
  fixedHeight: false,
});

storiesOf('布局/瀑布流', module).add('默认', () => (
  <Masonry
    cache={MeasurerCache}
    identity="njYdsoW"
    cellCount={collections.length}
    maxColumns={3}
    initialWidth={1000}
    columnWidth={228}
    gap={18}
  >
    {({ key, cellIndex, style }) => (
      <Measure
        onMeasure={({ clientHeight }) => {
          // 此处每个 0 代表的都是 columnIndex
          if (!MeasurerCache.has(cellIndex, 0)) {
            MeasurerCache.set(
              cellIndex,
              0,
              MeasurerCache.$defaultWidth,
              clientHeight,
            );
          }
        }}
        key={key}
        className="clearfix cell"
        style={style}
      >
        <Brick
          data={collections[cellIndex]}
          className="left"
        />
      </Measure>
    )}
  </Masonry>
));
