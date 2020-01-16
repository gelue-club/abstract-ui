import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import isEmpty from 'utilities/isEmpty';

import CleanHref from 'components/CleanHref';

import BrickDescription from './BrickDescription';
import BrickTitle from './BrickTitle';
import BrickCover from './BrickCover';

import './Brick.css';

function Brick({
  data: { title, cover, description, sturl },
  className = '',
  ...restProps
}) {
  const no = it => isEmpty(it);

  return (
    <CleanHref
      to={sturl}
      className={cn('unselectable brick', className, {
        'has-cover': !no(cover),
        'no-cover': no(cover),

        'has-title': !no(title),
        'no-title': no(title),

        'has-description': !no(description),
        'no-description': no(description),
      })}
      {...restProps}
    >
      {!no(cover) && (
        <BrickCover size={`${cover.width} ${cover.height}`} src={cover.src} />
      )}

      {!no(title) && <BrickTitle>{title}</BrickTitle>}

      {!no(description) && <BrickDescription>{description}</BrickDescription>}
    </CleanHref>
  );
}

Brick.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Brick;
