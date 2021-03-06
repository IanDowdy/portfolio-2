import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer'; 
import InterestCarousel from './components/InterestCarousel/InterestCarousel';
import Error from './components/Error/Error';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Navigation />
      </div>
    );
  }
}

export default App;
