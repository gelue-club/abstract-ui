import React from 'react';

import Image from 'kits/Image';

function BrickCover({ size = '0', src = '' }) {
  return (
    <div className="clearfix brick-cover">
      <Image
        src={src}
        size={size}
        style={{
          float: 'left',
        }}
      />
    </div>
  );
}

export default BrickCover;
