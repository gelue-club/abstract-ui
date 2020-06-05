import React from 'react';
import { storiesOf } from '@storybook/react';

import LetItBePublicPiece from './LetItBePublicPiece';

storiesOf('气泡/小零件/分享', module).add('默认', () => (
  <LetItBePublicPiece
    defaultPosition={{ x: 50, y: 40 }}
    positionInPieceOpenedHistory={0}
    collectionIndex={0}
    collections={[
      {
        userId: 'Sk7vBbOJG',
        collectionId: 'ry-JR0rm7',
        visibleType: 'public',
        title: '上海最优秀的 90 后 UI 设计师',
      },
      {
        userId: 'Sk7vBbOJGs',
        collectionId: 'ry-JR0rm7s',
        visibleType: 'private',
        title: '上海最优秀的 80 后 UI 设计师',
      },
    ]}
    host="http://qipao.app"
    closePieceLetItBePublic={() => {}}
    updateCollectionVisibleType={() => {}}
  />
));
