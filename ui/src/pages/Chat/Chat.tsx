import { css } from 'aphrodite/no-important';
import * as React from 'react';
import styles from './styles';
import sendIcon from '../../images/send.png';

export default function ChatPage ({  }) {
  return (
    <section className={css(styles.ChatPage)}>
      <div className={css(styles.chatSection)}>
        <div className={css(styles.inputContainer)}>
          <input className={css(styles.input)} />
          <img src={sendIcon} className={css(styles.sendIcon)} />
        </div>
      </div>
    </section>
  );
};