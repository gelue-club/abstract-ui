/* eslint-disable */

import React, { useState, createRef, useEffect } from 'react';

import PropTypes from 'prop-types';
import times from 'utilities/times';
import isEqual from 'utilities/isEqual';
import cn from 'classnames';
import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';

const scrollableNodeRef = createRef();

function List({
  defaultHighlight = 0,
  scrollToDefaultHighlight = false,
  collections = [],
  children = () => {},
  className = '',
  ...restProps
}) {
  const [highlight, updateHighlight] = useState(defaultHighlight);
  const [opacity, updateOpacity] = useState(0);

  useEffect(() => {
    if (isEqual(scrollToDefaultHighlight, true)) {
      scrollableNodeRef.current.scrollTo(0, (defaultHighlight - 1) * 48 + 8);
      updateOpacity(1);
    }
  }, [defaultHighlight]);

  return (
    <div className={cn('list', className)} style={{ opacity }} {...restProps}>
      <SimpleBar
        style={{ width: '100%', height: '100%' }}
        scrollableNodeProps={{ ref: scrollableNodeRef }}
      >
        {times(collections.length, index => {
          const defaultArgs = {
            index,

            style: {},

            highlight: updateHighlight,
            getHighlight: () => highlight,

            rowData: collections[index],
          };

          return children(defaultArgs);
        })}
      </SimpleBar>
    </div>
  );
}

List.propTypes = {
  collections: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,

  defaultHighlight: PropTypes.number,
  scrollToDefaultHighlight: PropTypes.bool,

  className: PropTypes.string,
};

export default List;
