import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import picOfMe from './assets/pictures/me.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar className="navbar" expand="md">
          <NavbarBrand href="/" className="name"><h3>Ian Dowdy</h3></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="navlink" href="/"><h2>Projects</h2></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlink" href="/"><h2>Contact</h2></NavLink>
            </NavItem>
          </Nav>
        </Navbar>


        <div className="container">
          <div className="intro">
            <div className="row">
              <div className="col-12"><h1>Hello! :)</h1></div>
            </div>
            <div className="row">
              <div className="col-12"><br /></div>
            </div>
            <div className="row">
              <div className="col-8"><span>My name is Ian, annihilator of pizza, father to the most adorable cat of all time, lover of irreverent comedies, anime, video games and Basketball (Go Spurs Go!).</span>
                <br /><br />
                <span>I am a passionate learner, keen on embracing this new fervor to understand as much about the world of web development as I possibly can.</span>
                <br /><br />
              </div>
              <div className="col-4"><img src={picOfMe} className="img-fluid" alt="" /></div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
