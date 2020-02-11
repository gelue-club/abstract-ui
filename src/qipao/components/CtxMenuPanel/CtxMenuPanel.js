import React from 'react';

import PropTypes from 'prop-types';
import cn from 'classnames';

import ElasticHeightPanel from 'components/ElasticHeightPanel';

import CongruentGrid from 'layouts/CongruentGrid';

import './CtxMenuPanel.css';

const CtxMenuPanel = ({ children, className = '' }) => (
  <ElasticHeightPanel
    size="244px 384px"
    className={cn('ctx-menu-panel', className)}
  >
    <div
      style={{
        display: 'inline-block',
        boxSizing: 'border-box',

        padding: '15px',
      }}
    >
      <CongruentGrid
        width="210px"
        rowHeight="112px"
        columnWidth="70px"
        style={{ backgroundColor: '#2D2F2F' }}
      >
        { children }
      </CongruentGrid>
    </div>
  </ElasticHeightPanel>
);

CtxMenuPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  className: PropTypes.string,
};

export default CtxMenuPanel;
