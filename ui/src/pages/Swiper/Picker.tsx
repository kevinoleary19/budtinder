import HammerJS from 'hammerjs';
import * as React from 'react';
import Hammer from 'react-hammerjs';
import Text, { Font } from '../../components/Text';
import { css } from 'aphrodite';
import { $User } from '../../shared/types';
import styles from './styles';

interface $Props {
  user: $User;
  swipeLeft(): void;
  swipeRight(user: $User): void;
}

export function Picker({ user, swipeLeft, swipeRight }: $Props): JSX.Element {
  const handleSwipe = ({ direction }) => {
    if (direction === HammerJS.DIRECTION_LEFT) {
      swipeLeft();
    } else if (direction === HammerJS.DIRECTION_RIGHT) {
      swipeRight(user);
    }
  };

  return (
    <div className={css(styles.Picker)}>
    <Text font={Font.FuturaBold} extraStyles={[styles.subheader]}>
      Find yourself a bud that you can chill with. Swipe right to approve.
    </Text>
      <Hammer onSwipe={handleSwipe}>
        <div className={css(styles.card)}>
          <img src={user.img} className={css(styles.image)} />
          <Text extraStyles={[styles.text]} font={Font.ProximaNovaBold}>
            {user.name}
          </Text>
        </div>
      </Hammer>
    </div>
  );
}
