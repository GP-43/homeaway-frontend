import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleSmallCard from './SingleSmallCard';
import { FaRegBuilding } from "react-icons/fa";

function BookingSmallCard() {
    const Booking_Data = [
        {
            Name: "No of",
            Name2: "Bookings",
            Total: 250,
        },

    ];
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
                                Total={i.Total}
                            />
                        ))}
                </Col>
            </Row>

        </Container>
    )
}

export default BookingSmallCard