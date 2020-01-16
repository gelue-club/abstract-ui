import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import PaddingBox from 'layouts/PaddingBox';

import './BrickDescription.css';

function BrickDescription({ children = '', className = '', ...restProps }) {
  return (
    <PaddingBox padding="0 18px">
      <p className={cn('brick-description', className)} {...restProps}>
        {children}
      </p>
    </PaddingBox>
  );
}

BrickDescription.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default BrickDescription;
