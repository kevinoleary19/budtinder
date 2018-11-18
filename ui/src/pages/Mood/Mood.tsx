import { css } from 'aphrodite/no-important';
import * as React from 'react';
import styles from './styles';
import Text, { Font } from '../../components/Text';
import moodData from '../../data/mood';


export default function Mood ({
  onMoodSelect,
}) {
  return (
    <section className={css(styles.Mood)}>
      <Text font={Font.FuturaBold} extraStyles={[styles.header]}>
        What's your mood?
      </Text>
      {moodData.map(mood => (
        <div
          className={css(styles.card)}
          onClick={() => onMoodSelect(mood.identifier)}
        >
          <img src={mood.photo} className={css(styles.image)} />
          <Text extraStyles={[styles.cardText]} font={Font.ProximaNovaSemibold}>
            {mood.text}
          </Text>
        </div>
      ))}
    </section>
  );
};