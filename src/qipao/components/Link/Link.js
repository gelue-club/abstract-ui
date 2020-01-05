import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Link.css';

/**
 * 链接盒子
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
function Link({ to, children, className, ...restProps }) {
  return (
    <a className={cn('clean-link link', className)} href={to} {...restProps}>
      {children}
    </a>
  );
}

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Link;
