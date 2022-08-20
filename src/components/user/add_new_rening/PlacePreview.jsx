import React from "react";
import PlaceCard from "../place_card/PlaceCard.jsx";
import {Row, Col} from "react-bootstrap";
import place1 from "../../../assets/images/places_image_gallery/place1.jpg";

function PlacePreview() {
    const placeData = [
        {
            Src: place1,
            Title: "Meeting room",
            City: "Colombo",
            Price: "Rs.2500",
            Quantity: 8,
            Rating: 4.0,
        },
    ];

    return (
        <Row className="py-3 mx-0">
            <Col md={12} xs={8} className='place-section px-md-4 px-0'>
                <Row>
                    {placeData &&
                        placeData.map((i) => (
                            <Col lg={7} className="place-card-set px-lg-4 py-lg-3 px-md-2 py-md-2">
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

export default PlacePreview;
