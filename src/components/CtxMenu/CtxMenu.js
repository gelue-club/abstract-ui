import React, { useState } from 'react';
import cn from 'classnames';

import Circle from '../Circle/Circle';
import Stack from '../Stack/Stack';
import XyCenter from '../XyCenter/XyCenter';
import IconPublic from '../SvgIcon/IconPublic';

import './CtxMenu.css';

function TextBlock({ size, children, className }) {
  return (
    <div
      className={cn('text-block', className)}
      style={{
        fontSize: size,
        lineHeight: size,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',

        height: size,

        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
}

function CtxMenu({ className, style, id }) {
  const [hover, updateHoverStatus] = useState(false);

  return (
    <div
      onMouseEnter={() => updateHoverStatus(true)}
      onMouseLeave={() => {
        updateHoverStatus(false);
      }}
      className={cn('ctx-menu', className, {
        hover,
      })}
      id={id}
      style={style}
    >
      <XyCenter
        style={{
          marginTop: '-13px',
        }}
      >
        <Stack size="50px">
          <Circle size="50px" style={{ background: '#363636' }} />

          <XyCenter>
            <IconPublic />
          </XyCenter>
        </Stack>
      </XyCenter>

      <TextBlock size="12px" className="ctx-menu-name">
        公开
      </TextBlock>
    </div>
  );
}

export default CtxMenu;
