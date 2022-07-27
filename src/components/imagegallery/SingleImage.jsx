import React from "react";
import { Col } from "react-bootstrap";

function singleimage(props) {
  return (
    <Col>
      <img
        className="single-image thumbnail"
        src={props.Src}
        height="100"
        width="100"
      />
    </Col>
  );
}

export default singleimage;
