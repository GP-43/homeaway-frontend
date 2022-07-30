import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/logo/logo.png';
import { BiUserCircle } from "react-icons/bi";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="navbar px-0 py-0">
      <Container className="px-0">
        <Navbar>
          <img className="logo" src={logo} alt="LOGO" />
        </Navbar>
        <Navbar>
          <Nav.Link className="nav me-auto" as={Link} to='/' >Home</Nav.Link>
          <Nav className="me-0 mt-0">
            <Nav.Link className="menu px-0" as={Link} to='/userbookings'>Bookings</Nav.Link>
            <NavDropdown title={<BiUserCircle className="biuser-circle" />}>
              <NavDropdown.Item className="mb-2" href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item className="mb-2" href="#action/3.2">
                Switch User
              </NavDropdown.Item>
              <NavDropdown.Divider />
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