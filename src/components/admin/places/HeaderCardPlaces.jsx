import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { FiLogOut } from "react-icons/fi";

function HeaderCard() {
  const handleOnLogoClick = () => {
    window.location.replace("/");
    sessionStorage.removeItem("accessToken");
  }

  return (
    <Card className="Header-card">
      <Col className="d-flex flex-row  Header-card-div">
        <a href="" className="Header-card-div-text ms-2 mt-2">
          <FaHome className="header-card-home-icon " size="lg" />
        </a>
        <h6 className="Header-card-div-text ">/</h6>
        <a href="" className="Header-card-div-text ">
          <h6 className="Header-card-div-text ms-0 mt-0">Places</h6>
        </a>
      </Col>
      <Row>
        <Col xs={10} className="Header-card-div">
          <h4 className="Header-card-div-text ">Places</h4>
        </Col>
        <Col xs={1} className="user-icon-box"><FiLogOut className="user-icon" /></Col>
        <Col xs={1} className="admin-name"><Button className='bg-transparent border-0 py-0'
          onClick={handleOnLogoClick}>Logout</Button></Col>
      </Row>
    </Card>
  );
}

export default HeaderCard;
