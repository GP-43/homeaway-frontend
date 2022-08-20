import React from 'react';
import Content from './Content';
import { Col, Container, Row } from 'react-bootstrap';

function AboutSection() {
    return (
        <Container className='pt-1 mt-1 about-section'>
                <Row className='about-section-title text-center'><div>About{' '}<span>us.</span></div></Row>
                <Row className='about-section-description text-center'>Established in 2022, HomeAway is currently Sri
                    Lanka's most visited property and apartment renting website with over 10000 active ads.
                    HomeAway is a one stop e-platform for selective lifestyles needs – Help to find a location to meet
                    and work with your favourite collegues or business partners or team. We are expanding and growing
                    to help you meet your lifestyle needs.
                </Row>
                <Row xs={4} className="ms-3 me-5 column-about">
                    <Content />
                </Row>
        </Container>
    )
}

export default AboutSection