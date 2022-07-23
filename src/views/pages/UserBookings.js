import React from 'react';
import {Container, Row} from "react-bootstrap";
import UserCalendar from '../../components/calendar/UserCalendar.jsx';

function UserBookings() {
    return (
        <Container>
            <Row className='mx-0 mt-2'>
                <UserCalendar/>
            </Row>
        </Container>
    );
}

export default UserBookings;