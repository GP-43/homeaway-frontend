import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ImageGallery from '../../../components/user/place_card/imagegallery/ImageGallery';
import PlaceDetails from "../../../components/user/place_description/PlaceDetails";
import RenterDetails from "../../../components/user/renter/RenterDetails";
import PlaceInformation from "../../../components/user/place_information/PlaceInformation";
import MakeBooking from "../../../components/user/place_description/make_booking/MakeBooking";

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
                <Col className='px-1'><MakeBooking/></Col>
            </Row>
        </Container>
    );
}

export default PlaceDescription;