import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function SingleUser(props) {
    const [show, setShow] = useState(true);
    return (
        <Container>
            <Row>
                <Col xs={12} className="user-card pb-1">
                    <Row className='user-row'>
                        <Col className='user-col'>
                            <img className="profile-image p-0 ms-4 mb-2" src={props.Src} />
                        </Col >
                        <Col xs={7} className='text-col'>
                            <Row className="user-name ">{props.Name}</Row>
                            <Row className="user-location pb-4">{props.Location}</Row>
                        </Col>

                    </Row>
                </Col>

            </Row>
        </Container>

    )
}

export default SingleUser