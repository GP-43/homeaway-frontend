import React,{useState} from 'react';
import { Row,Carousel } from 'react-bootstrap';
import {SliderData} from "./SliderData";

function ClientCard() {
    // let slideIndex = 1;
    // //showSlides(slideIndex);
    //
    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // };
    // const showSlides = (n) => {
    //     let i;
    //     let slides = document.getElementsByClassName("mySlides");
    //     if (n > slides.length) {slideIndex = 1}
    //     if (n < 1) {slideIndex = slides.length}
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     slides[slideIndex-1].style.display = "block";
    // };
  return (
    <Row>
        <Carousel className='client-msg-card bg-transparent'>
            {SliderData.map((slide,id) => (
            <Carousel.Item className="msg-card bg-light mt-5 ms-5 ps-1">
                <img src={slide.src} className="msg-prof-image" />

                <p className="text right mt-5 me-1 pt-1">"{slide.msg}"</p>
                <h3 className="mt-2 text right">{slide.name}</h3>
                <h6 className="mt-2 text-muted">{slide.location}</h6>
            </Carousel.Item>
            ))}
        </Carousel>
    </Row>
  );
}

export default ClientCard;