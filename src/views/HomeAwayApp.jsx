import React from "react";
import {Row, Col} from "react-bootstrap";
import OccupantFooter from "../components/occupent_footer/OccupantFooter";
import {Outlet} from 'react-router-dom';

function HomeAwayApp() {
    return (
        <>
            <Outlet/>
            <Row className="mx-0">
                <Col className="px-0">
                    <OccupantFooter/>
                </Col>
            </Row>
        </>
    );
}

export default HomeAwayApp;