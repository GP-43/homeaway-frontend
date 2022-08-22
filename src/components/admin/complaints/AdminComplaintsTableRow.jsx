import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';


function AdminComplaintsTableRow(props) {
    return (
        <Row className='admin-complain-table-row mx-0 px-0'>
            <Col xs={1} className="px-0">
                <p className='admin-complain-table-row-text'>{props.caseNo}</p>
            </Col>
            <Col xs={2} className="px-0">
                <p className='admin-complain-table-row-text'>{props.subject}</p>
            </Col>
            <Col xs={1} className="px-0">
                <p className='admin-complain-table-row-text'>{props.senderId}</p></Col>
            <Col xs={2} className="px-0">
                <p className='admin-complain-table-row-text'>{props.senderName}</p></Col>
            <Col xs={3} className="px-0">
                <p className='admin-complain-table-row-text'>{props.senderEmail}</p></Col>
            <Col xs={2} className="px-0">
                <p className='admin-complain-table-row-text'>{props.date} <br /> {props.time}</p></Col>
            <Col xs={1} className="px-0">

            </Col>
        </Row>
    );
}
export default AdminComplaintsTableRow