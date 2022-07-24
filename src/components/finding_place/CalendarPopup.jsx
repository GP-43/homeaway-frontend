import React from "react";
import UserCalendar from "../calendar/UserCalendar";
import {Modal} from "react-bootstrap";

function CalendarPopup(props) {
    return (
        <Modal show={props.show} onHide={props.handleCalendarClose}
               className='calendar-popup' xs={4}>
            <UserCalendar showDate={props.showDate}/>
        </Modal>
    );
}

export default CalendarPopup;