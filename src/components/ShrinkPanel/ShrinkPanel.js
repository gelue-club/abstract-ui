import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import merge from 'deepmerge';

const ShrinkPanel = ({
  radius = '0px',
  padding = '0px',
  bgColor = 'transparent',

  children,

  style = {},
  className,
}) => (
  <div
    style={merge(
      {
        display: 'inline-block',
        boxSizing: 'border-box',

        padding,
        borderRadius: radius,
        backgroundColor: bgColor,
      },
      style,
    )}
    className={cn('shrink-panel', className)}
  >
    {children}
  </div>
);

ShrinkPanel.propTypes = {
  radius: PropTypes.string,
  padding: PropTypes.string,
  bgColor: PropTypes.string,

  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,

  style: PropTypes.object,
  className: PropTypes.string,
};

export default ShrinkPanel;
