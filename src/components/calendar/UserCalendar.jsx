import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../../assets/styles/partials/_calendar.scss';

function UserCalendar() {
 const [date, setDate] = useState(new Date())

  return (
    <Card className="card">
      <div className="app">
    
        <div className="calendar-container">
          <Calendar className="bg-light" onChange={setDate} value={date}/>
        </div>
        <div className="text-center">
          Selected date: {date.toDateString()}
        </div>
      </div>
    </Card>
  );

}

export default UserCalendar;