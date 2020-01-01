import React, { cloneElement, Children } from 'react';
import PropTypes from 'prop-types';
import { isEqual, merge } from 'lodash';
import cn from 'classnames';

function IdenticalGrid({
  style,
  className = '',

  children,

  width,
  columnCount,
  gap,

  ...restProps
}) {
  const gapsWidth = (columnCount - 1) * gap;
  const size = (width - gapsWidth) / columnCount;

  return (
    <div
      className={cn('clearfix identical-grid', className)}
      style={merge(style, {
        width,
      })}
      {...restProps}
    >
      {Children.map(children, (ele, idx) =>
        cloneElement(
          ele,

          {
            key: `_${idx}`,

            style: merge(
              ele.props.style,

              {
                float: 'left',
                width: `${size}px`,
                height: `${size}px`,
              },

              {
                marginRight: isEqual((idx + 1) % columnCount, 0)
                  ? 0
                  : `${gap}px`,
                marginTop: idx + 1 > columnCount ? `${gap}px` : 0,
              },
            ),
          },
        ),
      )}
    </div>
  );
}

IdenticalGrid.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,

  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),

  width: PropTypes.number.isRequired,
  columnCount: PropTypes.number.isRequired,
  gap: PropTypes.number.isRequired,
};

export default IdenticalGrid;
