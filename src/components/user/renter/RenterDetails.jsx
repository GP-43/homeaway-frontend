import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import girl1 from "../../../assets/images/renters/girl1.jpg";
import { FaStar } from "react-icons/fa";

function RenterDetails() {
  return (
    <Row>
      <Col>
        <Card className="renter-card">
          <Card.Body className="renter-body">
            <Row className="md-2 renter-row">
              <Col className="renter-col text-center">
                <img className="renter-image" src={girl1} alt="girl1" />
                <Col className="renter-name pt-3">Ms.Senulya Wijewardhane</Col>
                <Col className="renter-rating">
                  <FaStar className="rating-icon" />
                  &nbsp;4.5
                </Col>
              </Col>
              <Col className="renter-col text-center">
                <Col className="renter-no"><p className="renter-no-box bg-white p-2">+94 71 *** *****</p></Col>
                <Col className="renter-message"><p className="bg-black renter-message-box">Message owner</p></Col>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default RenterDetails;
