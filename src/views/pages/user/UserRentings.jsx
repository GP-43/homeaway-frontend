import React, { useState, useEffect } from "react";
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
                <Col className='py-2' lg={4}>
                    <Row>
                        <Col className='ps-2 mt-4 pt-2'><PaymentBox className='mx-0 px-0' lg={12} md={6}/></Col>
                        <Col className='pe-2 ms-2 renting-schedule'><SheduleSection className='' lg={12} md={6}/></Col>
                    </Row>
                </Col>
            </Row>

        </Container>

    );
}

export default UserRentings