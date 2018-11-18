import { css } from 'aphrodite/no-important';
import * as React from 'react';
import styles from './styles';
import sendIcon from '../../images/send.png';
import Text, { Font } from '../../components/Text';


export default function ChatPage ({  }) {
  return (
    <section className={css(styles.ChatPage)}>
      <div className={css(styles.topSection)}>
        <Text font={Font.FuturaBold} extraStyles={[styles.foundBudText]}>
          We've found you a bud!
        </Text>
      </div>
      <div className={css(styles.chatSection)}>
      </div>
      <div className={css(styles.inputContainer)}>
        <input className={css(styles.input)} />
        <img src={sendIcon} className={css(styles.sendIcon)} />
      </div>
    </section>
  );
};