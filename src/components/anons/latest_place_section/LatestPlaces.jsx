import React from "react";
import LatestPlaceTitle from "./LatestPlaceTitle";
import { Row, Col } from "react-bootstrap";
import LatestPlacesCardSection from "./LatestPlacesCardSection";

function LatestPlaces() {
  return (
    <Row className="mx-0 latest-place">
      <Col xs={12}>
        <LatestPlaceTitle />
      </Col>
      <Col xs={12}>
        <LatestPlacesCardSection/>
      </Col>
    </Row>
  );
}

export default LatestPlaces;
