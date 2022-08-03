import React from 'react';
import { Col, Row, Container } from "react-bootstrap";
import MyRentings from '../../../components/user/rentings/MyRentings';
import SheduleSection from '../../../components/user/shedule_section/SheduleSection';
import PaymentBox from '../../../components/user/paymentbox/PaymentBox';

function UserRentings() {
    return (
        <Container>
            <Row className='mx-0 mt-2'>
                <Col lg={8} className='px-0'>
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