import React from "react";
import { Col, Row } from "react-bootstrap";
import PlaceCard from "../PlaceCard.jsx";

function PlaceSection() {
  return (
    <Row>
      <Col>
        <PlaceCard />
      </Col>
    </Row>
  );
}

export default PlaceSection;
