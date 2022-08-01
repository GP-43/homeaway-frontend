import React from "react";
import SheduleSection from "../../../components/user/shedule_section/SheduleSection";
import MyBookingSection from "../../../components/user/place_description/my_bookings/MyBookingSection";
import { Col, Row, Container} from "react-bootstrap";
import Calendar from 'react-calendar';
import '../../../assets/styles/partials/user/_calendar.scss';

function UserBookings(props) {

    return (
        <Container>
            <Row className='mx-0 mt-2'>
                <Col lg = {8}>
                  <MyBookingSection  />                    
                </Col>
            
                <Col lg = {4}>
                    <Calendar className="ms-4 mb-4"/>
                    <SheduleSection  />
                </Col>
            </Row>
        </Container>
    );
}

export default UserBookings;