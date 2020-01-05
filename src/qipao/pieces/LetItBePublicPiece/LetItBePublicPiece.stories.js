import React from 'react';
import { storiesOf } from '@storybook/react';

import LetItBePublicPiece from './LetItBePublicPiece';

storiesOf('小零件.<LetItBePublicPiece />', module).add(
  '小零件 - 公开它',
  () => (
    <LetItBePublicPiece
      title="上海最优秀的 90 后 UI 设计师"
      publicUrl="https://qipao.app/collection/ryJzWEj5b/rJkhzbsmM"
      sharedState="public-with-password"
      code="1234"
    />
  ),
);
