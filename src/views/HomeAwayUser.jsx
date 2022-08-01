import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "../components/footer/Footer";
import { Outlet } from 'react-router-dom';
import NavBar from "../components/user/paymentbox/navbar/NavBar";

function HomeAwayUser() {
    return (
        <>
            <Container>
                <Row className="mx-0">
                    <Col className="px-0">
                        <NavBar/>
                    </Col>
                </Row>
            </Container>
            <Outlet />
            <Row className="mx-0">
                <Col className="px-0">
                    <Footer />
                </Col>
            </Row>
        </>
    );
}

export default HomeAwayUser;