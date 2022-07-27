import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageGallery from '../../components/imagegallery/ImageGallery';
import TimePickers from '../../components/make_booking/TimePickers';
//import DateSelection from '../../components/make_booking/DateSelection';

function PlaceDescription(){
  return (
    <Container >
        <Row className='mx-0 mt-2'>
            <Col className='image-gallery-container'>
                <ImageGallery/>
            </Col>
            <Col className='place-description-right ms-5'>
                <Row>Owner Details</Row>
                <Row className='mx-0 mt-2'>
                    <TimePickers/>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default PlaceDescription
