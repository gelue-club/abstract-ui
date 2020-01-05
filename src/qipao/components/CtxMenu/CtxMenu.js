import React, { useState } from 'react';
import cn from 'classnames';

import Stack from 'layouts/Stack';
import XyCenter from 'layouts/XyCenter';

import SingleLineText from 'kits/SingleLineText';

import Circle from 'kits/Circle';
import IconPublic from 'components/SvgIcon/IconPublic';

import './CtxMenu.css';

function CtxMenu({ className, ...restProps }) {
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
      {...restProps}
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

      <SingleLineText size="12px" className="ctx-menu-name">
        公开
      </SingleLineText>
    </div>
  );
}

export default CtxMenu;
