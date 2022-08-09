import React from "react";
import PlaceCard from "../../../components/user/place_card/PlaceCard";
import {Row, Col} from "react-bootstrap";
import {FaArrowCircleLeft} from "react-icons/fa";
import {FaArrowCircleRight} from "react-icons/fa";
import place1 from "../../../assets/images/places_image_gallery/place1.jpg";
import place2 from "../../../assets/images/places_image_gallery/place2.jpg";
import place3 from "../../../assets/images/places_image_gallery/place3.jpg";
import place4 from "../../../assets/images/places_image_gallery/place4.jpg";
import place5 from "../../../assets/images/places_image_gallery/place5.jpg";
import place6 from "../../../assets/images/places_image_gallery/place6.jpg";
import place7 from "../../../assets/images/places_image_gallery/place7.jpg";
import place8 from "../../../assets/images/places_image_gallery/place8.jpg";


function Bestrentingplacessection() {
    const placeData = [
        {
            Src: place1,
            Title: "Meeting room",
            City: "Colombo",
            Price: "Rs.2500",
            Quantity: 8,
            Rating: 4.0,
        },
        {
            Src: place2,
            Title: "Study room",
            City: "Gampaha",
            Price: "Rs.3000",
            Quantity: 20,
            Rating: 4.8,
        },
        {
            Src: place3,
            Title: "Study room",
            City: "Kurunegala",
            Price: "Rs.2000",
            Quantity: 10,
            Rating: 3.8,
        },
        {
            Src: place4,
            Title: "Meeting room",
            City: "Jaffna",
            Price: "Rs.4500",
            Quantity: 30,
            Rating: 4.2,
        },
        {
            Src: place5,
            Title: "Meeting room",
            City: "Maho",
            Price: "Rs.3500",
            Quantity: 43,
            Rating: 1.2,
        },
        {
            Src: place6,
            Title: "Study room",
            City: "chilaw",
            Price: "Rs.4000",
            Quantity: 50,
            Rating: 4.9,
        },
        {
            Src: place7,
            Title: "Study room",
            City: "Mount lavinia",
            Price: "Rs.2500",
            Quantity: 20,
            Rating: 3.0,
        },
        {
            Src: place8,
            Title: "Meeting room",
            City: "Rathmalane",
            Price: "Rs.5000",
            Quantity: 12,
            Rating: 2.8,
        }, {
            Src: place5,
            Title: "Meeting room",
            City: "Maho",
            Price: "Rs.3500",
            Quantity: 43,
            Rating: 1.2,
        },
        {
            Src: place6,
            Title: "Study room",
            City: "chilaw",
            Price: "Rs.4000",
            Quantity: 50,
            Rating: 4.9,
        },
        {
            Src: place7,
            Title: "Study room",
            City: "Mount lavinia",
            Price: "Rs.2500",
            Quantity: 20,
            Rating: 3.0,
        },
        {
            Src: place8,
            Title: "Meeting room",
            City: "Rathmalane",
            Price: "Rs.5000",
            Quantity: 12,
            Rating: 2.8,
        },
    ];

    return (
        <Row className="py-3 mx-0 best-renting-section">
            <Col md={1}><FaArrowCircleLeft /></Col>
            <Col md={1}><FaArrowCircleRight /></Col>
            <Col md={12} xs={8} className='place-section px-md-4 px-0'>
                <Row>
                    {placeData &&
                        placeData.map((i) => (
                            <Col lg={3} md={4} className="place-card-set px-lg-4 py-lg-3 px-md-2 py-md-2">
                                <PlaceCard
                                    Title={i.Title}
                                    Src={i.Src}
                                    City={i.City}
                                    Price={i.Price}
                                    Quantity={i.Quantity}
                                    Rating={i.Rating}
                                />
                            </Col>
                        ))}
                </Row>
            </Col>
        </Row>
    );
}

export default Bestrentingplacessection;
