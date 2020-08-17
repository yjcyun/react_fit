import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import Home from './pages/Home';
import Shop from './pages/Shop';
import './App.css';
import Header from './components/Header';
import SignInAndRegister from './pages/SignInAndRegister';

class App extends Component {
  state = {
    currentUser: null
  };

  // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onauthstatechanged
  unsubscribeFromAuth = null;

  componentDidMount() {
    // open subscription - user(parameter) is the current user
    // persists until user logs out
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user)
    });
  }

  // close subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignInAndRegister} />
        </Switch>
      </div>
    );
  }
}

export default App;