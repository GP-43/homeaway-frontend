import React from "react";
import {Row, Col, Container} from "react-bootstrap";
import DailyTransactions from "../../../components/admin/DailyTransactions";
import HeaderCard from "../../../components/admin/HeaderCard";

function Dashboard() {
    return (
        <Container>
            <Row className="mx-0">
                <Col className="px-0">
                    <HeaderCard/>
                </Col>
            </Row>
            <Row className="mx-0">
                <Col className="px-0">
                    <DailyTransactions/>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;