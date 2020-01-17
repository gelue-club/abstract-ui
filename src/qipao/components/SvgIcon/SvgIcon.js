import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import merge from 'deepmerge';

import isEmpty from 'utilities/isEmpty';

const SvgIcon = ({
  size = '24px',
  src = '',
  className = '',
  style = {},
  ...restProps
}) => (
  <i
    className={cn('icon svg-icon', className)}
    style={merge.all([
      {
        display: 'block',
        backgroundImage: `url("${src}")`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      },
      parse2dSizeProp({
        size,
        placeholder: {
          width: '24px',
          height: '24px',
          backgroundSize: '24px',
        },
      }),
      style,
    ])}
    {...restProps}
  />
);

function parse2dSizeProp({ size, placeholder }) {
  const $size = size.trim().split(' ');

  if ($size.length === 1 && isEmpty($size[0])) return placeholder;

  return $size.length === 1
    ? { width: $size[0], height: $size[0], backgroundSize: $size[0] }
    : {
        width: $size[0],
        height: $size[1],
        backgroundSize: `${$size[0]} ${$size[1]}`,
      };
}

SvgIcon.propTypes = {
  src: PropTypes.string.isRequired,

  size: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default SvgIcon;
