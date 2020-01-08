import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Box from 'layouts/PaddingBox';

import SingleLineText from 'kits/SingleLineText';

import UpdatedNotifer from './UpdatedNotifer';
import Logo from './Logo';

const ButtonOpenCollection = ({
  children,
  onClick,
  onContextMenu,
  className,
}) => (
  <div
    onClick={onClick}
    onContextMenu={onContextMenu}
    className={cn('border-box unselectable btn-open-collection', className)}
  >
    <Box padding="0 41px 0 18px">
      <UpdatedNotifer />
      <SingleLineText size="16px">{children}</SingleLineText>
      <Logo src="https://picsum.photos/25/25" to="#" />
    </Box>
  </div>
);

ButtonOpenCollection.propTypes = {
  onClick: PropTypes.func,
  onContextMenu: PropTypes.func,

  className: PropTypes.string,
};

export default ButtonOpenCollection;
