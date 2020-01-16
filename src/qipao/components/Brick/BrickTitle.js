import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import PaddingBox from 'layouts/PaddingBox';

import './BrickTitle.css';

function BrickTitle({ children, className = '', ...restProps }) {
  return (
    <PaddingBox padding="0 18px">
      <h3 className={cn('brick-title', className)} {...restProps}>
        {children}
      </h3>
    </PaddingBox>
  );
}

BrickTitle.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default BrickTitle;
