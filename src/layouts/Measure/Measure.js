import React, { useRef, useEffect } from 'react';
import cn from 'classnames';

import './Measure.css';

// 待办: 检测宽、高 2 者
// 待办: 支持仅检测宽度或高度
function Measure({ children, onMeasure = () => {}, className, ...restProps }) {
  const measurerRef = useRef(null);

  useEffect(() => {
    onMeasure({ clientHeight: measurerRef.current.clientHeight });
  });

  return (
    <div
      ref={measurerRef}
      className={cn('measure', className)}
      {...restProps}
    >
      {children}
    </div>
  );
}

export default Measure;
