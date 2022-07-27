import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function SingleUser(props) {
    const [show, setShow] = useState(true);
    return (
        <Container>
            <Row>
                <Col xs={12} className="user-card">
                    <Row className='user-row'>
                        <Col className='user-col'>
                            <img
                                className="profile-image p-0 ms-5 mb-2"
                                src={props.Src}
                            />
                        </Col >
                        <Col className='text-col'>
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