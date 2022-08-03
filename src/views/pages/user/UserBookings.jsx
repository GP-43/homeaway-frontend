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
                    <Row className='mx-0'>
                        <Col className='px-0'>
                            <Calendar className="ms-4 mb-4" lg={12} md={6}/>
                        </Col>
                        <Col className='px-0' lg={12} md={6}>
                            <SheduleSection/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default UserBookings;