import * as React from 'react';

import { $User, StonerKind } from '../types';

interface $State {
  user: $User;
}

const initialState: $State = {
  user: {
    name: 'James McNamara',
    id: 'cjolz7l0xdjzt0a64vwrp29pg',
    img:
      'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10213231295649510&width=200&ext=1545082823&hash=AeRxlSHOH8zijEPx',
    fbid: '10213231295649510',
    kind: StonerKind.ACTIVE
  }
};

const State = React.createContext<{ state: $State; actions: $Actions }>({
  state: initialState,
  // @ts-ignore
  actions: {}
});

export function useStore() {
  const store: $Store = React.useContext(State);
  return store;
}
interface $Store {
  state: $State;
  actions: $Actions;
}
interface $Props {
  children: any;
}

interface $Actions {
  setUser(user: $User): void;
  setMood(string: string): void;
}

export default class Store extends React.Component<$Props, $State> {
  state = initialState;
  actions: $Actions = {
    setUser: user => {
      this.setState({ user });
    },
    setMood: kind => {
      // @ts-ignore
      this.setState({ user: { ...this.state.user, kind } });
    }
  };

  render() {
    return (
      <State.Provider value={{ state: this.state, actions: this.actions }}>
        {this.props.children}
      </State.Provider>
    );
  }
}
