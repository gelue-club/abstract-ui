import React from 'react';
import { storiesOf } from '@storybook/react';

import EditCollectionPiece from './EditCollectionPiece';

let timeoutMockDataFetching = null;
let timeoutHideAlert = null;

storiesOf('气泡/小零件/编辑清单', module).add('默认', () => (
  <EditCollectionPiece
    positionInPieceOpenedHistory={0}
    defaultPosition={{ x: 0, y: 0 }}
    collectionIndex={0}
    collections={[
      {
        userId: 'Sk7vBbOJG',
        collectionId: 'ry-JR0rm7',
        visibleType: 'public',
        title: '低成本创业',
        description:
          '也许一份 20 多块钱的黄焖鸡可以让你情不自禁取代原本 100 多块钱吃呷浦呷浦的开销，满足食欲的同时你也省下了几十块钱，何乐不为呢？',
      },
    ]}
    remoteSave={({ type, content, alertSaved }) => {
      clearTimeout(timeoutMockDataFetching);
      clearTimeout(timeoutHideAlert);
      console.log(`\`${type}\` 已修改，正在保存。最新：${content}。`);

      timeoutMockDataFetching = setTimeout(() => {
        alertSaved(true);

        timeoutHideAlert = setTimeout(() => {
          alertSaved(false);
        }, 1000);
      }, 1000);
    }}
    closePieceLetItBePublic={() => {}}
  />
));
