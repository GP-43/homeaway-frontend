import React,{ useState} from 'react';
import {Col} from 'react-bootstrap';
import '../../../assets/styles/partials/admin/_admin-calendar.scss'
import 'react-daypicker/lib/DayPicker.css';
import DayPicker from 'react-daypicker';

function AdminCalendar() {
    const [date, setDate] = useState(new Date());
    return (
        <Col className="px-0 mx-0 pt-1 mb-2">
            <DayPicker
                onDayClick={(day) => this.setState({ day })}
                className="bg-dark"
            />
        </Col>
    );
}

export default AdminCalendar;
