import React from "react";
import SheduleSection from "../../components/shedule_section/SheduleSection";
import MyBookingSection from "../../components/my_bookings/MyBookingSection";
import { Col, Row, Container } from "react-bootstrap";
import UserCalendar from "../../components/calendar/UserCalendar";



function UserBookings() {


 
    return (




        <Container>
            <Row className='mx-0 mt-2'>
                <Col lg = {8}>
                    <MyBookingSection  />
                </Col>
            
                <Col lg = {4}>
                    <SheduleSection  />
                </Col>
            </Row>

        </Container>

    );
}

export default UserBookings;
