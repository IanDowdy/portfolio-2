import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import Navigation from './components/Navigation/Navigation';
import AppFooter from './components/Footer/Footer';
import Error from './components/Error/Error';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Navigation />
      <BrowserRouter>     
      <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route component={Error} />
      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
