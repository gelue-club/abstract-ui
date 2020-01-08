import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import merge from 'utilities/merge';

function Circle({ size = '', children, className = '', style, ...restProps }) {
  return (
    <div
      className={cn('circle', className)}
      style={merge(style, {
        width: size,
        height: size,

        borderRadius: size,
      })}
      {...restProps}
    >
      {children}
    </div>
  );
}

Circle.propTypes = {
  size: PropTypes.string.isRequired,

  className: PropTypes.string,
  style: PropTypes.object,
};

export default Circle;
