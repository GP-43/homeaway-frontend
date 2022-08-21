import React from 'react';
import { Row, Col } from 'react-bootstrap';

function TransactionRow(props) {
    return (
        <Col className='ms-4 ps-4 py-3 singlerow'>
            <Row className='rentername pb-2'>
                {props.RenterName}
            </Row>
            <Row className='bottomrow'>
                <Col className='mx-0' xs={4}>
                    <Row className=''>
                        <Col xs= {5} className='top-data'>Rent Date:</Col>
                        <Col xs= {6} className='test-data'>{props.RentDate}</Col>
                    </Row>
                    <Row >
                        <Col xs= {5} className='top-data'>Email:</Col>
                        <Col xs= {6} className='test-data'>{props.RenterEmail}</Col>                        
                    </Row>
                    <Row>
                        <Col xs= {5} className='top-data'>Amount:</Col>
                        <Col xs= {6} className='test-data'>{props.Amount}</Col>                        
                    </Row>
                </Col>
                <Col xs={4} className='ms-4 p-0'>
                    <Row>
                        <Col xs= {6} className='test-data-top top-data'>Renter Name:</Col>
                        <Col xs= {6} className='test-data'>{props.OccupantName}</Col>
                        
                    </Row>
                    <Row>
                        <Col xs= {6} className='test-data-top top-data'>Email:</Col>
                        <Col xs= {6} className='test-data'>{props.OccupantEmail}</Col> 
                    </Row>
                </Col>
                <Col xs={3} className=''>
                    <Col xs= {5} className='test-data-top top-data'>Status:</Col>
                    <Col xs= {5} className='test-data'>{props.Status}</Col> 
                </Col>

            </Row>
        </Col>



    )
}

export default TransactionRow