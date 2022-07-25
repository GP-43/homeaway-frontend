import React from 'react';
import { Col, Row, Container } from "react-bootstrap";
import MyRentings from '../../components/rentings/MyRentings';
import SheduleSection from '../../components/shedule_section/SheduleSection';
import PaymentBox from '../../components/paymentbox/PaymentBox';

function UserRentings() {
    return (
        <Container>
            <Row className='mx-0 mt-2'>
                <Col lg={8}>
                    <MyRentings />
                </Col>

                <Col lg={4}>
                    <PaymentBox/>
                    <SheduleSection />
                </Col>
            </Row>

        </Container>

    );
}

export default UserRentings