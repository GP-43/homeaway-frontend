import React, {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../../assets/images/logo/logo.png';
import {BiUserCircle} from "react-icons/bi";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

function NavBar() {

    const location = useLocation();
    const [url, setURL] = useState('');

    useEffect(() => {
        setURL(location.pathname);
    }, [location]);

    const [isRenter, setIsRenter] = useState(true);

    const handleOnSwitchUserClick = () => {
        if (isRenter) {
            setIsRenter(false)
        } else {
            setIsRenter(true)
        }
    }

    const navigate = useNavigate();

    const handleOnLogoClick = () => {
        window.location.replace("/");
        sessionStorage.removeItem("accessToken");
    }

    useEffect(() => {
        if (url === '/user' | url === '/user/userbookings') {
            setIsRenter(false);
        } else {
            setIsRenter(true);
        }
    }, [url]);

    return (
        <Navbar expand="lg" className="user-navbar px-0 py-0">
            <Container className="px-0">
                <Navbar>
                    <img className="logo" src={logo} alt="LOGO" onClick={handleOnLogoClick}/>
                </Navbar>
                <Navbar>
                    <Nav className="me-0 mt-0">
                        <Nav.Link as={Link} to='/user' className={isRenter ? 'd-none' : 'd-block'}>
                            <span className={url === '/user' ? 'nav-bar-item-active' : 'nav-bar-item'}>Home</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/user/userbookings' className={isRenter ? 'd-none' : 'd-block'}>
                            <span
                                className={url === '/user/userbookings' ? 'nav-bar-item-active' : 'nav-bar-item'}
                            >Bookings
                            </span>
                        </Nav.Link>

                        <Nav.Link as={Link} to='/user/userrentings' className={isRenter ? 'd-block' : 'd-none'}>
                            <span
                                className={url === '/user/userrentings' ? 'nav-bar-item-active' : 'nav-bar-item'}
                            >Rentings
                            </span>
                        </Nav.Link>

                        <Nav.Link as={Link} to='/user/newrent' className={isRenter ? 'd-block' : 'd-none'}>
                            <span
                                className={url === '/user/newrent' ? 'nav-bar-item-active' : 'nav-bar-item'}
                            >New Rent
                            </span>
                        </Nav.Link>
                        <NavDropdown title={<BiUserCircle className="user-circle"/>}>
                            <NavDropdown.Item className="mb-2" href="#action/3.1">Profile</NavDropdown.Item>
                            <NavDropdown.Item className={isRenter ? 'mb-2 d-none' : 'mb-2 d-block'}
                                              href='/user/userrentings'>
                                <Button className='bg-transparent border-0 text-dark px-0'
                                        onClick={handleOnSwitchUserClick}> Switch User</Button>
                            </NavDropdown.Item>
                            <NavDropdown.Item className={isRenter ? 'mb-2 d-block' : 'mb-2 d-none'} href='/user'>
                                <Button className='bg-transparent border-0 text-dark px-0'
                                        onClick={handleOnSwitchUserClick}> Switch User</Button>
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item className="mb-1" onClick={handleOnLogoClick}>
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