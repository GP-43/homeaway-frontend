import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function PaymentBox(){
    
  return (
    <Container>
        <Col xs={10} className='p-4 mx-4 my-4 payment-box'>
        <Row>
            <h7 xs={10} className="px-2 heading ">Total Recieved</h7>
            <dev className='px-2 receivedamount'>
                LKR 25831.00
            </dev>
            <dev className='px-2 sen'>
                +10% since last two weeks
            </dev>
            <h7 xs={10} className="px-2 pt-4 sub-heading ">Pending</h7>
            <dev className='px-2 pendingamount'>
                LKR 10560.00
            </dev>
        </Row>
        </Col>
    </Container>
  )
}

export default PaymentBox