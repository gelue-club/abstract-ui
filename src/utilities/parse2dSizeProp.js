import isEmpty from 'utilities/isEmpty';

function parse2dSizeProp({ size, placeholder }) {
  const $size = size.trim().split(' ');

  if ($size.length === 1 && isEmpty($size[0])) return placeholder;

  return $size.length === 1
    ? { width: $size[0], height: $size[0] }
    : { width: $size[0], height: $size[1] };
}

export default parse2dSizeProp;
