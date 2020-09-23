import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';

const App = () => {

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

export default App;