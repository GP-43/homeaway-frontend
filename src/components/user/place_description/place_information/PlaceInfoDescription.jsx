import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function PlaceInfoDescription(props) {
  return (
    <Row>
      <Col xs={12} className="px-0">
        <h3>Description</h3>

        <Card className="place-information-description">
          <Card.Body>
            <Card.Text>{props.Description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default PlaceInfoDescription;
