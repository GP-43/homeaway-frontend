import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import OccupantFooter from "../components/occupent_footer/OccupantFooter";
import { Outlet } from 'react-router-dom';
import NavBar from "../components/navbar/NavBar";

function HomeAwayApp() {
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
                    <OccupantFooter />
                </Col>
            </Row>
        </>
    );
}

export default HomeAwayApp;