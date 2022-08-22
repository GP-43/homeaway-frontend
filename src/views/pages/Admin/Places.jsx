import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import HeaderCardPlaces from "../../../components/admin/places/HeaderCardPlaces";
import AdminPlacesSection from "../../../components/admin/places/AdminPlacesSection"


function Places() {
    return (
        <Container>

            <Row className="mx-0">
                <Col className="px-0">
                    <HeaderCardPlaces />
                </Col>
            </Row>

            <Row className="testing-2">
                <Col xs={12}>
                    <Row className="mx-0 user-list-card">
                        <Col className="px-0 Renters-top-selling-products-part">
                            <AdminPlacesSection/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Places