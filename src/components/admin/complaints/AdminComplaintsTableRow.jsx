import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';


function AdminComplaintsTableRow(props) {
    return (
        <Row className='admin-complain-table-row mx-0'>
            <Col xs={1} className="px-0">
                <p>{props.caseNo}</p>
            </Col>
            <Col xs={2} className="px-0">
                <p>{props.subject}</p>
            </Col>
            <Col xs={2} className="px-0">
                <p>{props.senderId}</p></Col>
            <Col xs={2} className="px-0">
                <p>{props.senderName}</p></Col>
            <Col xs={2} className="px-0">
                <p>{props.senderEmail}</p></Col>
            <Col xs={2} className="px-0">
                <p>{props.date} {props.time}</p></Col>
            <Col xs={1} className="px-0">

            </Col>
        </Row>
    );
}
export default AdminComplaintsTableRow