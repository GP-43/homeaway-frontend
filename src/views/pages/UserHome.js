import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import FindingPlace from '../../components/finding_place/FindingPlace.jsx';
import PlaceSection from "../../components/places_section/PlaceSection";

function UserHome() {
    return (
        <Container>
            <Row className='mx-0 mt-2'>
                <Col>
                    <FindingPlace/>
                </Col>
            </Row>
            <Row className='mx-0 mt-5 pt-5'>
                <Col>
                    <PlaceSection/>
                </Col>
            </Row>
        </Container>
    );
}

export default UserHome;
