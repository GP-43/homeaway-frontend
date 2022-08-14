import React from "react";
import { Card, Col } from "react-bootstrap";

function LatestPlaceCard(props) {
  return (
    <Col className="latest-card-cover px-lg-4 py-lg-3 px-md-2 py-md-2">
      <Card className="latest-place-card">
        <img
          className="d-block gallery-image latest-place-image"
          src={props.src}
          alt="place card"
        />
        <Card.Body className="text">
          <Card.Text className="description">{props.description}</Card.Text>
          <Card.Text className="date">{props.date}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default LatestPlaceCard;
