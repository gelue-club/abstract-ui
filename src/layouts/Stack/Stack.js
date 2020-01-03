import React, { Children } from 'react';
import PropTypes from 'prop-types';
import merge from 'deepmerge';
import cn from 'classnames';

import './Stack.css';

function Stack({
  size = '100%',
  children,
  className = '',
  style,
  ...restProps
}) {
  const $size = size.trim().split(' ');

  return (
    <div
      className={cn('stack', className)}
      style={merge(
        style,
        $size.length === 1
          ? { width: $size, height: $size }
          : { width: $size[0], height: $size[1] },
      )}
      {...restProps}
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
  size: PropTypes.string,

  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,

  className: PropTypes.string,
  style: PropTypes.object,
};

export default Stack;
