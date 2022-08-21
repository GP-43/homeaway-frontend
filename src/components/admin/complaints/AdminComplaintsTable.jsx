import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import AdminComplaintsTableRow from "./AdminComplaintsTableRow";




function AdminComplaintsTable() {
    return (
        <Row>
            <Row>
                <Col xs={1}>
                    <h5>Case No</h5>
                </Col>
                <Col xs={3}></Col>
                <Col xs={1}></Col>
                <Col xs={2}></Col>
                <Col xs={2}></Col>
                <Col xs={2}></Col>
                <Col xs={1}></Col>
            </Row>

        </Row>
    );
}
export default AdminComplaintsTable