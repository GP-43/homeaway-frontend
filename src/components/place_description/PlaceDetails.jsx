import React, { useState } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";

import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";



function PlaceDetails() {
    const [show, setShow] = useState(true);
    const place_details = { title: "Meeting Room_01", place: "Gampaha", duration: "per two hour", price: 'LKR: 600' };
    return (

        <Container>



            <Row xs={3} className="place-details-cover p-1 mb-3">
                <Col ys={2} xs={4} className="place-details-bacground">
                    <Row className="place-details-bacground"><h5 className="place-details-text">{place_details.price}</h5></Row>
                    <Row className="place-details-bacground"><h6 className="place-details-text">{place_details.duration}</h6></Row>
                </Col>
                <Col ys={2} xs={6} className="place-details-bacground">
                    <Row className="place-details-bacground"><h5 className="place-details-text">{place_details.title}</h5></Row>
                    <Row className="place-details-bacground"><h6 className="place-details-text">{place_details.place}</h6></Row>
                </Col>
                <Col ys={1} xs={2} className="d-flex justify-content-end m-auto pe-3 place-details-bacground">
                    

                        {show ? (
                            <button className="button place-details-heart-button" onClick={() => setShow(false)}>
                                <FaRegHeart className="heart-icon place-details-heart-icon" /> 
                            </button>
                        ) : (
                            <button className="button place-details-heart-button" onClick={() => setShow(true)}>
                                <FaHeart className="heart-icon place-details-heart-icon" />
                            </button>
                        )}
                    
                </Col>
            </Row>



        </Container>
    );
}

export default PlaceDetails;