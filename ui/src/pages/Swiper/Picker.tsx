import HammerJS from 'hammerjs';
import * as React from 'react';
import Hammer from 'react-hammerjs';

import { $User } from '../../shared/types';

interface $Props {
  user: $User;
  swipeLeft(): void;
  swipeRight(): void;
}

export function Picker({ user, swipeLeft, swipeRight }: $Props): JSX.Element {
  const handleSwipe = ({ direction }) => {
    if (direction === HammerJS.DIRECTION_LEFT) {
      swipeLeft();
    } else if (direction === HammerJS.DIRECTION_RIGHT) {
      swipeRight();
    }
  };

  return (
    <Hammer onSwipe={handleSwipe}>
      <div style={{ width: '90%', margin: 'auto' }}>
        <img src={user.img} />
        <h2>{user.name}</h2>
      </div>
    </Hammer>
  );
}
