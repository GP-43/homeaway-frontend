import React, {useState} from "react";
import {Row, Form,Col} from "react-bootstrap";
//import TimePicker from 'react-time-picker';
import {BsFillCalendarEventFill} from 'react-icons/bs';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePickers() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        
            
                <Row className="date-card bg-white p-1"> 
                    <Col className="date-icon-col p-0 mx-2 bg-white"><BsFillCalendarEventFill className="date-icon m-2 bg-white"/></Col>
                    <Col className="date-datepicker-col px-0 me-2 bg-white">
                        <DatePicker className="datePicker m-2 bg-white" selected={startDate} onChange={(date) => setStartDate(date)}/>
                    </Col>
                </Row>
                     

    );
}

export default DatePickers;