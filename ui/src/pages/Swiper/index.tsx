import gql from 'graphql-tag';
import * as React from 'react';

import { useStore } from '../../shared/components/Store';
import UserFragments from '../../shared/fragments/UserFragments';
import { $User } from '../../shared/types';
import { useQuery } from '../../shared/utils';
import { Picker } from './Picker';

const query = gql`
  query UsersLikeMe($kind: StonerKind!) {
    users(where: { kind: $kind }) {
      ...AllUser
    }
    ${UserFragments.all}
  }
`;

export default function SwiperContainer() {
  const {
    state: { user }
  } = useStore();
  // const { data: { users } = { users: [] } } = useQuery(query, {
  //   variables: { kind: store.state.user.kind }
  // });
  return <Picker user={user} />;
}
