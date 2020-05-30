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

  showNotifer = false,
  showLogo = false,
}) => (
  <div
    onClick={onClick}
    onContextMenu={onContextMenu}
    className={cn('border-box unselectable btn-open-collection', className)}
  >
    <Box
      padding={`
        0 ${showLogo ? '41px' : '10px'} 0 ${showNotifer ? '18px' : '10px'}
      `}
    >
      { showNotifer && <UpdatedNotifer /> }
      <SingleLineText size="16px">{children}</SingleLineText>
      { showLogo && <Logo src="https://picsum.photos/25/25" to="#" /> }
    </Box>
  </div>
);

ButtonOpenCollection.propTypes = {
  onClick: PropTypes.func,
  onContextMenu: PropTypes.func,

  className: PropTypes.string,
};

export default ButtonOpenCollection;
