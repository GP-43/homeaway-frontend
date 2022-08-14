import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'
import React, {useEffect, useState} from 'react';
import {Row} from "react-bootstrap";
import '../../../assets/styles/partials/user/_calendar.scss';

function UserCalendar(props) {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        props.showDate(date);
    }, [date, props])

    return (
        // <Row className="card-calendar w-50 mx-0 px-0">
        //     <Row className="app px-0">
                <Row className="calendar-container m-1">
                    <Calendar className="bg-light my-1 py-1" onChange={setDate} value={date}/>
                    {/*<Calendar className="bg-light" onChange={setDate} value={date}/>*/}
                </Row>
                // <div className="text-center">
                // </div>
            // </Row>
    );
}

export default UserCalendar;