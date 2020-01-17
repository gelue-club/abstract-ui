import React from 'react';
import PropTypes from 'prop-types';
import merge from 'deepmerge';
import cn from 'classnames';

function RoundCornerShrinkMask({
  radius,
  children,
  className = '',
  style = {},
  ...restProps
}) {
  return (
    <div
      className={cn('round-corner-shrink-mask', className)}
      style={merge(
        {
          display: 'inline-block',
          overflow: 'hidden',

          borderRadius: radius,
        },
        style,
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}

RoundCornerShrinkMask.propTypes = {
  radius: PropTypes.string.isRequired,

  className: PropTypes.string,
  style: PropTypes.object,
};

export default RoundCornerShrinkMask;
