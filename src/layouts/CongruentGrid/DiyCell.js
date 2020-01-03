import React from 'react';
import PropTypes from 'prop-types';

function DiyCell({ className, children, ...restProps }) {
  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  );
}

DiyCell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),

  className: PropTypes.string,
  style: PropTypes.object,
};

export default DiyCell;
