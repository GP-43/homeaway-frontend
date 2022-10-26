import React from "react";
import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import axios from "axios";

function SheduleCard(props) {
  const userDetails = JSON.parse(sessionStorage.getItem("accessToken"));
  const userId = userDetails.userId;

  const [isActive, setIsActive] = useState(false);

  const [cancelId, setCancelId] = useState();
  console.log("props", props);

  function handleClickCancel(id1) {
    setIsActive((current) => !current);
    const cancelIds = { Id1: id1 };

    //cancel the booking
    axios
      .put("http://localhost:4000/booking/cancelbooking/" + userId, cancelIds)
      .then(() => {
        console.log("Work--");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Card
      className="schedule-card ps-4 pb-2 pe-2 pt-2  mb-3"
      style={{
        display: isActive ? "none" : "",
      }}
    >
      <Col xs={3} className="m-auto ">
        {/* <Row className="m-auto schedule-card-text">
                   Booking no: {props.Title}
                </Row> */}
        <Row className="m-auto schedule-card-text">
          <b>Place:</b> {props.Place}
        </Row>
      </Col>
      <Col xs={5} className="m-auto schedule-card-text">
        <b>Date:</b> {props.From} to {props.To}
      </Col>
      <Col xs={4} className="m-auto schedule-card-cancel">
        <Button
          onClick={() => handleClickCancel(props.Title)}
          className="cancel-btn"
        >
          Cancel <FaTimes />
        </Button>
      </Col>
    </Card>
  );
}

export default SheduleCard;
