import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWifi } from "react-icons/fa";

function AccountDetails() {
    return (
        <Container xs={8}>
            <Row className='card-container-payment'>
                <Col className='p-2 mt-4 testing-card'>
                    <Row className='wifi-icon'>
                        {<FaWifi className="mx-0" />}
                    </Row>

                    <Row className='pt-3 '>
                        <Col className='pe-0 mx-0'>
                            4562
                        </Col>
                        <Col className='px-0 mx-0'>
                            1122
                        </Col>
                        <Col className='px-0 mx-0'>
                            4594
                        </Col>
                        <Col className='ps-0 mx-0'>
                            7852
                        </Col>
                    </Row>

                    <Row className='ps-2'>
                        <Col>
                            <Row>Card Holder</Row>
                            <Row>Jack Peterson</Row>
                        </Col>
                        <Col>
                            <Row>Expires</Row>
                            <Row>11/22</Row>
                        </Col>
                    </Row>


                    {/*<dev className="occupant-icon card-icon-bg">
                        {<BiUserCircle className="ms-3 card-icon total-occupant-card" />}
    </dev>*/}
                </Col>
            </Row>

        </Container>
    )
}

export default AccountDetails