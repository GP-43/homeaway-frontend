import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWifi } from "react-icons/fa";
import Mastercard from '../../../assets/images/admin/mastercardmin.png'

function AccountDetails() {
    return (
        <Container >
            <Row className='card-container-payment'>
                <Col className='p-3 mt-4 testing-card'>
                    <Row className='wifi-icon pt-3 pb-1'>
                        {<FaWifi className="mx-0" />}
                    </Row>

                    <Row className='py-3 number'>
                        <Col className='pe-0 mx-0'>
                            4562
                        </Col>
                        <Col className='px-0 mx-0'>
                            1122
                        </Col>
                        <Col className='px-0 mx-0'>
                            4594
                        </Col>
                        <Col className='ps-0 mx-0 last'>
                            7852
                        </Col>
                    </Row>

                    <Row className='ps-3 py-4'>
                        <Col xs={4} className='me-2 column-parts'>
                            <Row className='topic'>Card Holder</Row>
                            <Row className='content'>Jack Peterson</Row>
                        </Col>
                        <Col className='ms-4 me-1 column-parts'>
                            <Row className='topic'>Expires</Row>
                            <Row className='content'>11/22</Row>
                        </Col>
                        <Col>
                        <img className='card-logo' src={Mastercard} alt="card" />
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}

export default AccountDetails