import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";

function PlaceInfoRating() {
    return (
        <Col>
            <Row>
                <Col xs={2} className='pe-0'>
                    <FaStar size={40} />
                </Col>
                <Col className='mt-2 p-0' >
                    <h4  >4.8</h4>
                </Col>
            </Row>
            <Row>
                
            </Row>
        </Col>
    );
}

export default PlaceInfoRating;
