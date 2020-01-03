import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import TiledPanel from 'components/TiledPanel';

// 将内联元素居中在平铺面板中
const InlineXyCenter = ({ className, children, ...restProps }) => (
  <TiledPanel className={cn('tbl', className)} {...restProps}>
    <div className="tbl-cell">{children}</div>
  </TiledPanel>
);

InlineXyCenter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
};

export default InlineXyCenter;
