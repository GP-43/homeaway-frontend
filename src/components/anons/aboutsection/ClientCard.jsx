import React,{useState} from 'react';
import { Row,Carousel } from 'react-bootstrap';
import {SliderData} from "./SliderData";

function ClientCard() {

  return (
    <Row>
        <Carousel className='client-msg-card bg-dark'>
            {/*{SliderData.map((slide,id) => (*/}
            <Carousel.Item className="msg-card bg-light mt-5 ms-5 ps-1">
                <img src="a.png" className="msg-prof-image" />
                {/* {slide.src} {slide.msg} {slide.name} {slide.location}*/}
                <p className="text right mt-5 me-1 pt-1">"Your msg hereYour msg hereYour msg hereYour msg hereYour msg hereY
                    our msg hereYour msg hereYour msg here"</p>
                <h3 className="mt-2 text right">Name</h3>
                <h6 className="mt-2 text-muted">Location</h6>
            </Carousel.Item>
            {/*))}*/}
        </Carousel>
    </Row>
  );
}

export default ClientCard;