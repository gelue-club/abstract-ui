import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import times from 'lodash/times';
import stubArray from 'lodash/stubArray';
import stubFalse from 'lodash/stubFalse';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import indexOf from 'lodash/indexOf';
import join from 'lodash/join';
import trim from 'lodash/trim';
import split from 'lodash/split';

import InputSingleChar from 'components/InputSingleChar';

import IdenticalGrid from 'layouts/IdenticalGrid';
import IGItem from 'layouts/IGItem';

import './InputGroupSingleChar.css';

/**
 * 禁止自动提交，用户输入后，可能会因发现自己输入错
 * 误而修改，自动提交会导致用户没有机会立马修改，必
 * 须等候 `next()` 执行完毕，才可能有机会修改，这
 * 很耽误时间。
 *
 * 验证（规则：没空）
 *  - [X] 未通过验证聚焦从左往右第一个报错的输入框
 *
 * next({value, actions: {retype, reset}})
 *  - [X] retype，重新输入
 *  - [X] reset，清空
 *
 * 待办：
 *  - [ ] 将验证逻辑分离，以 `props` 的方式传入
 *  - [ ] `next()` 执行时机：回车
 */
let cachedValue;
function InputGroupSingleChar({
  charCount,
  width,
  gap,
  then = () => {},

  className = '',
  inputClass = '',

  ...restProps
}) {
  const [inputting, updateInputtingIndex] = useState(0);
  const [processing, updateProcessStatus] = useState(0);
  const [cachedError, updateCachedError] = useState(
    times(charCount, stubFalse),
  );

  useEffect(() => {
    cachedValue = times(charCount, stubArray);
    return () => {};
  }, [charCount]);

  return (
    <div
      className={cn('border-box ipts-group-single-char', className)}
      {...restProps}
    >
      {!processing ? (
        <IdenticalGrid gap={gap} columnCount={charCount} width={width}>
          {times(charCount, index => (
            <IGItem key={`_${index}`} className="inputting">
              <InputSingleChar
                className={inputClass}
                focus={inputting === index}
                tabIndex={index}
                error={cachedError[index]}
                defaultValue={
                  isEmpty(cachedValue)
                    ? ''
                    : isEmpty(cachedValue[index])
                    ? ''
                    : cachedValue[index][0]
                }
                onDelete={({ tabIndex }) =>
                  handleDelete({
                    tabIndex,
                    updateInputtingIndex,
                  })
                }
                onPaste={e =>
                  handlePaste({
                    e,
                    charCount,
                    updateCachedError,
                    updateInputtingIndex,
                    updateProcessStatus,
                    then,
                  })
                }
                afterChange={({ e, value, nextIndex }) =>
                  handleChange({
                    e,
                    value,
                    nextIndex,
                    index,
                    charCount,
                    updateCachedError,
                    updateInputtingIndex,
                    updateProcessStatus,
                    then,
                  })
                }
              />
            </IGItem>
          ))}
        </IdenticalGrid>
      ) : (
        LoaderRender({ gap, charCount, width })
      )}
    </div>
  );
}

function handlePaste({
  e,
  charCount,
  updateCachedError,
  updateInputtingIndex,
  updateProcessStatus,
  then,
}) {
  const copied = split(e.clipboardData.getData('text/plain'), '');

  cachedValue = times(charCount, idx =>
    isEmpty(copied[idx]) ? [''] : [copied[idx]],
  );

  validate({
    charCount,
    updateCachedError,
    updateInputtingIndex,
    updateProcessStatus,
    then,
  });
}

function handleChange({
  value,
  nextIndex,
  index,
  charCount,
  updateCachedError,
  updateInputtingIndex,
  updateProcessStatus,
  then,
}) {
  cachedValue[index][0] = value;

  if (nextIndex === charCount) {
    validate({
      charCount,
      updateCachedError,
      updateInputtingIndex,
      updateProcessStatus,
      then,
    });

    return;
  }

  !isEmpty(value) && updateInputtingIndex(nextIndex);
}

function validate({
  charCount,
  updateCachedError,
  updateInputtingIndex,
  updateProcessStatus,
  then,
}) {
  const errorStatues = getErrorStatus(cachedValue);

  hasError(errorStatues)
    ? (() => {
        updateCachedError(getErrorStatus(cachedValue));
        updateInputtingIndex(indexOf(errorStatues, true));
      })()
    : (() => {
        updateInputtingIndex(0);
        updateProcessStatus(true);

        then({
          value: trim(join(cachedValue, '')),
          actions: {
            retype: () => {
              updateCachedError(times(charCount, stubFalse));
              updateProcessStatus(false);
            },

            reset: () => {
              cachedValue = times(charCount, stubArray);
              updateCachedError(times(charCount, stubFalse));
              updateProcessStatus(false);
            },
          },
        });
      })();
}

function handleDelete({ tabIndex, updateInputtingIndex }) {
  if (!!tabIndex) updateInputtingIndex(tabIndex - 1);
}

function getErrorStatus(target) {
  return map(target, val => isEmpty(val) || isEmpty(val[0]));
}

function hasError(errorStatues) {
  return indexOf(errorStatues, true) !== -1;
}

function LoaderRender({ gap, charCount, width }) {
  return (
    <IdenticalGrid gap={gap} columnCount={charCount} width={width}>
      {times(charCount, index => (
        <IGItem
          key={`${index}-`}
          className="activating"
          style={{
            animationName: `phs-${index + 1}`,
          }}
        />
      ))}
    </IdenticalGrid>
  );
}

InputGroupSingleChar.propTypes = {
  charCount: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  gap: PropTypes.number.isRequired,
  then: PropTypes.func.isRequired,

  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default InputGroupSingleChar;
