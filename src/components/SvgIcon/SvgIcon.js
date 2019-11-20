import React from 'react';
import cn from 'classnames';
import merge from 'deepmerge';

function SvgIcon({ size, src, className, style = {} }) {
  const _size = size.trim().split(' ');

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
    />
  );
}

export default SvgIcon;
