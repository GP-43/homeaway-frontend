import React from "react";
import DailyTransactions from "../../../components/admin/DailyTransactions";
import {Row, Col, Container} from "react-bootstrap";
import HeaderCard from "../../../components/admin/HeaderCard";
import OccupantCard from "../../../components/admin/OccupantCard";
import RenterCard from "../../../components/admin/RenterCard";
import OccupantDetailCard from "../../../components/admin/OccupantDetailCard";
import BookingsDetailCard from "../../../components/admin/BookingsDetailCard";
import RenterDetailCard from "../../../components/admin/RenterDetailCard";
import AdminCalendar from "../../../components/admin/adminCalendar/AdminCalendar";

function Dashboard() {
    return (
        <Container>
            <Row className="mx-0">
                <Col className="px-0">
                    <HeaderCard/>
                </Col>
            </Row>
            <Row className="testing-2">
                <Col xs={8}>
                    <Row className="testing-1">
                        <Col>
                            <OccupantDetailCard/>
                        </Col>

                        <Col>
                            <BookingsDetailCard/>
                        </Col>

                        <Col>
                            <RenterDetailCard/>
                        </Col>
                    </Row>
                    <Row className="px-0 user-list-card">
                        <Col className="mx-0" md={6}>
                            <OccupantCard/>
                        </Col>
                        <Col className="mx-0" md={6}>
                            <RenterCard/>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row className="mx-0 mt-1 pt-3">
                        <AdminCalendar/>
                    </Row>
                    <Row className="mx-0 mt-2">
                        <Col className="px-0 mx-0 daily-transaction-box">
                            <DailyTransactions/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;
