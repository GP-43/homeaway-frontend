import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import ProgressBar from 'react-bootstrap/ProgressBar';

function PlaceInfoRating() {
    return (
        <Col>
            <Row className='mb-5'>
                <Col xs={1} className='pe-0'>
                    <FaStar size={50} />
                </Col>
                <Col className='mt-2 p-0 ms-4 mt-4' >
                    <h4  >4.8</h4>
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                    <h5>4+</h5>
                </Col>
                <Col>
                    <ProgressBar variant="success" now={40} />
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                    <h5>4</h5>
                </Col>
                <Col>
                    <ProgressBar  now={50} />
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                    <h5>3</h5>
                </Col>
                <Col>
                    <ProgressBar variant="info" now={30} />
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                    <h5>2</h5>
                </Col>
                <Col>
                    <ProgressBar variant="warning" now={25} />
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                    <h5>1</h5>
                </Col>
                <Col>
                    <ProgressBar variant="danger" now={25} />
                </Col>
            </Row>
        </Col>
    );
}

export default PlaceInfoRating;
