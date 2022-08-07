import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AboutSection from '../../../components/anons/aboutsection/AboutSection';
import HelloSection from "../../../components/anons/hellosection/HelloSection";

function Home() {
    return (
        <Container>
            <Row className='mx-0' xs={12}>
                <Col className='px-0'>
                    <HelloSection/>
                </Col>
                <Col className='px-0' xs={12}>
                    Things you need section goes here
                </Col>
                <Col className='px-0' xs={12}>
                    Vacation plane section goes here
                </Col>
                <Col className='px-0' xs={12}>
                    Blog section goes here
                </Col>
                <Col className='px-0' xs={12}>
                    <AboutSection/>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
