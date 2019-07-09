import React from 'react';

import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About';

function App() {
  return (
    <Router basename='/'>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
