import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './XyCenter.css';

const PROPTYPES = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
  type: PropTypes.string,
};

function XyCenterTranslate({ onClick, children, className, style, id }) {
  return (
    <div className={cn('xy-center', className)} id={id} style={style}>
      {children}
    </div>
  );
}

XyCenterTranslate.propTypes = PROPTYPES;

export default XyCenterTranslate;
