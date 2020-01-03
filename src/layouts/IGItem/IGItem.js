import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './IGItem.css';

function IGItem({ className, children, ...restProps }) {
  return (
    <div className={cn('identical-grid-item', className)} {...restProps}>
      {children}
    </div>
  );
}

IGItem.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,

  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default IGItem;
