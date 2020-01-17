import React from 'react';
import PropTypes from 'prop-types';

import Circle from 'kits/Circle';
import XyCenter from 'layouts/XyCenter';
import IconClose from 'components/SvgIcon/IconClose';

import './ButtonClosePieceWindow.css';

const ButtonClosePieceWindow = ({ onClose }) => (
  <div className="btn-close-piece-window" onClick={onClose}>
    <XyCenter>
      <Circle size="14px">
        <XyCenter>
          <IconClose size="12px" />
        </XyCenter>
      </Circle>
    </XyCenter>
  </div>
);

ButtonClosePieceWindow.propTypes = {
  onClose: PropTypes.func,
};

export default ButtonClosePieceWindow;
