import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Box from 'layouts/Box';

import SingleLineText from 'kits/SingleLineText';

import './Alert.css';

const Alert = ({
  children,
  padding = '16px 16px',
  className = '',
  ...restProps
}) => (
  <div className={cn('alert', className)} {...restProps}>
    <Box padding={padding}>
      <SingleLineText size="16px">{children}</SingleLineText>
    </Box>
  </div>
);

Alert.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Alert;
