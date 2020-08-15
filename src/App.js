import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import './App.css';
import Header from './components/Header';
import SignInAndRegister from './pages/SignInAndRegister';

function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignInAndRegister} />
      </Switch>
    </div>
  );
}

export default App;
