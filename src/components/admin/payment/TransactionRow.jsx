import React from 'react';
import { Row, Col } from 'react-bootstrap';

function TransactionRow(props) {
    return (
        <Col xs={11} className='ms-5 ps-4 py-3 px-1 my-1 singlerow'>
            <Row className='rentername pb-2'>
                {props.RenterName}
            </Row>
            <Row className='bottomrow'>
                <Col className='mx-0' xs={5}>
                    <Row className=''>
                        <Col xs={4} className='top-data'>Rent Date:</Col>
                        <Col xs={8} className='ps-1 test-data'>{props.RentDate}</Col>
                    </Row>
                    <Row >
                        <Col xs={4} className='top-data'>Email:</Col>
                        <Col xs={8} className='ps-1 test-data'>{props.RenterEmail}</Col>
                    </Row>
                    <Row>
                        <Col xs={4} className='top-data'>Amount:</Col>
                        <Col xs={8} className='ps-1 test-data'>{props.Amount}</Col>
                    </Row>
                </Col>
                <Col xs={5} className='ms-4 p-0'>
                    <Row>
                        <Col xs={4} className='test-data-top top-data'>Renter Name:</Col>
                        <Col xs={8} className='ps-3 test-data'>{props.OccupantName}</Col>

                    </Row>
                    <Row>
                        <Col xs={4} className='test-data-top top-data'>Email:</Col>
                        <Col xs={8} className='ps-3 test-data'>{props.OccupantEmail}</Col>
                    </Row>
                </Col>
                <Col xs={1} className=''>
                    <Col xs={5} className='test-data-top top-data'>Status:</Col>
                    <Col xs={5} className='test-data-amount'>{props.Status}</Col>
                </Col>

            </Row>
        </Col>



    )
}

export default TransactionRow