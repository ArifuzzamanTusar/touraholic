import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Customlink from '../../utilities/Customlink';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const username = user?.displayName;

    const handleSignOut = () => {
        signOut(auth);
    }
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
                            {
                                user ?
                                    <NavDropdown title={username ? username : "Welcome!"} id="collasible-nav-dropdown">

                                        <NavDropdown.Item href="#action/3.2">My Bookings</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        
                                        <div onClick={() => handleSignOut()} className="dropdown-item">Log Out</div>
                                    </NavDropdown>
                                    :
                                    <Customlink to={'/login'}>Login</Customlink>

                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;