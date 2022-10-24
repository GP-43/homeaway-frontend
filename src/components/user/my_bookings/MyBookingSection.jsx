import React, {useEffect, useState} from "react";
import PlaceCard from "../place_card/PlaceCard";
import {FaSlidersH} from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import {Row, Col} from "react-bootstrap";
import axios from "axios";

function MyBookingSection() {

    const userDetails = JSON.parse(sessionStorage.getItem('accessToken'));

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/occupant/bookings").then((response) => {
            setBookings(response.data);
        });
    }, []);

    return (
        <Row className="py-3 mx-0">
            <Col md={12} xs={8} className='my-booking-section-head px-0'>
                <Row className='mx-0'>
                    <Col lg={10} xs={8} className='px-0'>
                        <h5>My Bookings</h5>
                    </Col>
                    <Col lg={2} xs={4} className="d-flex justify-content-end my-booking-sort-btn pe-lg-5 pe-0">
                        <div className="sort-drop-down-btn">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <FaSlidersH
                                        className="sort-icon"
                                    />
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="my-bookings-dropdown">
                                    <Dropdown.Item href="#/action-1">paid</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">saved</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">completed</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col md={12} xs={8} className='my-booking-section'>
                <Row className="d-flex justify-content-center booking-section px-0">
                    {bookings.map((value) => (
                        <Col lg={4} md={4}
                             className="place-card-set ps-lg-0 pe-lg-5 py-lg-3 px-md-2 py-md-2 px-0">
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

export default MyBookingSection;