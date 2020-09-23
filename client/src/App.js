import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { loadUser } from './redux/action/authAction';
import { setAuthToken } from './redux/utils/setAuthToken';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import './App.css';

const App = ({loadUser}) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <BrowserRouter>
      <Navbar />
      <main className='container'>
        <Alert />
        <Switch>
          <Route exact path='/my-account/login' component={Login} />
          <Route exact path='/my-account/register' component={Register} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default connect(null, { loadUser })(App);