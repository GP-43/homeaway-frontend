import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
//import DatePickers from "./DatePickers";
//import TimePickers from "./TimePickers";
import StripeCheckout from "react-stripe-checkout";
import DatePicker from "react-datepicker";
import { BsFillCalendarEventFill } from 'react-icons/bs';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

function MakeBooking() {

  const userDetails = JSON.parse(sessionStorage.getItem("accessToken"));
  const userId = userDetails.userId;

  function handleToken(token) { }

  const [startHour, setStartHour] = useState("");
  const [startMin, setStartMin] = useState("");
  const [endHour, setEndHour] = useState("");
  const [endMin, setEndMin] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());


  const DateOption = {
    StartDate: startDate,
    EndDate: endDate,
    StartHour: startHour,
    StartMin: startMin,
    EndHour: endHour,
    EndMin: endMin,
  }

  console.log(DateOption.StartHour);
  console.log(DateOption.StartMin);
  console.log(DateOption.EndHour);
  console.log(DateOption.EndMin);
  // console.log(DateOption.EndDate);

  function StartDatePickers() {

    console.log(startDate);

    return (
      <Row className="date-card bg-white p-1">
        <Col className="date-icon-col p-0 mx-2 bg-white">
          <BsFillCalendarEventFill
            className="date-icon m-2 bg-white"
          />
        </Col>
        <Col className="date-datepicker-col px-0 me-2 bg-white">
          <DatePicker
            className="datePicker m-2 bg-white"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </Col>
      </Row>
    );
  }

  function EndDatePickers() {

    console.log(endDate);

    return (
      <Row className="date-card bg-white p-1">
        <Col className="date-icon-col p-0 mx-2 bg-white">
          <BsFillCalendarEventFill
            className="date-icon m-2 bg-white"
          />
        </Col>
        <Col className="date-datepicker-col px-0 me-2 bg-white">
          <DatePicker
            className="datePicker m-2 bg-white"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </Col>
      </Row>
    );
  }

  function StartTimePickers() {

    return (
      <Form className="bg-white time-picker">
        <Row className="bg-white time-base m-2 d-flex">
          <div className="time-box-1 mt-1 p-0">
            <input type="text" id="hours" className="time-input" placeholder="00" value={startHour}
              onChange={(e) => setStartHour(e.target.value)} ></input>
          </div>
          <span className="time-input-span bg-white px-0"><p className="time-input-span-text bg-white">Hours</p></span>

          <div className="time-dots px-3 mx-3"><h4 className="time-dots-h4 bg-white mt-0 px-0">:</h4></div>

          <div className="time-box-1 mt-1 px-0">
            <input type="text" id="minutes" className="time-input" placeholder="00" value={startMin}
              onChange={(e) => setStartMin(e.target.value)} ></input>
          </div>
          <span className="time-input-span bg-white p-0"><p className="time-input-span-text bg-white">Minutes</p></span>

          <div className="time-button-div px-3 mx-3 mt-1">
            <Button className="time-button am" id="am"><p className="button-name">AM</p></Button>
            <Button className="time-button pm" id="pm"><p className="button-name">PM</p></Button>
          </div>
        </Row>
      </Form>
    );
  }

  function EndTimePickers() {

    return (
      <Form className="bg-white time-picker">
        <Row className="bg-white time-base m-2 d-flex">
          <div className="time-box-1 mt-1 p-0">
            <input type="text" id="hours" className="time-input" placeholder="00" value={endHour}
              onChange={(e) => setEndHour(e.target.value)} ></input>
          </div>
          <span className="time-input-span bg-white px-0"><p className="time-input-span-text bg-white">Hours</p></span>

          <div className="time-dots px-3 mx-3"><h4 className="time-dots-h4 bg-white mt-0 px-0">:</h4></div>

          <div className="time-box-1 mt-1 px-0">
            <input type="text" id="minutes" className="time-input" placeholder="00" value={endMin}
              onChange={(e) => setEndMin(e.target.value)} ></input>
          </div>
          <span className="time-input-span bg-white p-0"><p className="time-input-span-text bg-white">Minutes</p></span>

          <div className="time-button-div px-3 mx-3 mt-1">
            <Button className="time-button am" id="am"><p className="button-name">AM</p></Button>
            <Button className="time-button pm" id="pm"><p className="button-name">PM</p></Button>
          </div>
        </Row>
      </Form>
    );
  }


  const handleOnSubmit = (event) => {
    axios
      .post("http://localhost:4000/occupant/makebooking/" + userId, DateOption)
      .then((response) => {
        console.log("it worked");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect((event) => {
    handleOnSubmit();
  });

  return (
    <Row className="make-booking-card1 mx-5 px-3 mt-2 d-flex">
      <Col className="booking-col" xs lg="2">
        <div className="d-flex m-1 pb-1">
          <b className="text">Date:</b>
          <StartDatePickers
          // className="date-component" value={startDate}
          //   onChange={(e) => setStartDate(e.value)} 
          />
        </div>
        <div className="d-flex m-1 pb-1">
          <b className="text-time">Time:</b>
          <StartTimePickers
          // value={startTime}
          //   onChange={(e) => setStartTime(e.target.value)} 
          />
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
          <EndDatePickers
          // className="date-component" value={endDate}
          //   onChange={(e) => setEndDate(e.target.value)} 
          />
        </div>
        <div className="d-flex m-1 pb-1">
          <b className="text-time">to:</b>
          <EndTimePickers
          // value={endTime}
          //   onChange={(e) => setEndTime(e.target.value)} 
          />
        </div>
        <div className="ms-5 ps-5 mt-4">
          {/* <Button >Pay Now</Button> */}
          <StripeCheckout onSubmit={handleOnSubmit}
            className="dark button-pay-now btn-lg" type="submit"
            stripeKey="pk_test_51LfqFUSIxyJCNgPZYTW7Jx2LYdeiO8R1R3Bv9Ks6U93UiEPBwWTW5Bf634oubEFbFt615IvxBWnUiUVLNwsHnsPP000Mh2B2BX"
            token={handleToken}
          />
        </div>
      </Col>
    </Row>
  );
}

export default MakeBooking;
