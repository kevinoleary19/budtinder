import { css, StyleSheet } from 'aphrodite';
import gql from 'graphql-tag';
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { withRouter } from 'react-router';

import Text, { Font } from '../../components/Text';
import { useStore } from '../../shared/components/Store';
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
    alignItems: 'center'
  },
  //
  text: {
    marginBottom: 40,
    fontSize: 24,
    textAlign: 'center',
    width: 260
  }
});

function HomeContainer({ history }) {
  const createUser = useMutation(CREATE_USER);
  const {
    actions: { setUser }
  } = useStore();
  return <Home setUser={setUser} push={history.push} createUser={createUser} />;
}
export default withRouter(HomeContainer);

function Home({ createUser, setUser, push }) {
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
          createUser({
            name: data.name,
            fbid: data.id,
            img: data.picture.data.url
          }).then(({ data: { upsertUser } }) => {
            setUser(upsertUser);
            push('/mood');
          });
        }}
      />
    </div>
  );
}
