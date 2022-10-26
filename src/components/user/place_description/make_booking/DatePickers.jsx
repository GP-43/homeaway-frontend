import React, {useEffect, useState} from "react";
import {Row, Col} from "react-bootstrap";
import {BsFillCalendarEventFill} from 'react-icons/bs';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {addDays} from "date-fns";

function DatePickers(props) {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        if(props.endDate) {
            setDate(props.endDate)
        }
    },[props.endDate])

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
                    selected={date}
                    minDate={props.validateDate}
                    maxDate={addDays(props.validateDate, 75)}
                    onChange={(date)=>{
                        props.handleOnDateDetails(new Date(date))
                        setDate(new Date(date))
                    }}
                />
            </Col>
        </Row>
    );
}

export default DatePickers;