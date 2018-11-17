import './App.css';

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { BrowserRouter, Route } from 'react-router-dom';

import client from './apollo';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <BrowserRouter>
            <Route exact path="" component={Home} />
          </BrowserRouter>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default App;
