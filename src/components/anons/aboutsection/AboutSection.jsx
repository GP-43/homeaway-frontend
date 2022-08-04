import React from 'react';
import ClientCard from './ClientCard';
import Content from './Content';
import { Col, Container, Row } from 'react-bootstrap';

function AboutSection() {
    return (
        <Container className='pt-3 mt-5'>
            <Row>
                <Col xs={4} className="ms-3 me-5 ">
                    <Content />
                </Col>
                <Col xs={6} className="ms-5">
                    <ClientCard />
                </Col>
            </Row>
        </Container>
    )
}

export default AboutSection