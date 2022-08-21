import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function PaymentBox(){
    
  return (
    <Container className='payment-box-container pt-1'>
        <Col xs={10} className='p-4 mx-2 my-3 payment-box'>
        <Row>
            <h7 xs={10} className="px-2 heading ">Total Received</h7>
            <dev className='px-2 received-amount'>
                LKR 25831.00
            </dev>
            <dev className='px-2 sen'>
                +10% since last two weeks
            </dev>
            <h7 xs={10} className="px-2 pt-4 sub-heading ">Pending</h7>
            <dev className='px-2 pending-amount'>
                LKR 10560.00
            </dev>
        </Row>
        </Col>
    </Container>
  )
}

export default PaymentBox