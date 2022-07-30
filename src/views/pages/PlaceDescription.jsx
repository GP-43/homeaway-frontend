import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ImageGallery from '../../components/imagegallery/ImageGallery';
import TimePickers from '../../components/make_booking/TimePickers';
import PlaceDetails from "../../components/place_description/PlaceDetails";
import RenterDetails from "../../components/renter/RenterDetails";

function PlaceDescription(){
  return (
    <Container >
        <Row className="renter-gallery-and-details">
            <Col><ImageGallery/></Col>
            <Col><RenterDetails /></Col>
        </Row>
        <Row className="mx-0 mt-2">
            <Col lg={6}>
            </Col>
            <Col lg={6}>
                <TimePickers/>
            </Col>
        </Row>
    </Container>
    );
}

export default PlaceDescription;
