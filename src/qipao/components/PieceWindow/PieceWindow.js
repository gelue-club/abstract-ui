import React from 'react';

import PropTypes from 'prop-types';
import cn from 'classnames';
import merge from 'deepmerge';
import Draggable from 'react-draggable';

import RoundCornerShrinkMask from 'components/RoundCornerShrinkMask';
import PaddingBox from 'layouts/PaddingBox';

import TitleBar from './TitleBar';

import './PieceWindow.css';

const PieceWindow = ({
  w,
  h,
  name,
  children,
  defaultPosition = { x: 0, y: 0 },

  onClose = () => {},

  className = '',
  style = {},

  ...restProps
}) => (
  <Draggable handle=".piece-name">
    <div
      style={{
        width: w,
        height: h,
        position: 'absolute',
        zIndex: 10000,
        top: defaultPosition.y,
        left: defaultPosition.x,
      }}
    >
      <RoundCornerShrinkMask
        radius="6px"
        className={cn('unselectable piece-window', className)}
        {...restProps}
      >
        <PaddingBox
          padding="30px 0 0 0"
          style={merge(
            {
              width: w,
              height: h,
            },
            style,
          )}
        >
          <TitleBar onClose={onClose}>{name}</TitleBar>

          {children}
        </PaddingBox>
      </RoundCornerShrinkMask>
    </div>
  </Draggable>
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
