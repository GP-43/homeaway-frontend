import React,{ useState } from 'react';
import {Row,Col} from 'react-bootstrap';
import Calendar from 'react-calendar';
import '../../../assets/styles/partials/admin/_admin-calendar.scss'

function AdminCalendar() {
    const [date, setDate] = useState(new Date());
    return (
        <Row>
            
            <div>
                <Calendar onChange={setDate} value={date}/>
            </div>
            <div className="text-center">
                Selected date: {date.toDateString()}
            </div>
        </Row>
    );
}

export default AdminCalendar;
