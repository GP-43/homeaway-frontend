import React from 'react';
import Content from './Content';
import { Col, Container, Row } from 'react-bootstrap';

function AboutSection() {
    return (
        <Container className='pt-1 mt-1'>
            <Row>
                <Col xs={4} className="ms-3 me-5 ">
                    <Content />
                </Col>
                <Col xs={6} className="ms-5">
                    {/*<SliderData />*/}
                </Col>
            </Row>
        </Container>
    )
}

export default AboutSection