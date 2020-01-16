import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import merge from 'utilities/merge';
import parse2dSizeProp from 'utilities/parse2dSizeProp';

import './CleanHref.css';

/**
 * 无下划线的链接盒子
 *
 * 允许的内容,
 * - 文字
 * - 图片
 * - 组件的组合
 * - ...
 * 所有可见的内容（Transparent），包含流内容（不包括交互式内容）或文字内容（phrasing content）
 *
 * 若放的是文字，文字无下划线
 */
function CleanHref({
  to = '',
  size = 'auto',
  children,
  className = '',
  style = {},
  ...restProps
}) {
  return (
    <a
      className={cn('clean-href', className)}
      href={to}
      style={merge(
        parse2dSizeProp({
          size,
          placeholder: { width: 'auto', height: 'auto' },
        }),
        style,
      )}
      {...restProps}
    >
      {children}
    </a>
  );
}

CleanHref.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default CleanHref;
