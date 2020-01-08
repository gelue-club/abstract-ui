import React from 'react';
import cn from 'classnames';

import Image from 'kits/Image';
import CleanHref from 'components/CleanHref';
import parse2dSizeProp from 'utilities/parse2dSizeProp';

const ImageHref = ({ to = '', src = '', size = 'auto', className = '' }) => {
  const { width, height } = parse2dSizeProp({
    size,
    placeholder: { width: 'auto', height: 'auto' },
  });

  return (
    <CleanHref
      className={cn('clearfix', className)}
      to={to}
      style={{ width, height }}
    >
      <Image
        size={`${width} ${height}`}
        src={src}
        alt="示例"
        style={{ float: 'left' }}
      />
    </CleanHref>
  );
};

export default ImageHref;
