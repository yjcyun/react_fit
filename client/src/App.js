import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import LoginRegister from './components/auth/LoginRegister';
import Navbar from './components/layout/Navbar';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/my-account' component={LoginRegister}/>
    </BrowserRouter>
  );
}

export default App;