import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import ProgressBar from 'react-bootstrap/ProgressBar';

function PlaceInfoRating() {
    return (
        <Col>
            <Row className='mb-2'>
                <Col xs={1} className='pe-0'>
                    <FaStar size={50} />
                </Col>
                <Col className='mt-2 p-0 ms-4 mt-4' >
                    <h4>4.8</h4>
                </Col>
            </Row>
            <Row>
                <Col className='rating-number' xs={2}>
                    <h5 className='ms-4'>4+</h5>
                </Col>
                <Col>
                    <ProgressBar variant="dark" now={40} />
                </Col>
            </Row>
            <Row>
                <Col className='rating-number' xs={2}>
                    <h5 className='ms-4'>4</h5>
                </Col>
                <Col>
                    <ProgressBar variant="dark" now={20} />
                </Col>
            </Row>
            <Row>
                <Col className='rating-number' xs={2}>
                    <h5 className='ms-4'>3</h5>
                </Col>
                <Col>
                    <ProgressBar variant="dark" now={10} />
                </Col>
            </Row>
            <Row>
                <Col className='rating-number' xs={2}>
                    <h5 className='ms-4'>2</h5>
                </Col>
                <Col>
                    <ProgressBar variant="dark" now={0} />
                </Col>
            </Row>
            <Row>
                <Col className='rating-number' xs={2}>
                    <h5 className='ms-4'>1</h5>
                </Col>
                <Col>
                    <ProgressBar variant="dark" now={0} />
                </Col>
            </Row>
        </Col>
    );
}

export default PlaceInfoRating;
