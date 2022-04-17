import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Customlink from '../../utilities/Customlink';

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className='py-2'>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Customlink to={'/'}>Home</Customlink>
                            <Customlink to={'/tour-packages'}>Tour Packages</Customlink>
                            <Customlink to={'/blog'}>Blog</Customlink>
                            <Customlink to={'/about'}>About</Customlink>

                        </Nav>
                        <Nav>
                            <NavDropdown title="Welcome, Arifuzzaman" id="collasible-nav-dropdown">
                               
                                <NavDropdown.Item href="#action/3.2">My Bookings</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;