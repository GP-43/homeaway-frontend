import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/logo/logo.png';
import { BiUserCircle } from "react-icons/bi";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="navbar py-0">
      <Container className="con">
        <Navbar.Brand href="#home">
          <img className="logo " src={logo} alt="First slide" />
        </Navbar.Brand>
        <Navbar>
          <Nav className="me-auto nav">
            <Nav.Link className="menu" href="#home">Home</Nav.Link>
            <Nav.Link className="menu" href="#link">Bookings</Nav.Link>
            <NavDropdown title={<BiUserCircle className="biuser-circle"/>}>
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