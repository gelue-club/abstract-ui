import React from 'react';

import PropTypes from 'prop-types';
import cn from 'classnames';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import merge from 'utilities/merge';
import parse2dSizeProp from 'utilities/parse2dSizeProp';

import PaddingBox from 'layouts/PaddingBox';

import './ElasticHeightPanel.css';

/**
 * <ElasticHeightPanel />
 *
 * 💥特点，
 *   1️⃣高度弹性但有极限；
 *
 * @param {string} size 格式："宽 极限高度"，例："240px 480px"。
 */
function ElasticHeightPanel({
  size = 'auto',
  children,
  style = {},
  className = '',
  ...restProps
}) {
  const { width, height } = parse2dSizeProp({
    size,
    placeholder: { width: 'auto', height: 'auto' },
  });

  return (
    <PaddingBox
      padding="1px"
      className={cn('elastic-height-panel', className)}
      style={merge({ width }, style)}
      {...restProps}
    >
      <SimpleBar
        style={{ maxHeight: `${+height.match(/\d+/g)[0]}px`, width: '100%' }}
      >
        {children}
      </SimpleBar>
    </PaddingBox>
  );
}

ElasticHeightPanel.propTypes = {
  size: PropTypes.string.isRequired,

  className: PropTypes.string,
  style: PropTypes.object,
};

export default ElasticHeightPanel;
