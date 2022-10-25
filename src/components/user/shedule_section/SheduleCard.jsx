import React from "react";
import { useState } from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import axios from "axios";

function SheduleCard(props) {

    const userDetails = JSON.parse(sessionStorage.getItem("accessToken"));
    const userId = userDetails.userId;
    const [status, setStatus] = useState(0);

    const cancelthebooking = {
        changestatus: 0,
      };

    const handleClick = async () => {

        //cancel the booking
        axios
          .post(
            "http://localhost:4000/booking/cancelbooking/" + userId,
            cancelthebooking
          )
          .then(() => {
            console.log("Work");
          })
          .catch((error) => {
            console.log(error);
          });
      };

    return (
        <Card className="schedule-card ps-4 pb-2 pe-2 pt-2  mb-3">

            <Col xs={3} className="m-auto ">
                {/* <Row className="m-auto schedule-card-text">
                   Booking no: {props.Title}
                </Row> */}
                <Row className="m-auto schedule-card-text">
                  Place:  {props.Place}
                </Row>
            </Col>
            <Col xs={5} className="m-auto schedule-card-text">
               Date: {props.From} to {props.To}
            </Col>
            <Col xs={4} className="m-auto schedule-card-cancel">
               <Button onclick={handleClick} className="cancel-btn">Cancel <FaTimes /></Button>
            </Col>
        </Card>

    );
}

export default SheduleCard;