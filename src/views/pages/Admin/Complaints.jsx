import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import HeaderCardComplaints from "../../../components/admin/complaints/HeaderCardComplaints";
import AdminComplaintsTable from "../../../components/admin/complaints/AdminComplaintsTable";


function Complaints() {
    return (
        <Container>
            <Row className="mx-0">
                <Col className="px-0">
                    <HeaderCardComplaints />
                </Col>
            </Row>

            <Row className="testing-2">
                <Col xs={10}>
                    <Row className="mx-0 user-list-card">
                        <Col className="px-0 occupants-top-selling-products-part">
                            <AdminComplaintsTable />
                        </Col>
                    </Row>
                </Col>
                {/*<Col>
                    <Row className="mx-0"><AdminCalendar /></Row>
                    <Row className="mx-0">
                        <Col className="px-0 mx-0 daily-transaction-box">
                            <DailyTransactions />
                        </Col>
                    </Row>
    </Col>*/}
            </Row>
        </Container>
    );
}

export default Complaints