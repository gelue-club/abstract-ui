import React from 'react';

import PropTypes from 'prop-types';
import cn from 'classnames';

const Expanded2ColsLayout = ({
  split = 0.5,
  children,
  className = '',
  ...restProps
}) => (
  <div
    className={cn('clearfix expanded-two-cols-layout', className)}
    {...restProps}
  >
    <div
      className="left"
      style={{
        width: `${split * 100}%`,
      }}
    >
      {children[0]}
    </div>

    <div
      className="right"
      style={{
        width: `${(1 - split) * 100}%`,
      }}
    >
      {children[1]}
    </div>
  </div>
);

Expanded2ColsLayout.propTypes = {
  split: PropTypes.number,

  className: PropTypes.string,
};

export default Expanded2ColsLayout;
