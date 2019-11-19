import { isValidElement } from 'react';
import isFunction from 'is-fn';

export default function isReactElement(ele, name) {
  return isValidElement(ele) && isFunction(ele.type) && ele.type.name === name;
}
