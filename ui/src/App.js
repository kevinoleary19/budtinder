import './App.css';

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import client from './apollo';
import Navbar from './components/Navbar';
import Product from './pages/ChooseProduct/Product/Product';
import Home from './pages/Home';
import Swiper from './pages/Swiper';
import Store from './shared/components/Store';

class App extends React.Component {
  render() {
    return (
      <React.Suspense>
        <Store>
          <ApolloProvider client={client}>
            <Navbar />
            <ApolloHooksProvider client={client}>
              <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/choose_product" component={Product} />
                  <Route exact path="/swipe" component={Swiper} />
                </Switch>
              </BrowserRouter>
            </ApolloHooksProvider>
          </ApolloProvider>
        </Store>
      </React.Suspense>
    );
  }
}

export default App;
