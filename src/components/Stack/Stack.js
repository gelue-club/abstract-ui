import React, { Children } from 'react';
import PropTypes from 'prop-types';
import merge from 'deepmerge';
import cn from 'classnames';

import './Stack.css';

function Stack({ size, children, className, style }) {
  const _size = size.trim().split(' ');

  return (
    <div
      className={cn('stack', className)}
      style={merge(
        style,
        _size.length === 1
          ? { width: _size, height: _size }
          : { width: _size[0], height: _size[1] },
      )}
    >
      {Children.map(children, (ele, idx) => (
        <div
          className={`layer layer-${idx}`}
          style={{ zIndex: idx }}
          key={`_${idx}`}
        >
          {ele}
        </div>
      ))}
    </div>
  );
}

Stack.propTypes = {
  size: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,

  className: PropTypes.string,
  style: PropTypes.object,
};

export default Stack;
