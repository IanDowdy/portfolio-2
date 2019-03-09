import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Navigation.css';

const Navigation = () => {

    return (
           <div className="App">
        <Navbar className="navbar" expand="md">
          <NavbarBrand href="/" className="name"><h3>Ian Dowdy</h3></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="navlink" href="/projects"><h2>Projects</h2></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlink" href="/contact"><h2>Contact</h2></NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        </div>
    )

}

export default Navigation