import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import SingleLineText from 'kits/SingleLineText';

import ButtonClosePieceWindow from './ButtonClosePieceWindow';

import './TitleBar.css';

const TitleBar = ({ children = '', onClose = () => {}, className = '' }) => (
  <div className={cn('title-bar', className)}>
    <SingleLineText size="12px" className="piece-name">
      {children}
    </SingleLineText>

    <ButtonClosePieceWindow onClick={onClose} />
  </div>
);

TitleBar.propTypes = {
  children: PropTypes.string,
  onClose: PropTypes.func,

  className: PropTypes.string,
};

export default TitleBar;
