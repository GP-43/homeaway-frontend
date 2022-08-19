import React from 'react';
import Content from './Content';
import { Col, Container, Row } from 'react-bootstrap';

function AboutSection() {
    return (
        <Container className='pt-1 mt-1 about-section'>
                <Row className='about-section-title text-center'><div>About{' '}<span>us.</span></div></Row>
                <Row className='about-section-description text-center'>Of course, you have a homepage and dedicated pages for your
                    products, but summarizing your offerings on the About Us page is crucial to tie them in with brand
                    values in your messaging</Row>
                <Row xs={4} className="ms-3 me-5 column-about">
                    <Content />
                </Row>
        </Container>
    )
}

export default AboutSection