import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AccountDetails() {
    return (
        <Container >
            <Row className='card-container-payment'>
                <Col className='p-3 mt-4 testing-card'>

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

                    <Row className='ps-3 py-2'>
                        <Col xs={5} className='me-2 column-parts'>
                            <Row className='topic'>Account Holder</Row>
                            <Row className='content'>HomeAway</Row>
                        </Col>
                        <Col className='ms-4 me-1 column-parts'>
                            <Row className='topic'>Sampath Bank</Row>
                            <Row className='topic'>Homagama</Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}

export default AccountDetails