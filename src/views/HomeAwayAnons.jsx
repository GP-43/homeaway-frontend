import React from "react";
import {Row, Col, Container} from "react-bootstrap";
import Footer from "../components/footer/Footer";
import {Outlet} from 'react-router-dom';
import AnonsNavBar from "../components/anons/navbar/AnonsNavBar";


function HomeAwayAnons() {
    return (
        <div className='home-bg-color'>
            <Container>
                <Row className="mx-0 w-auto">
                    <Col className="px-0">
                        <AnonsNavBar/>
                    </Col>
                </Row>
            </Container>
            <Outlet/>
            <Row className="mx-0">
                <Col className="px-0">
                    <Footer/>
                </Col>
            </Row>
        </div>
    );
}

export default HomeAwayAnons;