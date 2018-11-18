import gql from 'graphql-tag';
import React from 'react';
import FacebookLogin from 'react-facebook-login';

import { css, StyleSheet } from 'aphrodite';
import Text, { Font } from '../../components/Text';
import { useMutation } from '../../shared/utils';

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $img: String!, $fbid: String!) {
    upsertUser(
      where: { fbid: $fbid }
      create: { name: $name, fbid: $fbid, img: $img }
      update: {}
    ) {
      id
      img
      name
    }
  }
`;

const styles = StyleSheet.create({
  HomePage: {
    width: '100vw',
    height: 'calc(100vh - 44px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //
  text: {
    marginBottom: 40,
    fontSize: 24,
    textAlign: 'center',
    width: 260,
  },
});

export default function HomeContainer() {
  const createUser = useMutation(CREATE_USER);
  return <Home createUser={createUser} />;
}

function Home({ createUser }) {
  return (
    <div className={css(styles.HomePage)}>
      <Text font={Font.FuturaBold} extraStyles={[styles.text]}>
        First things first...
      </Text>
      <FacebookLogin
        appId="318588122309975"
        autoLoad={true}
        fields="name,id,picture.width(200)"
        callback={data => {
          console.log('data is ', data);
          createUser({
            name: data.name,
            fbid: data.id,
            img: data.picture.data.url
          });
        }}
      />
    </div>
  );
}
