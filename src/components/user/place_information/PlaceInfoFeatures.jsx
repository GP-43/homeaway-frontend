import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function PlaceInfoFeatures() {
    return (
        <Row>
            <Col xs={12} className='px-0'>
                <h3>Features</h3>

                <Card className='place-information-description m-auto'>
                    <Card.Body >

                        <Card.Text >
                            <Row className='p-3'>
                                <Col>
                                    <input type="checkbox" checked></input>
                                    <label className='place-info-features-checkbox-label ms-3' >Internet</label >
                                </Col>
                                <Col>
                                    <input type="checkbox" checked></input>
                                    <label className='place-info-features-checkbox-label ms-3' >Parking</label >
                                </Col>
                            </Row>
                            <Row className='p-3'>
                                <Col>
                                    <input type="checkbox" checked></input>
                                    <label className='place-info-features-checkbox-label ms-3' >Silent Area</label >
                                </Col>
                                <Col>
                                    <input type="checkbox" disabled></input>
                                    <label className='place-info-features-checkbox-label ms-3' >A/C</label >
                                </Col>
                            </Row>
                            <Row className='p-3'>
                                <Col>
                                    <input type="checkbox" checked></input>
                                    <label className='place-info-features-checkbox-label ms-3' >Can buy food</label >
                                </Col>
                                <Col>
                                    <input type="checkbox" checked></input>
                                    <label className='place-info-features-checkbox-label ms-3' >Washrooms</label >
                                </Col>
                            </Row>

                        </Card.Text>

                    </Card.Body>
                </Card>
            </Col>

        </Row>
    );
}

export default PlaceInfoFeatures;
