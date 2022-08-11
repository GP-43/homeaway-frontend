import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import AboutSection from '../../../components/anons/aboutsection/AboutSection';
import ThingsYouNeedSection from "../../../components/anons/things_you_need_section/ThingsYouNeedSection";
import HelloSection from "../../../components/anons/hellosection/HelloSection";
import VacationPlanSection from "../../../components/anons/vacation_plan_section/VacationPlanSection";
import Bestrentingplacessection from "../../../components/anons/best_renting_places/Bestrentingplacessection";
import LatestPlaces from "../../../components/anons/latest_place_section/LatestPlaces"

function Home() {
    return (
        <Container>
            <Row className='mx-0' xs={12}>
                <Col className='px-0'>
                    <HelloSection />
                </Col>
                <Col className='px-0 d-flex vh-100' xs={12}>
                    <ThingsYouNeedSection />
                </Col>
                <Col className='px-0 vh-100' xs={12}>
                    <VacationPlanSection />
                </Col>
                <Col className='px-0 vh-100' xs={12}>
                    <LatestPlaces />
                </Col>
                <Col className='px-0' xs={12}>
                    <AboutSection />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
