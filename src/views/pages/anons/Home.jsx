import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AboutSection from '../../../components/anons/aboutsection/AboutSection';
import ThingsYouNeedSection  from "../../../components/anons/things_you_need_section/ThingsYouNeedSection"; 

function Home() {
    return (
        <Container>
            <Row className='mx-0' xs={12}>
                <Col className='px-0 vh-100'>
                    Hello section goes here
                </Col>
                <Col className='px-0 vh-100 d-flex' xs={12}>
                    <ThingsYouNeedSection/>
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
