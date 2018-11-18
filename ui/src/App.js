import './App.css';
import './styleReset.css';

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import client from './apollo';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ChooseProductPage from './pages/ChooseProduct/ChooseProduct';
import Mood from './pages/Mood/Mood';
import WeedType from './pages/WeedType/WeedType';
import budbud from './images/budbud.jpg';
import ChatPage from './pages/Chat/Chat';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoadingScreen: true,
    }
  }

  componentDidMount() {
    window.setTimeout(() => this.setState({ showLoadingScreen: false }), 1);
  }

  render() {
    const { showLoadingScreen } = this.state;

    if (showLoadingScreen) {
      return (
        <div className="LoadingScreen">
          <img alt="budbud" src={budbud} className="LoadingScreen__Image" />
        </div>
      );
    }

    return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <div className="App">
            <Navbar />
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/choose_product" component={ChooseProductPage} />
                <Route exact path="/mood" component={Mood} />
                <Route exact path="/weed_type" component={WeedType} />
                <Route exact path="/chat" component={ChatPage} />
              </Switch>
            </BrowserRouter>
          </div>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default App;
