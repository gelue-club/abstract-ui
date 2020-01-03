import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import isEmpty from 'lodash/isEmpty';
import size from 'lodash/size';

import './InputSingleChar.css';

function InputSingleChar({
  className = '',

  defaultValue = '',

  tabIndex,
  focus = false,
  error = false,

  afterChange = () => {},
  onDelete = () => {},
  onPaste = () => {},

  ...restProps
}) {
  const [value, updateValue] = useState(defaultValue);
  const eleIpt = useRef(null);

  useEffect(() => {
    focus && eleIpt.current.focus();
  });

  useEffect(() => {
    updateValue(defaultValue);
  }, [defaultValue]);

  return (
    <input
      ref={eleIpt}
      type="text"
      className={cn('text-center', { error }, className)}
      value={value}
      onKeyDown={e => {
        if (e.keyCode === 8) {
          if (isEmpty(e.currentTarget.value)) {
            onDelete({
              tabIndex,
            });
          }
        }
      }}
      onPaste={(e) => {
        if (size(e.clipboardData.getData('text/plain')) > 1) {
          onPaste(e);
          return;
        }

        updateValue(e.clipboardData.getData('text/plain'));
      }}
      onChange={e => {
        const val = e.currentTarget.value;
        if (val.length <= 1) {
          updateValue(val);
          afterChange({
            e,
            value: val,
            nextIndex: tabIndex + 1,
          });
        }
      }}
      {...restProps}
    />
  );
}

InputSingleChar.propTypes = {
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  afterChange: PropTypes.func,
  onDelete: PropTypes.func,
  onPaste: PropTypes.func,
  tabIndex: PropTypes.number,
  error: PropTypes.bool,

  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default InputSingleChar;
