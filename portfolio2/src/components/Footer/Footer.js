import { React, Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Container } from 'bootstrap';
import './Footer.css';

class AppFooter extends Component{
    render() {
        return(
            <div className="fixed-bottom">  
                <Navbar color="dark" dark>
                    <Container>
                        <NavbarBrand>Footer</NavbarBrand>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default AppFooter;