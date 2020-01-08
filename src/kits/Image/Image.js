import React from 'react';
import cn from 'classnames';

import merge from 'utilities/merge';
import parse2dSizeProp from 'utilities/parse2dSizeProp';

const Image = ({
  className = '',
  src,
  style = {},
  size = 'auto',
  ...restProps
}) => (
  <img
    src={src}
    className={cn('img', className)}
    style={merge(
      parse2dSizeProp({
        size,
        placeholder: { width: 'auto', height: 'auto' },
      }),
      style,
    )}
    {...restProps}
  />
);

export default Image;
