import React from 'react';
import ImageHref from 'components/ImageHref';

const Logo = ({ to, src }) => (
  <>
    <ImageHref src={src} to={to} size="25px" className="y-center clcn-logo" />
  </>
);

export default Logo;
