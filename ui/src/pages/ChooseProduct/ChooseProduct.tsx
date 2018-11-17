import { css } from 'aphrodite/no-important';
import * as React from 'react';
import styles from './styles';
import data from '../../data/data.pretty.json';
import { serializeData } from '../../shared/utils';
import Product from './Product/Product';
import Text, { Font } from '../../components/Text';

export default function ChooseProductPage () {
  const finalData = serializeData(data);

  return (
    <section className={css(styles.ChooseProductPage)}>
      <div className={css(styles.topSection)}>
        <Text font={Font.ProximaNovaSemibold} extraStyles={[styles.directionText]}>
          Choose a product. We’ll match you based on your choice.
        </Text>
        <div className={css(styles.button)}>
          <Text font={Font.FuturaBold} extraStyles={[styles.buttonText]}>
            Next
          </Text>
        </div>
      </div>
      <div className={css(styles.bottomSection)}>
        <Text font={Font.FuturaBold} extraStyles={[styles.subheader]}>
          Your Recommended Products
        </Text>
        {finalData.map(product => (
          <div className={css(styles.productWrapper)}>
            <Product {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};