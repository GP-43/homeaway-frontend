import React,{ useState } from 'react';
import {Row,Col} from 'react-bootstrap';
import Calendar from 'react-calendar';
import '../../../assets/styles/partials/admin/_admin-calendar.scss'

function AdminCalendar() {
    const [date, setDate] = useState(new Date());
    return (
        <Col>
            
            <Row >
                <Calendar onChange={setDate} value={date}/>
            </Row>
            <Row className="text-center ms-5 ps-1">
                Selected date: {date.toDateString()}
            </Row>
        </Col>
    );
}

export default AdminCalendar;
