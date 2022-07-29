import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageGallery from '../../components/imagegallery/ImageGallery';
import PlaceDetails from "../../components/place_description/PlaceDetails";

function PlaceDescription(){
    return (
        <Container>
            <Row className='mx-0 mt-2'>
                <Col lg = {6}>
                    <PlaceDetails />
                </Col>
                <Col lg = {6}>
                    {/* <PlaceDetails /> */}
                </Col>
            </Row>
            <Row className='mx-0 mt-2'>
                <Col>
                    <ImageGallery/>
                </Col>
            </Row>
        </Container>
    );
}

export default PlaceDescription;
