import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import AboutSection from '../../../components/anons/aboutsection/AboutSection';
import ThingsYouNeedSection from "../../../components/anons/things_you_need_section/ThingsYouNeedSection";
import HelloSection from "../../../components/anons/hellosection/HelloSection";
import VacationPlanSection from "../../../components/anons/vacation_plan_section/VacationPlanSection";
import LatestPlaces from '../../../components/anons/latest_place_section/LatestPlaces';

var Scroll   = require('react-scroll');
var Element  = Scroll.Element;
var scroller = Scroll.scroller;

scroller.scrollTo('about_section', {
    duration: 1500,
    delay: 100,
    smooth: true,
    containerId: 'about_section',
    offset: 50, // Scrolls to element + 50 pixels down the page
})

function Home() {
    return (
        <Container>
            <Row className='mx-0' xs={12}>
                <Col className='px-0' xs={12}>
                    <HelloSection />
                </Col>
                <Col className='px-0 d-flex' xs={12}>
                    <ThingsYouNeedSection />
                </Col>
                <Col className='px-0 mt-2' xs={12}>
                    <VacationPlanSection />
                </Col>
                <Col className='px-0 latest-place-section' xs={12}>
                    <LatestPlaces />
                </Col>
                <Col className='px-0 about-section-box' name='about_section' id='about_section' xs={12}>
                    <AboutSection />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
