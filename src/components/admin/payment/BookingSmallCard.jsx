import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleSmallCard from './SingleSmallCard';
import { FaRegBuilding } from "react-icons/fa";
import axois from "axios";
const base_url = process.env.REACT_APP_BASE_URL;

function BookingSmallCard() {
    const Booking_Data = [
        {
            Name: "No of",
            Name2: "Bookings",
            Total: 250,
        },

    ];

    const [details, setDetails] = useState({});
    const [count, setCount] = useState();
    useEffect((event) => {
        axois
            .get(`${base_url}/admin/countBookings`)
            .then((data) => {
                const details = data.data;
                setDetails({ ...details });
                setCount(details[0]?.booking_count)
                console.log(count);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <Container xs={2}>
            <Row className='smallcardcontainer'>
                <Col className='py-2 mt-4 testing-card'>
                    <Col>
                        <div className="bookingsmallicon card-icon-bg">
                            {<FaRegBuilding className="ms-3 card-icon total-booking-card" />}
                        </div>
                    </Col>

                    {Booking_Data &&
                        Booking_Data.map((i) => (
                            <SingleSmallCard
                                Name={i.Name}
                                Name2={i.Name2}
                                Total={count}
                            />
                        ))}
                </Col>
            </Row>

        </Container>
    )
}

export default BookingSmallCard