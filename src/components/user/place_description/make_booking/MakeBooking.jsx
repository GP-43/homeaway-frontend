import React, {useEffect, useState} from "react";
import {Row, Col, Button} from "react-bootstrap";
import DatePickers from "./DatePickers";
import TimePickers from "./TimePickers";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

function MakeBooking(props) {
    function handleToken(token) {
        const bookingDetails = {
            "startDate": startDate,
            "endDate": endDate,
            "startTime": startTime,
            "endTime": endTIme,
            "occupantId": props.occupantId,
            "renterId": props.renterId,
            "placeId": props.placeId,
            "status": 1,
        };
        axios.post('http://localhost:4000/occupant/booking/', bookingDetails).then((response) => {
            console.log(response.data);
        });
    }

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [validateDate, setValidateDate] = useState(new Date());

    const [startTime, setStartTime] = useState(new Date());
    const [endTIme, setEndTIme] = useState(new Date());
    // const [needValidation, setNeedValidation] = useState(false);

    const handleOnStartDate = (date) => {
        setStartDate(date);
        if (props.priceType === "day") {
            const tempDate = date;
            tempDate.setDate(tempDate.getDate() + 1);
            setEndDate(tempDate);
        } else if (props.priceType === "week") {
            const tempDate = date;
            tempDate.setDate(tempDate.getDate() + 7);
            setEndDate(tempDate);
        } else {
            setStartDate(date);
        }
        setEndDate(date);
        setValidateDate(date);
    }

    const handleOnEndDate = (date) => {
        setStartDate(date);

    }

    Date.prototype.addHours= function(h){
        var copiedDate = new Date(this.getTime());
        copiedDate.setHours(copiedDate.getHours()+h);
        return copiedDate;
    }

    const handleOnStartTime = (time) => {
        //check for start end date\
        if (startDate.toLocaleDateString() == endDate.toLocaleDateString()) {
            setEndTIme(time.addHours(2))
        } else {
            setEndTIme(time);
        }
        setStartTime(time);
    }

    const handleOnEndTime = (time) => {
        setEndTIme(time);
    }

    return (
        <Row className="make-booking-card1 mx-5 px-3 mt-2 d-flex">
            <Col className="booking-col" xs lg="2">
                <div className="d-flex m-1 pb-1">
                    <b className="text">Date:</b>
                    <DatePickers className="date-component" findClickedDatePicker={1}
                                 handleOnDateDetails={handleOnStartDate} validateDate={validateDate}/>
                </div>
                <div className="d-flex m-1 pb-1">
                    <b className="text-time">Time:</b>
                    <TimePickers handleOnTime={handleOnStartTime}/>
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
                    <DatePickers className="date-component" findClickedDatePicker={2}
                                 handleOnDateDetails={handleOnEndDate} endDate={endDate} validateDate={validateDate}/>
                </div>
                <div className="d-flex m-1 pb-1">
                    <b className="text-time">to:</b>
                    <TimePickers handleOnTime={handleOnEndTime} endTime={endTIme}/>
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
