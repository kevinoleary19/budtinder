import gql from 'graphql-tag';
import * as React from 'react';
import { Subscription } from 'react-apollo';

import { useStore } from '../../shared/components/Store';
import UserFragments from '../../shared/fragments/UserFragments';
import { $User } from '../../shared/types';
import { useMutation, useQuery } from '../../shared/utils';
import { Picker } from './Picker';

const query = gql`
  query UsersLikeMe {
    users {
      ...AllUser
    }
  }
  ${UserFragments.all}
`;

const SAY_YES = gql`
  mutation sayYes($from: ID!, $to: ID!) {
    createSayYes(data: { from: $from, to: $to }) {
      ...AllUser
    }
  }
  ${UserFragments.all}
`;

const subscription = gql`
  subscription SaidYes($id: ID!) {
    saidYes(where: { node: { to: $id } }) {
      node {
        ...allUser
      }
    }
  }
  ${UserFragments.all}
`;

function mod(n, m) {
  return ((n % m) + m) % m;
}

export default function SwiperContainer() {
  const {
    state: { user: currentUser }
  } = useStore();
  const sayYes = useMutation(SAY_YES);
  const { data: { users } = { users: [] } } = useQuery(query, {
    variables: { kind: currentUser.kind }
  });
  const [idx, setIdx] = React.useState(0);
  const [yeses, setYeses] = React.useState([] as string[]);
  return (
    <Subscription subscription={subscription}>
      {_ => (
        <Picker
          user={users[idx]}
          swipeLeft={() => {
            setIdx(mod(idx - 1, users.length));
          }}
          swipeRight={(user: $User) => {
            setYeses(yeses.concat(user.id));
            sayYes({ from: currentUser.id, to: user.id });
            setIdx(mod(idx + 1, users.length));
          }}
        />
      )}
    </Subscription>
  );
}
