import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {auth} from './firebase/firebase.utils';
import Home from './pages/Home';
import Shop from './pages/Shop';
import './App.css';
import Header from './components/Header';
import SignInAndRegister from './pages/SignInAndRegister';

class App extends Component {
  state={
    currentUser:null
  }

  // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onauthstatechanged
  unsubscribeFromAuth=null;
  
  componentDidMount(){
    // open subscription
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
    });
  }

  // close subscription
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop/:id' component={Shop} />
          <Route path='/signin' component={SignInAndRegister} />
        </Switch>
      </div>
    );
  }
}

export default App;
