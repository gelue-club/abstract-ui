import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import merge from 'deepmerge';

import pickBy from './pickBy';
import isReactElement from './isReactElement';

import './CongruentGrid.css';

function CongruentGrid(props) {
  const {
    id,
    className,
    style,

    children,

    width,

    rowHeight,
    columnWidth,
  } = props;

  return (
    <div
      id={id}
      style={merge(style, {
        width,
      })}
      className={cn('congruent-grid', className)}
    >
      {Children.map(children, (ele, idx) =>
        !isReactElement(ele, 'DiyCell') ? (
          <div
            key={`_${idx}`}
            style={{
              float: 'left',
              width: columnWidth,
              height: rowHeight,
            }}
          >
            {ele}
          </div>
        ) : (
          cloneElement(
            ele,
            merge(
              {
                className: undefined,
                style: {
                  float: 'left',
                  width: columnWidth,
                  height: rowHeight,
                },
              },
              {
                className: ele.props.className,
                style: pickBy(
                  ele.props.style,
                  key => ['float', 'width', 'height'].indexOf(key) === -1,
                ),
              },
            ),
          )
        ),
      )}
    </div>
  );
}

CongruentGrid.propTypes = {
  width: PropTypes.string.isRequired,
  rowHeight: PropTypes.string.isRequired,
  columnWidth: PropTypes.string.isRequired,

  children: PropTypes.array.isRequired,

  className: PropTypes.string,
  style: PropTypes.object,
};

export default CongruentGrid;
