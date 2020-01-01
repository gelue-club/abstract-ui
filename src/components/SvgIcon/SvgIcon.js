import React from 'react';
import cn from 'classnames';
import merge from 'deepmerge';

function SvgIcon({ size, src, className = '', style = {}, ...restProps }) {
  const $size = size.trim().split(' ');

  return (
    <i
      className={cn('svg-icon', className)}
      style={merge.all([
        {
          display: 'block',
          backgroundImage: `url("${src}")`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        },
        $size.length === 1
          ? {
              width: $size,
              height: $size,
              backgroundSize: $size,
            }
          : {
              width: $size[0],
              height: $size[1],
              backgroundSize: `${$size[0]} ${$size[1]}`,
            },
        style,
      ])}
      {...restProps}
    />
  );
}

export default SvgIcon;
