import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <main className='container'>
        <Route exact path='/my-account/login' component={Login} />
        <Route exact path='/my-account/register' component={Register} />
      </main>
    </BrowserRouter>
  );
}

export default App;