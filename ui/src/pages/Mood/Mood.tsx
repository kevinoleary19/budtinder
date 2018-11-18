import { css } from 'aphrodite/no-important';
import { isTypeSystemExtensionNode } from 'graphql';
import gql from 'graphql-tag';
import * as React from 'react';
import { withRouter } from 'react-router-dom';

import Text, { Font } from '../../components/Text';
import moodData from '../../data/mood';
import { useStore } from '../../shared/components/Store';
import UserFragments from '../../shared/fragments/UserFragments';
import { useMutation } from '../../shared/utils';
import styles from './styles';

const mutation = gql`
  mutation settype($kind: StonerKind!, $id: ID!) {
    updateUser(where: { id: $id }, data: { id: $id }) {
      ...AllUser
    }
  }
  ${UserFragments.all}
`;

function MoodContainer({ history }) {
  const {
    state: { user }
  } = useStore();
  const setType = useMutation(mutation);
  return (
    <Mood
      onMoodSelect={kind => {
        setType({ id: user.id, kind });
        history.push('/swipe');
      }}
    />
  );
}
export default withRouter(MoodContainer);
function Mood({ onMoodSelect }) {
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
}
