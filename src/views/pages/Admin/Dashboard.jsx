import React from "react";
import {Row, Col, Container} from "react-bootstrap";
import HeaderCard from "../../../components/admin/HeaderCard";

function Dashboard() {
    return (
        <Container>
            <Row className="mx-0">
                <Col className="px-0">
                    <HeaderCard/>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;