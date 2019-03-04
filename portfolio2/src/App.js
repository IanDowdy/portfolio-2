import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar className="navbar" expand="md">
          <NavbarBrand href="/" className="name"><h3>Ian Dowdy</h3></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="navlink" href="/">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlink" href="/">Contact</NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        <div className="intro">
          <div className="container">
            <div className="row">
              <div className="col-8">col-8</div>
              <div className="col-4">col-4</div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
