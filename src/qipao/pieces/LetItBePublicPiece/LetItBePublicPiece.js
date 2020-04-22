import React, { useState } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import Qrcode from 'qrcode.react';
import cn from 'classnames';

import join from 'utilities/join';
import isEmpty from 'utilities/isEmpty';

import SingleLineText from 'kits/SingleLineText';

import Expanded2ColsLayout from 'layouts/Expanded2ColsLayout';
import InlineXyCenter from 'layouts/InlineXyCenter';
import PaddingBox from 'layouts/PaddingBox';
import XyCenter from 'layouts/XyCenter';
import YGutter from 'layouts/YGutter';

import ExpandedBlockRadioChoice from 'components/ExpandedBlockRadioChoice';
import RoundCornerExpandedMask from 'components/RoundCornerExpandedMask';
import ExpandedBlockRadioGroup from 'components/ExpandedBlockRadioGroup';
import InputGroupSingleChar from 'components/InputGroupSingleChar';
import PieceWindow from 'components/PieceWindow';
import TiledPanel from 'components/TiledPanel';

import './LetItBePublicPiece.css';

const LetItBePublicPiece = ({
  positionInPieceOpenedHistory,

  defaultPosition = { x: 0, y: 0 },

  collectionIndex,
  collections,
  host = '',
  code = '',

  closePieceLetItBePublic,
  updateCollectionVisibleType,
}) => {
  const [
    accessCodeSetupPanelVisible,
    toggleAccessCodeSetupPanelVisible,
  ] = useState(false);

  const [accessCode, updateAccessCode] = useState(code);
  const [sharedStateUI, updateSharedStateUI] = useState(
    collections[collectionIndex].visibleType,
  );

  return (
    <PieceWindow
      w="280px"
      name={collections[collectionIndex].title}
      defaultPosition={defaultPosition}
      className="let-it-be-public-piece"
      onClose={() => {
        closePieceLetItBePublic(positionInPieceOpenedHistory);
      }}
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
              updateCollectionVisibleType({
                pivot: collectionIndex,
                visibleType: 'public-with-password',
              });

              updateSharedStateUI('public-with-password');
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
      <PaddingBox padding="0 30px">
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
              value={getPublicUrl({
                host,
                userId: collections[collectionIndex].userId,
                collectionId: collections[collectionIndex].collectionId,
              })}
            />
          </XyCenter>
        </div>
      </PaddingBox>

      <YGutter height="15px" />
      <PaddingBox padding="0 30px">
        <RoundCornerExpandedMask radius="3px">
          <Expanded2ColsLayout split={0.65}>
            <div className="unselectable public-url">
              <PaddingBox padding="0 11px" className="y-center">
                <SingleLineText size="12px">
                  {getPublicUrl({
                    host,
                    userId: collections[collectionIndex].userId,
                    collectionId: collections[collectionIndex].collectionId,
                  })}
                </SingleLineText>
              </PaddingBox>
            </div>

            <CopyToClipboard
              text={getPublicUrl({
                host,
                userId: collections[collectionIndex].userId,
                collectionId: collections[collectionIndex].collectionId,
              })}
            >
              <div className="unselectable btn-copy">
                <InlineXyCenter>复制链接</InlineXyCenter>
              </div>
            </CopyToClipboard>
          </Expanded2ColsLayout>
        </RoundCornerExpandedMask>
      </PaddingBox>

      <YGutter height="25px" />
      <PaddingBox padding="0 30px">
        <span className="col-access-permission">当前访问权限</span>
      </PaddingBox>

      <YGutter height="5px" />
      <PaddingBox padding="0 30px">
        <ExpandedBlockRadioGroup selected={sharedStateUI}>
          <ExpandedBlockRadioChoice
            value="private"
            onClick={() => {
              if (sharedStateUI === 'public-with-password') {
                updateAccessCode('');
              }

              updateCollectionVisibleType({
                pivot: collectionIndex,
                collectionId: collections[collectionIndex].collectionId,
                modificationDetails: {
                  visibleType: 'private',
                },
                cb: () => {
                  updateSharedStateUI('private');
                },
              });
            }}
          >
            私密
          </ExpandedBlockRadioChoice>

          <ExpandedBlockRadioChoice
            value="public"
            onClick={() => {
              if (sharedStateUI === 'public-with-password') {
                updateAccessCode('');
              }

              updateCollectionVisibleType({
                pivot: collectionIndex,
                collectionId: collections[collectionIndex].collectionId,
                modificationDetails: {
                  visibleType: 'public',
                },
                cb: () => {
                  updateSharedStateUI('public');
                },
              });
            }}
          >
            公开
          </ExpandedBlockRadioChoice>

          <ExpandedBlockRadioChoice
            value="public-with-password"
            onClick={() => {
              // toggleAccessCodeSetupPanelVisible(true);
            }}
          >
            {`访问码${!isEmpty(accessCode) ? `：${accessCode}` : ''}`}
          </ExpandedBlockRadioChoice>
        </ExpandedBlockRadioGroup>
      </PaddingBox>

      <YGutter height="30px" />
    </PieceWindow>
  );
};

function getPublicUrl({ host, userId, collectionId }) {
  return `${host}/collection/${userId}/${collectionId}`;
}

export default LetItBePublicPiece;
