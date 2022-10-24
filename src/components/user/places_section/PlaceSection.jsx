import React, {useEffect, useState} from "react";
import PlaceCard from "../place_card/PlaceCard.jsx";
import {Row, Col} from "react-bootstrap";
import {FaExchangeAlt} from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import useLocalStorage from "../../../hooks/useLocalStorage.js";

function PlaceSection() {

    const [places, setPlaces] = useLocalStorage('places', [])

    useEffect(() => {
        axios.get("http://localhost:4000/addnewrent/places").then((response) => {
            setPlaces(response.data);
        });
    }, []);


    return (
        <Row className="py-3 mx-0">
            <Col md={11} xs={8} className='place-section-head px-0 pb-4'>
                <Row>
                    <Col md={11} xs={10} className='px-0'>
                        <h5 className='place-section-header'>Explore more places</h5>
                    </Col>
                    <Col md={1} xs={2} className='d-flex justify-content-end px-0'>
                        <Dropdown className="sort-drop-down-btn">
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className='p-md-2 p-0'>
                                <FaExchangeAlt
                                    className="sort-icon"
                                    style={{transform: "rotate(90deg)"}}
                                />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="my-bookings-dropdown">
                                <Dropdown.Item href="#/action-1">Price</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Location</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Rating</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Col>
            <Col md={12} xs={8} className='place-section px-md-4 px-0'>
                <Row>
                    {places.map((value) => (
                            <Col lg={3} md={4} className="place-card-set px-lg-4 py-lg-3 px-md-2 py-md-2">
                                <PlaceCard
                                    title={value.title}
                                    src={"http://localhost:4000/images/" + value.image}
                                    city={value.city}
                                    price={value.price}
                                    quantity={value.quantity}
                                    rating="0"
                                />
                            </Col>
                        ))}
                </Row>
            </Col>
        </Row>
    );
}

export default PlaceSection;
