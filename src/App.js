import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userActions';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/userSelectors';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import SignInAndRegister from './pages/SignInAndRegister';
import Header from './components/Header';
import './App.css';

class App extends Component {
  // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onauthstatechanged
  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;
    // open subscription - user(parameter) is the current user
    // persists until user logs out
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });

      } else {
        // if user logs out
        setCurrentUser(userAuth)
      }
    });
  }

  // close subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/checkout' component={Checkout} />
          <Route
            exact path='/signin'
            render={() => this.props.currentUser
              ? <Redirect to="/" />
              : <SignInAndRegister />
            } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);