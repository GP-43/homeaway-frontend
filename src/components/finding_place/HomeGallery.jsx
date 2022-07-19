import React from "react";
import {Carousel, Col} from "react-bootstrap";
import HomeBG1 from '../../assets/images/home_image_gallery/HomeBg1.jpg'
import HomeBG2 from '../../assets/images/home_image_gallery/HomeBg2.jpg'
import HomeBG3 from '../../assets/images/home_image_gallery/HomeBg3.jpg'
import HomeBG4 from '../../assets/images/home_image_gallery/HomeBg4.jpg'
import HomeBG5 from '../../assets/images/home_image_gallery/HomeBg5.jpg'
import HomeBG6 from '../../assets/images/home_image_gallery/HomeBg6.jpg'
import HomeBG7 from '../../assets/images/home_image_gallery/HomeBg7.jpg'
//hsjfv
function HomeGallery() {
    return (
        <Carousel indicators={false} controls={false} className='home-gallery p-0 m-0' interval={6000}>
            <Carousel.Item className='gallery-carousal'>
                <img
                    className="d-block border border-dark gallery-image "
                    src={HomeBG1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className='gallery-carousal'>
                <img
                    className="d-block border border-dark gallery-image"
                    src={HomeBG2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className='gallery-carousal'>
                <img
                    className="d-block border border-dark gallery-image"
                    src={HomeBG3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='gallery-carousal'>
                <img
                    className="d-block border border-dark gallery-image"
                    src={HomeBG4}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='gallery-carousal'>
                <img
                    className="d-block border border-dark gallery-image"
                    src={HomeBG5}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='gallery-carousal'>
                <img
                    className="d-block border border-dark gallery-image"
                    src={HomeBG6}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='gallery-carousal'>
                <img
                    className="d-block border border-dark gallery-image"
                    src={HomeBG7}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeGallery;