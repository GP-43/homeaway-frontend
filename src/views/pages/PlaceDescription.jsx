import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ImageGallery from '../../components/imagegallery/ImageGallery';
import DatePickers from '../../components/make_booking/DatePickers';
import TimePickers from '../../components/make_booking/TimePickers';

function PlaceDescription(){
  return (
    <Container >
        <Row className='mx-0 mt-2'>
            <Col className='image-gallery-container'>
                <ImageGallery/>
            </Col>
            <Col className='place-description-right ms-5'>
                <Row>Owner Details section</Row>
                <Row className='make-booking-card1 mx-0 mt-2 bg-primary d-flex'>
                    <Col className="booking-col" xs lg="2">
                        <div className='d-flex m-1 pb-1'>
                            <b className='text'>Date:</b>
                            <DatePickers className="date-component"/>
                        </div>
                        <div className='d-flex m-1 pb-1'>
                            <b className='text-time'>Time:</b>
                            <TimePickers />
                        </div>
                        <div className='mx-5 ps-2'>
                            <h1 className='text-rent-fee'><b>LKR 12,500</b></h1>
                        </div>
                    </Col>
                    <Col className="booking-col" xs lg="2">
                        <div className='d-flex m-1 pb-1'>
                            <b className='text'>to:</b>
                            <DatePickers className="date-component"/>
                        </div>
                        <div className='d-flex m-1 pb-1'>
                            <b className='text-time'>to:</b>
                            <TimePickers/>
                        </div>
                        <div className='ms-5 ps-5'>
                            <Button variant="dark button-pay-now">Pay Now</Button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  );
}

export default PlaceDescription
