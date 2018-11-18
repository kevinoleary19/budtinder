import gql from 'graphql-tag';
import * as React from 'react';

import { useStore } from '../../shared/components/Store';
import UserFragments from '../../shared/fragments/UserFragments';
import { $User } from '../../shared/types';
import { useQuery } from '../../shared/utils';
import { Picker } from './Picker';

const query = gql`
  query UsersLikeMe {
    users {
      ...AllUser
    }
  }
  ${UserFragments.all}
`;

function mod(n, m) {
  return ((n % m) + m) % m;
}

export default function SwiperContainer() {
  const {
    state: { user }
  } = useStore();
  const { data: { users } = { users: [] } } = useQuery(query, {
    variables: { kind: user.kind }
  });
  const [idx, setIdx] = React.useState(0);
  return (
    <Picker
      user={users[idx]}
      swipeLeft={() => {
        setIdx(mod(idx - 1, users.length));
      }}
      swipeRight={() => {
        setIdx(mod(idx + 1, users.length));
      }}
    />
  );
}
