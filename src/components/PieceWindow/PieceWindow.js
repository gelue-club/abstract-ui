import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import merge from 'deepmerge';

import RoundCornerShrinkMask from 'layouts/RoundCornerShrinkMask';
import Box from 'layouts/Box';

import SingleLineText from 'components/SingleLineText';
import Circle from 'components/Circle';

import './PieceWindow.css';

const PieceWindow = ({
  w,
  h,
  name,
  children,
  className = '',
  style = {},
  onClose = () => {},
  ...restProps
}) => (
  <RoundCornerShrinkMask
    radius="6px"
    className={cn('unselectable piece-window', className)}
    {...restProps}
  >
    <Box
      padding="29px 0 0 0"
      style={merge(
        {
          width: w,
          height: h,
        },
        style,
      )}
    >
      <SingleLineText size="12px" className="piece-name">
        {name}
      </SingleLineText>

      <Circle size="14px" className="btn-close-piece" onClick={onClose} />

      {children}
    </Box>
  </RoundCornerShrinkMask>
);

PieceWindow.propTypes = {
  w: PropTypes.string.isRequired,
  h: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func,

  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),

  className: PropTypes.string,
  style: PropTypes.object,
};

export default PieceWindow;
