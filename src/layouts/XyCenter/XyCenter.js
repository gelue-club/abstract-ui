import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './XyCenter.css';

function XyCenter({ children, className = '', ...restProps }) {
  return (
    <div className={cn('xy-center', className)} {...restProps}>
      {children}
    </div>
  );
}

XyCenter.propTypes = {
  className: PropTypes.string,

  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
};

export default XyCenter;
