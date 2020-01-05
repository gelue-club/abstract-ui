import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import merge from 'deepmerge';

function SingleLineText({
  size,
  children,
  className = '',
  style = {},
  ...restProps
}) {
  return (
    <div
      className={cn('text-block single-line-text', className)}
      style={merge(
        {
          fontSize: size,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',

          overflow: 'hidden',
        },
        style,
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}

SingleLineText.propTypes = {
  size: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  className: PropTypes.string,
  style: PropTypes.object,
};

export default SingleLineText;
