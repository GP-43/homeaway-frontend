import React from "react";
import {Row, Col, Container} from "react-bootstrap";
import {Outlet} from 'react-router-dom';
import LeftNavigation from "../components/admin/navbar/LeftNavigation";

function HomeAwayAdmin() {
    return (
        <Row className="mx-0 admin-page">
            <Col className="px-0" lg={2}>
                <LeftNavigation/>
            </Col>
            <Col className="px-0" lg={10}>
                <Outlet/>
            </Col>
        </Row>
    );
}

export default HomeAwayAdmin;