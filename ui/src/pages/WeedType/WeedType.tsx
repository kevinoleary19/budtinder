import { css } from 'aphrodite/no-important';
import * as React from 'react';
import styles from './styles';
import Text, { Font } from '../../components/Text';
import weedTypeData from '../../data/weedType';


export default function WeedType ({
  onWeedTypeSelect,
}) {
  return (
    <section className={css(styles.Mood)}>
      <Text font={Font.FuturaBold} extraStyles={[styles.header]}>
        Whatcha like?
      </Text>
      {weedTypeData.map(weedType => (
        <div
          className={css(styles.card)}
          onClick={() => onWeedTypeSelect(weedType.identifier)}
        >
          <img src={weedType.photo} className={css(styles.image)} />
          <Text extraStyles={[styles.cardText]} font={Font.ProximaNovaSemibold}>
            {weedType.text}
          </Text>
        </div>
      ))}
    </section>
  );
};