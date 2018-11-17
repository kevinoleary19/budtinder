import './App.css';

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import client from './apollo';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Product from './pages/ChooseProduct/Product/Product';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Navbar />
        <ApolloHooksProvider client={client}>
          <BrowserRouter>
            <Switch>
              <Route exact path="" component={Home} />
              <Route exact path="/choose_product" component={Product} />
            </Switch>
          </BrowserRouter>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default App;
