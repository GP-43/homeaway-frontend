import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ImageGallery from '../../components/imagegallery/ImageGallery';
import TimePickers from '../../components/make_booking/TimePickers';
import PlaceDetails from "../../components/place_description/PlaceDetails";
import RenterDetails from "../../components/renter/RenterDetails";
import PlaceInformation from "../../components/place_information/PlaceInformation";

function PlaceDescription() {
    return (
        <Container>
            <Row className="renter-gallery-and-details">
                <Col>
                    <ImageGallery/>
                    <PlaceDetails/>
                </Col>
                <Col><RenterDetails/></Col>
            </Row>
            <Row className="mx-0 mt-2">
                <Col lg={6} className='px-0'>
                    <PlaceInformation/>
                </Col>
                <Col className='px-2'><TimePickers/></Col>
            </Row>
        </Container>
    );
}

export default PlaceDescription;
