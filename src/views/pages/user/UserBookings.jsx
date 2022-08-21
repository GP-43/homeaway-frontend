import React from "react";
import SheduleSection from "../../../components/user/shedule_section/SheduleSection";
import MyBookingSection from "../../../components/user/my_bookings/MyBookingSection";
import {Col, Row, Container} from "react-bootstrap";
import Calendar from 'react-calendar';
import '../../../assets/styles/partials/user/_calendar.scss';

function UserBookings(props) {

    return (
        <Container>
            <Row className='mx-0 mt-2'>
                <Col lg={8} className='px-0'>
                    <MyBookingSection/>
                </Col>

                <Col lg={4}>
                    <Row className='mx-0 py-4'>
                        <Col className='px-0'>
                            <Calendar className="ms-lg-4 ms-md-0 mb-0" lg={12} md={6}/>
                        </Col>
                        <Col className='px-0 ms-lg-0 ps-md-3 schedule-booking' lg={12} md={6}>
                            <SheduleSection/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default UserBookings;