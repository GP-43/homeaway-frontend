import React, {useEffect, useState}  from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../../assets/images/logo/logo.png';
import {BiUserCircle} from "react-icons/bi";
import {Link, useLocation} from "react-router-dom";

function NavBar() {

    const location = useLocation();
    const [url, setURL] = useState('');

    useEffect(() => {
        setURL(location.pathname);
    }, [location]);

    return (
        <Navbar bg="light" expand="lg" className="navbar px-0 py-0">
            <Container className="px-0">
                <Navbar>
                    <img className="logo" src={logo} alt="LOGO"/>
                </Navbar>
                <Navbar>
                    <Nav className="me-0 mt-0">
                        <Nav.Link as={Link} to='/user/'><span className={url === '/user/' ? 'nav-bar-item-active' : 'nav-bar-item'}>Home</span></Nav.Link>
                        <Nav.Link as={Link} to='/user/userbookings'><span className={url === '/user/userbookings' ? 'nav-bar-item-active' : 'nav-bar-item'}>Bookings</span></Nav.Link>
                        <NavDropdown title={<BiUserCircle className="user-circle"/>}>
                            <NavDropdown.Item className="mb-2" href="#action/3.1">Profile</NavDropdown.Item>
                            <NavDropdown.Item className="mb-2" href="#action/3.2">
                                Switch User
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item className="mb-1" href="#action/3.3">
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </Container>
        </Navbar>
    );
}

export default NavBar;