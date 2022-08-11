import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AboutSection from '../../../components/anons/aboutsection/AboutSection';
import VacationPlanSection from "../../../components/anons/vacation_plan_section/VacationPlanSection";
import Bestrentingplacessection from "../../../components/anons/best_renting_places/Bestrentingplacessection";

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
                <Col className='px-0' xs={12}>
                        <VacationPlanSection/>
                </Col>
                <Col className='px-0' xs={12}>
                    <Bestrentingplacessection />
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
