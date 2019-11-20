import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import merge from 'deepmerge';

function Circle({ size, children, className, style }) {
  return (
    <div
      className={cn('circle', className)}
      style={merge(style, {
        width: size,
        height: size,

        borderRadius: size,
      })}
    >
      {children}
    </div>
  );
}

Circle.propTypes = {
  size: PropTypes.string.isRequired,

  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),

  className: PropTypes.string,
  style: PropTypes.object,
};

export default Circle;
