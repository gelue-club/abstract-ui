import React, { useState } from 'react';

import Qrcode from 'qrcode.react';
import Draggable from 'react-draggable';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import cn from 'classnames';

import join from 'lodash/join';
import isEmpty from 'lodash/isEmpty';

import Box from 'layouts/PaddingBox';
import Expanded2ColsLayout from 'layouts/Expanded2ColsLayout';
import YGutter from 'layouts/YGutter';
import InlineXyCenter from 'layouts/InlineXyCenter';
import XyCenter from 'layouts/XyCenter';
import RoundCornerExpandedMask from 'layouts/RoundCornerExpandedMask';

import SingleLineText from 'kits/SingleLineText';
import PieceWindow from 'components/PieceWindow';
import ExpandedBlockRadioGroup from 'components/ExpandedBlockRadioGroup';
import ExpandedBlockRadioChoice from 'components/ExpandedBlockRadioChoice';
import InputGroupSingleChar from 'components/InputGroupSingleChar';
import TiledPanel from 'components/TiledPanel';

import './LetItBePublicPiece.css';

const LetItBePublicPiece = ({
  index,
  title,
  publicUrl,
  sharedState,
  defaultPosition = { x: 0, y: 0 },
  code = '',
}) => {
  const [
    accessCodeSetupPanelVisible,
    toggleAccessCodeSetupPanelVisible,
  ] = useState(false);

  const [accessCode, updateAccessCode] = useState(code);
  const [$sharedState, updateSharedState] = useState(sharedState);

  return (
    <Draggable handle=".piece-name">
      <div
        style={{
          width: '280px',
          height: '494px',
          position: 'absolute',
          zIndex: 20000,
          top: defaultPosition.y,
          left: defaultPosition.x,
        }}
      >
        <PieceWindow
          w="280px"
          name={title}
          className="let-it-be-public-piece"
          onClose={() => {}}
        >
          <div
            className={cn('setup-access-code', {
              hide: !accessCodeSetupPanelVisible,
            })}
          >
            <TiledPanel
              className="overlay"
              onClick={() => toggleAccessCodeSetupPanelVisible(false)}
            />

            <XyCenter className="main">
              <h6>输入访问码</h6>
              <YGutter height="15px" />
              <InputGroupSingleChar
                inputClass="ipt-single-char-customized"
                charCount={4}
                width={164}
                gap={8}
                then={({ value, actions: { reset } }) => {
                  updateSharedState('public-with-password');

                  updateAccessCode(join(value, ''));
                  toggleAccessCodeSetupPanelVisible(false);

                  // 请求服务器的代码可以放在这里...

                  setTimeout(() => {
                    reset();
                  }, 0);
                }}
              />
            </XyCenter>
          </div>

          <YGutter height="25px" />
          <Box padding="0 30px">
            <div
              className="clearfix qrcode"
              style={{
                width: '220px',
                height: '220px',
                backgroundColor: '#363636',
                borderRadius: '3px',
                position: 'relative',
              }}
            >
              <XyCenter>
                <Qrcode
                  bgColor="#363636"
                  fgColor="#fff"
                  level="H"
                  renderAs="svg"
                  size={220 - 15 * 2}
                  value={publicUrl}
                />
              </XyCenter>
            </div>
          </Box>

          <YGutter height="15px" />
          <Box padding="0 30px">
            <RoundCornerExpandedMask radius="3px">
              <Expanded2ColsLayout split={0.65}>
                <div className="unselectable public-url">
                  <Box padding="0 11px" className="y-center">
                    <SingleLineText size="12px">{publicUrl}</SingleLineText>
                  </Box>
                </div>

                <CopyToClipboard text={publicUrl}>
                  <div className="unselectable btn-copy">
                    <InlineXyCenter>复制链接</InlineXyCenter>
                  </div>
                </CopyToClipboard>
              </Expanded2ColsLayout>
            </RoundCornerExpandedMask>
          </Box>

          <YGutter height="25px" />
          <Box padding="0 30px">
            <span className="col-access-permission">当前访问权限</span>
          </Box>

          <YGutter height="5px" />
          <Box padding="0 30px">
            <ExpandedBlockRadioGroup selected={$sharedState}>
              <ExpandedBlockRadioChoice
                value="private"
                onClick={() => {
                  if ($sharedState === 'public-with-password') {
                    updateAccessCode('');
                  }

                  updateSharedState('private');
                }}
              >
                私密
              </ExpandedBlockRadioChoice>

              <ExpandedBlockRadioChoice
                value="public"
                onClick={() => {
                  if ($sharedState === 'public-with-password') {
                    updateAccessCode('');
                  }

                  updateSharedState('public');
                }}
              >
                公开
              </ExpandedBlockRadioChoice>

              <ExpandedBlockRadioChoice
                value="public-with-password"
                onClick={() => {
                  toggleAccessCodeSetupPanelVisible(true);
                }}
              >
                {`访问码${!isEmpty(accessCode) ? `：${accessCode}` : ''}`}
              </ExpandedBlockRadioChoice>
            </ExpandedBlockRadioGroup>
          </Box>

          <YGutter height="30px" />
        </PieceWindow>
      </div>
    </Draggable>
  );
};

export default LetItBePublicPiece;
