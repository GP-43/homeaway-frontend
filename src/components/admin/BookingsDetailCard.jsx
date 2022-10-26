import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleDetailCard from './SingleDetailCard';
import { FaChartBar } from "react-icons/fa";
import axois from "axios";
const base_url = process.env.REACT_APP_BASE_URL;

function BookingsDetailCard() {
    const Booking_Data = [
        {
            Src: <FaChartBar />,
            Name: "Bookings",
            Total: 250,
            Percentage: "3%",
            Content: "than last week",
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
        <Container xs={5}>
            <Row className='card-container'>
                <Col className='p-2 mt-4 testing-card'>

                    <div className="booking-icon card-icon-bg">
                        {<FaChartBar className="ms-3 card-icon booking-card" />}
                    </div>

                    {Booking_Data &&
                        Booking_Data.map((i) => (
                            <SingleDetailCard
                                key={`{${i.Name}}`}
                                Name={i.Name}
                                Total={count}
                                Src={i.Src}
                                Percentage={i.Percentage}
                                Content={i.Content}
                            />
                        ))}
                </Col>
            </Row>

        </Container>
    )
}

export default BookingsDetailCard