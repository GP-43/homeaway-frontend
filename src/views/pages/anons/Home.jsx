import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AboutSection from '../../../components/anons/aboutsection/AboutSection';
import VacationPlanSection from "../../../components/anons/vacation_plan_section/VacationPlanSection";

function Home() {
    return (
        <Container>
            <Row className='mx-0' xs={12}>
                <Col className='px-0'>
                    Hello section goes here
                </Col>
                <Col className='px-0' xs={12}>
                    Things you need section goes here
                </Col>
                <Col className='px-0 vh-100' xs={12}>
                    Vacation plane section goes here
                        <VacationPlanSection/>
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
