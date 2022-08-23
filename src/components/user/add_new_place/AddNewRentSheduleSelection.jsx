import React from "react";
import { Row, Col } from "react-bootstrap";
import { useState } from 'react';
import AddNewRentDateComponent from "./AddNewRentDateComponent";


function AddNewRentSheduleSelection() {


    

    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const date_array = [{ date: "20" }, { date: "21" }, { date: "22" }, { date: "23" }, { date: "24" }, { date: "25" }, { date: "26" }, { date: "27" }, { date: "28" }, { date: "29" }, { date: "30" }, { date: "01" }, { date: "02" }]

    return (
        <Row className="add-new-rent-shecule-selection">
            <h4>Plan</h4>
            <Row>
                <Col xs={2} > <input type="date" onChange={event => { setFromDate(event.target.value) }} /> </Col>
                <Col xs={1} > <p>to</p> </Col>
                <Col xs={2} > <input type="date" onChange={event => { setToDate(event.target.value) }} /> </Col>

                <Row className="add-new-rent-schecule-selection-data-row">
                    {date_array.map(i => <AddNewRentDateComponent date={i.date} />)}
                </Row>

                {console.log(fromDate, toDate)}
            </Row>
        </Row>



    )
}

export default AddNewRentSheduleSelection