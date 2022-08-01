import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'
import React, {useEffect, useState} from 'react';
import '../../../assets/styles/partials/user/_calendar.scss';

function UserCalendar(props) {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        props.showDate(date);
    }, [date])

    return (
        <div className="card-calendar w-100">
            <div className="app px-0">
                <div className="calendar-container">
                    <Calendar className="bg-light" onChange={setDate} value={date}/>
                </div>
                <div className="text-center">
                </div>
            </div>
        </div>
    );
}

export default UserCalendar;