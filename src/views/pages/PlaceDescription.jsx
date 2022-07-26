import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageGallery from '../../components/imagegallery/ImageGallery';

function PlaceDescription(){
  return (
    <Container className='image-gallery-container'>
        <Row className='mx-0 mt-2'>
            <Col>
                <ImageGallery/>
            </Col>
        </Row>
    </Container>
  )
}

export default PlaceDescription