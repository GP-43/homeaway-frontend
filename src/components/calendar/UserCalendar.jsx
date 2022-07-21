import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'
import React, { useState } from 'react';
import '../../assets/styles/partials/_calendar.scss';

function UserCalendar() {
 const [date, setDate] = useState(new Date())

  return (
    <div className="card">
      <div className="app">
        <div className="calendar-container">
          <Calendar className="bg-light" onChange={setDate} value={date}/>
        </div>
        <div className="text-center">
          {/*Selected date: {date.toDateString()}*/}
        </div>
      </div>
    </div>
  );
}

export default UserCalendar;