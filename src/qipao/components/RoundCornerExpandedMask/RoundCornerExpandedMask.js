import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import merge from 'deepmerge';

const RoundCornerExpandedMask = ({
  radius,

  children,
  className = '',
  style = {},

  ...restProps
}) => (
  <div
    className={cn('round-corner-expanded-mask', className)}
    style={merge(
      {
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

RoundCornerExpandedMask.propTypes = {
  radius: PropTypes.string.isRequired,

  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),

  className: PropTypes.string,
  style: PropTypes.object,
};

export default RoundCornerExpandedMask;
