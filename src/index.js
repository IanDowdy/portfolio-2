import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import Contact from './components/Contact/contact';
import Projects from './components/Projects/projects';

ReactDOM.render(
    <Router>
        <div>        
        <Route path="/" component={App} />
        <Route exact path="/" component={Home} />
        <Route path="contact" component={Contact} />
        <Route path="projects" component={Projects} />
        </div>
    </Router>
, document.getElementById('root'));
