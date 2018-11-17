import * as React from 'react';

import { $User, StonerKind } from '../types';

const initialState: $State = {
  user: {
    name: 'James McNamara',
    id: 'cjolz7l0xdjzt0a64vwrp29pg',
    img:
      'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10213231295649510&width=200&ext=1545082823&hash=AeRxlSHOH8zijEPx',
    fbid: '10213231295649510',
    kind: StonerKind.ACTIVE
  },
  i: 0
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
interface $State {
  user: $User;
  i: number;
}
interface $Props {
  children: any;
}

interface $Actions {
  inc(): void;
  setUser(user: $User): void;
}

export default class Store extends React.Component<$Props, $State> {
  state = initialState;
  actions: $Actions = {
    inc: () => {
      this.setState({ i: this.state.i + 1 });
    },
    setUser: user => {
      this.setState({ user });
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
