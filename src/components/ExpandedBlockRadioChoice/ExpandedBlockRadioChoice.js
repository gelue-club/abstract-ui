import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import InlineXyCenter from '../InlineXyCenter';

import './ExpandedBlockRadioChoice.css';

const ExpandedBlockRadioChoice = ({
  value,
  children,
  className = '',
  ...restProps
}) => (
  <div className={cn('expanded-block-radio-choice', className)} {...restProps}>
    <InlineXyCenter>{children}</InlineXyCenter>
  </div>
);

ExpandedBlockRadioChoice.propTypes = {
  value: PropTypes.string.isRequired,

  children: PropTypes.string.isRequired,

  className: PropTypes.string,
  style: PropTypes.object,
};

export default ExpandedBlockRadioChoice;
