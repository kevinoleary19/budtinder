import { css } from 'aphrodite/no-important';
import * as React from 'react';

import Text, { Font } from '../../../components/Text';
import styles from './styles';

export default function Product({
  name,
  type,
  isChosen,
  description,
  species,
  cbd,
  thc,
  onProductSelect,
  photo
}: any) {
  return (
    <section
      className={css(styles.Product, isChosen && styles.ProductChosen)}
      onClick={() => {}}
    >
      <div className={css(styles.imageWrapper)}>
        <img src={photo} className={css(styles.image)} />
      </div>
      <Text font={Font.ProximaNovaBold} extraStyles={[styles.matchText]}>
        95% match
      </Text>
      <Text font={Font.FuturaBold} extraStyles={[styles.title]}>
        {name}
      </Text>
      <Text font={Font.ProximaNovaRegular} extraStyles={[styles.description]}>
        {description}
      </Text>
    </section>
  );
}
