import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from './SvgIcon';
import SvgClose24Px from './close-24px.svg';

const IconClose = ({ size = '24px' }) => (
  <SvgIcon size={size} src={SvgClose24Px} className="icon-close" />
);

IconClose.propTypes = {
  size: PropTypes.string,
};

export default IconClose;
