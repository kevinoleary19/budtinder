import './App.css';

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { BrowserRouter, Route } from 'react-router-dom';

import client from './apollo';
import Home from './pages/Home';
import Navbar from './components/Navbar';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        NavBar
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
