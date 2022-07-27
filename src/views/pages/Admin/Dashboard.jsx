import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import HeaderCard from "../../../components/admin/HeaderCard";
import OccupantCard from "../../../components/admin/OccupantCard";
import RenterCard from "../../../components/admin/RenterCard";

function Dashboard() {
    return (
        <Container>
            <Row className="mx-0">
                <Col className="px-0">
                    <HeaderCard />
                </Col>
            </Row>

            <Row className="mx-0">
                <Col className="px-0 mx-0">
                    <OccupantCard />
                </Col>
                <Col className="px-0 mx-0">
                    <RenterCard />
                </Col>
            </Row>

            
        </Container>
    );
}

export default Dashboard;