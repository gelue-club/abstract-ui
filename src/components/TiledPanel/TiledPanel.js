import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './TiledPanel.css';

const TiledPanel = ({ children, className = '', ...rest }) => (
  <div className={cn('tiled-panel', className)} {...rest}>
    {children}
  </div>
);

TiledPanel.propTypes = {
  className: PropTypes.string,
};

export default TiledPanel;
