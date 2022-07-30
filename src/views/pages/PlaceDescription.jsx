import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ImageGallery from '../../components/imagegallery/ImageGallery';
import MakeBooking from '../../components/make_booking/MakeBooking';

function PlaceDescription(){
  return (
    <Container >
        <Row className='mx-0 mt-2'>
            <Col className='image-gallery-container'>
                <ImageGallery/>
            </Col>
            <Col className='place-description-right ms-5'>
                <Row>Owner Details section</Row>
                <Row><MakeBooking/></Row>
            </Col>
        </Row>
    </Container>
  );
}

export default PlaceDescription
