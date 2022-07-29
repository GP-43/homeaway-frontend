import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PlaceDetails from "../../components/place_description/PlaceDetails";
import RenterDetails from "../../components/renter/RenterDetails";

function PlaceDescription() {
  return (
    <Container>
      <Row>
        <Col>gallery</Col>
        <Col><RenterDetails /></Col>
      </Row>
      <Row className="mx-0 mt-2">
        <Col lg={6}>
          <PlaceDetails />
        </Col>
        <Col lg={6}>{/* <PlaceDetails /> */}</Col>
      </Row>
    </Container>
  );
}

export default PlaceDescription;
