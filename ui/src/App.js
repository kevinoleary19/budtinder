import './App.css';

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';

import client from './apollo';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Route exact path="" component={Home} />
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
