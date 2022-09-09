import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import DatePickers from "./DatePickers";
import TimePickers from "./TimePickers";
import StripeCheckout from "react-stripe-checkout";

function MakeBooking() {
  function handleToken(token) {}

  return (
    <Row className="make-booking-card1 mx-5 px-3 mt-2 d-flex">
      <Col className="booking-col" xs lg="2">
        <div className="d-flex m-1 pb-1">
          <b className="text">Date:</b>
          <DatePickers className="date-component" value="" />
        </div>
        <div className="d-flex m-1 pb-1">
          <b className="text-time">Time:</b>
          <TimePickers />
        </div>
        <div className="mx-5 ps-4 mt-4">
          <h1 className="text-rent-fee">
            <b>LKR 12,500.00</b>
          </h1>
        </div>
      </Col>
      <Col className="booking-col" xs lg="2">
        <div className="d-flex m-1 pb-1">
          <b className="text">to:</b>
          <DatePickers className="date-component" value="" />
        </div>
        <div className="d-flex m-1 pb-1">
          <b className="text-time">to:</b>
          <TimePickers />
        </div>
        <div className="ms-5 ps-5 mt-4">
          {/* <Button >Pay Now</Button> */}
          <StripeCheckout
            className="dark button-pay-now btn-lg"
            stripeKey="pk_test_51LfqFUSIxyJCNgPZYTW7Jx2LYdeiO8R1R3Bv9Ks6U93UiEPBwWTW5Bf634oubEFbFt615IvxBWnUiUVLNwsHnsPP000Mh2B2BX"
            token={handleToken}
          />
        </div>
      </Col>
    </Row>
  );
}

export default MakeBooking;
