import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import merge from 'deepmerge';

const Box = ({
  width = '100%',
  height = 'auto',
  padding = 0,
  children,
  className = '',
  style = {},
  ...restProps
}) => (
  <div
    className={cn('box', className)}
    style={merge(
      {
        boxSizing: 'border-box',

        width,
        height,
        padding,
      },
      style,
    )}
    {...restProps}
  >
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {children}
    </div>
  </div>
);

Box.propTypes = {
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),

  className: PropTypes.string,
  style: PropTypes.object,
};

export default Box;
