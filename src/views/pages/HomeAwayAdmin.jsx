import React from "react";
import {Row, Col, Container} from "react-bootstrap";
import {Outlet} from 'react-router-dom';

function HomeAwayAdmin() {
    return (
        <>
            <Row className="mx-0">
                <Col className="px-0" lg={2}>
                    admin navbar goes here
                </Col>
                <Col className="px-0" lg={10}>
                    <Outlet/>
                </Col>
            </Row>
        </>
    );
}

export default HomeAwayAdmin;