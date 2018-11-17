import * as React from 'react';
import Hammer from 'react-hammerjs';

import { $User } from '../../shared/types';

interface $Props {
  user: $User;
}

export function Picker({ user }: $Props): JSX.Element {
  return (
    <Hammer onSwipe={console.log}>
      <div style={{ width: '90%', margin: 'auto' }}>
        <img src={user.img} />
        <h2>{user.name}</h2>
      </div>
    </Hammer>
  );
}
