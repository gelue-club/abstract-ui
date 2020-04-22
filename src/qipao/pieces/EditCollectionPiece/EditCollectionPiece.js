import React, { useState } from 'react';

import TextareaAutosize from 'react-textarea-autosize';
import cn from 'classnames';

import PieceWindow from 'components/PieceWindow';

import PaddingBox from 'layouts/PaddingBox';
import YGutter from 'layouts/YGutter';

import './EditCollectionPiece.css';

let timeoutIptTitle = null;
let timeoutIptDescription = null;

const EditCollectionPiece = ({
  positionInPieceOpenedHistory = 0,
  defaultPosition = { x: 0, y: 0 },

  collectionIndex = 0,
  collections = {},

  remoteSave = () => {},
  closePieceLetItBePublic = () => {},
}) => {
  const [contentTitle, updateContentTitle] = useState(
    collections[collectionIndex].title,
  );
  const [contentDescription, updateContentDescription] = useState(
    collections[collectionIndex].description,
  );
  const [saved, alertSaved] = useState(false);

  return (
    <PieceWindow
      w="616px"
      name="编辑清单"
      defaultPosition={defaultPosition}
      className="edit-collection-piece"
      onClose={() => {
        closePieceLetItBePublic(positionInPieceOpenedHistory);
      }}
    >
      <PaddingBox padding="0 88px">
        <YGutter height="18px" />
        <input
          placeholder="标题"
          onChange={e => {
            let val = e.currentTarget.value;
            clearTimeout(timeoutIptTitle);

            updateContentTitle(val);

            timeoutIptTitle = setTimeout(() => {
              remoteSave({
                type: 'title',
                content: val,
                alertSaved,
              });
            }, 400);
          }}
          className="ipt-collection-title"
          value={contentTitle}
        />

        <YGutter height="38px" />
        <TextareaAutosize
          placeholder="描述一下..."
          onChange={e => {
            let val = e.currentTarget.value;
            clearTimeout(timeoutIptDescription);

            updateContentDescription(val);

            timeoutIptDescription = setTimeout(() => {
              remoteSave({
                type: 'description',
                content: val,
                alertSaved,
              });
            }, 400);
          }}
          value={contentDescription}
          minRows={10}
          className="txt-collection-description"
        />
        <YGutter height="20px" />
      </PaddingBox>

      <span className={cn('alert-saved', {
        'hide': !saved,
      })}>
        自动保存成功
      </span>
    </PieceWindow>
  );
};

export default EditCollectionPiece;
