import React, {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/images/logo/logo.png';
import {Link, useLocation} from "react-router-dom";

function AnonsNavBar() {

    const location = useLocation();
    const [url, setURL] = useState('');

    useEffect(() => {
        setURL(location.pathname);
    }, [location]);

    return (
        <Navbar collapseOnSelect expand="lg" className={url === '/' ? 'anon-navbar px-0 py-0 position-fixed' : 'anon-navbar px-0 py-0 position-static' }>
            <Container className="px-0">
                <img className="logo" src={logo} alt="LOGO"/>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse className="navbar-coll " id="responsive-navbar-nav">
                    <Nav className="me-0 mt-0">
                        <Nav.Link as={Link} to='/'>
                            <span className={url === '/anon/' ? 'nav-bar-item-active me-2' : 'nav-bar-item mt-1'}>
                                Home
                            </span>
                        </Nav.Link>

                        <Nav.Link as={Link} to='/about'>
                            <span className={url === '/anon/about' ? 'nav-bar-item-active' : 'nav-bar-item mt-1'}>
                                About
                            </span>
                        </Nav.Link>

                        <Nav.Link as={Link} to='/faq'>
                            <span className={url === '/anon/about' ? 'nav-bar-item-active' : 'nav-bar-item mt-1'}>
                                FAQ
                            </span>
                        </Nav.Link>

                        <Nav.Link as={Link} to='/login'>
                            <span className={url === '/anon/login' ? 'nav-bar-item-active' : 'nav-bar-item login mt-1'}>
                                Login
                            </span>
                        </Nav.Link>

                        <Nav.Link as={Link} to='/signup'>
                            <span
                                className={url === '/anon/signup' ? 'nav-bar-item-active' : 'nav-bar-item signup px-3 pt-1 pb-2'}>
                                Sign up
                            </span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AnonsNavBar;
