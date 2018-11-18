import './App.css';
import './styleReset.css';

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import client from './apollo';
import Navbar from './components/Navbar';
import ChooseProductPage from './pages/ChooseProduct/ChooseProduct';
import Product from './pages/ChooseProduct/Product/Product';
import Home from './pages/Home';
import Mood from './pages/Mood/Mood';
import Swiper from './pages/Swiper';
import WeedType from './pages/WeedType/WeedType';
import Store from './shared/components/Store';

class App extends React.Component {
  render() {
    return (
      <React.Suspense fallback={() => 'loading...'}>
        <Store>
          <ApolloProvider client={client}>
            <ApolloHooksProvider client={client}>
              <Navbar />
              <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route
                    exact
                    path="/choose_product"
                    component={ChooseProductPage}
                  />
                  <Route exact path="/mood" component={Mood} />
                  <Route exact path="/weed_type" component={WeedType} />
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
