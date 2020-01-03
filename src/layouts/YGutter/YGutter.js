import React from 'react';
import cn from 'classnames';

function YGutter({ height, className = '', ...restProps }) {
  return (
    <div
      className={cn('y-gutter', className)}
      style={{
        height,
      }}
      {...restProps}
    />
  );
}

export default YGutter;
