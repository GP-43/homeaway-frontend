import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/images/logo/logo.png';
import { Link, useLocation } from "react-router-dom";

function AnonsNavBar() {

    const location = useLocation();
    const [url, setURL] = useState('');

    useEffect(() => {
        setURL(location.pathname);
    }, [location]);

    return (
        <Navbar expand="lg" className="anon-navbar px-0 py-0">
            <Container className="px-0">
                <Navbar>
                    <img className="logo" src={logo} alt="LOGO" />
                </Navbar>
                <Navbar>
                    <Nav className="me-0 mt-0">
                        <Nav.Link as={Link} to='/anon/'><span className={url === '/anon/' ? 'nav-bar-item-active' : 'nav-bar-item'}>Home</span></Nav.Link>

                        <Nav.Link as={Link} to='/anon/about'><span className={url === '/anon/about' ? 'nav-bar-item-active' : 'nav-bar-item'}>About</span></Nav.Link>

                        <Nav.Link as={Link} to='/anon/faq'><span className={url === '/anon/about' ? 'nav-bar-item-active' : 'nav-bar-item'}>FAQ</span></Nav.Link>

                        <Nav.Link as={Link} to='/anon/login'><span className={url === '/anon/login' ? 'nav-bar-item-active' : 'nav-bar-item login'}>Login</span></Nav.Link>

                        <Nav.Link as={Link} to='/anon/signup'><span className={url === '/anon/signup' ? 'nav-bar-item-active' : 'nav-bar-item signup px-4 py-1'}>Sign up</span></Nav.Link>

                    </Nav>
                </Navbar>
            </Container>
        </Navbar>
    );
}

export default AnonsNavBar;
