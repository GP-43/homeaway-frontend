import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import FindingPlace from '../../../components/user/finding_place/FindingPlace.jsx';
import PlaceSection from "../../../components/user/places_section/PlaceSection";
import { HomePagePlacesProvider } from '../../../contexts/HomePagePlacesContext.js';

function UserHome() {
    return (
        <Container>
            <HomePagePlacesProvider>
            <Row className='mx-0 mt-2 finding-place'>
                <Col>
                    <FindingPlace/>
                </Col>
            </Row>
            <Row className='mx-0 mt-5 pt-5'>
                <Col>
                    <PlaceSection/>
                </Col>
            </Row>
            </HomePagePlacesProvider>
        </Container>
    );
}

export default UserHome;
