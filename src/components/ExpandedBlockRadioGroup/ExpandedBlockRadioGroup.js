import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import isFunction from 'is-fn';

import YGutter from '../YGutter';

const ExpandedBlockRadioGroup = ({
  selected,
  children,
  className = '',
  ...restProps
}) => (
  <div className={cn('expanded-block-radio-group', className)} {...restProps}>
    {Children.map(children, (ele, idx) => [
      idx !== 0 && <YGutter height="5px" />,
      cloneElement(ele, {
        key: `_${idx}`,
        className:
          selected === ele.props.value
            ? `${ele.props.className} active`
            : ele.props.className,
        onClick: e => {
          isFunction(ele.props.onClick) && ele.props.onClick({ e });
        },
      }),
    ])}
  </div>
);

ExpandedBlockRadioGroup.propTypes = {
  selected: PropTypes.string,

  children: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default ExpandedBlockRadioGroup;
