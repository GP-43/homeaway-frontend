import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageGallery from '../../components/imagegallery/ImageGallery';
import TimePicker from '../../components/make_booking/TimePicker';

function PlaceDescription(){
  return (
    <Container >
        <Row className='mx-0 mt-2'>
            <Col className='image-gallery-container'>
                <ImageGallery/>
            </Col>
            <Col>
                <Row>Owner Details</Row>
                <Row><TimePicker/></Row>
            </Col>
        </Row>
    </Container>
  )
}

export default PlaceDescription