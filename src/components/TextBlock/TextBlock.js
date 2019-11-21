import React from 'react';
import cn from 'classnames';
import merge from 'deepmerge';

function TextBlock({ size, children, className, style={} }) {
  return (
    <div
      className={cn('text-block', className)}
      style={merge({
        fontSize: size,
        lineHeight: size,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',

        height: size,

        overflow: 'hidden',
      }, style)}
    >
      {children}
    </div>
  );
}

export default TextBlock;
