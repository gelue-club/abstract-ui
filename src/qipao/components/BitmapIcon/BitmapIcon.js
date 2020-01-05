import React from 'react';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';
import merge from 'deepmerge';

function BitmapIcon({
  size,
  src,
  xsrc,
  className = '',
  style = {},
  ...restProps
}) {
  const _size = size.trim().split(' ');
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  return (
    <i
      className={cn('bitmap-icon', className)}
      style={merge.all([
        {
          display: 'block',
          backgroundImage: `url("${isRetina ? xsrc : src}")`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        },
        _size.length === 1
          ? {
              width: _size,
              height: _size,
              backgroundSize: _size,
            }
          : {
              width: _size[0],
              height: _size[1],
              backgroundSize: `${_size[0]} ${_size[1]}`,
            },
        style,
      ])}
      {...restProps}
    />
  );
}

export default BitmapIcon;
