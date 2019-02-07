import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './Nav';

import Home from './Home';
import About from './About';
import Contact from './Contact';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Router>
          <div>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
