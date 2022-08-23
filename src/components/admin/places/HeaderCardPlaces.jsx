import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function HeaderCard() {
  return (
    <Card className="Header-card">
      <Col className="d-flex flex-row  Header-card-div">
        <a href="" className="Header-card-div-text ms-2 mt-2">
          <FaHome className="header-card-home-icon " size="lg" />
        </a>
        <h5 className="Header-card-div-text ">/</h5>
        <a href="" className="Header-card-div-text ">
          <h5 className="Header-card-div-text ms-0 mt-0">Places</h5>
        </a>
      </Col>
      <Row>
        <Col xs={10} className="Header-card-div">
          <h4 className="Header-card-div-text ">Places</h4>
        </Col>
        <Col xs={1} className="user-icon-box"><FaUserCircle className="user-icon" /></Col>
        <Col xs={1} className="admin-name">Admin</Col>
      </Row>
    </Card>
  );
}

export default HeaderCard;
